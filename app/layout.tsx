import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";
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
  openGraph: {
    title: "Said Yanak — Backend Developer & Freelancer",
    description:
      "Backend developer specializing in Spring Boot, Node.js, Docker, and full-stack web applications.",
    url: "https://saidyanak.dev",
    siteName: "Said Yanak",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
