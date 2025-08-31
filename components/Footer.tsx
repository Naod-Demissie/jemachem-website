import React from "react";
import Image from "next/image";
import { FaTelegramPlane, FaTiktok, FaEnvelope } from "react-icons/fa";

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
}

const defaultSections = [
  {
    title: "Product Categories",
    links: [
      { name: "Detergents & Cosmetics", href: "/products" },
      { name: "Food & Beverage", href: "/products" },
      { name: "Paints & Solvents", href: "/products" },
      { name: "Plastics & Foam", href: "/products" },
    ],
  },
  {
    title: "More Categories",
    links: [
      { name: "Water Treatment", href: "/products" },
      { name: "Leather & Footwear", href: "/products" },
      { name: "Textiles", href: "/products" },
    ],
  },
  {
    title: "Pages",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Products", href: "/products" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

const defaultSocialLinks = [
  {
    icon: <FaTelegramPlane className="size-6" />,
    href: "https://t.me/Jemachem",
    label: "Telegram",
  },
  {
    icon: <FaTiktok className="size-6" />,
    href: "https://www.tiktok.com/@jemachem.trading",
    label: "TikTok",
  },
  {
    icon: <FaEnvelope className="size-6" />,
    href: "mailto:jemachemtrading@gmail.com",
    label: "Email",
  },
];

const Footer = ({
  logo = {
    url: "/",
    src: "/jemachem-company-logo.webp",
    alt: "JemaChem Logo",
    title: "JemaChem Trading",
  },
  sections = defaultSections,
  description = "We import and supply high-quality industrial and laboratory chemicals across Ethiopia, supporting key industries with trusted solutions.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 JemaChem Trading. All rights reserved.",
}: FooterProps) => {
  return (
    <section className="py-16 border-t relative bg-[url('/footer-image.webp')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/92"></div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex w-full flex-col justify-between gap-12 lg:flex-row lg:items-start lg:text-left">
          {/* Logo and Description Section */}
          <div className="flex w-full flex-col justify-between gap-8 lg:items-start items-center text-center lg:text-left lg:w-2/5">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
              {/* Logo */}
              <div className="flex items-center justify-center lg:justify-start">
                <a href={logo.url} className="flex items-center">
                  <Image
                    src="/jemachem-company-logo.webp"
                    alt="JemaChem Logo"
                    width={190}
                    height={60}
                    className="h-auto w-[190px]"
                    priority
                  />
                </a>
              </div>

              {/* Description and Social Links */}
              <div className="flex flex-col items-center lg:items-start gap-4">
                <p className="text-gray-300 text-sm leading-relaxed max-w-md text-center lg:text-left">
                  {description}
                </p>

                {/* Social Links */}
                <ul className="flex items-center justify-center lg:justify-start space-x-4">
                  {socialLinks.map((social, idx) => (
                    <li
                      key={idx}
                      className="hover:text-white text-gray-300 transition-colors duration-200"
                    >
                      <a
                        href={social.href}
                        aria-label={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-200"
                      >
                        {social.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation Links Section */}
          <div className="grid w-full gap-8 md:grid-cols-3 lg:gap-12 lg:w-3/5">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx} className="text-center lg:text-left">
                <h3 className="mb-6 font-bold text-white text-lg">
                  {section.title}
                </h3>
                <ul className="text-gray-300 space-y-3 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-white font-medium transition-colors duration-200"
                    >
                      <a href={link.href} className="hover:underline">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-gray-300 mt-12 flex flex-col justify-between gap-4 border-t border-gray-700/50 py-8 text-xs font-medium md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1 text-center lg:text-left">
            {copyright}
          </p>
        </div>
      </div>
    </section>
  );
};

export { Footer };
