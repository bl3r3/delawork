import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();
    const { name, email, phone, subject, message } = json;

    // Definir el contenido del correo
    const message_text = {
      from: email,
      to: process.env.NODEMAILER_EMAIL,
      subject: subject,
      text: message,
      html: `<h1>Nombre: ${name}</h1>
      <h2>Correo electrónico: ${email}</h2>
      <h2>Teléfono: ${phone}</h2>
      <h3>Asunto: ${subject}</h3>
      <p>Mensaje: ${message}</p>`,
    };

    // Crear el transportador de nodemailer
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      },
    });

    // Usar una promesa para manejar el envío de correo correctamente
    const info = await transporter.sendMail(message_text);

    return NextResponse.json({
      success: `Mensaje enviado correctamente a ${info.accepted}`,
    });
  } catch (err) {
    console.error("Error enviando el correo:", err);
    return NextResponse.json(
      {
        error: `Hubo un problema enviando el correo: ${
          (err as Error).message || err
        }`,
      },
      { status: 500 }
    );
  }
}
