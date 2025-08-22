"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
      staggerChildren: 0.12,
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

export default function About8() {
  return (
    <div className="mx-auto max-w-7xl">
      <section className="py-10">
        {/* Hero Section */}
        <section className="flex justify-center items-center py-10 md:py-12 lg:py-15">
          <motion.div
            className="max-w-5xl text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="mt-4 max-w-2xl text-2xl text-muted-foreground md:text-3xl mx-auto">
              We&#39;re dedicated to delivering reliable chemical and equipment
              solutions that drive agriculture, science, and industry forward.
            </p>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="flex justify-center items-center border-y py-5">
          <div className="max-w-5xl text-center">
            <motion.h2
              className="font-mono text-sm font-semibold tracking-widest text-accent-foreground"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              Our Impact
            </motion.h2>
            <motion.div
              className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={scaleIn}>
                <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
                  15+
                </h3>
                <p className="mt-1 font-medium text-muted-foreground">
                  Industries Served
                </p>
              </motion.div>
              <motion.div variants={scaleIn}>
                <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
                  200+
                </h3>
                <p className="mt-1 font-medium text-muted-foreground">
                  Clients Nationwide
                </p>
              </motion.div>
              <motion.div variants={scaleIn}>
                <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
                  5+
                </h3>
                <p className="mt-1 font-medium text-muted-foreground">
                  Years of Expertise
                </p>
              </motion.div>
              <motion.div variants={scaleIn}>
                <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
                  100%
                </h3>
                <p className="mt-1 font-medium text-muted-foreground">
                  On-time Delivery Rate
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="container max-w-5xl py-10 md:py-12 lg:py-15">
          <motion.div
            className="max-w-2xl space-y-5 md:space-y-8 lg:space-y-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p className="text-lg" variants={fadeInUp}>
              Access to high-quality chemicals and equipment shouldn&#39;t be a
              bottleneck for progress. In Ethiopia, reliable supply chains for
              agricultural, industrial, and laboratory sectors are still
              catching up to growing demand. That&#39;s why we exist.
            </motion.p>

            <motion.h2
              className="text-2xl font-medium tracking-tight md:text-3xl"
              variants={fadeInUp}
            >
              We&#39;re not just importers. We&#39;re enablers of progress.
            </motion.h2>
            <motion.p className="text-lg" variants={fadeInUp}>
              Founded with a vision to bridge the supply gap, we&#39;ve built
              long-standing partnerships with trusted international
              manufacturers and local institutions. Whether it&#39;s fertilizer
              for a cooperative, reagents for a university lab, or machinery for
              a factory, we source and deliver with precision.
            </motion.p>
          </motion.div>
        </section>

        {/* Image Grid Section */}
        <section className="my-5 pb-10 md:my-8 md:pb-12 lg:my-12 lg:pb-15">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Carousel
              opts={{
                align: "start",
              }}
            >
              <CarouselContent className="-ml-4">
                <CarouselItem className="basis-[80%] lg:basis-1/3 xl:basis-[40%]">
                  <div className="relative h-[400px] lg:h-[500px] xl:h-[600px]">
                    <Image
                      src="/truck-full-of-imported-chemicals.webp"
                      alt="Warehouse facility"
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-[80%] lg:basis-1/3 xl:basis-[40%]">
                  <div className="relative h-[400px] lg:h-[500px] xl:h-[600px]">
                    <Image
                      src="/jemachem-warehouse.webp"
                      alt="Modern lab setup"
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-[80%] lg:basis-1/3 xl:basis-[40%]">
                  <div className="relative h-[400px] lg:h-[500px] xl:h-[600px]">
                    <Image
                      src="/agro-field.webp"
                      alt="Agricultural site with chemical spraying"
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </motion.div>
        </section>

        {/* Vision / Infrastructure Section */}
        <section className="container">
          <div className="mr-0 ml-auto max-w-2xl space-y-5 md:space-y-8 lg:space-y-10">
            <p className="text-lg">
              Our distribution network covers key industrial and agricultural
              hubs across Ethiopia. From Addis Ababa to Hawassa, Bahir Dar to
              Dire Dawa — we make sure chemicals and equipment arrive safely, on
              time, and fully compliant.
            </p>

            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
              Locally rooted. Globally connected.
            </h2>

            <p className="text-lg">
              Under the leadership of our General Manager,{" "}
              <strong>Aymen Muhaba</strong>, our team brings together technical
              expertise, international sourcing knowledge, and a strong
              understanding of local industry needs. We&#39;re here to empower
              Ethiopian businesses to thrive.
            </p>
          </div>
        </section>
      </section>
    </div>
  );
}
