import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sorn Sophiram | Junior Full Stack Web Developer",
  description:
    "Portfolio of Sorn Sophiram, a Junior Full Stack Web Developer and Computer Science student.",
  openGraph: {
    title: "Sorn Sophiram | Junior Full Stack Web Developer",
    description:
      "Portfolio of Sorn Sophiram, a Junior Full Stack Web Developer and Computer Science student.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
