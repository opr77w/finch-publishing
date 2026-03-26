// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Shared types used across API routes and components

export interface ContactFormPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterPayload {
  firstName: string;
  email: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}
