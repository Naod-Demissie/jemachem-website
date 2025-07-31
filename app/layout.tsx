import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

// const poppins = Poppins({
//   weight: "400",
//   variable: "--font-sans",
//   subsets: ["latin"],
// });

const poppins = Inter({
  weight: "400",
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jemachem Trading",
    template: "%s | Jemachem Trading",
  },
  description:
    "Jemachem Trading - Ethiopia's premier importer, supplier, and distributor of industrial, agro, and laboratory chemicals and equipment. Delivering quality solutions for Ethiopia's growing industries with reliable products and exceptional service.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
