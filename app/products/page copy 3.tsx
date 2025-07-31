import ProductGrid from "@/components/product/ProductGrid";
import productsData from "./products.json";

export default function ProductPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 relative flex min-h-[50vh] w-full overflow-hidden bg-[url('/laboratory-chemicals.png')] bg-cover bg-center bg-no-repeat font-sans after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:bg-black/80 after:content-['']">
        <div className="relative z-30 m-auto flex max-w-[46.25rem] flex-col items-center justify-center gap-6 px-5">
          <h1 className="text-white text-center font-serif text-3xl leading-tight md:text-4xl lg:text-5xl xl:text-6xl max-w-4xl">
            Chemical Products Gallery
          </h1>
          <p className="text-white text-center text-lg max-w-2xl">
            Discover our comprehensive range of industrial chemicals,
            agrochemicals, and laboratory reagents
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ProductGrid products={productsData.chemicals} />
        </div>
      </section>
    </div>
  );
}
