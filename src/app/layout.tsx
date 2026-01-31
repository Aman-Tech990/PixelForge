import type { Metadata } from "next";
import { Geist, Geist_Mono, Pixelify_Sans, Inter, Jersey_10 } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import {
  ClerkProvider,
} from '@clerk/nextjs'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const GameFont = Jersey_10({
  variable: "--font-game",
  subsets: ["latin"],
  weight: ['400'],
});

const inter = Inter({
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
    <ClerkProvider>
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
    </ClerkProvider>
  );
}
