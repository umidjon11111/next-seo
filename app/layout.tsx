import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// metadata seo for the app
export const metadata: Metadata = {
  title: "Umidjon Portfolio",
  description:
    "Welcome to my portfolio website! I'm Umidjon, a passionate software developer specializing in web development. Explore my projects, skills, and experience as you navigate through my work.",
  openGraph: {
    title: "Umidjon Portfolio",
    description:
      "Welcome to my portfolio website! I'm Umidjon, a passionate software developer specializing in web development. Explore my projects, skills, and experience as you navigate through my work.",
    url: "https://umidjon-portfolio.vercel.app/",
    siteName: "Umidjon Portfolio",
    images: [
      {
        url: "/file.svg",
        width: 1200,
        height: 630,
        alt: "Umidjon Portfolio",
      },
    ],
  },
};
// title and description for the app
// openGraph  => telegram and facebook preview

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
