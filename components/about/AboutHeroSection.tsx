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
              Jemachem Trading is a premier chemical importer company with a
              proven track record of sourcing and distributing high-quality
              chemicals worldwide.
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
                  8+
                </h3>
                <p className="mt-1 font-medium text-muted-foreground">
                  Chemical Categories
                </p>
              </motion.div>
              <motion.div variants={scaleIn}>
                <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
                  200+
                </h3>
                <p className="mt-1 font-medium text-muted-foreground">
                  Chemical Products
                </p>
              </motion.div>
              <motion.div variants={scaleIn}>
                <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
                  100%
                </h3>
                <p className="mt-1 font-medium text-muted-foreground">
                  Quality Assurance
                </p>
              </motion.div>
              <motion.div variants={scaleIn}>
                <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
                  24/7
                </h3>
                <p className="mt-1 font-medium text-muted-foreground">
                  Technical Support
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
              At Jemachem Trading, we understand the importance of delivering
              top-notch products and services to our clients. Our team is
              dedicated to providing best-in-class chemicals and ensuring that
              our customers receive their orders in a timely and efficient
              manner. With our expertise in managing logistics and supply chain,
              we guarantee a seamless experience for our clients.
            </motion.p>

            <motion.h2
              className="text-2xl font-medium tracking-tight md:text-3xl"
              variants={fadeInUp}
            >
              We're not just importers. We're enablers of progress.
            </motion.h2>
            <motion.p className="text-lg" variants={fadeInUp}>
              In addition to our exceptional products and services, we offer
              technical support and expertise to help our clients utilize the
              chemicals effectively and safely. We are committed to going above
              and beyond to meet all of our clients' chemical needs, serving
              industries from agriculture and food processing to textiles and
              water treatment.
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
                      src="/jemachem-imported-chemical-2.webp"
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
              Our comprehensive product portfolio spans eight major categories
              including Detergent and Cosmetics, Food and Beverage, Paint and
              Pigments, Plastic and Foam, Tannery and Shoes, Laboratory
              Chemicals, Textile Chemicals, and Water Treatment Chemicals. From
              Addis Ababa to Hawassa, Bahir Dar to Dire Dawa — we make sure
              chemicals and equipment arrive safely, on time, and fully
              compliant.
            </p>

            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
              Locally rooted. Globally connected.
            </h2>

            <p className="text-lg">
              With a focus on quality, reliability, and customer satisfaction,
              Jemachem Trading is your trusted partner for all your chemical
              importation needs. Our distribution network covers key industrial
              and agricultural hubs across Ethiopia, ensuring that businesses
              have access to the chemicals they need to thrive and grow.
            </p>
          </div>
        </section>
      </section>
    </div>
  );
}
