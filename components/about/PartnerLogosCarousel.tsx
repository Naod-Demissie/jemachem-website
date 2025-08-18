"use client";

const logos = [
  {
    id: "logo-1",
    name: "our-partners-abyssinia-integrated-steel",
    src: "/partners/our-partners-abyssinia-integrated-steel.jpg",
    width: 150,
    height: 100,
  },
  {
    id: "logo-2",
    name: "our-partners-bahirdar-textile",
    src: "/partners/our-partners-bahirdar-textile.jpg",
    width: 150,
    height: 100,
  },
  {
    id: "logo-3",
    name: "our-partners-aarti-steel",
    src: "/partners/our-partners-aarti-steel.png",
    width: 150,
    height: 100,
  },
  {
    id: "logo-4",
    name: "our-partners-ovid-construction",
    src: "/partners/our-partners-ovid-construction.jpeg",
    width: 150,
    height: 100,
  },
  {
    id: "logo-5",
    name: "our-partners-repi-detergent",
    src: "/partners/our-partners-repi-detergent.png",
    width: 150,
    height: 100,
  },
  {
    id: "logo-6",
    name: "our-partners-moha-soft-drinks",
    src: "/partners/our-partners-moha-soft-drinks.jpeg",
    width: 150,
    height: 100,
  },
  {
    id: "logo-7",
    name: "our-partners-kuriftu-resorts",
    src: "/partners/our-partners-kuriftu-resorts.png",
    width: 150,
    height: 100,
  },
  {
    id: "logo-8",
    name: "our-partners-ethiopian-pharmaceutical-supply",
    src: "/partners/our-partners-ethiopian-pharmaceutical-supply.jpg",
    width: 150,
    height: 100,
  },
  {
    id: "logo-9",
    name: "our-partners-abyssinia-kojj-food-complex",
    src: "/partners/our-partners-abyssinia-kojj-food-complex.jpeg",
    width: 150,
    height: 100,
  },
  {
    id: "logo-10",
    name: "our-partners-buluko-textile",
    src: "/partners/our-partners-buluko-textile.png",
    width: 150,
    height: 100,
  },
];

const Logos10 = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-xl lg:text-4xl xl:text-4xl font-semibold tracking-tight">
            Trusted by Leading{" "}
            <span className="text-muted-foreground/60">
              Industries
            </span>{" "}
            Across Ethiopia
          </h2>
        </div>

        <div className="relative mx-auto flex items-center justify-center pt-8">
          <div className="relative overflow-hidden">
            <div className="flex w-full">
              {/* First marquee group */}
              <div className="flex shrink-0 animate-marquee items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                {logos.map((logo) => (
                  <div key={`first-${logo.id}`} className="p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      width={logo.width}
                      height={logo.height}
                      className="h-10 w-auto object-contain transition-opacity hover:opacity-70 sm:h-16 md:h-20 lg:h-24 xl:h-28"
                    />
                  </div>
                ))}
              </div>
              {/* Second marquee group for infinite scroll */}
              <div className="flex shrink-0 animate-marquee items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                {logos.map((logo) => (
                  <div key={`second-${logo.id}`} className="p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      width={logo.width}
                      height={logo.height}
                      className="h-10 w-auto object-contain transition-opacity hover:opacity-70 sm:h-16 md:h-20 lg:h-24 xl:h-28"
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

export { Logos10 };
