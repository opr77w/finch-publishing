"use client";
// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Dismissible banner for EU shipping restriction notice
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "finch-banner-dismissed";

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="bg-primary text-primary-foreground text-xs py-2 px-4 flex items-center justify-center gap-3">
      <p>
        Please note: due to new regulations we are currently unable to ship to
        EU countries or Northern Ireland.
      </p>
      <button
        onClick={dismiss}
        aria-label="Dismiss"
        className="shrink-0 opacity-80 hover:opacity-100"
      >
        <X size={14} />
      </button>
    </div>
  );
}
