"use client";

import { useState } from "react";
import ProductGrid from "@/components/product/ProductGrid";
import ProductDetail from "@/components/product/ProductDetail";
import productsData from "./products.json";

export default function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentView, setCurrentView] = useState("grid"); // 'grid' or 'detail'

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setCurrentView("detail");
  };

  const handleBackToGrid = () => {
    setSelectedProduct(null);
    setCurrentView("grid");
  };

  return (                                                                                                                                                                                                                                                                                                                
    <div className="min-h-screen bg-white">
      {currentView === "grid" ? (
        <div className="container mx-auto px-4 py-8">
          <ProductGrid
            products={productsData.chemicals}
            onProductSelect={handleProductSelect}
          />
        </div>
      ) : (
        <ProductDetail product={selectedProduct} onBack={handleBackToGrid} />
      )}
    </div>
  );
}
