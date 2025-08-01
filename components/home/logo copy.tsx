"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Company {
  name: string;
  logo: string;
  width: number;
  height: number;
  href: string;
}

const Logos5 = () => {
  const topRowCompanies: Company[] = [
    {
      name: "Mercury",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/mercury.svg",
      width: 143,
      height: 26,
      href: "https://mercury.com",
    },
    {
      name: "Watershed",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/watershed.svg",
      width: 154,
      height: 31,
      href: "https://watershed.com",
    },
    {
      name: "Retool",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/retool.svg",
      width: 113,
      height: 22,
      href: "https://retool.com",
    },
    {
      name: "Descript",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/descript.svg",
      width: 112,
      height: 27,
      href: "https://descript.com",
    },
  ];

  const bottomRowCompanies: Company[] = [
    {
      name: "Perplexity",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/perplexity.svg",
      width: 141,
      height: 32,
      href: "https://perplexity.com",
    },
    {
      name: "Monzo",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/monzo.svg",
      width: 104,
      height: 18,
      href: "https://monzo.com",
    },
    {
      name: "Ramp",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/ramp.svg",
      width: 105,
      height: 28,
      href: "https://ramp.com",
    },
    {
      name: "Raycast",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/raycast.svg",
      width: 128,
      height: 33,
      href: "https://raycast.com",
    },
    {
      name: "Arc",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mainline/logos/arc.svg",
      width: 90,
      height: 28,
      href: "https://arc.com",
    },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10 lg:space-y-16">
          {/* Header */}
          <div className="text-center">
            <h2 className="mb-4 text-xl font-bold text-balance md:text-2xl lg:text-3xl">
              Powering the world&apos;s best product teams.
              <br className="hidden md:block" />
              <span className="text-muted-foreground">
                From next-gen startups to established enterprises.
              </span>
            </h2>
          </div>

          {/* Logo Grid */}
          <div className="flex w-full flex-col items-center gap-8 lg:gap-12">
            {/* Top row - 4 logos */}
            <div className="grid w-full grid-cols-2 items-center justify-items-center gap-x-8 gap-y-8 sm:grid-cols-4 sm:gap-x-12 md:gap-x-16 lg:gap-x-20 xl:gap-x-28">
              {topRowCompanies.map((company, index) => (
                <Link
                  href={company.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className={cn(
                    "flex items-center justify-center transition-opacity duration-200 hover:opacity-70",
                    "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md p-2"
                  )}
                >
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={company.width}
                    height={company.height}
                    className="h-auto w-auto max-h-8 max-w-full object-contain sm:max-h-10 md:max-h-12"
                    priority={index < 2}
                  />
                </Link>
              ))}
            </div>

            {/* Bottom row - 5 logos */}
            <div className="grid w-full grid-cols-2 items-center justify-items-center gap-x-8 gap-y-8 sm:grid-cols-3 md:grid-cols-5 sm:gap-x-12 md:gap-x-16 lg:gap-x-20 xl:gap-x-28">
              {bottomRowCompanies.map((company, index) => (
                <Link
                  href={company.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className={cn(
                    "flex items-center justify-center transition-opacity duration-200 hover:opacity-70",
                    "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md p-2",
                    // Special handling for 5th item on mobile to center it
                    index === 4 && "col-span-2 sm:col-span-1"
                  )}
                >
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={company.width}
                    height={company.height}
                    className="h-auto w-auto max-h-8 max-w-full object-contain sm:max-h-10 md:max-h-12"
                    priority={false}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Logos5 };
