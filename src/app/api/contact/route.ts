import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid fields. Please check your input." },
      { status: 422 }
    );
  }

  const { name, email, message } = parsed.data;
  const to = process.env.CONTACT_EMAIL ?? "";

  if (!to) {
    return NextResponse.json(
      { error: "Server configuration error." },
      { status: 500 }
    );
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `New message from ${name} — Portfolio`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0EA5E9;">New Portfolio Contact</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border-color: #1E293B;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
