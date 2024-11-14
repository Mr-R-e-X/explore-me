import React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface QueryMailProps {
  username: string;
  email: string;
  message: string;
}
const QueryForMe = ({ username, email, message }: QueryMailProps) => {
  return (
    <Html>
      <Head>
        <title>New Inquiry Received|| From {username}</title>
        <Preview>Received new query from {username}</Preview>
      </Head>
      <Body
        style={{ backgroundColor: "#f4f4f7", fontFamily: "Arial, sans-serif" }}
      >
        <Container
          style={{
            maxWidth: "600px",
            padding: "20px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <Section style={{ textAlign: "center" }}>
            <Img
              src={process.env.NEXT_PUBLIC_PROFILEPIC_URL}
              width="80"
              height="80"
              alt="Profile Picture"
              style={{ borderRadius: "50%", margin: "10px auto" }}
            />
          </Section>

          <Section>
            <Text
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                textAlign: "center",
                color: "#333333",
              }}
            >
              You have received a new query from {username}.
            </Text>
            <Hr style={{ border: "0.5px solid #e0e0e0", margin: "20px 0" }} />
          </Section>

          <Section>
            <Text
              style={{ fontSize: "16px", color: "#333333", lineHeight: "1.5" }}
            >
              Hey the query message is,
            </Text>
            <Text
              style={{ fontSize: "16px", color: "#333333", lineHeight: "1.5" }}
            >
              {message}.
            </Text>
            <Text
              style={{ fontSize: "16px", color: "#333333", lineHeight: "1.5" }}
            >
              The registered email is {email}
            </Text>
          </Section>

          <Section>
            <Hr style={{ border: "0.5px solid #e0e0e0", margin: "20px 0" }} />
            <Text
              style={{
                fontSize: "14px",
                color: "#999999",
                textAlign: "center",
              }}
            >
              Best regards,
            </Text>
            <Text
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "center",
                color: "#333333",
              }}
            >
              Received from Portfolio.
            </Text>
          </Section>

          <Section style={{ textAlign: "center", marginTop: "20px" }}>
            <Button
              href={`mailto:${process.env.NEXT_PUBLIC_MY_MAIL}`}
              style={{
                backgroundColor: "#007bff",
                color: "#ffffff",
                padding: "10px 20px",
                borderRadius: "5px",
                textDecoration: "none",
              }}
            >
              Contact {username}
            </Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default QueryForMe;
