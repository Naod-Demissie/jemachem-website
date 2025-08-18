"use client";

import { ChevronRight, Factory, Leaf, TestTube } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="dark py-16 sm:py-20 lg:py-28 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className=" mb-3 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 text-white text-sm font-medium"
        >
          <p className="text-sm font-normal text-muted-foreground">PRODUCTS</p>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="mb-4 text-3xl text-white sm:text-4xl font-semibold"
        >
          Our Core Chemical Solutions
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.6 }}
          className="text-white max-w-2xl mx-auto px-4"
        >
          Explore our wide range of trusted industrial, agricultural, and
          laboratory chemicals—imported with precision and delivered with care.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.9 }}
          className="grid gap-6 pt-10 sm:pt-14 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto"
        >
          {/* Industrial Chemicals Card */}
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 1.2 }}
            href="/products/industrial"
            className="group relative overflow-hidden rounded-xl shadow-lg"
          >
            <Image
              src="/industrial-chemicals.jpg"
              alt="Industrial Chemicals"
              width={400}
              height={450}
              className="h-full max-h-[450px] w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-xl transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between text-white">
              <span className="ml-auto flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 sm:px-4 py-2 sm:py-2.5 text-sm font-semibold backdrop-blur-sm">
                <Factory className="h-4 w-4 sm:h-5 sm:w-5" />
                Industrial Grade
              </span>
              <div className="flex flex-col gap-3 sm:gap-4 text-left">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                  Powering manufacturing and production efficiency.
                </h4>
                <p className="flex items-center gap-1 font-medium text-sm sm:text-base">
                  Explore all products
                  <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </p>
              </div>
            </div>
          </motion.a>

          {/* Agrochemicals Card */}
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 1.4 }}
            href="/products/agro"
            className="group relative overflow-hidden rounded-xl shadow-lg"
          >
            <Image
              src="/agro-chemicals.jpg"
              alt="Agrochemicals"
              width={400}
              height={450}
              className="h-full max-h-[450px] w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-xl transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between text-white">
              <span className="ml-auto flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 sm:px-4 py-2 sm:py-2.5 text-sm font-semibold backdrop-blur-sm">
                <Leaf className="h-4 w-4 sm:h-5 sm:w-5" />
                Farm-Ready
              </span>
              <div className="flex flex-col gap-3 sm:gap-4 text-left">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                  Maximize yield with precision agrochemicals.
                </h4>
                <p className="flex items-center gap-1 font-medium text-sm sm:text-base">
                  Explore all products
                  <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </p>
              </div>
            </div>
          </motion.a>

          {/* Laboratory Chemicals Card */}
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 1.6 }}
            href="/products/laboratory"
            className="group relative overflow-hidden rounded-xl shadow-lg"
          >
            <Image
              src="/laboratory-chemicals.png"
              alt="Laboratory Chemicals"
              width={400}
              height={450}
              className="h-full max-h-[450px] w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-xl transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between text-white">
              <span className="ml-auto flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 sm:px-4 py-2 sm:py-2.5 text-sm font-semibold backdrop-blur-sm">
                <TestTube className="h-4 w-4 sm:h-5 sm:w-5" />
                Lab Certified
              </span>
              <div className="flex flex-col gap-3 sm:gap-4 text-left">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                  High-purity reagents for scientific breakthroughs.
                </h4>
                <p className="flex items-center gap-1 font-medium text-sm sm:text-base">
                  Explore all products
                  <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </p>
              </div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export { Products };
