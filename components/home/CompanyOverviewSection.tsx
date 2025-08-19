"use client";

import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PlusPatternBackground from "@/components/ui/PlusPatternBackground";

interface AboutProps {
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}

const defaultAchievements = [
  { label: "Clients Served", value: "200+" },
  { label: "Industries Covered", value: "15+" },
  { label: "On-time Deliveries", value: "100%" },
  { label: "Years of Experience", value: "5+" },
];

const About = ({
  achievementsTitle = "Trusted by Ethiopia's Leading Sectors",
  achievementsDescription = "Delivering high-quality industrial, agricultural, and laboratory chemicals to meet the demands of science, farming, and manufacturing across Ethiopia.",
  achievements = defaultAchievements,
}: AboutProps = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <PlusPatternBackground />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* About Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className=" mb-3 inline-flex items-start gap-2 bg-black/10 backdrop-blur-sm border border-black/20 rounded-full px-2 text-black text-sm font-medium"
        >
          <p className="text-sm font-normal text-muted-foreground">ABOUT US</p>
        </motion.div>

        {/* Why We Began Section */}
        <div className="mb-20 grid gap-14 lg:grid-cols-4 xl:grid-cols-4">
          {/* First: Text then Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="md:col-span-2 xl:col-span-2"
          >
            <h2 className="mb-8 text-4xl font-bold">What set us apart</h2>
            <p className="text-lg font-light leading-relaxed text-muted-foreground">
              Jemachem Trading is a premier chemical importer company with a
              proven track record of sourcing and distributing high-quality
              chemicals from around the world. Our commitment to customer
              satisfaction, safety, and compliance sets us apart as a trusted
              partner in the industry.
              <br />
              <br />
              At Jemachem Trading, we understand the importance of delivering
              top-notch products and services to our clients. Our team is
              dedicated to providing best-in-class chemicals and ensuring that
              our customers receive their orders in a timely and efficient
              manner. With our expertise in managing logistics and supply chain,
              we guarantee a seamless experience for our clients.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
            className="md:col-span-2"
          >
            <img
              src="/jemachem-office-1.webp"
              alt="Our Warehouse"
              className="w-full h-74 md:h-96 rounded-xl object-cover"
            />
          </motion.div>
          {/* Second: Image then Paragraph (no h1) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
            className="md:col-span-2"
          >
            <img
              src="/jemachem-office-2.webp"
              alt="Our Warehouse"
              className="w-full h-72 md:h-96 rounded-xl object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="md:col-span-2 xl:col-span-2"
          >
            <p className="text-lg font-light leading-relaxed text-muted-foreground">
              In addition to our exceptional products and services, we offer
              technical support and expertise to help our clients utilize the
              chemicals effectively and safely. We are committed to going above
              and beyond to meet all of our clients' chemical needs.
              <br />
              <br />
              With a focus on quality, reliability, and customer satisfaction,
              Jemachem Trading is your trusted partner for all your chemical
              importation needs. Thank you for choosing us as your preferred
              chemical supplier.
            </p>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.9 }}
          className="mx-auto max-w-5xl"
        >
          <div className="rounded-2xl bg-gray-300/50 p-8 md:p-12 lg:p-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 1.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-4">
                {achievementsTitle}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                {achievementsDescription}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
              {achievements.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{
                    duration: 1.0,
                    ease: "easeOut",
                    delay: 1.5 + idx * 0.15,
                  }}
                  className="flex flex-col items-center justify-center text-center"
                  key={item.label + idx}
                >
                  <span className="text-3xl font-bold text-primary md:text-4xl lg:text-5xl mb-2">
                    {item.value}
                  </span>
                  <p className="text-sm font-medium text-muted-foreground md:text-base">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
