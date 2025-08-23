import Gallery27 from "@/components/about/TeamMembersCarousel";
import { PartnerLogosCarousel } from "@/components/about/PartnerLogosCarousel";
import { Timeline4 } from "@/components/about/ProductCategoriesTimeline";
import { Cta11 } from "@/components/about/ContactCallToAction";
import { Feature16 } from "@/components/about/CompanyValuesSection";
import About8 from "@/components/about/AboutHeroSection";
import PlusPatternBackground from "@/components/ui/PlusPatternBackground";
import type { Metadata } from "next";
import { AboutBanner } from "@/components/about/AboutBanner";

export const metadata: Metadata = {
  title: "About Us - Chemical Import Company in Ethiopia",
  description:
    "Learn about Jemachem Trading, Ethiopia's premier chemical import company. Discover our mission, team, and commitment to delivering high-quality industrial, agricultural, and laboratory chemicals across Ethiopia.",
  keywords: [
    "about Jemachem Trading",
    "chemical import company Ethiopia",
    "chemical trading company Ethiopia",
    "chemical supplier Ethiopia history",
    "chemical distributor Ethiopia team",
    "chemical import company mission Ethiopia",
    "Addis Ababa chemical supplier",
    "chemical company Ethiopia",
    "industrial chemical importer Addis Ababa",
    "Ethiopia chemical distributor",
    "B2B chemical supplier Ethiopia",
    "wholesale chemicals Ethiopia",
    "detergent raw materials Ethiopia",
    "cosmetics ingredients Ethiopia",
    "food additives supplier Ethiopia",
    "paint and solvent supplier Ethiopia",
    "plastics and foam chemicals Ethiopia",
    "water treatment chemicals supplier Ethiopia",
    "leather tanning chemicals Ethiopia",
    "textile dyes and auxiliaries Ethiopia",
    "laboratory reagents Ethiopia",
    "chemical warehouse Addis Ababa",
    "chemical sourcing Ethiopia",
    "import chemicals Ethiopia",
    "chemical logistics Ethiopia",
  ],
  openGraph: {
    title: "About Us - Chemical Import Company in Ethiopia",
    description:
      "Learn about Jemachem Trading, Ethiopia's premier chemical import company. Discover our mission, team, and commitment to delivering high-quality chemicals across Ethiopia.",
    url: "https://jemachem.com/about",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return (
    <>
      <AboutBanner />
      <div className="relative overflow-hidden text-center">
        <PlusPatternBackground />
        <About8 />
        <Feature16 />
        <Timeline4 />
        <Gallery27 />
        <PartnerLogosCarousel />

        <Cta11 />
      </div>
    </>
  );
}
