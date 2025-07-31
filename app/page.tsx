import { Hero } from "@/components/home/Hero";
import { Products } from "@/components/home/Products";
import { ConnectWithUs } from "@/components/home/ConnectWithUs";
import { Contact } from "@/components/home/ContactUs";
import About from "@/components/home/About";
import { Faq } from "@/components/home/FAQ";
import Logo from "@/components/home/PartnerLogoTicker";
import { Testimonial } from "@/components/home/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Products />
      <Logo />
      <Testimonial />
      <Faq />
      <ConnectWithUs />
      <Contact />
    </div>
  );
}
