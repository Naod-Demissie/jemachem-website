import { FaTiktok, FaTelegramPlane, FaEnvelope } from "react-icons/fa";

import { Button } from "@/components/ui/button";

const ConnectWithUs = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 max-w-4xl mx-auto">
          <h2 className="text-center text-2xl sm:text-3xl font-semibold px-4">
          Connect With Us
            <br />
            <span className="text-muted-foreground/80 text-base sm:text-lg">
            Stay informed, ask questions, and get updates
            </span>
          </h2>
          <div className="flex items-center gap-3 sm:gap-4">
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://t.me/Jemachem"
                target="_blank"
                className="size-10"
              >
                <FaTelegramPlane />


              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://www.tiktok.com/@jemachemtrading"
                target="_blank"
                className="size-10"
              >
                <FaTiktok />

              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="mailto:jemachemtrading@gmail.com"
                target="_blank"
                className="size-10"
              >
                <FaEnvelope />

              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ConnectWithUs };
