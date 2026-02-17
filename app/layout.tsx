import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Junior Noundou | Full-Stack Engineer",
  description:
    "Full-Stack Engineer specialized in SaaS & Cloud Applications. React, Node.js, AWS.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "AWS Developer",
    "SaaS Engineer",
  ],
  authors: [{ name: "Junior Noundou" }],
  openGraph: {
    title: "Junior Noundou Portfolio",
    description:
      "Building scalable SaaS & Cloud applications with React, Node.js & AWS.",
    url: "https://yourdomain.com", // on changera plus tard
    siteName: "Junior Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-gray-800`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
