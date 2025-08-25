"use client";

import { AlertCircle, CheckCircle, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PhoneInput } from "@/components/ui/phone-input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: string | React.ReactNode;
  href: string;
  badge?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: <Mail className="size-6 invert" />,
    title: "Email",
    description: "Get a response within 24 hours",
    value: "jemachemtrading@gmail.com",
    href: "mailto:jemachemtrading@gmail.com",
    badge: "Recommended",
  },
  {
    icon: <Phone className="size-6 invert" />,
    title: "Phone",
    description: "Mon-Sat, 9AM-6PM",
    value: (
      <>
        <span>+251913119689</span>
        <br />
        <span>+251975818880</span>
        <br />
        <span>+251988177960</span>
        <br />
        <span>+251973939090</span>
      </>
    ),
    href: "tel:+251913119689",
  },
  {
    icon: <MapPin className="size-6 invert" />,
    title: "Office",
    description: "Schedule an in-person meeting",
    value: (
      <>
        <span>Aynalem Beze Bldg, 2nd Fl, Office No. 216</span>
        <br />
        <span>Bulgaria Mazoria, Kirkos Sub-City</span>
        <br />
        <span>Addis Ababa, Ethiopia</span>
      </>
    ),
    href: "#",
  },
];

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbygjot0aGcbfb_vCmxiK6sqFnhKUH20rmwg9uqR8gHZtOruGjCwuark-YBmpSM-XV5x/exec";

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

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [copied, setCopied] = useState<{ [key: string]: boolean }>({});

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
      // Send to Google Apps Script (do not change to avoid breaking Sheets logging)
      const appsScriptPromise = fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(values),
      });

      // Also notify our API to send an email via Nodemailer
      const emailPromise = fetch("/api/contact-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }).catch(() => undefined);

      await Promise.allSettled([appsScriptPromise, emailPromise]);

      // With no-cors, the response is opaque; assume success if no network error thrown
      setSubmitStatus("success");
      reset();
    } catch {
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
      <section id="contact" className="bg-black py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-center mb-3">
            <div className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 text-white text-sm font-medium">
              <p className="text-sm font-normal text-white">CONTACT US</p>
            </div>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h1 className="mb-4 text-3xl text-white font-bold tracking-tight sm:text-4xl md:text-5xl">
                Contact Us
              </h1>
              <p className="text-white mx-auto max-w-2xl text-lg">
                Ready to source quality chemicals for your business? Our team is here to help 
                you find the right solutions. Let&#39;s discuss your needs.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Information */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-none"
                    style={{ backgroundColor: "#0c0c0c" }}
                  >
                    <CardContent>
                      <div className="flex items-start gap-4">
                        <div className="bg-white/10 backdrop-blur-sm flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full hover:bg-white/20 transition">
                          {info.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="mb-1 flex items-center gap-2">
                            <h3 className="font-semibold text-white">
                              {info.title}
                            </h3>
                          </div>
                          <p className="text-gray-300 mb-2 text-sm">
                            {info.description}
                          </p>
                          {info.title === "Email" ? (
                            <p className="text-white mb-2 text-sm">
                              <Tooltip {...(copied.email ? { open: true } : {})}>
                                <TooltipTrigger asChild>
                                  <button
                                    type="button"
                                    onClick={() => handleCopy("email", "jemachemtrading@gmail.com")}
                                    className="underline hover:text-gray-300 cursor-pointer"
                                  >
                                    jemachemtrading@gmail.com
                                  </button>
                                </TooltipTrigger>
                                <TooltipContent side="top">
                                  {copied.email ? "Copied!" : "Click to copy"}
                                </TooltipContent>
                              </Tooltip>
                            </p>
                          ) : info.title === "Phone" ? (
                            <div className="text-white mb-2 text-sm">
                              <Tooltip {...(copied.phone1 ? { open: true } : {})}>
                                <TooltipTrigger asChild>
                                  <button
                                    type="button"
                                    onClick={() => handleCopy("phone1", "+251913119689")}
                                    className="hover:underline cursor-pointer"
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
                                    onClick={() => handleCopy("phone2", "+251975818880")}
                                    className="hover:underline cursor-pointer"
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
                                    onClick={() => handleCopy("phone3", "+251988177960")}
                                    className="hover:underline cursor-pointer"
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
                                    onClick={() => handleCopy("phone4", "+251973939090")}
                                    className="hover:underline cursor-pointer"
                                  >
                                    +251973939090
                                  </button>
                                </TooltipTrigger>
                                <TooltipContent side="top">
                                  {copied.phone4 ? "Copied!" : "Click to copy"}
                                </TooltipContent>
                              </Tooltip>
                            </div>
                          ) : (
                            <p className="text-white mb-2 text-sm">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Contact Form */}
              <Card
                className="border-0 shadow-none"
                style={{ backgroundColor: "#0c0c0c" }}
              >
                <CardHeader>
                  <CardTitle className="text-white">
                    Send us a message
                  </CardTitle>
                  <p className="text-gray-300 text-sm">
                    Fill out the form below and we&#39;ll get back to you within
                    24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-white">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          className="bg-[#141416] border-[#272729] text-white placeholder:text-gray-400"
                          {...register("firstName")}
                        />
                        {errors.firstName && (
                          <p className="text-red-400 text-sm">{errors.firstName.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-white">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          className="bg-[#141416] border-[#272729] text-white placeholder:text-gray-400"
                          {...register("lastName")}
                        />
                        {errors.lastName && (
                          <p className="text-red-400 text-sm">{errors.lastName.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        className="bg-[#141416] border-[#272729] text-white placeholder:text-gray-400"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm">{errors.email.message}</p>
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
                        <p className="text-red-400 text-sm">{errors.phone.message}</p>
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
                        <p className="text-red-400 text-sm">{errors.message.message}</p>
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
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { Contact };
