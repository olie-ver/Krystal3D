import type { APIRoute } from "astro";
import Stripe from "stripe";

const stripe = new Stripe(import.meta.env.SECRET_STRIPE_KEY);

export const POST: APIRoute = async ({ request }) => {
    try {
        const { paymentIntentId, amount, email, name, message } = await request.json();

        if (
            typeof paymentIntentId !== "string" ||
            typeof amount !== "number" ||
            !Number.isInteger(amount) ||
            amount <= 0 ||
            typeof email !== "string" ||
            email.trim() === ""
        ) {
            return new Response(
                JSON.stringify({ error: "Invalid payment information" }),
                { status: 400 }
            );
        }

        const paymentIntent = await stripe.paymentIntents.update(
            paymentIntentId,
            {
                amount,
                receipt_email: email.trim(),
                metadata: {
                    name: typeof name === "string" ? name.trim() : "",
                    message: typeof message === "string" ? message.trim() : "",
                },
            }
        );

        return new Response(
            JSON.stringify({
                amount: paymentIntent.amount,
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
                error: "Unable to update payment intent",
            }),
            { status: 500 }
        );
    }
};