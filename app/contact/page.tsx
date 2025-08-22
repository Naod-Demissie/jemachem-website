import { ContactUs } from "@/components/contact/ContactUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Chemical Import Company Ethiopia",
  description: "Get in touch with Jemachem Trading, Ethiopia's premier chemical import company. Contact us for industrial, agricultural, and laboratory chemical solutions across Ethiopia.",
  keywords: [
    "contact Jemachem Trading",
    "chemical import company contact Ethiopia",
    "chemical supplier contact Ethiopia",
    "chemical distributor contact Ethiopia",
    "chemical trading contact Ethiopia",
    "chemical import inquiry Ethiopia",
    "contact chemical supplier Addis Ababa",
    "Ethiopia industrial chemicals contact",
    "Addis Ababa chemical distributor phone",
    "email Jemachem Trading",
    "+251 chemical supplier phone",
    "detergent raw materials contact Ethiopia",
    "cosmetics chemicals supplier contact",
    "food additives supplier contact Ethiopia",
    "paints and solvents supplier contact",
    "plastics and foam chemicals contact",
    "water treatment chemicals contact Ethiopia",
    "leather tanning chemicals contact",
    "textile dyes auxiliaries contact Ethiopia",
    "laboratory reagents supplier contact Ethiopia"
  ],
  openGraph: {
    title: "Contact Us - Chemical Import Company Ethiopia",
    description: "Get in touch with Jemachem Trading for chemical solutions across Ethiopia.",
    url: "https://jemachem.com/contact",
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function Contact() {
  return (
    <div className="text-center">
      <ContactUs />
    </div>
  );
}
