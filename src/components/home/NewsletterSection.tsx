"use client";
// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Newsletter signup block, reusable across homepage and keep-in-touch page
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface Props {
  variant?: "inline" | "full";
}

export default function NewsletterSection({ variant = "inline" }: Props) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  // When: 2026-03-26 | By: claude-sonnet-4-6 | What: Submit handler posting to newsletter API route
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!firstName || !email) return;
    setState("loading");
    try {
      const res = await fetch("/finch/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email }),
      });
      const data = await res.json();
      if (data.success) {
        setState("success");
        setMessage(data.message);
        setFirstName("");
        setEmail("");
      } else {
        setState("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setState("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (state === "success") {
    return (
      <div className={variant === "full" ? "text-center py-8" : "py-4"}>
        <p className="text-sm font-medium text-primary">{message}</p>
      </div>
    );
  }

  if (variant === "full") {
    return (
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <Label htmlFor="firstName-full" className="text-sm mb-1.5 block">
              First name
            </Label>
            <Input
              id="firstName-full"
              type="text"
              placeholder="Your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="email-full" className="text-sm mb-1.5 block">
              Email address
            </Label>
            <Input
              id="email-full"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit" disabled={state === "loading"} className="w-full">
            {state === "loading" ? "Signing up…" : "Sign up"}
          </Button>
          {state === "error" && (
            <p className="text-sm text-destructive">{message}</p>
          )}
          <p className="text-xs text-muted-foreground text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    );
  }

  // Inline variant (homepage)
  return (
    <section className="bg-primary/5 border-y border-border py-12 px-4 sm:px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-serif text-xl font-medium mb-2">Keep in touch</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Sign up to hear about new guides and publications from Finch Publishing.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
          <Input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="flex-1"
          />
          <Input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit" disabled={state === "loading"}>
            {state === "loading" ? "…" : "Sign up"}
          </Button>
        </form>
        {state === "error" && (
          <p className="text-sm text-destructive mt-3">{message}</p>
        )}
        <p className="text-xs text-muted-foreground mt-3">
          We respect your privacy.
        </p>
      </div>
    </section>
  );
}
