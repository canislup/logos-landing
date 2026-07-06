import type { Metadata } from "next";
import { Geist, Geist_Mono,  } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hire Virtual Assistants | Elite Recruiting for Top Global Talent | Logos Recruiting",
  description: "Elite Recruiting for Top Global Talent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
