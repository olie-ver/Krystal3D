export const prerender = false;

import type { APIRoute } from "astro";
import * as EmailValidator from 'email-validator';
import { Resend } from "resend";

import ContactEmail from "../../../emails/contact";

export const POST: APIRoute = async ({ request }) => {
    const data = await request.formData();
    const contact_type = data.get("contact-type");
    const subject = data.get("subject");
    const return_addr = data.get("return-address");
    const message = data.get("message");

    if (!contact_type || !subject || !return_addr || !message) {
        return new Response(
            JSON.stringify({
                message: "Missing required fields",
            }),
            { status: 400 }
        );
    }

    const errors = { contact_type: "", subject: "", return_addr: "", message: "" };

    if (typeof contact_type !== "string") {
        errors.contact_type += "Please enter a reason for contacting us.";
    } else {
        const contact_types = new Set(["Question", "Bug", "Request", "Other"]);
        if (!contact_types.has(contact_type)) {
            errors.contact_type += "Please enter a reason from the form.";
        }
    }

    if (typeof subject !== "string" || subject.trim().length < 1 || subject.trim().length > 255) {
        errors.subject += "Please enter a subject.";
    }

    if (typeof return_addr !== "string") {
        errors.return_addr += "Please enter a return email address.";
    } else {
        if (!EmailValidator.validate(return_addr)) {
            errors.return_addr += "Please enter a valid email address.";
        }
    }

    if (typeof message !== "string" || message.trim().length < 1 || message.trim().length > 1023) {
        errors.message += "Please enter what you want to tell us.";
    }

    if (errors.contact_type.length > 1 || errors.subject.length > 1 
        || errors.return_addr.length > 1 || errors.message.length > 1
    ) {
        return new Response(
            JSON.stringify({
                errors
            }),
            { status: 400 }
        );
    }

    if (typeof contact_type === "string" && typeof subject === "string" 
        && typeof return_addr === "string" && typeof message === "string"
    ) {
        const resend = new Resend(import.meta.env.RESEND_API_KEY);

        const { data, error } = await resend.emails.send({
            from: "Krystal3D-Web <contact@krystal3d.com>",
            to: "oliverlie@krystal3d.com",
            replyTo: return_addr,
            subject: `${contact_type}: ${subject}`,
            react: ContactEmail({
                subject,
                message,
                contact_type
            }),
            tags: [
                {
                    name: "category",
                    value: contact_type,
                },
            ],
        });

        if (error) {
            return new Response (
                JSON.stringify({
                    error,
                    message: error.message
                }),
                { status: error.statusCode as number | undefined }
            );
        }

        return new Response(
            JSON.stringify({
                errors,
                message: "Message sent!"
            }),
            { status: 200 }
        );
    }

    return new Response(
        JSON.stringify({
            errors,
            message: "Couldn't send the email."
        }),
        { status: 500 }
    );

};