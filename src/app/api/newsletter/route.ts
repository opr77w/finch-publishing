// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Serverless Route Handler adding newsletter subscribers to Resend Audience
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import type { NewsletterPayload, ApiResponse } from "@/types";

// When: 2026-03-26 | By: claude-sonnet-4-6 | What: POST handler for newsletter signup — adds contact to Resend Audience
export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse>> {
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    return NextResponse.json(
      { success: false, message: "Server misconfigured." },
      { status: 500 }
    );
  }

  let body: NewsletterPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request." },
      { status: 400 }
    );
  }

  const { firstName, email } = body;
  if (!firstName || !email) {
    return NextResponse.json(
      { success: false, message: "Name and email are required." },
      { status: 400 }
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.contacts.create({
    email,
    firstName,
    unsubscribed: false,
    audienceId,
  });

  if (error) {
    console.error("Resend audience error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. You may already be subscribed.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "You're signed up! Thanks for joining.",
  });
}
