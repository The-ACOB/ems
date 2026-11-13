import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Instrument_Serif, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const display = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = IBM_Plex_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Coming soon",
  description: "We're building something careful. Launching soon.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-[#F2EEE6] font-[family-name:var(--font-body)] text-[#15201B] antialiased">
        {children}
      </body>
    </html>
  );
}
