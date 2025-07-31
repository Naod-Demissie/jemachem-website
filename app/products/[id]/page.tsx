"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import ProductDetail from "@/components/product/ProductDetail";
import productsData from "../products.json";

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

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productId = params.id;
    const foundProduct = productsData.chemicals.find(
      (p) => p.id === productId
    );

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      // Product not found, redirect to products page
      router.push("/products");
    }
    setLoading(false);
  }, [params.id, router]);

  const handleBackToProducts = () => {
    router.push("/products");
  };

  if (loading) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: "#0c0c0c" }}>
        <div className="flex items-center justify-center h-screen">
          <div className="text-lg text-white">Loading...</div>
        </div>
      </div>
    );
  }

  if (!product) {
    return null; // Will redirect to products page
  }

  return (
    <div className="min-h-screen">
      <ProductDetail product={product} onBack={handleBackToProducts} />
    </div>
  );
} 