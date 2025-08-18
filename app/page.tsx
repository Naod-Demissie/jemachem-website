import { Hero } from "@/components/home/HomeHeroSection";
import { Products } from "@/components/home/ProductCategoriesShowcase";
import { ConnectWithUs } from "@/components/home/SocialMediaConnectSection";
import { Contact } from "@/components/home/ContactFormSection";
import About from "@/components/home/CompanyOverviewSection";
import { Faq } from "@/components/home/FrequentlyAskedQuestions";
import Logo from "@/components/home/ClientLogosMarquee";
import { Testimonial } from "@/components/home/ClientTestimonialsCarousel";

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
