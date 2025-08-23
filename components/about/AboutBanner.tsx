"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Animation variants (subtle, no layout impact)
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

export const AboutBanner = () => {
  return (
    <section className="relative min-h-[400px] w-full">
      <div className="absolute inset-0">
        <Image
          src="/jemachem-trading-banner-image.webp"
          alt="Jemachem Trading  Banner Image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-80" />
      </div>
      <motion.div
        className="relative z-10 flex h-full items-center justify-center pt-40 text-center text-white"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2xl">
          <motion.div className="flex justify-center mb-3" variants={fadeInUp}>
            <div className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 text-white text-sm font-medium">
              <p className="text-sm font-normal text-white">ABOUT US</p>
            </div>
          </motion.div>
          <motion.h1
            className="text-4xl font-semibold tracking-tight md:text-3xl lg:text-4xl"
            variants={fadeInUp}
          >
            Powering Ethiopia&#39;s Growth
            <br />
            One Chemical at a Time.
          </motion.h1>
        </div>
      </motion.div>
    </section>
  );
};
