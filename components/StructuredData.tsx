export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Jemachem Trading",
    "alternateName": "Jemachem",
    "description": "Ethiopia's premier importer, supplier, and distributor of industrial, agricultural, and laboratory chemicals and equipment.",
    "url": "https://jemachem.com",
    "logo": "https://jemachem.com/jemachem-company-logo.webp",
    "image": "https://jemachem.com/jemachem-warehouse.webp",
    "sameAs": [
      "https://t.me/Jemachem",
      "https://www.tiktok.com/@jemachem.trading"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "jemachemtrading@gmail.com",
      "telephone": "+251913119689",
      "availableLanguage": ["English", "Amharic"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ET",
      "addressRegion": "Addis Ababa",
      "addressLocality": "Addis Ababa"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Ethiopia"
    },
    "serviceArea": {
      "@type": "Country",
      "name": "Ethiopia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Chemical Products",
      "itemListElement": [
        { "@type": "Category", "name": "Detergents & Cosmetics", "description": "Surfactants, emulsifiers, fragrances, preservatives" },
        { "@type": "Category", "name": "Food & Beverage", "description": "Food additives, sweeteners, acidulants, colorants, preservatives" },
        { "@type": "Category", "name": "Paints & Solvents", "description": "Resins, solvents, pigments, plasticizers" },
        { "@type": "Category", "name": "Plastics & Foam", "description": "Polymer inputs, PU foam chemicals, EPS foam chemicals" },
        { "@type": "Category", "name": "Water Treatment", "description": "Coagulants, flocculants, antiscalants, disinfectants" },
        { "@type": "Category", "name": "Leather & Footwear", "description": "Tanning agents and auxiliaries" },
        { "@type": "Category", "name": "Textiles", "description": "Dyes and auxiliaries" },
        { "@type": "Category", "name": "Laboratory Reagents", "description": "Analytical and laboratory chemicals" }
      ]
    },
    "foundingDate": "2020",
    "numberOfEmployees": "10-50",
    "knowsAbout": [
      "Chemical Import",
      "Chemical Distribution",
      "Industrial Chemicals",
      "Agricultural Chemicals",
      "Laboratory Chemicals",
      "Chemical Safety",
      "Supply Chain Management",
      "Chemical Logistics"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Chemical Import Services",
          "description": "Professional chemical import services for Ethiopia"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Chemical Distribution",
          "description": "Reliable chemical distribution across Ethiopia"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
