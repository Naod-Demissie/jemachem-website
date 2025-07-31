"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { ChevronRight, Star, Zap } from "lucide-react";
import { useRef } from "react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Mekdes Alemu",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    content:
      "We've worked with many suppliers, but none have matched the consistency and quality we get here. Truly dependable.",
  },
  {
    name: "Abel Hailemariam",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    content:
      "High-quality products and great communication. Highly recommended!",
  },
  {
    name: "Selam Tesfaye",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    content:
      "Their attention to detail and care in packaging is unmatched. Everything arrives in perfect condition every time.",
  },
  {
    name: "Yared Mengistu",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    content: "Very impressed with the speed and accuracy of their deliveries.",
  },
  {
    name: "Hanna Tsegaye",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    content:
      "From inquiry to delivery, everything was smooth. The team was responsive and genuinely helpful. This is how a supplier should operate.",
  },

  {
    name: "Samuel Assefa",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjXfMZ91H9BIpG3EWdEcol5NTNIMiGmmBB6sIS_azhrOu6U2gvw=w73-h73-p-rp-mo-br100",
    content:
      "Highly impressed with the quality and variety of chemicals offered by this company. Their customer service is top-notch, always responsive and helpful. Orders are always delivered on time and in perfect condition. I highly recommend this company for all your chemical needs.",
  },
];

const Testimonial = () => {
  const plugin = useRef(
    AutoScroll({
      startDelay: 500,
      speed: 0.7,
    })
  );

  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-1 text-sm font-semibold text-white">
            <Zap className="h-6 w-auto fill-white" />
            Rated 5 stars by 1000+ clients
          </div>
          <h2 className="text-center text-3xl font-semibold lg:text-4xl text-white">
            Meet our happy clients
          </h2>
          <p className="text-center lg:text-lg text-white">
            Join a global network of thought leaders, product developers,
          </p>
        </div>
        <div className="mt-16 space-y-4">
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[plugin.current]}
            onMouseLeave={() => plugin.current.play()}
            className="relative before:absolute before:top-0 before:bottom-0 before:left-0 before:z-10 before:w-36 before:bg-linear-to-r before:from-background before:to-transparent after:absolute after:top-0 after:right-0 after:bottom-0 after:z-10 after:w-36 after:bg-linear-to-l after:from-background after:to-transparent"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-auto">
                  <Card
                    className="max-w-96 p-6 select-none border-0 shadow-none"
                    style={{ backgroundColor: "#0c0c0c" }}
                  >
                    <div className="flex justify-between">
                      <div className="mb-4 flex gap-4">
                        <Avatar className="size-14 rounded-full ring-1 ring-input">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                        </Avatar>
                        <div>
                          <p className="font-medium text-white">
                            {testimonial.name}
                          </p>
                          <div className="flex gap-1">
                            <Star className="size-5 fill-amber-500 text-amber-500" />
                            <Star className="size-5 fill-amber-500 text-amber-500" />
                            <Star className="size-5 fill-amber-500 text-amber-500" />
                            <Star className="size-5 fill-amber-500 text-amber-500" />
                            <Star className="size-5 fill-amber-500 text-amber-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <q className="leading-7 text-white">
                      {testimonial.content}
                    </q>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Testimonial };
