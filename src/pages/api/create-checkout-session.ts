import type { APIRoute } from "astro";
import Stripe from "stripe";

const stripe = new Stripe(import.meta.env.SECRET_STRIPE_KEY);

export const POST: APIRoute = async ({ request }) => {
    try {
        const { amount } = await request.json();

        if (
            typeof amount !== "number" ||
            !Number.isInteger(amount) ||
            amount <= 0
        ) {
            return new Response(
                JSON.stringify({ error: "Invalid amount" }),
                { status: 400 }
            );
        }

        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            ui_mode: "elements",

            line_items: [
                {
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
                name: "",
                message: "",
            },

            return_url: "https://www.krystal3d.com/support",
        });

        return new Response(
            JSON.stringify({
                clientSecret: session.client_secret,
                sessionId: session.id,
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
                error: "Unable to create checkout session",
            }),
            { status: 500 }
        );
    }
};