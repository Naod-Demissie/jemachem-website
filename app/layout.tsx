import type { Metadata } from "next";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import "./globals.css";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Jemachem Trading",
    template: "%s | Jemachem Trading",
  },
  description:
    "Jemachem Trading - Ethiopia's premier importer, supplier, and distributor of industrial, agro, and laboratory chemicals and equipment. Delivering quality solutions for Ethiopia's growing industries with reliable products and exceptional service.",
  icons: {
    icon: "/jemachem-company-logo.webp",
    shortcut: "/jemachem-company-logo.webp",
    apple: "/jemachem-company-logo.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
