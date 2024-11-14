import { resend } from "@/lib/resend";
import QueryMail from "../../emails/QueryMail";
import QueryForMe from "../../emails/QueryForMe";

export async function sendQuerySuccessMail(username: string, email: string) {
  try {
    await resend.emails.send({
      from: process.env.NEXT_PUBLIC_RESEND_MAIL!,
      to: email,
      subject: "Inquiry Confirmation From Souvik Hazra",
      react: QueryMail({ username, email }),
    });

    return {
      success: true,
      message: "We have received your query. We will get back to you shortly.",
    };
  } catch (error) {
    console.error(error);
  }
}

export async function sendQueryReceivedMail(
  username: string,
  email: string,
  message: string
) {
  try {
    await resend.emails.send({
      from: process.env.NEXT_PUBLIC_RESEND_MAIL!,
      to: process.env.NEXT_PUBLIC_MY_MAIL!,
      subject: "New Portfolio Inquiry || Souvik Hazra",
      react: QueryForMe({ username, email, message }),
    });

    return {
      success: true,
      message: "We have received your query. We will get back to you shortly.",
    };
  } catch (error) {
    console.error(error);
  }
}
