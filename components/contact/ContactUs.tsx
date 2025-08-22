"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PhoneInput } from "@/components/ui/phone-input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import {
  AlertCircle,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  ShoppingCart,
  MessageCircle,
  HelpCircle,
} from "lucide-react";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbygjot0aGcbfb_vCmxiK6sqFnhKUH20rmwg9uqR8gHZtOruGjCwuark-YBmpSM-XV5x/exec";

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

const contactSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" })
    .max(100, { message: "First name is too long" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" })
    .max(100, { message: "Last name is too long" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phone: z
    .string()
    .min(7, { message: "Please enter a valid phone number" })
    .max(30, { message: "Phone number is too long" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(2000, { message: "Message is too long" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactUs = () => {
  const [copied, setCopied] = useState<{ [key: string]: boolean }>({});
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitStatus("idle");
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(values),
      });

      // With no-cors, the response is opaque; assume success if no network error thrown
      setSubmitStatus("success");
      reset();
    } catch (_err) {
      setSubmitStatus("error");
    }
  };

  const handleCopy = async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied((prev) => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopied((prev) => ({ ...prev, [key]: false }));
      }, 1500);
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  return (
    <>
      {/* Banner Section */}
      <section className="relative min-h-[400px] w-full">
        <div className="absolute inset-0">
          <Image
            src="/contact-us-banner.jpg"
            alt="Contact Us Banner"
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
          <div className="max-w-xl">
            <motion.div
              className="flex justify-center mb-3"
              variants={fadeInUp}
            >
              <div className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 text-white text-sm font-medium">
                <p className="text-sm font-normal text-white">CONTACT US</p>
              </div>
            </motion.div>
            <motion.p
              className="text-4xl font-medium md:text-5xl"
              variants={fadeInUp}
            >
              Get in touch with us
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <div
        className="py-22"
        style={{
          backgroundImage: "url(/static/images/testimonial-background.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50%",
          backgroundSize: "auto",
        }}
      >
        <div className="container mx-auto max-w-7xl">
          {/* Three Info Cards */}
          <div className="relative rounded-3xl p-8 md:p-12">
            <motion.div
              className="grid gap-4 md:grid-cols-3 md:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                {
                  title: "Sales",
                  desc: "Interested in our chemical products? Contact our sales team for pricing and availability.",
                  icon: <ShoppingCart className="size-6 text-white" />,
                },
                {
                  title: "Support",
                  desc: "Need technical specifications, product information, or assistance with your order? Our experts are here to help.",
                  icon: <HelpCircle className="size-6 text-white" />,
                },
                {
                  title: "General Inquiries",
                  desc: "For partnerships, bulk orders, or general questions, reach out to us.",
                  icon: <MessageCircle className="size-6 text-white" />,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex flex-col items-center text-center gap-4 rounded-2xl border border-[#E6ECFF] bg-white/70 p-6 shadow-sm backdrop-blur-sm"
                >
                  <div className="flex-shrink-0 bg-orange-500 rounded-full p-3">
                    {item.icon}
                  </div>
                  <div>
                    <h2 className="mb-4 text-xl font-medium md:text-2xl">
                      {item.title}
                    </h2>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <section className="bg-black py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <motion.h1
                className="mb-4 text-3xl text-white font-bold tracking-tight sm:text-4xl md:text-5xl"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                Contact Us
              </motion.h1>
              <motion.p
                className="text-white mx-auto max-w-2xl text-lg"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                Ready to source quality chemicals for your business? Our team is
                here to help you find the right solutions. Reach out and
                let&#39;s discuss your chemical supply needs.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="mt-24 flex items-center justify-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-7xl"
          >
            <Card
              className="w-full max-w-7xl border-none text-white rounded-4xl mx-auto"
              style={{ backgroundColor: "#0c0c0c" }}
            >
              <CardContent className="lg:px-18 py-12 lg:py-24">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-end">
                  {/* Contact Info */}
                  <motion.div
                    className="space-y-8 text-left"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <motion.div variants={fadeIn}>
                      <Image
                        src="/jemachem-company-logo.webp"
                        alt="JemaChem Logo"
                        width={170}
                        height={60}
                        className="w-[170px] h-auto"
                        priority
                      />
                    </motion.div>
                    <motion.div className="space-y-6" variants={fadeInUp}>
                      {/* Email */}
                      <div className="flex items-start gap-4">
                        <div className="bg-white/10 backdrop-blur-sm flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full hover:bg-white/20 transition">
                          <Mail className="size-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="mb-1 flex items-center gap-2">
                            <h3 className="font-semibold text-white/90">
                              Email
                            </h3>
                          </div>
                          <Tooltip {...(copied.email ? { open: true } : {})}>
                            <TooltipTrigger asChild>
                              <button
                                type="button"
                                onClick={() =>
                                  handleCopy(
                                    "email",
                                    "jemachemtrading@gmail.com"
                                  )
                                }
                                className="text-white/70 underline hover:text-white cursor-pointer"
                              >
                                jemachemtrading@gmail.com
                              </button>
                            </TooltipTrigger>
                            <TooltipContent side="top">
                              {copied.email ? "Copied!" : "Click to copy"}
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start gap-4">
                        <div className="bg-white/10 backdrop-blur-sm flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full hover:bg-white/20 transition">
                          <Phone className="size-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="mb-1 flex items-center gap-2">
                            <h3 className="font-semibold text-white/90">
                              Phone
                            </h3>
                          </div>
                          <div className="text-white/70 text-sm">
                            <Tooltip {...(copied.phone1 ? { open: true } : {})}>
                              <TooltipTrigger asChild>
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleCopy("phone1", "+251913119689")
                                  }
                                  className="underline hover:text-white cursor-pointer"
                                >
                                  +251913119689
                                </button>
                              </TooltipTrigger>
                              <TooltipContent side="top">
                                {copied.phone1 ? "Copied!" : "Click to copy"}
                              </TooltipContent>
                            </Tooltip>
                            <br />
                            <Tooltip {...(copied.phone2 ? { open: true } : {})}>
                              <TooltipTrigger asChild>
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleCopy("phone2", "+251975818880")
                                  }
                                  className="underline hover:text-white cursor-pointer"
                                >
                                  +251975818880
                                </button>
                              </TooltipTrigger>
                              <TooltipContent side="top">
                                {copied.phone2 ? "Copied!" : "Click to copy"}
                              </TooltipContent>
                            </Tooltip>
                            <br />
                            <Tooltip {...(copied.phone3 ? { open: true } : {})}>
                              <TooltipTrigger asChild>
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleCopy("phone3", "+251988177960")
                                  }
                                  className="underline hover:text-white cursor-pointer"
                                >
                                  +251988177960
                                </button>
                              </TooltipTrigger>
                              <TooltipContent side="top">
                                {copied.phone3 ? "Copied!" : "Click to copy"}
                              </TooltipContent>
                            </Tooltip>
                            <br />
                            <Tooltip {...(copied.phone4 ? { open: true } : {})}>
                              <TooltipTrigger asChild>
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleCopy("phone4", "+251973939090")
                                  }
                                  className="underline hover:text-white cursor-pointer"
                                >
                                  +251973939090
                                </button>
                              </TooltipTrigger>
                              <TooltipContent side="top">
                                {copied.phone4 ? "Copied!" : "Click to copy"}
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="flex items-start gap-4">
                        <div className="bg-white/10 backdrop-blur-sm flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full hover:bg-white/20 transition">
                          <MapPin className="size-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="mb-1 flex items-center gap-2">
                            <h3 className="font-semibold text-white/90">
                              Address
                            </h3>
                          </div>
                          <div className="text-white/70 text-sm">
                            <div>Aynalem Beze Bldg, 2nd Fl, Office No. 401</div>
                            <div>Fitawrari Damtew St, Kirkos Sub-City</div>
                            <div>Addis Ababa, Ethiopia</div>
                          </div>
                        </div>
                      </div>

                      {/* Hours */}
                      <div className="flex items-start gap-4">
                        <div className="bg-white/10 backdrop-blur-sm flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full hover:bg-white/20 transition">
                          <Clock className="size-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="mb-1 flex items-center gap-2">
                            <h3 className="font-semibold text-white/90">
                              Hours
                            </h3>
                          </div>
                          <div className="text-white/70 text-sm">
                            Mon–Fri, 8:30AM–5:30PM EAT
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Form */}
                  <motion.form
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstname" className="text-white">
                          First Name *
                        </Label>
                        <Input
                          id="firstname"
                          className="bg-[#141416] border-[#272729] text-white placeholder:text-gray-400"
                          {...register("firstName")}
                        />
                        {errors.firstName && (
                          <p className="text-red-400 text-sm">
                            {errors.firstName.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastname" className="text-white">
                          Last Name *
                        </Label>
                        <Input
                          id="lastname"
                          className="bg-[#141416] border-[#272729] text-white placeholder:text-gray-400"
                          {...register("lastName")}
                        />
                        {errors.lastName && (
                          <p className="text-red-400 text-sm">
                            {errors.lastName.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email Address *
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        className="bg-[#141416] border-[#272729] text-white placeholder:text-gray-400"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">
                        Phone Number *
                      </Label>
                      <PhoneInput
                        id="phone"
                        defaultCountry="ET"
                        className="bg-[#141416] border-[#272729] text-white placeholder:text-gray-400"
                        {...register("phone")}
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-sm">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        rows={5}
                        className="bg-[#141416] border-[#272729] text-white placeholder:text-gray-400"
                        {...register("message")}
                      />
                      {errors.message && (
                        <p className="text-red-400 text-sm">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {submitStatus === "success" && (
                      <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-950">
                        <CheckCircle className="size-6 text-green-600 dark:text-green-400" />
                        <span className="text-sm font-medium text-green-800 dark:text-green-200">
                          Message sent successfully!
                        </span>
                      </div>
                    )}
                    {submitStatus === "error" && (
                      <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-950">
                        <AlertCircle className="size-6 text-red-600 dark:text-red-400" />
                        <span className="text-sm font-medium text-red-800 dark:text-red-200">
                          Something went wrong. Please try again.
                        </span>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange-500 text-gray-100 text-1xl hover:bg-orange-600 font-semibold px-6 py-5 rounded-full shadow-md transition"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="size-6 animate-spin rounded-full border-2 border-current border-t-transparent" />
                          Sending...
                        </div>
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </motion.form>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <motion.div
        className="w-full"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.3063218156344!2d38.74478347401365!3d8.994701889526934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b851721f92e15%3A0x157d3f29df464ef7!2sJEMACHEM%20TRADING%20Plc!5e1!3m2!1sen!2set!4v1755502640690!5m2!1sen!2set"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Jemachem Location"
        />
      </motion.div>
    </>
  );
};

export { ContactUs };
