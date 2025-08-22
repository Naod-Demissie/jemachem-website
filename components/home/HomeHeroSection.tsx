"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-20 dark relative flex h-svh max-h-[1400px] w-full overflow-hidden bg-[url('/hero-bg.webp')] bg-cover bg-center bg-no-repeat font-sans after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:bg-black/80 after:content-[''] md:h-svh">
      <div className="relative z-30 m-auto flex max-w-[46.25rem] flex-col items-center justify-center gap-6 px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2  text-white text-sm font-medium"
        >
          <span>✨</span>
          <span>High Quality, Fair Price</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-white text-center font-sans text-3xl leading-tight md:text-3xl lg:text-4xl xl:text-5xl max-w-4xl font-extrabold"
        >
          Your <span className="italic text-orange-500">trusted</span> Chemical
          Import Partner in Ethiopia.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          className="text-white text-[18px] text-center font-thin font-sans"
        >
          Delivering high-quality chemicals for agriculture, industry, and
          laboratories with unmatched reliability and expert care.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="flex gap-4 mt-6"
        >
          <Button
            asChild
            className="bg-orange-500 text-gray-100 text-1xl hover:bg-orange-600 font-semibold px-6 py-6 rounded-full shadow-md transition"
          >
            <Link href="/products/">Explore Products</Link>
          </Button>
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#fe9b2b] via-[#fdc57e] to-[#6f4ba4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px]">
              <div className="w-full h-full rounded-full bg-black/80 group-hover:bg-black/90 transition-colors duration-300"></div>
            </div>
            <Button
              asChild
              variant="outline"
              className="relative border-gray-200 text-white hover:text-white font-semibold px-6 py-6 rounded-full shadow-sm transition-all duration-300 bg-transparent hover:bg-transparent z-10 group-hover:border-transparent border"
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/noise.png')] bg-repeat opacity-30" />
    </section>
  );
};

export { Hero };
