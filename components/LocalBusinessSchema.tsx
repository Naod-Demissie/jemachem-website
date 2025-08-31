export default function LocalBusinessSchema() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Jemachem Trading",
    "image": "https://jemachem.com/jemachem-warehouse.webp",
    "description": "Ethiopia's premier importer, supplier, and distributor of industrial and laboratory chemicals and equipment.",
    "url": "https://jemachem.com",
    "telephone": "+251913119689",
    "email": "jemachemtrading@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Aynalem Beze Bldg, 2nd Fl, Office No. 216, Bulgaria Mazoria, Kirkos Sub-City",
      "addressLocality": "Addis Ababa",
      "addressRegion": "Addis Ababa",
      "postalCode": "1000",
      "addressCountry": "ET"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 9.145, // Add your actual coordinates
      "longitude": 40.4897
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://t.me/Jemachem",
      "https://www.tiktok.com/@jemachem.trading"
    ],
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
    "areaServed": {
      "@type": "Country",
      "name": "Ethiopia"
    },
    "serviceArea": {
      "@type": "Country",
      "name": "Ethiopia"
    },
    "priceRange": "$$", // Adjust based on your pricing
    "paymentAccepted": ["Cash", "Bank Transfer", "Credit Card"],
    "currenciesAccepted": ["ETB", "USD"],
    "knowsAbout": [
      "Chemical Import",
      "Chemical Distribution", 
      "Industrial Chemicals",

      "Laboratory Chemicals",
      "Chemical Safety",
      "Supply Chain Management"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
    />
  );
}
