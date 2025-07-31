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
    
    const countryMap = {
      'usa': '🇺🇸',
      'united states': '🇺🇸',
      'us': '🇺🇸',
      'germany': '🇩🇪',
      'de': '🇩🇪',
      'china': '🇨🇳',
      'cn': '🇨🇳',
      'japan': '🇯🇵',
      'jp': '🇯🇵',
      'india': '🇮🇳',
      'in': '🇮🇳',
      'uk': '🇬🇧',
      'united kingdom': '🇬🇧',
      'france': '🇫🇷',
      'fr': '🇫🇷',
      'italy': '🇮🇹',
      'it': '🇮🇹',
      'canada': '🇨🇦',
      'ca': '🇨🇦',
      'brazil': '🇧🇷',
      'br': '🇧🇷',
      'australia': '🇦🇺',
      'au': '🇦🇺'
    }

    if (Array.isArray(country)) {
      const firstCountry = country[0]?.toLowerCase()
      return countryMap[firstCountry] || '🌍'
    }
    
    const countryLower = country.toLowerCase()
    return countryMap[countryLower] || '🌍'
  }

  const formatPackaging = (packaging) => {
    if (Array.isArray(packaging)) {
      return packaging.join(', ')
    }
    return packaging || 'Contact for details'
  }

  const formatBrand = (brand) => {
    if (Array.isArray(brand)) {
      return brand.join(', ')
    }
    return brand || 'Various brands'
  }

  const formatCountry = (country) => {
    if (Array.isArray(country)) {
      return country.join(', ')
    }
    return country || 'Multiple origins'
  }

  // Check if the image URL is from an external domain that might not be configured
  const isExternalImage = (url) => {
    if (!url) return false
    const externalDomains = [
      'cdn.globalso.com',
      '5.imimg.com',
      'i0.wp.com',
      'image.made-in-china.com',
      'www.gopani.com',
      'www.chinabentonite.net',
      'image.chukouplus.com',
      'm.media-amazon.com',
      'www.hatenboer-water.com'
    ]
    return externalDomains.some(domain => url.includes(domain))
  }

  return (
    <div className="relative group overflow-hidden rounded-xl shadow-md">
      <div className="relative w-full h-[400px]">
        <div className="block w-full h-full cursor-pointer" onClick={() => onViewDetails(product)}>
          {isExternalImage(product.imageURL) ? (
            // Use regular img tag for external images to avoid Next.js hostname restrictions
            <img
              src={product.imageURL}
              alt={product.item}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x300?text=No+Image'
              }}
            />
          ) : (
            // Use Next.js Image component for internal/configured images
            <Image
              src={product.imageURL}
              alt={product.item}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 560px"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x300?text=No+Image'
              }}
            />
          )}
        </div>
      </div>

      {/* Category Badge */}
      <div className="absolute top-3 right-3 z-30">
        <Badge className={getCategoryColor(product.category)}>
          {product.category}
        </Badge>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300 z-10"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 z-20 text-white">
        {/* Product details - hidden initially, slide up on hover */}
        <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 mb-3 space-y-2 text-sm">
          <div>
            <span className="font-medium text-blue-200">Packaging:</span> 
            <span className="ml-1">{formatPackaging(product.packaging)}</span>
          </div>
          <div>
            <span className="font-medium text-green-200">Brand:</span> 
            <span className="ml-1">{formatBrand(product.brand)}</span>
          </div>
          <div>
            <span className="font-medium text-purple-200">Origin:</span> 
            <span className="ml-1">{formatCountry(product.country)}</span>
          </div>
        </div>

        {/* Arrow button - hidden initially, appears on hover */}
        <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 mb-3 flex justify-end">
          <div 
            className="cursor-pointer bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300 hover:scale-110"
            onClick={() => onViewDetails(product)}
          >
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </div>
        </div>

        {/* Product name and country emoji - at bottom initially, pushed up on hover */}
        <div className="flex items-center justify-between group-hover:-translate-y-2 transition-transform duration-300">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">{product.item}</h3>
            <div className="text-2xl">{getCountryFlag(product.country)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

