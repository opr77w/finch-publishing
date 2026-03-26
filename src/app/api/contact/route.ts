// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Serverless Route Handler sending contact form submissions via Resend
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import type { ContactFormPayload, ApiResponse } from "@/types";

// When: 2026-03-26 | By: claude-sonnet-4-6 | What: POST handler for contact form — validates, then sends via Resend
export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse>> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { success: false, message: "Server misconfigured." },
      { status: 500 }
    );
  }

  let body: ContactFormPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request." },
      { status: 400 }
    );
  }

  const { name, email, subject, message } = body;
  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { success: false, message: "All fields are required." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { success: false, message: "Invalid email address." },
      { status: 400 }
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: "Finch Publishing <noreply@finchpublishing.co.uk>",
    to: ["hello@finchpublishing.co.uk"],
    replyTo: email,
    subject: `Contact form: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Thanks! We'll be in touch soon.",
  });
}
