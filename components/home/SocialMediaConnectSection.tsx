 
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const ConnectWithUs = () => {
  const socialLinks = [
    { href: "https://t.me/Jemachem", icon: "/telegram.svg", alt: "Telegram" },
    {
      href: "https://www.tiktok.com/@jemachem.trading",
      icon: "/tiktok.svg",
      alt: "TikTok",
    },
    {
      href: "mailto:jemachemtrading@gmail.com",
      icon: "/email.svg",
      alt: "Email",
    },
  ];
  return (
    <section className="bg-black py-12 sm:py-16 lg:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <Card
          className="border-0 shadow-none"
          style={{ backgroundColor: "#0c0c0c" }}
        >
          <CardContent>
            <div className="flex flex-col items-center gap-5 max-w-4xl mx-auto py-16">
              <h2 className="text-white text-center text-2xl sm:text-3xl font-semibold px-4">
                Connect With Us
                <br />
                <span className="text-white/80 text-base sm:text-lg">
                  Stay informed, ask questions, and get updates
                </span>
              </h2>
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
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { ConnectWithUs };
