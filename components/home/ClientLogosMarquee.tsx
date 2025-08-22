"use client";

import Image from "next/image";

const ITEMS = [
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

const Logos = () => {
  return (
    <section className="overflow-hidden bg-muted py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 dark:bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-balance lg:text-3xl">
            Trusted by leading companies.
            <br />
            <span className="text-muted-foreground">
              Partnering with industry leaders.
            </span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex w-full">
            {/* First marquee group */}
            <div className="flex shrink-0 animate-marquee items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
              {ITEMS.map((logo, index) => (
                <div
                  key={`first-${index}`}
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
              {ITEMS.map((logo, index) => (
                <div
                  key={`second-${index}`}
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
      </div>
    </section>
  );
};

export default Logos;
