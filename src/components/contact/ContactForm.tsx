"use client";
// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Contact form with validation and Resend submission
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

type State = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [messageText, setMessageText] = useState("");
  const [state, setState] = useState<State>("idle");
  const [feedback, setFeedback] = useState("");

  // When: 2026-03-26 | By: claude-sonnet-4-6 | What: Submit handler with client-side validation and API call
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !subject || !messageText) {
      setFeedback("Please fill in all fields.");
      setState("error");
      return;
    }
    if (!emailRegex.test(email)) {
      setFeedback("Please enter a valid email address.");
      setState("error");
      return;
    }
    setState("loading");
    setFeedback("");
    try {
      const res = await fetch("/finch/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message: messageText }),
      });
      const data = await res.json();
      if (data.success) {
        setState("success");
        setFeedback(data.message);
        setName("");
        setEmail("");
        setSubject("");
        setMessageText("");
      } else {
        setState("error");
        setFeedback(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setState("error");
      setFeedback("Something went wrong. Please try again.");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center">
        <p className="font-medium text-primary mb-2">Thank you!</p>
        <p className="text-sm text-muted-foreground">{feedback}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name" className="mb-1.5 block text-sm">Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="email" className="mb-1.5 block text-sm">Email address</Label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="subject" className="mb-1.5 block text-sm">Subject</Label>
        <Input
          id="subject"
          type="text"
          placeholder="What's this about?"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="message" className="mb-1.5 block text-sm">Message</Label>
        <Textarea
          id="message"
          placeholder="Your message…"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          rows={5}
          required
        />
      </div>
      {state === "error" && (
        <p className="text-sm text-destructive">{feedback}</p>
      )}
      <Button type="submit" disabled={state === "loading"} className="w-full">
        {state === "loading" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
