"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const socialLinks = [
    { href: "https://t.me/Jemachem", icon: "/telegram.svg", alt: "Telegram" },
    {
      href: "https://www.tiktok.com/@jemachemtrading",
      icon: "/tiktok.svg",
      alt: "TikTok",
    },
    {
      href: "mailto:jemachemtrading@gmail.com",
      icon: "/email.svg",
      alt: "Email",
    },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 absolute top-0 left-0 z-50 bg-transparent shadow-none">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/jemachem-company-logo.webp"
            alt="JemaChem Logo"
            width={120}
            height={40}
            className="w-[120px] h-auto"
            priority
          />
        </Link>
      </div>

      {/* Desktop Navigation Links - Centered */}
      <div className="hidden md:flex gap-8 text-white font-medium text-lg absolute left-1/2 transform -translate-x-1/2">
        <Link
          href="/"
          className={`relative pb-2 hover:text-orange-200 transition-colors ${
            isActive("/")
              ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-orange-500 after:rounded-sm"
              : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`relative pb-2 hover:text-orange-200 transition-colors ${
            isActive("/about")
              ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-orange-500 after:rounded-sm"
              : ""
          }`}
        >
          About
        </Link>
        <Link
          href="/products"
          className={`relative pb-2 hover:text-orange-200 transition-colors ${
            isActive("/products")
              ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-orange-500 after:rounded-sm"
              : ""
          }`}
        >
          Products
        </Link>
        <Link
          href="/contact"
          className={`relative pb-2 hover:text-orange-200 transition-colors ${
            isActive("/contact")
              ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-orange-500 after:rounded-sm"
              : ""
          }`}
        >
          Contact
        </Link>
      </div>

      {/* Desktop Social Icons */}
      <div className="hidden md:flex items-center gap-3">
        {/* Get Brochure Button - Same height as social media icons */}
        <div className="relative group mr-2">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#fe9b2b] via-[#fdc57e] to-[#6f4ba4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px]">
            <div className="w-full h-full rounded-full bg-black/80 group-hover:bg-black/90 transition-colors duration-300"></div>
          </div>
          <Button
            asChild
            variant="outline"
            className="relative border-gray-200 text-white hover:text-white font-semibold px-4 h-10 rounded-full shadow-sm transition-all duration-300 bg-transparent hover:bg-transparent z-10 group-hover:border-transparent border text-sm"
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
        
        {socialLinks.map(({ href, icon, alt }) => (
          <a
            key={alt}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={alt}
            className="bg-white/10 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition"
          >
            <Image
              src={icon}
              alt={`${alt} Icon`}
              width={20}
              height={20}
              className="invert"
            />
          </a>
        ))}
      </div>

      {/* Mobile Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 text-white relative z-50"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
            isMenuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out mt-1 ${
            isMenuOpen ? "opacity-0 scale-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out mt-1 ${
            isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40">
          <div className="flex flex-col h-full">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col items-center justify-center flex-1 gap-8 text-white font-medium text-xl">
              <Link
                href="/"
                className={`relative pb-2 hover:text-orange-200 transition-colors ${
                  isActive("/")
                    ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-orange-500 after:rounded-sm"
                    : ""
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`relative pb-2 hover:text-orange-200 transition-colors ${
                  isActive("/about")
                    ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-orange-500 after:rounded-sm"
                    : ""
                }`}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="/products"
                className={`relative pb-2 hover:text-orange-200 transition-colors ${
                  isActive("/products")
                    ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-orange-500 after:rounded-sm"
                    : ""
                }`}
                onClick={closeMenu}
              >
                Products
              </Link>
              <Link
                href="/contact"
                className={`relative pb-2 hover:text-orange-200 transition-colors ${
                  isActive("/contact")
                    ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-orange-500 after:rounded-sm"
                    : ""
                }`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>

            {/* Mobile Get Brochure Button - Exact same as desktop version */}
            <div className="flex justify-center items-center mb-6">
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#fe9b2b] via-[#fdc57e] to-[#6f4ba4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px]">
                  <div className="w-full h-full rounded-full bg-black/80 group-hover:bg-black/90 transition-colors duration-300"></div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="relative border-gray-200 text-white hover:text-white font-semibold px-6 py-6 rounded-full shadow-sm transition-all duration-300 bg-transparent hover:bg-transparent z-10 group-hover:border-transparent border text-1xl"
                >
                  <a 
                    href="/Jemachem Product Brochure.pdf" 
                    download="Jemachem-Product-Brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                  >
                    Get Brochure
                  </a>
                </Button>
              </div>
            </div>

            {/* Mobile Social Icons - Bottom of menu */}
            <div className="flex justify-center items-center gap-4 pb-8">
              {socialLinks.map(({ href, icon, alt }) => (
                <a
                  key={alt}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={alt}
                  className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/30 transition"
                >
                  <Image
                    src={icon}
                    alt={`${alt} Icon`}
                    width={24}
                    height={24}
                    className="invert"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
