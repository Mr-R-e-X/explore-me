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
}

const QueryMail = ({ username, email }: QueryMailProps) => {
  return (
    <Html>
      <Head>
        <title>Inquiry Confirmation || From Souvik Hazra</title>
        <Preview>
          Thank you for your inquiry. I’ll be in touch soon. || Souvik Hazra
        </Preview>
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
              Thank You for Your Inquiry, {username}!
            </Text>
            <Hr style={{ border: "0.5px solid #e0e0e0", margin: "20px 0" }} />
          </Section>

          <Section>
            <Text
              style={{ fontSize: "16px", color: "#333333", lineHeight: "1.5" }}
            >
              Dear {username},
            </Text>
            <Text
              style={{ fontSize: "16px", color: "#333333", lineHeight: "1.5" }}
            >
              I appreciate you reaching out and have received your message. I’ll
              review your query and will get back to you as soon as possible.
              You can expect a response at the email address provided:{" "}
              <strong>{email}</strong>.
            </Text>
            <Text
              style={{ fontSize: "16px", color: "#333333", lineHeight: "1.5" }}
            >
              Should you have any additional questions in the meantime, feel
              free to reach out.
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
              Souvik Hazra
            </Text>
            <Text
              style={{
                fontSize: "14px",
                color: "#333333",
                textAlign: "center",
              }}
            >
              Full Stack Developer
            </Text>
          </Section>

          <Section style={{ textAlign: "center", marginTop: "20px" }}>
            <Button
              href="mailto:souvikhazra151@gmail.com"
              style={{
                backgroundColor: "#007bff",
                color: "#ffffff",
                padding: "10px 20px",
                borderRadius: "5px",
                textDecoration: "none",
              }}
            >
              Contact Me
            </Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default QueryMail;
