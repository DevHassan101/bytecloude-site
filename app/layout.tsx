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
  weight: ['400', '500', '600', '700'],
  variable: '--font-outfit',
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: "ByteCloude",
  description: "Developed By ByteCloude",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/_next/static/media/outfit-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={outfit.className} suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}