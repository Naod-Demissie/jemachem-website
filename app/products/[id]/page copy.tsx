import { notFound } from "next/navigation";
import ProductDetail from "@/components/product/ProductDetail";
import productsData from "../products.json";

export async function generateStaticParams() {
  return productsData.chemicals.map((product) => ({
    id: product.id,
  }));
}

// Define the product type based on the JSON structure
type Product = {
  id: string;
  item: string;
  packaging: string | string[];
  brand: string | string[] | null;
  country: string | string[];
  category: string;
  description: string;
  imageURL: string;
};

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = productsData.chemicals.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <ProductDetail product={product} />
    </div>
  );
}
