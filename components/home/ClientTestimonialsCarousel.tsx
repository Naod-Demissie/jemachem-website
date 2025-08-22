"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { Star, Zap } from "lucide-react";
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
    name: "Fetiya Mohammed",
    src: "/testimonials/3.webp",
    content:
      "We've tried several suppliers before, but these guys are reliable. Quality is consistent and no surprises with deliveries.",
  },
  {
    name: "Abel Hailemariam",
    src: "/testimonials/1.webp",
    content:
      "Good quality products and they know what they're doing. Fair prices every time.",
  },
  {
    name: "Selam Tesfaye",
    src: "/testimonials/4.webp",
    content:
      "Professional packaging and handling. Had one small issue last year and they fixed it immediately.",
  },
  {
    name: "Yared Mengistu",
    src: "/testimonials/5.webp",
    content:
      "Fast delivery, even for urgent orders. They've saved us from production delays more than once.",
  },
  {
    name: "Hanna Tsegaye",
    src: "/testimonials/6.webp",
    content:
      "Their team actually understands our needs and gives good technical advice. It's not just about making a sale.",
  },
  {
    name: "Samuel Assefa",
    src: "/testimonials/7.webp",
    content:
      "Been with them for three years now. Consistent quality and the sales team keeps us informed about any changes. Solid supplier.",
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
            Rated 5 stars by our clients
          </div>
          <h2 className="text-center text-3xl font-semibold lg:text-4xl text-white">
            Meet our happy clients
          </h2>
          {/* <p className="text-center lg:text-lg text-white">
            Join a global network of thought leaders, product developers,
          </p> */}
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
                            src={testimonial.src}
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
