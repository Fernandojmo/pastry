import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pâtisserie – Fine Creations",
  description: "A minimalist, high-end patisserie experience built with Next.js",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Pâtisserie – Fine Creations",
    description: "An elegant patisserie website built with Next.js",
    type: "website",
    url: "https://example.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}