import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";
import JsonLd from "@/components/JsonLd";
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
  title: "Said Yanak — Backend Developer & Freelancer",
  description:
    "Backend developer and freelancer. I build backends, ship full-stack products, and host them on my own infrastructure. Graduate of 42 Kocaeli.",
  metadataBase: new URL("https://saidyanak.dev"),
  keywords: [
    "Backend Developer",
    "Freelancer",
    "Spring Boot",
    "Node.js",
    "Docker",
    "PostgreSQL",
    "REST API",
    "Full-Stack Developer",
    "VPS Hosting",
    "42 Kocaeli",
    "Turkey",
    "Türkiye",
    "Backend Geliştirici",
    "Freelance Developer",
  ],
  authors: [{ name: "Said Yanak" }],
  creator: "Said Yanak",
  publisher: "Said Yanak",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Said Yanak — Backend Developer & Freelancer",
    description:
      "Backend developer specializing in Spring Boot, Node.js, Docker, and full-stack web applications.",
    url: "https://saidyanak.dev",
    siteName: "Said Yanak",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/grogu.png",
        width: 400,
        height: 400,
        alt: "Said Yanak",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Said Yanak — Backend Developer & Freelancer",
    description:
      "Backend developer specializing in Spring Boot, Node.js, Docker, and full-stack web applications.",
    images: ["/grogu.png"],
  },
  verification: {
    google: "fK3XlnjhLe4kX7GwSQ9e5gPG8r7YRuq9K5qtqcUOR5M",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
