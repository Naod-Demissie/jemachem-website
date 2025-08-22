import type { Metadata } from "next";
import ProductsPageContent from "@/components/products/ProductsPageContent";

export const metadata: Metadata = {
  title: "Chemical Products - Industrial, Agricultural & Laboratory Chemicals Ethiopia",
  description: "Explore Detergents & Cosmetics, Food & Beverage additives, Paints & Solvents, Plastics & Foam inputs, Water Treatment chemicals, Leather & Footwear tanning agents, Textile dyes & auxiliaries, and Laboratory reagents. Jemachem Trading supplies high-quality chemicals for Ethiopia's industries.",
  keywords: [
    "chemical products Ethiopia",
    "industrial chemicals Ethiopia",
    "agricultural chemicals Ethiopia",
    "laboratory chemicals Ethiopia",
    "detergent chemicals Ethiopia",
    "cosmetics chemicals Ethiopia",
    "surfactants Ethiopia",
    "emulsifiers Ethiopia",
    "fragrances Ethiopia",
    "food grade chemicals Ethiopia",
    "food additives Ethiopia",
    "preservatives Ethiopia",
    "sweeteners Ethiopia",
    "paint chemicals Ethiopia",
    "resins Ethiopia",
    "solvents Ethiopia",
    "pigments Ethiopia",
    "plasticizers Ethiopia",
    "plastics chemicals Ethiopia",
    "foam chemicals Ethiopia",
    "polyurethane foam chemicals Ethiopia",
    "water treatment chemicals Ethiopia",
    "coagulants Ethiopia",
    "flocculants Ethiopia",
    "antiscalants Ethiopia",
    "disinfectants Ethiopia",
    "leather chemicals Ethiopia",
    "tanning agents Ethiopia",
    "textile chemicals Ethiopia",
    "textile dyes Ethiopia",
    "textile auxiliaries Ethiopia",
    "chemical catalog Ethiopia",
    "chemical supplier products Ethiopia"
  ],
  openGraph: {
    title: "Chemical Products - Industrial, Agricultural, Laboratory & Category-Specific Chemicals",
    description: "Explore category-specific chemicals: Detergents & Cosmetics, Food & Beverage, Paints & Solvents, Plastics & Foam, Water Treatment, Leather & Footwear, Textiles, and Laboratory.",
    url: "https://jemachem.com/products",
  },
  alternates: {
    canonical: '/products',
  },
};

export default function ProductPage() {
  return <ProductsPageContent />;
}
