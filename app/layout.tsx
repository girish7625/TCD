import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
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

export const metadata: Metadata = {
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
      className={`${fraunces.variable} ${hanken.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
