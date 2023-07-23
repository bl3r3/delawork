import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const json = await request.json();
  const { name, email, phone, subject, message } = json;

  const message_text = {
    from: email,
    to: process.env.NODEMAILER_EMAIL,
    subject: subject,
    text: message,
    html: `<h1>Nombre:${name}</h1>
    <h2>correo electronico: ${email}</h2>
    <h2>telefono: ${phone}</h2>
    <h3>asunto:${subject}</h3>
    <p>mensaje:${message}</p>`,
  };

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  if (request.method === "POST") {
    transporter.sendMail(message_text, (err: any, info) => {
      if (err) {
        return NextResponse.json({
          error: `Connection refused at ${err.address}`,
        });
      } else {
        return NextResponse.json({
          success: `Message delivered to ${info.accepted}`,
        });
      }
    });
  }
}
