"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import ProductDetail from "@/components/product/ProductDetail";
import productsData from "../products.json";
import SEOHead from "@/components/SEOHead";

// Define the product type based on the new JSON structure
type Product = {
  "Product Name": string;
  ID: string;
  "Brand Name": string;
  Category: string;
  "Image Path": string;
  Description: string;
  "Safety Notice": string;
  "Source Country": string;
};

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productId = params.id;
    const foundProduct = productsData.find((p) => p.ID === productId);

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
      {/* Dynamic SEO for product detail */}
      {(() => {
        const baseUrl = "https://jemachem.com";
        const id = product.ID;
        const title = `${product["Product Name"]} - Chemical Supplier Ethiopia`;
        const description = `${product.Description?.slice(0, 155) || product["Product Name"]} Available in Ethiopia with reliable sourcing and delivery.`;
        const ogImage = `/products/${product["Image Path"]}`;
        const keywords = [
          product["Product Name"],
          ...(product.Category ? product.Category.split(",").map((c) => c.trim()) : []),
          product["Brand Name"] || "",
          product["Source Country"] || "",
          "chemical supplier Ethiopia",
          "chemical importer Ethiopia",
          "Addis Ababa",
        ].filter(Boolean);

        return (
          <>
            <SEOHead
              title={title}
              description={description}
              keywords={keywords}
              canonical={`/products/${id}`}
              ogImage={ogImage}
              ogType="product"
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Product",
                  name: product["Product Name"],
                  sku: product.ID,
                  image: `${baseUrl}/products/${product["Image Path"]}`,
                  description: product.Description,
                  brand: product["Brand Name"] ? { "@type": "Brand", name: product["Brand Name"] } : undefined,
                  category: product.Category,
                  countryOfOrigin: product["Source Country"],
                  url: `${baseUrl}/products/${id}`,
                  offers: {
                    "@type": "Offer",
                    url: `${baseUrl}/products/${id}`,
                    availability: "https://schema.org/InStock",
                    priceCurrency: "ETB",
                  },
                  manufacturer: {
                    "@type": "Organization",
                    name: "Jemachem Trading",
                    url: baseUrl,
                  },
                }),
              }}
            />
          </>
        );
      })()}
      <ProductDetail product={product} onBack={handleBackToProducts} />
    </div>
  );
}
