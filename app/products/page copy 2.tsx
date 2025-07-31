import ProductGrid from "@/components/product/ProductGrid";
import productsData from "./products.json";

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Products
        </h1>
        <ProductGrid products={productsData.chemicals} />
      </div>
    </div>
  );
}
