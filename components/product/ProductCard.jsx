import Image from "next/image";
import Link from "next/link";
import { Badge } from '@/components/ui/badge'

const ProductCard = ({ product, onViewDetails }) => {
  const getCategoryColor = (category) => {
    const categoryLower = category.toLowerCase();
    if (categoryLower.includes('detergent') || categoryLower.includes('cosmetics')) {
      return 'bg-blue-500/20 text-blue-200 border-blue-400/30'
    } else if (categoryLower.includes('food') || categoryLower.includes('beverage') || categoryLower.includes('brewery')) {
      return 'bg-green-500/20 text-green-200 border-green-400/30'
    } else if (categoryLower.includes('water') || categoryLower.includes('treatment')) {
      return 'bg-purple-500/20 text-purple-200 border-purple-400/30'
    } else if (categoryLower.includes('textile')) {
      return 'bg-pink-500/20 text-pink-200 border-pink-400/30'
    } else if (categoryLower.includes('tannery') || categoryLower.includes('shoes')) {
      return 'bg-orange-500/20 text-orange-200 border-orange-400/30'
    } else if (categoryLower.includes('paint') || categoryLower.includes('pigment') || categoryLower.includes('solvents')) {
      return 'bg-yellow-500/20 text-yellow-200 border-yellow-400/30'
    } else {
      return 'bg-gray-500/20 text-gray-200 border-gray-400/30'
    }
  }

  const mapCategoryLabel = (category) => {
    if (!category) return ''
    const normalized = category.toUpperCase().trim()
    const base = normalized.replace(/\s*CHEMICALS\s*$/,'')
    const mapping = {
      'DETERGENT/COSMETICS': 'Detergents',
      'FOOD/BEVERAGE/BREWERY': 'Food Grade',
      'PAINT/PIGMENT AND SOLVENTS': 'Paints',
      'PLASTIC AND FOAM': 'Plastics',
      'TANNERY/SHOES': 'Leather',
      'TEXTILE': 'Textiles',
      'WATER TREATMENT': 'Water Treatment',
    }
    return mapping[base] || category.replace(/\s*CHEMICALS\s*/gi, '').trim()
  }

  const getCountryFlag = (country) => {
    if (!country) return '🌍'
    const countryMap = { 'usa': '🇺🇸', 'united states': '🇺🇸', 'us': '🇺🇸', 'germany': '🇩🇪', 'de': '🇩🇪', 'china': '🇨🇳', 'cn': '🇨🇳', 'japan': '🇯🇵', 'jp': '🇯🇵', 'india': '🇮🇳', 'in': '🇮🇳', 'uk': '🇬🇧', 'united kingdom': '🇬🇧', 'france': '🇫🇷', 'fr': '🇫🇷', 'italy': '🇮🇹', 'it': '🇮🇹', 'canada': '🇨🇦', 'ca': '🇨🇦', 'brazil': '🇧🇷', 'br': '🇧🇷', 'australia': '🇦🇺', 'au': '🇦🇺', 'dubai': '🇦🇪', 'uae': '🇦🇪', 'indonesia': '🇮🇩', 'id': '🇮🇩'}
    if (Array.isArray(country)) {
      const firstCountry = country[0]?.toLowerCase()
      return countryMap[firstCountry] || '🌍'
    }
    return countryMap[country.toLowerCase()] || '🌍'
  }

  const formatPackaging = (packaging) => Array.isArray(packaging) ? packaging.join(', ') : (packaging || 'Contact for details')
  const formatBrand = (brand) => Array.isArray(brand) ? brand.join(', ') : (brand || 'Various brands')
  const formatCountry = (country) => Array.isArray(country) ? country.join(', ') : (country || 'Multiple origins')

  const isExternalImage = (url) => {
    if (!url) return false
    const externalDomains = [
      'cdn.globalso.com','5.imimg.com','i0.wp.com','image.made-in-china.com','www.gopani.com',
      'www.chinabentonite.net','image.chukouplus.com','m.media-amazon.com','www.hatenboer-water.com'
    ]
    return externalDomains.some(domain => url.includes(domain))
  }

  // Parse categories from the new format
  const getCategories = () => {
    if (!product.Category) return [];
    return product.Category.split(',').map(cat => cat.trim());
  }

  const categories = getCategories();

  const handleCardClick = () => {
    onViewDetails(product);
  };

  return (
    <div className="relative group overflow-hidden rounded-xl shadow-md w-[calc(100%-110px)] cursor-pointer" onClick={handleCardClick}>
      {/* Image */}
      <div className="relative w-full h-[470px]">
        <div className="block w-full h-full">
          {isExternalImage(product.imageURL) ? (
            <img src={product.imageURL} alt={product["Product Name"]} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" onError={(e) => { e.target.src = 'https://via.placeholder.com/300x300?text=No+Image' }} />
          ) : (
            <Image src={`/products/${product["Image Path"]}`} alt={product["Product Name"]} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 560px" onError={(e) => { e.target.src = 'https://via.placeholder.com/300x300?text=No+Image' }} />
          )}
        </div>
      </div>

      {/* Category Badges - Show on hover at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-30 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <Badge key={index} className={`${getCategoryColor(category)} text-xs px-3 py-1 rounded-full border backdrop-blur-sm`}>
              {mapCategoryLabel(category)}
            </Badge>
          ))}
        </div>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 z-10"></div>

      {/* Details & Button (hidden off-canvas, slide up on hover) */}
      <div className="absolute bottom-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 bg-gradient-to-t from-black/60 to-transparent">
        <div className="flex items-center justify-between">
          <div className="text-sm text-white flex-1">
            <div><span className="font-medium text-blue-200">Brand:</span> <span className="ml-1">{formatBrand(product["Brand Name"])}</span></div>
            <div><span className="font-medium text-green-200">Origin:</span> <span className="ml-1">{formatCountry(product["Source Country"])}</span></div>
          </div>
          <div className="bg-orange-500/90 backdrop-blur-sm rounded-full p-3 hover:bg-orange-600/90 transition-all duration-300 hover:scale-110 ml-4 shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Product Name & Country (pushed up on hover) */}
      <div className="absolute bottom-0 w-full p-4 flex items-center justify-between text-white transition-transform duration-300 group-hover:-translate-y-20 z-20">
        <div className="flex-1">
          <h3 className="text-xl font-semibold">{product["Product Name"]}</h3>
        </div>
        <div className="text-2xl">{getCountryFlag(product["Source Country"])}</div>
      </div>
    </div>
  );
};

export default ProductCard;
