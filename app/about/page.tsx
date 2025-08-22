import Gallery27 from "@/components/about/TeamMembersCarousel";
import { PartnerLogosCarousel } from "@/components/about/PartnerLogosCarousel";
import { Timeline4 } from "@/components/about/ProductCategoriesTimeline";
import { Cta11 } from "@/components/about/ContactCallToAction";
import { Feature16 } from "@/components/about/CompanyValuesSection";
import About8 from "@/components/about/AboutHeroSection";
import PlusPatternBackground from "@/components/ui/PlusPatternBackground";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us - Chemical Import Company Ethiopia",
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
    title: "About Us - Chemical Import Company Ethiopia",
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
      {/* Banner Section */}
      <section className="relative min-h-[400px] w-full">
        <div className="absolute inset-0">
          <Image
            src="/contact-us-banner.webp"
            alt="About Us Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-80" />
        </div>
        <div className="relative z-10 flex h-full items-center justify-center pt-40 text-center text-white">
          <div className="max-w-2xl">
            <div className="flex justify-center mb-3">
              <div className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 text-white text-sm font-medium">
                <p className="text-sm font-normal text-white">ABOUT US</p>
              </div>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-3xl lg:text-4xl">
              Powering Ethiopia&#39;s Growth
              <br />
              One Chemical at a Time.
            </h1>
          </div>
        </div>
      </section>
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
