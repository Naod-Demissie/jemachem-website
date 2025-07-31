"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const teamMembers = [
  {
    src: "/teams/4.jpeg",
    title: "Aymen Muhaba",
    designation: "General Manager",
  },
  {
    src: "/teams/1.jpeg",
    title: "Abel Mekuria",
    designation: "Operations Manager",
  },
  {
    src: "/teams/3.jpeg",
    title: "Sara Teshome",
    designation: "Logistics Lead",
  },
  {
    src: "/teams/2.jpeg",
    title: "Lidya Bekele",
    designation: "Quality Control",
  },
];

const Gallery27 = () => {
  return (
    <section className="py-32 bg-black text-white">
      <div className="container max-w-7xl mx-auto">
        <div className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 text-white text-sm font-medium">
          <p className="text-sm font-normal text-white">OUR TEAM</p>
        </div>
        <h1 className="font-calSans text-5xl text-white">The Team Behind Our Success</h1>
        <p className="mt-3 max-w-xl text-gray-300 text-center mx-auto">
          These are the people handling the day-to-day—coordinating imports,
          tracking shipments, talking to suppliers, and making sure everything
          runs smoothly.
        </p>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative w-full pt-15"
        >
          <div className="absolute top-0 right-0 flex h-12 w-20 items-center justify-end gap-2">
            <CarouselPrevious
              variant="default"
              className="absolute left-0 rounded-none"
            />
            <CarouselNext
              variant="default"
              className="absolute right-0 rounded-none"
            />
          </div>
          <CarouselContent>
            {teamMembers.map((member, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <div className="group">
                  <img
                    src={member.src}
                    alt={member.title}
                    className="h-92 w-full object-cover transition-all duration-300 group-hover:translate-y-[-10px]"
                  />
                  <h3 className="mt-4 text-2xl font-semibold">
                    {member.title}
                  </h3>
                  <p className="text-muted-foreground">{member.designation}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Gallery27 };
export default Gallery27;
