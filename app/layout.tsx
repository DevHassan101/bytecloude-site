import type { Metadata } from "next";
import { Outfit } from 'next/font/google';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import "./style.css";


const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: "ByteCloude",
  description: "Developed By ByteCloude",
  other: {
    'X-DNS-Prefetch-Control': 'on',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className} suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}