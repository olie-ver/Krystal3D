import { Body, Container, Html, Preview, Text } from "react-email";

interface SupportNotificationEmailProps {
    amount: string;
    email: string;
    reason: string;
    name?: string;
    message?: string;
}

export default function SupportNotificationEmail({ amount, email, reason, name, message }: SupportNotificationEmailProps) {
    return (
        <Html>
            <Preview>
                New Krystal3D support payment: {amount}
            </Preview>

            <Body>
                <Container>
                    <Text>New Support Payment</Text>

                    <Text>
                        Amount: {amount}
                    </Text>

                    <Text>
                        Customer email: {email}
                    </Text>

                    <Text>
                        Reason: {reason}
                    </Text>

                    {name && (
                        <Text>
                            Customer name: {name}
                        </Text>
                    )}

                    {message && (
                        <Text>
                            Customer message:
                            {"\n\n"}
                            {message}
                        </Text>
                    )}
                </Container>
            </Body>
        </Html>
    );
}
