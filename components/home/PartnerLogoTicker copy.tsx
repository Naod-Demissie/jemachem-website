"use client";

const ITEMS = [
  {
    name: "our-partners-abyssinia-integrated-steel",
    src: "/partners/our-partners-abyssinia-integrated-steel.jpg",
    width: 150,
    height: 100,
    href: "#",
  },
  {
    name: "our-partners-bahirdar-textile",
    src: "/partners/our-partners-bahirdar-textile.jpg",
    width: 150,
    height: 100,
    href: "#",
  },
  {
    name: "our-partners-aarti-steel",
    src: "/partners/our-partners-aarti-steel.png",
    width: 150,
    height: 100,
    href: "#",
  },
  {
    name: "our-partners-ovid-construction",
    src: "/partners/our-partners-ovid-construction.jpeg",
    width: 150,
    height: 100,
    href: "#",
  },
  {
    name: "our-partners-repi-detergent",
    src: "/partners/our-partners-repi-detergent.png",
    width: 150,
    height: 100,
    href: "#",
  },
  {
    name: "our-partners-moha-soft-drinks",
    src: "/partners/our-partners-moha-soft-drinks.jpeg",
    width: 150,
    height: 100,
    href: "#",
  },
  {
    name: "our-partners-kuriftu-resorts",
    src: "/partners/our-partners-kuriftu-resorts.png",
    width: 150,
    height: 100,
    href: "#",
  },
  {
    name: "our-partners-ethiopian-pharmaceutical-supply",
    src: "/partners/our-partners-ethiopian-pharmaceutical-supply.jpg",
    width: 150,
    height: 100,
    href: "#",
  },
  {
    name: "our-partners-abyssinia-kojj-food-complex",
    src: "/partners/our-partners-abyssinia-kojj-food-complex.jpeg",
    width: 150,
    height: 100,
    href: "#",
  },
  {
    name: "our-partners-buluko-textile",
    src: "/partners/our-partners-buluko-textile.png",
    width: 150,
    height: 100,
    href: "#",
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
                <a target="_blank" key={`first-${index}`} className="p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className="h-12 w-auto object-contain transition-opacity hover:opacity-70 sm:h-16 md:h-20 lg:h-24 xl:h-28"
                  />
                </a>
              ))}
            </div>
            {/* Second marquee group for infinite scroll */}
            <div className="flex shrink-0 animate-marquee items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
              {ITEMS.map((logo, index) => (
                <a target="_blank" key={`second-${index}`} className="p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className="h-12 w-auto object-contain transition-opacity hover:opacity-70 sm:h-16 md:h-20 lg:h-24 xl:h-28"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
