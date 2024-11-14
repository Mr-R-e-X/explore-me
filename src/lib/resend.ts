import { Resend } from "resend";
console.log(process.env.NEXT_PUBLIC_RESEND);

export const resend = new Resend(process.env.NEXT_PUBLIC_RESEND);
