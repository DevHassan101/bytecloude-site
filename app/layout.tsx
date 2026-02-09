import type { Metadata } from "next";
import { Outfit } from 'next/font/google';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css"

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-outfit',
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
          href="./globals.critical.css"
          as="style"
          onLoad={(e) => {
            const target = e.target as HTMLLinkElement;
            target.onload = null;
            target.rel = 'stylesheet';
          }}
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