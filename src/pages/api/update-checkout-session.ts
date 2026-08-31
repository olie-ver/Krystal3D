import type { APIRoute } from "astro";
import Stripe from "stripe";

const stripe = new Stripe(import.meta.env.SECRET_STRIPE_KEY);

export const POST: APIRoute = async ({ request }) => {
    try {
        const {
            sessionId,
            amount,
            name,
            message,
        } = await request.json();

        if (
            typeof sessionId !== "string" ||
            sessionId.trim() === "" ||
            typeof amount !== "number" ||
            !Number.isInteger(amount) ||
            amount <= 0
        ) {
            return new Response(
                JSON.stringify({
                    error: "Invalid payment information",
                }),
                { status: 400 }
            );
        }

        const session =
            await stripe.checkout.sessions.retrieve(sessionId, {
                expand: ["line_items"],
            });

        if (session.status !== "open") {
            return new Response(
                JSON.stringify({
                    error: "Checkout Session is no longer open",
                }),
                { status: 400 }
            );
        }

        const lineItem = session.line_items?.data[0];

        if (!lineItem?.id) {
            return new Response(
                JSON.stringify({
                    error: "Unable to find checkout line item",
                }),
                { status: 500 }
            );
        }

        await stripe.checkout.sessions.update(sessionId, {
            line_items: [
                {
                    id: lineItem.id,
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: "Support Krystal",
                        },
                        unit_amount: amount,
                    },
                    quantity: 1,
                },
            ],

            metadata: {
                name:
                    typeof name === "string"
                        ? name.trim()
                        : "",
                message:
                    typeof message === "string"
                        ? message.trim()
                        : "",
            },
        });

        return new Response(
            JSON.stringify({
                success: true,
            }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    } catch (error) {
        console.error(error);

        return new Response(
            JSON.stringify({
                error: "Unable to update checkout session",
            }),
            { status: 500 }
        );
    }
};
