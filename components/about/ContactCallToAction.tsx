"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Animation variants
// Removed unused variant 'fadeInUp'

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

interface Cta11Props {
  heading?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  buttonText?: string;
  buttonHref?: string;
}

const Cta11 = ({
  heading = "Ready to Partner with Us?",
  description = "Connect with Jemachem Trading for premium chemical solutions.\nOur expert team is ready to meet your industry needs.",
  imageSrc = "/jemachem-company-logo.webp",
  imageAlt = "Company logo",
  buttonText = "Contact Us",
  buttonHref = "/contact",
}: Cta11Props) => {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          className="bg-[#0c0c0c] flex w-full flex-col gap-8 overflow-hidden rounded-lg p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-12 mx-auto max-w-7xl"
          style={{ backgroundColor: "#0c0c0c" }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="flex-1 text-left" variants={fadeInLeft}>
            <h3 className="mb-3 text-2xl font-semibold text-white md:mb-4 md:text-4xl lg:mb-6 text-left">
              {heading}
            </h3>
            <p className="text-gray-300 max-w-xl lg:text-lg text-left mb-6">
              {description}
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                className="bg-orange-500 text-gray-100 text-1xl hover:bg-orange-600 font-semibold px-6 py-6 rounded-full shadow-md transition"
              >
                <a href={buttonHref}>{buttonText}</a>
              </Button>
              
              {/* Brochure Download Button - Same styling as Contact Us button */}
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#fe9b2b] via-[#fdc57e] to-[#6f4ba4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px]">
                  <div className="w-full h-full rounded-full bg-black/80 group-hover:bg-black/90 transition-colors duration-300"></div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="relative border-gray-200 text-white hover:text-white font-semibold px-6 py-6 rounded-full shadow-sm transition-all duration-300 bg-transparent hover:bg-transparent z-10 group-hover:border-transparent border"
                >
                  <a 
                    href="/Jemachem Product Brochure.pdf" 
                    download="Jemachem-Product-Brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                     Get Brochure
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeInRight}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={170}
              height={60}
              className="w-[170px] h-auto"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { Cta11 };
