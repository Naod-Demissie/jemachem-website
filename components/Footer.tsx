import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegramPlane,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa";

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
    title: "Products",
    links: [
      { name: "Industrial Chemicals", href: "/products/industrial" },
      { name: "Agrochemicals", href: "/products/agrochemical" },
      { name: "Laboratory Reagents", href: "/products/laboratory" },
      { name: "All Products", href: "/products" },
    ],
  },
  {
    title: "Industries Served",
    links: [
      { name: "Agriculture", href: "/industries/agriculture" },
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Research & Labs", href: "/industries/labs" },
      { name: "Education", href: "/industries/education" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact Us", href: "/contact" },
      { name: "Request Quote", href: "/contact#quote" },
      { name: "Delivery Info", href: "/support/delivery" },
      { name: "FAQs", href: "/support/faqs" },
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
    href: "https://www.tiktok.com/@jemachemtrading",
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
    src: "/logo.png",
    alt: "JemaChem Logo",
    title: "JemaChem Trading",
  },
  sections = defaultSections,
  description = "We import and supply high-quality industrial, agricultural, and laboratory chemicals across Ethiopia, supporting key industries with trusted solutions.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 JemaChem Trading. All rights reserved.",
}: FooterProps) => {
  return (
    <section className="py-12 border-t relative bg-[url('/footer-image.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/92"></div>
      <div className="container mx-auto flex flex-col items-center justify-center relative z-10">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start items-center text-center lg:text-left">
            {/* Logo */}
            <div className="flex items-center gap-5 lg:justify-start justify-center">
              <a href={logo.url} className="flex items-center">
                <img
                  src="/logo.png"
                  alt="JemaChem Logo"
                  className="w-[180px]"
                />
              </a>
              <div className="flex flex-col items-start gap-2 justify-start">
                <p className="text-gray-300 max-w-[70%] text-sm mx-auto lg:mx-0">
                  {description}
                </p>
                <ul className="text-gray-300 flex items-center justify-center lg:justify-start space-x-6">
                  {socialLinks.map((social, idx) => (
                    <li
                      key={idx}
                      className="hover:text-white font-medium transition-colors"
                    >
                      <a
                        href={social.href}
                        aria-label={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-white">{section.title}</h3>
                <ul className="text-gray-300 space-y-3 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-white font-medium transition-colors"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="text-gray-300 mt-8 flex flex-col justify-between gap-4 border-t border-gray-700 py-8 text-xs font-medium md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
        </div>
      </div>
    </section>
  );
};

export { Footer };
