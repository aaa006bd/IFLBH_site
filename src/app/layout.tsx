import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Merriweather } from 'next/font/google';
import icon from "../../public/Logo.png";

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IFLBH - Innovative Footwear & Leather House",
  description: "Producer & Exporter of Crust/Finished leather/goods ",
  icons: {
    icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} data-qb-installed="true">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.className} antialiase`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
