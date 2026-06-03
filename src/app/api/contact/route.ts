import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "dev.esalqjrflorestal@gmail.com",
    subject: `[Contato Site] ${subject}`,
    html: `
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Assunto:</strong> ${subject}</p>
      <p><strong>Mensagem:</strong> ${message}</p>
    `,
  });

  return NextResponse.json({ ok: true });
}