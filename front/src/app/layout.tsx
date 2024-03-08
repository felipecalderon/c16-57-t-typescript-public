import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Bree_Serif } from 'next/font/google'
const bree = Bree_Serif({ 
  weight: '400',
  preload: false
});

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
      <body className={`${bree.className}`}>
        <Header/> 
        {children}
      </body>
    </html>
  );
}
