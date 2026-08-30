import type { APIRoute } from "astro";
import Stripe from "stripe";

const stripe = new Stripe(import.meta.env.SECRET_STRIPE_KEY);

export const POST: APIRoute = async ({ request }) => {
    const body = await request.text();
    const signature = request.headers.get("stripe-signature");

    if (!signature) {
        return new Response(
            JSON.stringify({ error: "Missing Stripe signature" }),
            { status: 400 }
        );
    }

    let event: Stripe.Event;

    console.log("Received Stripe webhook");

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            import.meta.env.SECRET_STRIPE_WEBHOOK
        );

        console.log("Stripe event:", event.type);

        return new Response(
            JSON.stringify({ received: true }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    } catch (error) {
        console.error("Invalid Stripe webhook signature:", error);

        return new Response(
            JSON.stringify({ error: "Invalid webhook signature" }),
            { status: 400 }
        );
    }
};