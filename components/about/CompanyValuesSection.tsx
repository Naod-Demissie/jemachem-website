"use client";
import { Timer, Zap, ZoomIn } from "lucide-react";
import { motion, Variants } from "framer-motion";

// Animation variants - smoother and less jerky
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1],
      type: "spring",
      stiffness: 100,
      damping: 20
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardAnimation: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1],
      type: "spring",
      stiffness: 80,
      damping: 25
    },
  },
};

const Feature16 = () => {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14 lg:mb-20"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="mb-4 inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 text-white text-sm font-medium">
            <p className="text-sm font-normal text-white">OUR VALUES</p>
          </div>
          <h2 className="text-3xl font-medium text-white lg:text-4xl">
            Why Choose Us?
          </h2>
        </motion.div>
        <motion.div
          className="flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="w-full max-w-[400px] h-[350px] rounded-lg bg-[#0c0c0c] p-6 flex flex-col hover:scale-101 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 ease-out cursor-pointer"
            variants={cardAnimation}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <span className="mb-6 flex size-12 items-center justify-center rounded-full bg-orange-500">
              <Timer className="size-6 text-white" />
            </span>
            <h3 className="mb-4 text-xl font-medium text-white text-left">
              On-Time Delivery
            </h3>
            <p className="leading-7 text-gray-300 text-left flex-grow">
              Our coordinated logistics and supply chain partnerships ensure 
              prompt delivery of your chemicals—every time, without exception.
            </p>
          </motion.div>
          <motion.div
            className="w-full max-w-[400px] h-[350px] rounded-lg bg-[#0c0c0c] p-6 flex flex-col hover:scale-101 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 ease-out cursor-pointer"
            variants={cardAnimation}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <span className="mb-6 flex size-12 items-center justify-center rounded-full bg-orange-500">
              <ZoomIn className="size-6 text-white" />
            </span>
            <h3 className="mb-4 text-xl font-medium text-white text-left">
              Uncompromised Quality
            </h3>
            <p className="leading-7 text-gray-300 text-left flex-grow">
              All products undergo rigorous quality control and meet international 
              standards. We deliver consistent performance and purity you can trust.
            </p>
          </motion.div>
          <motion.div
            className="w-full max-w-[400px] h-[350px] rounded-lg bg-[#0c0c0c] p-6 flex flex-col hover:scale-101 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 ease-out cursor-pointer"
            variants={cardAnimation}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <span className="mb-6 flex size-12 items-center justify-center rounded-full bg-orange-500">
              <Zap className="size-6 text-white" />
            </span>
            <h3 className="mb-4 text-xl font-medium text-white text-left">
              Industry Leader
            </h3>
            <p className="leading-7 text-gray-300 text-left flex-grow">
              With years of experience and deep industry knowledge, we lead 
              the way in chemical sourcing, quality standards, and customer service excellence.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { Feature16 };
