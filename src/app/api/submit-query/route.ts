import { sendQueryReceivedMail, sendQuerySuccessMail } from "@/helper/sendMail";
import dbConnect from "@/lib/dbConfig";
import QueryModel from "@/model/querySchema";

export async function POST(request: Request) {
  try {
    await dbConnect();
    const { name, email, message } = await request.json();
    await QueryModel.create({ name, email, message });
    const emailResponse = await sendQuerySuccessMail(name, email);
    const messageResponse = await sendQueryReceivedMail(name, email, message);
    if (!emailResponse?.success) {
      return Response.json(
        { success: false, message: emailResponse?.message },
        { status: 500 }
      );
    }
    if (!messageResponse?.success) {
      return Response.json(
        { success: false, message: messageResponse?.message },
        { status: 500 }
      );
    }
    return Response.json(
      {
        success: true,
        message: "Query received",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Something went wrong" },
      {
        status: 500,
      }
    );
  }
}
