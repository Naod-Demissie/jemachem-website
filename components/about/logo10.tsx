"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Logos10 = () => {
  const logos = [
    {
      id: "logo-1",
      description: "Partner 1",
      image: "/partners/1.png",
      className: "h-8 w-auto sm:h-10 md:h-12 lg:h-14 xl:h-16",
    },
    {
      id: "logo-2",
      description: "Partner 2",
      image: "/partners/2.jpeg",
      className: "h-8 w-auto sm:h-10 md:h-12 lg:h-14 xl:h-16",
    },
    {
      id: "logo-3",
      description: "Partner 3",
      image: "/partners/3.jpeg",
      className: "h-8 w-auto sm:h-10 md:h-12 lg:h-14 xl:h-16",
    },
    {
      id: "logo-4",
      description: "Partner 4",
      image: "/partners/4.png",
      className: "h-8 w-auto sm:h-10 md:h-12 lg:h-14 xl:h-16",
    },
    {
      id: "logo-5",
      description: "Partner 5",
      image: "/partners/5.jpeg",
      className: "h-8 w-auto sm:h-10 md:h-12 lg:h-14 xl:h-16",
    },
    {
      id: "logo-6",
      description: "Partner 6",
      image: "/partners/6.png",
      className: "h-8 w-auto sm:h-10 md:h-12 lg:h-14 xl:h-16",
    },
    {
      id: "logo-7",
      description: "Partner 7",
      image: "/partners/7.png",
      className: "h-8 w-auto sm:h-10 md:h-12 lg:h-14 xl:h-16",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-4xl mx-auto">
        {/* <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16"> */}
          <h2 className="text-3xl md:text-xl lg:text-4xl xl:text-4xl font-semibold tracking-tight">
          {/* <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight mb-4 md:mb-6"> */}
            Trusted by Leading{" "}
            <span className="text-muted-foreground/60">
              Industries
            </span>{" "}
            Across Ethiopia
          </h2>
        </div>

        <div className="relative mx-auto flex items-center justify-center pt-8">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="h-35 relative flex basis-1/2 justify-center pl-0 sm:basis-1/4 md:basis-1/3 lg:basis-1/6"
                >
                  <div className="flex flex-col items-center justify-center lg:mx-10">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={`${logo.className} object-contain transition-opacity hover:opacity-70`}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="bg-gradient-to-r from-background absolute inset-y-0 left-0 w-32 to-transparent"></div>
          <div className="bg-gradient-to-l from-background absolute inset-y-0 right-0 w-32 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos10 };
