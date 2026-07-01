import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, Cormorant_Garamond, Lora, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ClarityAnalytics from "./clarity-analytics";
import "./globals.css";

// Display serif — old-style warmth that echoes the wordmark. Normal + italic
// (the hero's accented phrase is italic).
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

// Body — warm humanist sans for legibility on a phone in low light.
const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

// TEMPORARY — serif candidates for the font preview section. Remove the two
// that aren't chosen (and this comment) once Lynn & Jacq decide.
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
});
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"
  ),
  openGraph: {
    type: "website",
    siteName: "The Care Den",
    locale: "en_US",
    images: [
      {
        url: "/og-card.png",
        width: 1200,
        height: 630,
        alt: "The Care Den, where caregivers find each other",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-card.png"],
  },
  verification: { google: "MoEXb6DBhSxVlb1eTtNY4JbdUNDWvh5YQPyJD9BvFAY" },
  title: "The Care Den — A peer community for caregivers",
  description:
    "A room for those carrying the emotional weight of caring for aging parents, partners or loved ones. A peer-led community that gets it without the explanation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${hanken.variable} ${cormorant.variable} ${lora.variable} ${newsreader.variable} antialiased`}
    >
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
        <ClarityAnalytics />
      </body>
    </html>
  );
}
