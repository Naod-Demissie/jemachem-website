"use client";

import { AlertCircle, CheckCircle, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Script from "next/script";

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
        <span>+251914119689</span>
        <br />
        <span>+251975818880</span>
      </>
    ),
    href: "tel:+251914119689",
  },
  {
    icon: <MapPin className="size-6 invert" />,
    title: "Office",
    description: "Schedule an in-person meeting",
    value: (
      <>
        <span>Aynalem Beze Bldg, 2nd Fl, Office No. 401</span>
        <br />
        <span>Fitawrari Damtew St, Kirkos Sub-City</span>
        <br />
        <span>Addis Ababa, Ethiopia</span>
      </>
    ),
    href: "#",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const token = (
      document.querySelector(
        "#cf-turnstile input[name='cf-turnstile-response']"
      ) as HTMLInputElement
    )?.value;

    if (!token) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const success = Math.random() > 0.3;
    setSubmitStatus(success ? "success" : "error");
    setIsSubmitting(false);

    if (success) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
      });
    }
  };

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      />
      <section className="bg-black py-24">
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
                Ready to start your next project? Our team is here to help you
                succeed. Reach out and let&#39;s discuss how we can bring your
                ideas to life.
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
                          <p className="text-white mb-2 text-sm">
                            {info.value}
                          </p>
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
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-white">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          required
                          className="bg-[#141416] border-[#272729] text-white placeholder:text-gray-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-white">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          required
                          className="bg-[#141416] border-[#272729] text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                        className="bg-[#141416] border-[#272729] text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white">
                        Company
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          handleInputChange("company", e.target.value)
                        }
                        className="bg-[#141416] border-[#272729] text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        rows={5}
                        required
                        className="bg-[#141416] border-[#272729] text-white placeholder:text-gray-400"
                      />
                    </div>

                    <div
                      className="cf-turnstile"
                      id="cf-turnstile"
                      data-sitekey="your-cloudflare-sitekey"
                    ></div>

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
