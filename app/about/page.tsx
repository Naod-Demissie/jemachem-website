import Gallery27 from "@/components/about/TeamMembersCarousel";
import { Logos10 } from "@/components/about/PartnerLogosCarousel";
import { Timeline4 } from "@/components/about/ProductCategoriesTimeline";
import { Cta11 } from "@/components/about/ContactCallToAction";
import { Feature16 } from "@/components/about/CompanyValuesSection";
import About8 from "@/components/about/AboutHeroSection";

export default function About() {
  return (
    <>
      {/* Banner Section */}
      <section className="relative min-h-[400px] w-full">
        <div className="absolute inset-0">
          <img
            src="/contact-us-banner.jpg"
            alt="Contact Us Banner"
            className="h-full w-full object-cover"
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
            <h2 className="text-4xl font-semibold tracking-tight md:text-3xl lg:text-4xl">
              Powering Ethiopia's Growth
              <br />
              One Chemical at a Time.
            </h2>
          </div>
        </div>
      </section>
      <div className="text-center">
        <About8 />
        <Feature16 />
        <Timeline4 />
        <Gallery27 />
        <Logos10 />

        <Cta11 />
      </div>
    </>
  );
}
