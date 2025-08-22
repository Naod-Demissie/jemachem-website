import { Droplets, Scissors, Beaker, Utensils, Paintbrush, Layers } from "lucide-react";

 
import Image from "next/image";

const DATA = [
  {
    title: "Detergents",
    description:
      "High-quality chemicals for soaps, detergents, and cosmetic formulations with superior cleaning performance.",
    icon: Beaker,
    image: {
      src: "/product-category/detergent-cosmetics-chemicals-jemachem-trading.webp",
      alt: "Detergent & Cosmetics Chemicals",
    },
  },
  {
    title: "Food Grade",
    description:
      "Food-safe additives and processing chemicals for beverage, brewery, and food manufacturing industries.",
    icon: Utensils,
    image: {
      src: "/product-category/food-beverage-chemicals-jemachem-trading.webp",
      alt: "Food & Beverage Chemicals",
    },
    reverse: true,
  },
  {
    title: "Paints",
    description:
      "Premium pigments, solvents, and paint chemicals for industrial coatings and artistic applications.",
    icon: Paintbrush,
    image: {
      src: "/product-category/paints-solvents-chemicals-jemachem-trading.webp",
      alt: "Paints & Solvents Chemicals",
    },
  },
  {
    title: "Water Treatment",
    description:
      "Chemicals to clean and treat water for industrial, municipal, and environmental applications.",
    icon: Droplets,
    image: {
      src: "/product-category/water-treatment-chemicals-jemachem-trading.webp",
      alt: "Water Treatment Chemicals",
    },
    reverse: true,
  },
  {
    title: "Leather",
    description:
      "Professional tannery chemicals and footwear processing solutions for leather manufacturing excellence.",
    icon: Layers,
    image: {
      src: "/product-category/leather-footwear-chemicals-jemachem-trading.webp",
      alt: "Tannery & Footwear Chemicals",
    },
  },
  {
    title: "Textiles",
    description:
      "Advanced dyes, finishes, and textile chemicals for fabric processing and garment manufacturing.",
    icon: Scissors,
    image: {
      src: "/product-category/textile-dyes-finishes-chemicals-jemachem-trading.webp",
      alt: "Textile Chemicals",
    },
    reverse: true,
  },
];

const Timeline4 = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto overflow-hidden py-16 sm:py-20 lg:py-28">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-3 sm:mb-4 tracking-[-0.96px] sm:tracking-[-1.28px] lg:tracking-[-1.6px]">
            Our Product Categories
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4 tracking-[-0.32px] sm:tracking-[-0.4px]">
            As a premier chemical importer, we source and distribute high-quality chemicals from around the world, 
            serving diverse industry sectors with our comprehensive range of solutions.
          </p>
        </div>

        {DATA.map((item, index) => (
          <div key={index} className="relative flex mb-8 sm:mb-12 lg:mb-16">
            <div
              className={`flex w-full justify-center px-4 sm:px-6 lg:px-8 text-end md:gap-8 lg:gap-12 ${
                item?.reverse ? "lg:flex-row-reverse lg:text-start" : ""
              } `}
            >
              <div className="flex-1 max-lg:hidden">
                <h3 className="text-2xl tracking-[-0.96px]">{item.title}</h3>
                <p
                  className={`mt-2.5 max-w-[300px] tracking-[-0.32px] text-balance text-muted-foreground ${
                    item?.reverse ? "" : "ml-auto"
                  }`}
                >
                  {item.description}
                </p>
              </div>
              <div className="flex items-start justify-center relative z-10">
                <div className="rounded-full border bg-gray-200 p-[5px] shadow-md w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                    <item.icon className="size-4 sm:size-5 shrink-0" />
                </div>
              </div>
              <div className="flex-1 max-lg:ml-4 sm:max-lg:ml-6">
                <div className="text-start lg:pointer-events-none lg:hidden mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl tracking-[-0.72px] sm:tracking-[-0.96px]">{item.title}</h3>
                  <p className="mt-2 sm:mt-2.5 max-w-[280px] sm:max-w-[300px] tracking-[-0.32px] text-balance text-muted-foreground text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-start justify-start">
                  <div className={` ${item?.reverse ? "lg:ml-auto" : ""}`}>
                    <div className="relative">
                      {/* Product Card Style Image Container */}
                      <div className="group relative overflow-hidden rounded-xl shadow-lg w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px]">
                        <Image
                          src={item.image.src}
                          alt={item.image.alt}
                          fill
                          className="rounded-xl object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 360px, 400px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-xl transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`absolute z-[-1] h-full w-[2px] sm:w-[3px] translate-x-5 sm:translate-x-6 rounded-full lg:left-1/2 lg:-translate-x-1/2 ${
                index === DATA.length - 1
                  ? "bg-gradient-to-b from-foreground/10 via-foreground/10 to-transparent"
                  : "bg-foreground/10"
              }`}
            >
              {index == 0 && (
                <div className="h-4 w-[2px] sm:w-[3px] -translate-y-full bg-gradient-to-b from-transparent to-foreground/10"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Timeline4 };
