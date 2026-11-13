import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Under Construction",
  description: "This site is under construction. Please check back later.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
