import { Timer, Zap, ZoomIn } from "lucide-react";

const Feature16 = () => {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 lg:mb-20">
          <div className="mb-4  inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 text-white text-sm font-medium">
            <p className="text-sm font-normal text-white">OUR VALUES</p>
          </div>
          <h2 className="text-3xl font-medium text-white lg:text-4xl">
            Why Choose Us?
          </h2>
        </div>
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:gap-8">
          <div className="w-full max-w-[400px] h-[350px] rounded-lg bg-[#0c0c0c] p-6 flex flex-col hover:scale-101 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 ease-in-out cursor-pointer">
            <span className="mb-6 flex size-12 items-center justify-center rounded-full bg-orange-500">
              <Timer className="size-6 text-white" />
            </span>
            <h3 className="mb-4 text-xl font-medium text-white text-left">
              Performance
            </h3>
            <p className="leading-7 text-gray-300 text-left flex-grow">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              beatae tenetur totam aut blanditis ipsa quaerat neque eaque, atque
              doloremque! Eligendi.
            </p>
          </div>
          <div className="w-full max-w-[400px] h-[350px] rounded-lg bg-[#0c0c0c] p-6 flex flex-col hover:scale-101 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 ease-in-out cursor-pointer">
            <span className="mb-6 flex size-12 items-center justify-center rounded-full bg-orange-500">
              <ZoomIn className="size-6 text-white" />
            </span>
            <h3 className="mb-4 text-xl font-medium text-white text-left">
              Quality
            </h3>
            <p className="leading-7 text-gray-300 text-left flex-grow">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              beatae tenetur totam aut blanditis ipsa quaerat neque eaque, atque
              doloremque! Eligendi.
            </p>
          </div>
          <div className="w-full max-w-[400px] h-[350px] rounded-lg bg-[#0c0c0c] p-6 flex flex-col hover:scale-101 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 ease-in-out cursor-pointer">
            <span className="mb-6 flex size-12 items-center justify-center rounded-full bg-orange-500">
              <Zap className="size-6 text-white" />
            </span>
            <h3 className="mb-4 text-xl font-medium text-white text-left">
              Innovation
            </h3>
            <p className="leading-7 text-gray-300 text-left flex-grow">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              beatae tenetur totam aut blanditis ipsa quaerat neque eaque, atque
              doloremque! Eligendi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature16 };
