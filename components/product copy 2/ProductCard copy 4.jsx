import Image from "next/image";
import Link from "next/link";
import { Badge } from '@/components/ui/badge'

const ProductCard = ({ product, onViewDetails }) => {
  const getCategoryColor = (category) => {
    switch (category) {
      case 'industrial':
        return 'bg-blue-100 text-blue-800'
      case 'agrochemical':
        return 'bg-green-100 text-green-800'
      case 'laboratory':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getCountryFlag = (country) => {
    if (!country) return '🌍'
    const countryMap = { 'usa': '🇺🇸', 'united states': '🇺🇸', 'us': '🇺🇸', 'germany': '🇩🇪', 'de': '🇩🇪', 'china': '🇨🇳', 'cn': '🇨🇳', 'japan': '🇯🇵', 'jp': '🇯🇵', 'india': '🇮🇳', 'in': '🇮🇳', 'uk': '🇬🇧', 'united kingdom': '🇬🇧', 'france': '🇫🇷', 'fr': '🇫🇷', 'italy': '🇮🇹', 'it': '🇮🇹', 'canada': '🇨🇦', 'ca': '🇨🇦', 'brazil': '🇧🇷', 'br': '🇧🇷', 'australia': '🇦🇺', 'au': '🇦🇺'}
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

  return (
    <div className="relative group overflow-hidden rounded-xl shadow-md">
      {/* Image */}
      <div className="relative w-full h-[400px]">
        <div className="block w-full h-full cursor-pointer" onClick={() => onViewDetails(product)}>
          {isExternalImage(product.imageURL) ? (
            <img src={product.imageURL} alt={product.item} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" onError={(e) => { e.target.src = 'https://via.placeholder.com/300x300?text=No+Image' }} />
          ) : (
            <Image src={product.imageURL} alt={product.item} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 560px" onError={(e) => { e.target.src = 'https://via.placeholder.com/300x300?text=No+Image' }} />
          )}
        </div>
      </div>

      {/* Category Badge */}
      <div className="absolute top-3 right-3 z-30">
        <Badge className={getCategoryColor(product.category)}>
          {product.category}
        </Badge>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300 z-10"></div>

      {/* Details & Button (hidden off-canvas, slide up on hover) */}
      <div className="absolute bottom-0 w-full p-4 space-y-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 bg-gradient-to-t from-black/60 to-transparent">
        <div className="text-sm text-white">
          <div><span className="font-medium text-blue-200">Packaging:</span> <span className="ml-1">{formatPackaging(product.packaging)}</span></div>
          <div><span className="font-medium text-green-200">Brand:</span> <span className="ml-1">{formatBrand(product.brand)}</span></div>
          <div><span className="font-medium text-purple-200">Origin:</span> <span className="ml-1">{formatCountry(product.country)}</span></div>
        </div>
        <div className="flex justify-end">
          <div onClick={() => onViewDetails(product)} className="cursor-pointer bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300 hover:scale-110">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Product Name & Country (pushed up on hover) */}
      <div className="absolute bottom-0 w-full p-4 flex items-center justify-between text-white transition-transform duration-300 group-hover:-translate-y-36 z-20">
        <div className="flex-1">
          <h3 className="text-xl font-semibold">{product.item}</h3>
        </div>
        <div className="text-2xl">{getCountryFlag(product.country)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
