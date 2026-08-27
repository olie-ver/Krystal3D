import { Body, Container, Html, Preview, Text } from "react-email";

interface ContactEmailProps {
    subject: string;
    message: string;
    contact_type: string;
}

export default function ContactEmail({
    subject,
    message,
    contact_type
}: ContactEmailProps) {
    return (
        <Html>
            <Preview>
                {contact_type}: {subject}
            </Preview>

            <Body>
                <Container>
                    <Text>{message}</Text>
                </Container>
            </Body>
        </Html>
    );
}