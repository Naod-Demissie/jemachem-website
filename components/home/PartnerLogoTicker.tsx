"use client";

const ITEMS = [
  {
    name: "Partner 1",
    src: "/partners/1.png",
    width: 150,
    height: 100,
    href: "#",
  },
  {
    name: "Partner 2",
    src: "/partners/2.jpeg",
    width: 150,
    height: 100,
    href: "#",
  },
  {
    name: "Partner 3",
    src: "/partners/3.jpeg",
    width: 150,
    height: 100,
    href: "#",
  },
  {
    name: "Partner 4",
    src: "/partners/4.png",
    width: 150,
    height: 100,
    href: "#",
  },
  {
    name: "Partner 5",
    src: "/partners/5.jpeg",
    width: 150,
    height: 100,
    href: "#",
  },
  {
    name: "Partner 6",
    src: "/partners/6.png",
    width: 150,
    height: 100,
    href: "#",
  },
  {
    name: "Partner 7",
    src: "/partners/7.png",
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
                <a href={logo.href} target="_blank" key={`first-${index}`} className="p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6">
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
                <a href={logo.href} target="_blank" key={`second-${index}`} className="p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6">
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
