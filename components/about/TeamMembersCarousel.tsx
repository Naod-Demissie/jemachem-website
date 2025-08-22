"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const teamMembers = [
  {
    src: "/teams/aymen-muhaba-general-manager-jemachem-trading-chemicals.webp",
    title: "Aymen Muhaba",
    designation: "General Manager",
    alt: "Aymen Muhaba - General Manager at Jemachem Trading Chemical Import Company",
  },
  {
    src: "/teams/sitra-muhaba-operational-manager-jemachem-trading-chemicals.webp",
    title: "Sitra Muhaba",
    designation: "Operational Manager",
    alt: "Sitra Muhaba - Operational Manager overseeing chemical imports at Jemachem Trading",
  },
  {
    src: "/teams/abdulhakim-siraj-marketing-manager-jemachem-trading-chemicals.webp",
    title: "Abdulhakim Siraj",
    designation: "Marketing Manager",
    alt: "Abdulhakim Siraj - Marketing Manager for chemical distribution at Jemachem Trading",
  },
  {
    src: "/teams/samuel-assefa-logistics-manager-jemachem-trading-chemicals.webp",
    title: "Samuel Assefa",
    designation: "Logistics Manager",
    alt: "Samuel Assefa - Logistics Manager handling chemical supply chain at Jemachem Trading",
  },
];

const Gallery27 = () => {
  return (
    <section className="py-32 bg-black text-white">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 text-white text-sm font-medium"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-sm font-normal text-white">OUR TEAM</p>
        </motion.div>
        <motion.h1
          className="font-calSans text-5xl text-white"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          The Team Behind Our Success
        </motion.h1>
        <motion.p
          className="mt-3 max-w-xl text-gray-300 text-center mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Our team handles all the details behind successful chemical sourcing.
          <br />
          We work with suppliers, manage shipments, and keep everything running smoothly.
        </motion.p>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
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
                  <motion.div
                    className="group"
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <div className="relative h-92 w-full">
                      <Image
                        src={member.src}
                        alt={member.alt}
                        fill
                        className="object-cover transition-all duration-300 group-hover:translate-y-[-10px]"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold">
                      {member.title}
                    </h3>
                    <p className="text-muted-foreground">{member.designation}</p>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export { Gallery27 };
export default Gallery27;
