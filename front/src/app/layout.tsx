import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App Juntadas (nombre por definir)",
  description: "Para juntarse y pasarlo bien",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bree-serif-regular`}>
        <Header/> 
        {children}
      </body>
    </html>
  );
}
