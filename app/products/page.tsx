import ProductGrid from "@/components/product/ProductGrid";
import productsData from "./products.json";

export default function ProductPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 relative flex min-h-[50vh] w-full overflow-hidden bg-[url('/laboratory-chemicals.png')] bg-cover bg-center bg-no-repeat font-sans after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:bg-black/80 after:content-['']">
        <div className="relative z-30 m-auto flex max-w-[46.25rem] flex-col items-center justify-center gap-6 px-5">
          <div className="flex justify-center mb-3">
            <div className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 text-white text-sm font-medium">
              <p className="text-sm font-normal text-white">PRODUCTS</p>
            </div>
          </div>
          <h1 className="text-white text-center font-sans text-3xl leading-tight md:text-4xl lg:text-4xl xl:text-4xl max-w-4xl font-extrabold">
            Chemical Products Gallery
          </h1>
          <p className="text-white text-center text-lg max-w-2xl">
            Discover our comprehensive range of industrial chemicals,
            agrochemicals, and laboratory reagents
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16" style={{ backgroundColor: "#0c0c0c" }}>
        <div className="container mx-auto px-4">
          <ProductGrid products={productsData} />
        </div>
      </section>
    </div>
  );
}
