import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-20 dark relative flex h-svh max-h-[1400px] w-full overflow-hidden bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat font-sans after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:bg-black/80 after:content-[''] md:h-svh">
      <div className="relative z-30 m-auto flex max-w-[46.25rem] flex-col items-center justify-center gap-6 px-5">
        <h1 className="text-white text-center font-sans text-3xl leading-tight md:text-3xl lg:text-4xl xl:text-5xl max-w-4xl font-extrabold">
          Your <span className="italic text-orange-500">trusted</span> Chemical
          Import Partner in Ethiopia.
        </h1>
        <p className="text-white text-[18px] text-center font-thin font-sans">
          Delivering high-quality chemicals for agriculture, industry, and
          laboratories with unmatched reliability and expert care.
        </p>

        <div className="flex gap-4 mt-6">
          <Button
            asChild
            className="bg-white text-gray-800 hover:bg-gray-100 font-semibold px-6 py-6 rounded-full shadow-md transition"
          >
            <a href="/products">Explore Products</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-gray-800 font-semibold px-6 py-6 rounded-full shadow-sm transition"
          >
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/noise.png')] bg-repeat opacity-30" />
    </section>
  );
};

export { Hero };
