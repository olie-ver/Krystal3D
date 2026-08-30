import type { APIRoute } from "astro";
import Stripe from "stripe";

const stripe = new Stripe(import.meta.env.SECRET_STRIPE_KEY);

export const POST: APIRoute = async ({ request }) => {
    try {
        const { amount } = await request.json();

        if (typeof amount !== "number" || !Number.isInteger(amount) || amount <= 0) {
            return new Response(
                JSON.stringify({ error: "Invalid amount" }),
                { status: 400 }
            );
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
        });

        return new Response(
            JSON.stringify({
                clientSecret: paymentIntent.client_secret,
                paymentIntentId: paymentIntent.id,
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
            JSON.stringify({ error: "Unable to create payment intent" }),
            { status: 500 }
        );
    }
};