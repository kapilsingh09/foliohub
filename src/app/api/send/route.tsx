import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'temprary526@gmail.com',
        subject: 'Hello World',
        html: `<p>Hey there <strong>You got a mail! </strong>!</p>
        <P>${name} </p>
        <P>${email} </p>
        <P>${message} </p>
        `
      });
      

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
