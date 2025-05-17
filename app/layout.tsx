import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Portfolio - Vincent Daniel",
  description: "Mon portfolio réalisé avec Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <html lang="fr">
    <head>
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP&display=swap"
        rel="stylesheet"
      />
    </head>
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <main>{children}</main>
    </body>
  </html>
);
}
