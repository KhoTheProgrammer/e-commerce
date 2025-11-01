import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CampusCart - Your Campus Marketplace",
  description:
    "Buy and sell textbooks, electronics, dorm supplies, and campus essentials with fellow students at your university.",
  keywords: [
    "campus marketplace",
    "student marketplace",
    "textbooks",
    "electronics",
    "dorm supplies",
    "university marketplace",
  ],
  authors: [{ name: "CampusCart" }],
  creator: "CampusCart",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://campuscart.com",
    title: "CampusCart - Your Campus Marketplace",
    description:
      "Buy and sell textbooks, electronics, dorm supplies, and campus essentials with fellow students.",
    siteName: "CampusCart",
  },
  twitter: {
    card: "summary_large_image",
    title: "CampusCart - Your Campus Marketplace",
    description:
      "Buy and sell textbooks, electronics, dorm supplies, and campus essentials with fellow students.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
