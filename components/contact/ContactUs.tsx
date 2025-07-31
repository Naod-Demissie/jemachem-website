import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {
  return (
    <>
      {/* Banner Section */}
      <section className="relative min-h-[400px] w-full">
        <div className="absolute inset-0">
          <img
            src="/contact-us-banner.jpg"
            alt="Contact Us Banner"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-80" />
        </div>
        <div className="relative z-10 flex h-full items-center justify-center pt-40 text-center text-white">
          <div className="max-w-xl">
            <div className="flex justify-center mb-3">
              <div className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 text-white text-sm font-medium">
                <p className="text-sm font-normal text-white">CONTACT US</p>
              </div>
            </div>
            <p className="text-4xl font-medium md:text-5xl">
              Get in touch with us
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-32">
        <div className="container mx-auto max-w-7xl">
          {/* Three Info Cards */}
          <div className="grid gap-4 md:grid-cols-3 md:gap-8">
            {[
              {
                title: "Sales",
                desc: "Interested in learning more about our platform? Contact our sales team for more information.",
                linkText: "Request a demo",
              },
              {
                title: "Support",
                desc: "We're here to help with any platform questions. Check out our FAQs and learn more.",
                linkText: "Get support",
              },
              {
                title: "General Inquiries",
                desc: "For general inquiries, please reach out to us using the form below.",
                linkText: "Contact us",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col justify-between gap-6 rounded-lg border p-6"
              >
                <div>
                  <h2 className="mb-4 text-xl font-medium md:text-2xl">
                    {item.title}
                  </h2>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
                <a href="#" className="hover:underline">
                  {item.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Header Section */}
      <section className="bg-black py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
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
          </div>
        </div>
        <div className="mt-24 flex items-center justify-center">
          <Card
            className="w-full max-w-7xl border-none text-white rounded-4xl mx-auto"
            style={{ backgroundColor: "#0c0c0c" }}
          >
            <CardContent className="lg:px-18 py-12 lg:py-24">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start">
                {/* Contact Info */}
                <div className="space-y-8 text-left">
                  <img
                    src="/logo.png"
                    alt="JemaChem Logo"
                    className="w-[170px]"
                  />
                  <ul className="space-y-4 text-white/80">
                    <li>
                      <strong>Email:</strong>{" "}
                      <span className="underline">
                        example@shadcnblocks.com
                      </span>
                    </li>
                    <li>
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </li>
                    <li>
                      <strong>Address:</strong> 123 Design Street, UI City
                    </li>
                    <li>
                      <strong>Hours:</strong> Mon–Fri, 9am–5pm EST
                    </li>
                  </ul>
                </div>

                {/* Form */}
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstname" className="text-white">
                        First Name *
                      </Label>
                      <Input
                        id="firstname"
                        className="bg-[#141416] border-[#272729] text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastname" className="text-white">
                        Last Name *
                      </Label>
                      <Input
                        id="lastname"
                        className="bg-[#141416] border-[#272729] text-white placeholder:text-gray-400"
                      />
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
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">
                      Phone Number *
                    </Label>
                    <Input
                      type="tel"
                      id="phone"
                      className="bg-[#141416] border-[#272729] text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your inquiry"
                      rows={5}
                      className="bg-[#141416] border-[#272729] text-white placeholder:text-gray-400"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-orange-500 text-gray-100 text-1xl hover:bg-orange-600 font-semibold px-6 py-5 rounded-full shadow-md transition"
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map */}
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1234567890123!2d38.74737985767171!3d8.994876847278666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTknNDAuMCJOIDM4wrA0NCc1MC42IkUi!5e0!3m2!1sen!2sus!4v1234567890123"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Jemachem Location"
        />
      </div>
    </>
  );
};

export { ContactUs };
