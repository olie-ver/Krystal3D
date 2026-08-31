import type { APIRoute } from "astro";
import Stripe from "stripe";
import { Resend } from "resend";

import SupportNotificationEmail from "../../../emails/support-notification";
import SupportThankYouEmail from "../../../emails/support-thank-you";

const stripe = new Stripe(import.meta.env.SECRET_STRIPE_KEY);

export const POST: APIRoute = async ({ request }) => {
    const body = await request.text();
    const signature = request.headers.get("stripe-signature");

    if (!signature) {
        return new Response(
            JSON.stringify({
                error: "Missing Stripe signature",
            }),
            { status: 400 }
        );
    }

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            import.meta.env.SECRET_STRIPE_WEBHOOK
        );
    } catch (error) {
        console.error(
            "Invalid Stripe webhook signature:",
            error
        );

        return new Response(
            JSON.stringify({
                error: "Invalid webhook signature",
            }),
            { status: 400 }
        );
    }

    console.log("Stripe event:", event.type);

    if (event.type === "checkout.session.completed") {
        const session = event.data.object;

        const email = session.customer_details?.email;

        if (!email) {
            console.error(
                "Checkout Session has no customer email:",
                session.id
            );

            return new Response(
                JSON.stringify({
                    error: "Customer email not found",
                }),
                { status: 400 }
            );
        }

        const amount = ((session.amount_total ?? 0) / 100).toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        });

        const name = session.metadata?.name || undefined;

        const message = session.metadata?.message || undefined;

        const resend = new Resend(import.meta.env.RESEND_API_KEY);

        const reason = session.metadata?.reason as string;

        console.log(reason);

        try {
            const notification =
                await resend.emails.send({
                    from:
                        "Krystal3D-Web <contact@krystal3d.com>",
                    to:
                        "oliverlie@krystal3d.com",
                    subject:
                        `New Support Payment: ${amount}`,
                    react:
                        SupportNotificationEmail({
                            amount,
                            reason,
                            email,
                            name,
                            message,
                        }),
                });

            if (notification.error) {
                throw notification.error;
            }

            const thankYou =
                await resend.emails.send({
                    from:
                        "Krystal3D-Web <contact@krystal3d.com>",
                    to: email,
                    subject:
                        "Thank you for supporting Krystal3D!",
                    react:
                        SupportThankYouEmail({
                            amount,
                            reason,
                            name,
                            message,
                        }),
                });

            if (thankYou.error) {
                throw thankYou.error;
            }

            console.log(
                "Support emails sent successfully:",
                session.id
            );
        } catch (error) {
            console.error(
                "Failed to send support emails:",
                error
            );

            return new Response(
                JSON.stringify({
                    error: "Failed to send support emails",
                }),
                { status: 500 }
            );
        }
    }

    return new Response(
        JSON.stringify({
            received: true,
        }),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
};
