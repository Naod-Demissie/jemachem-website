import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Cta11Props {
  heading?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  buttonText?: string;
  buttonHref?: string;
}

const Cta11 = ({
  heading = "Ready to Partner with Us?",
  description = "Connect with Jemachem Trading for premium chemical solutions.\nOur expert team is ready to meet your industry needs.",
  imageSrc = "/jemachem-company-logo.webp",
  imageAlt = "Company logo",
  buttonText = "Contact Us",
  buttonHref = "/contact",
}: Cta11Props) => {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto max-w-7xl px-4">
        <div
          className="bg-[#0c0c0c] flex w-full flex-col gap-8 overflow-hidden rounded-lg p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-12 mx-auto max-w-7xl"
          style={{ backgroundColor: "#0c0c0c" }}
        >
          <div className="flex-1 text-left">
            <h3 className="mb-3 text-2xl font-semibold text-white md:mb-4 md:text-4xl lg:mb-6 text-left">
              {heading}
            </h3>
            <p className="text-gray-300 max-w-xl lg:text-lg text-left mb-6">
              {description}
            </p>
            <Button
              asChild
              className="bg-orange-500 text-gray-100 text-1xl hover:bg-orange-600 font-semibold px-6 py-6 rounded-full shadow-md transition"
            >
              <a href={buttonHref}>{buttonText}</a>
            </Button>
          </div>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={170}
            height={60}
            className="w-[170px] h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export { Cta11 };
