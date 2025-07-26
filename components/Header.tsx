"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const socialLinks = [
    { href: "https://t.me/Jemachem", icon: "/telegram.svg", alt: "Telegram" },
    { href: "https://www.tiktok.com/@jemachemtrading", icon: "/tiktok.svg", alt: "TikTok" },
    { href: "https://facebook.com", icon: "/facebook.svg", alt: "Facebook" },
    { href: "mailto:jemachemtrading@gmail.com", icon: "/email.svg", alt: "Email" },
  ];

  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 fixed top-0 left-0 z-50 bg-transparent shadow-none">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="AL Systems Logo"
            width={70}
            height={70}
            priority
            className="h-auto w-auto object-contain"
          />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex gap-8 text-white font-medium text-lg">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/services" className="hover:underline">Services</Link>
        <Link href="/partners" className="hover:underline">Partners</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>

      {/* Desktop Social Icons */}
      <div className="hidden md:flex items-center gap-3">
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
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out mt-1 ${isMenuOpen ? 'opacity-0 scale-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40">
          <div className="flex flex-col h-full">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col items-center justify-center flex-1 gap-8 text-white font-medium text-xl">
              <Link href="/" className="hover:underline" onClick={closeMenu}>Home</Link>
              <Link href="/about" className="hover:underline" onClick={closeMenu}>About</Link>
              <Link href="/services" className="hover:underline" onClick={closeMenu}>Services</Link>
              <Link href="/partners" className="hover:underline" onClick={closeMenu}>Partners</Link>
              <Link href="/contact" className="hover:underline" onClick={closeMenu}>Contact</Link>
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
