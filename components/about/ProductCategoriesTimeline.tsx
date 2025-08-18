import { Factory, Leaf, TestTube } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

const DATA = [
  {
    title: "Industrial Chemicals",
    description:
      "Powering manufacturing and production efficiency with high-quality industrial grade chemicals for various industries.",
    icon: Factory,
    image: {
      src: "/industrial-chemicals.jpg",
      alt: "Industrial Chemicals",
    },
  },
  {
    title: "Agrochemicals",
    description:
      "Maximize agricultural yield with precision agrochemicals designed for modern farming practices and crop protection.",
    icon: Leaf,
    image: {
      src: "/agro-chemicals.jpg",
      alt: "Agrochemicals",
    },
    reverse: true,
  },
  {
    title: "Laboratory Chemicals",
    description:
      "High-purity reagents and laboratory chemicals for scientific research, testing, and breakthrough discoveries.",
    icon: TestTube,
    image: {
      src: "/laboratory-chemicals.png",
      alt: "Laboratory Chemicals",
    },
  },
];

const Timeline4 = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto overflow-hidden pb-20 lg:pt-5 [&>*:last-child]:pb-5 [&>div>div:first-child]:pt-5!">
        {DATA.map((item, index) => (
          <div key={index} className="relative flex">
            <div
              className={`flex w-full justify-center px-1 py-5 text-end md:gap-6 lg:gap-10 ${
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
              <div className="flex items-start justify-center">
                <div className="rounded-full border bg-gray-200 p-[5px] shadow-md w-12 h-12 flex items-center justify-center">
                    <item.icon className="size-5 shrink-0" />
                </div>
              </div>
              <div className="flex-1 max-lg:-translate-x-4">
                <div className="text-start lg:pointer-events-none lg:hidden">
                  <h3 className="text-2xl tracking-[-0.96px]">{item.title}</h3>
                  <p className="mt-2.5 mb-10 max-w-[300px] tracking-[-0.32px] text-balance text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-start justify-start">
                  <div className={` ${item?.reverse ? "lg:ml-auto" : ""}`}>
                    <div className="relative">
                      {/* Product Card Style Image Container */}
                      <div className="group relative overflow-hidden rounded-xl shadow-lg w-[400px] h-[400px]">
                        <img
                          src={item.image.src}
                          width={400}
                          height={400}
                          alt={item.image.alt}
                          className="h-full w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-xl transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`absolute z-[-2] h-full w-[3px] translate-x-5 rounded-full lg:left-1/2 lg:-translate-x-1/2 ${
                index === DATA.length - 1
                  ? "bg-gradient-to-b from-foreground/10 via-foreground/10 to-transparent"
                  : "bg-foreground/10"
              }`}
            >
              {index == 0 && (
                <div className="h-4 w-[3px] -translate-y-full bg-gradient-to-b from-transparent to-foreground/10"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Timeline4 };
