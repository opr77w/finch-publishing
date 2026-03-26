// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Root layout wiring fonts, ThemeProvider, Analytics, Header, Footer
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnnouncementBanner from "@/components/layout/AnnouncementBanner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "finch publishing.",
    template: "%s — finch publishing.",
  },
  description:
    "Illustrated maps and guides for garden lovers. Beautiful folded map guides to the finest gardens, parks, and green spaces across the UK.",
  openGraph: {
    siteName: "finch publishing.",
    locale: "en_GB",
    type: "website",
  },
};

// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Root layout component assembling global providers and shell
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AnnouncementBanner />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
