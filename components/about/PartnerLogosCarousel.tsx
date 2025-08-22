"use client";

import Image from "next/image";

const logos = [
  {
    src: "/partners/our-partner-kuriftu-resorts-hospitality-jemachem-trading.webp",
    width: 150,
    height: 100,
    alt: "Kuriftu Resorts hospitality partner with Jemachem Trading",
  },
  {
    src: "/partners/our-partner-moha-soft-drinks-beverage-jemachem-trading.webp",
    width: 150,
    height: 100,
    alt: "Moha Soft Drinks beverage partner with Jemachem Trading",
  },
  {
    src: "/partners/our-partner-buluko-textile-fabric-jemachem-trading.webp",
    width: 150,
    height: 100,
    alt: "Buluko Textile fabric and textile industry partner with Jemachem Trading",
  },
  {
    src: "/partners/our-partner-abyssinia-kojj-food-complex-jemachem-trading.webp",
    width: 150,
    height: 100,
    alt: "Abyssinia Kojj Food Complex food industry partner with Jemachem Trading",
  },
  {
    src: "/partners/our-partner-abyssinia-integrated-steel-industry-jemachem-trading.webp",
    width: 150,
    height: 100,
    alt: "Abyssinia Integrated Steel industry partner with Jemachem Trading",
  },
  {
    src: "/partners/our-partner-bahirdar-textile-garment-jemachem-trading.webp",
    width: 150,
    height: 100,
    alt: "Bahir Dar Textile garment and fabric partner with Jemachem Trading",
  },
  {
    src: "/partners/our-partner-ethiopian-pharmaceutical-supply-healthcare-jemachem-trading.webp",
    width: 150,
    height: 100,
    alt: "Ethiopian Pharmaceutical Supply healthcare partner with Jemachem Trading",
  },
  {
    src: "/partners/our-partner-ovid-construction-infrastructure-jemachem-trading.webp",
    width: 150,
    height: 100,
    alt: "Ovid Construction infrastructure partner with Jemachem Trading",
  },
  {
    src: "/partners/our-partner-repi-detergent-cleaning-jemachem-trading.webp",
    width: 150,
    height: 100,
    alt: "Repi Detergent cleaning products partner with Jemachem Trading",
  },
  {
    src: "/partners/our-partner-aarti-steel-manufacturing-jemachem-trading.webp",
    width: 150,
    height: 100,
    alt: "Aarti Steel manufacturing partner with Jemachem Trading",
  },
];

const PartnerLogosCarousel = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-xl lg:text-4xl xl:text-4xl font-semibold tracking-tight">
            Trusted by Leading{" "}
            <span className="text-muted-foreground/60">Industries</span> Across
            Ethiopia
          </h2>
        </div>

        <div className="relative mx-auto flex items-center justify-center pt-8">
          <div className="relative overflow-hidden">
            <div className="flex w-full">
              {/* First marquee group */}
              <div className="flex shrink-0 animate-marquee items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                {logos.map((logo) => (
                  <div
                    key={`first-${logo.alt}`}
                    className="p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className="h-20 w-auto object-contain transition-opacity hover:opacity-70 sm:h-16 md:h-20 lg:h-24 xl:h-28"
                    />
                  </div>
                ))}
              </div>
              {/* Second marquee group for infinite scroll */}
              <div className="flex shrink-0 animate-marquee items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                {logos.map((logo) => (
                  <div
                    key={`second-${logo.alt}`}
                    className="p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className="h-20 w-auto object-contain transition-opacity hover:opacity-70 sm:h-16 md:h-20 lg:h-24 xl:h-28"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-background absolute inset-y-0 left-0 w-32 to-transparent"></div>
          <div className="bg-gradient-to-l from-background absolute inset-y-0 right-0 w-32 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { PartnerLogosCarousel };
