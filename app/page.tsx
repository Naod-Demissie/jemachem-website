import Image from "next/image";
import { Hero78 } from "@/components/home/Hero";
import { HeroProducts } from "@/components/home/HeroProducts";
import {ConnectWithUs} from "@/components/home/ConnectWithUs";

export default function Home() {
  return (
    <div>
      <Hero78 />
      <HeroProducts />
      <ConnectWithUs />
    </div>
  );
}
