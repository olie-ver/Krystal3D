import type { APIRoute } from "astro";
import stripe from "../../lib/stripe";

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const amount = Number(body.amount);

        // Validate the amount on the server.
        if (!Number.isInteger(amount) || amount < 100) {
            return new Response(
                JSON.stringify({
                    error: "Invalid amount."
                }),
                {
                    status: 400,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            automatic_payment_methods: {
                enabled: true
            }
        });

        return new Response(
            JSON.stringify({
                clientSecret: paymentIntent.client_secret
            }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
    } catch (error) {
        console.error("Stripe PaymentIntent error:", error);

        return new Response(
            JSON.stringify({
                error: "Unable to create payment."
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
    }
};