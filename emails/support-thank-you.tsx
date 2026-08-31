import { Body, Container, Html, Preview, Text } from "react-email";

interface SupportThankYouEmailProps {
    amount: string;
    reason: string;
    name?: string;
    message?: string;
}

export default function SupportThankYouEmail({ amount, reason, name, message }: SupportThankYouEmailProps) {
    return (
        <Html>
            <Preview>
                Thank you for supporting Krystal3D!
            </Preview>

            <Body>
                <Container>
                    <Text>
                        Thank you{name ? `, ${name}` : ""}!
                    </Text>

                    <Text>
                        Thank you for supporting Krystal3D.
                        Your {amount} support payment was
                        successfully received.
                    </Text>

                    <Text>
                        Reason: {reason}
                    </Text>

                    {message && (
                        <>
                            <Text>
                                Your message:
                            </Text>

                            <Text>
                                {message}
                            </Text>
                        </>
                    )}

                    <Text>
                        Your support helps me continue
                        developing and maintaining free and
                        open-source projects.
                    </Text>

                    <Text>
                        Thank you again!
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}
