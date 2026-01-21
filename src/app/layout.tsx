import type { Metadata } from "next";
import { Geist, Geist_Mono, Pixelify_Sans, Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const GameFont = Pixelify_Sans({
  variable: "--font-game",
  subsets: ["latin"],
});

const inter = Pixelify_Sans({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PixelForge",
  description: "A gamified coding platform that turns learning into a pixel-based progression system with real-world development depth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className="dark">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased ${GameFont.variable} ${inter.variable}`}
        >
          <Provider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </Provider>
        </body>
      </html>
    </>
  );
}
