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
      <div className="absolute inset-0 flex items-end justify-between p-4 z-20 text-white">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{product.item}</h3>
          <div className="text-sm opacity-90">{getCountryFlag(product.country)}</div>
          
          {/* Hidden details that appear on hover */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3 space-y-1 text-sm">
            <div>
              <span className="font-medium">Packaging:</span> {formatPackaging(product.packaging)}
            </div>
            <div>
              <span className="font-medium">Brand:</span> {formatBrand(product.brand)}
            </div>
            <div>
              <span className="font-medium">Origin:</span> {formatCountry(product.country)}
            </div>
          </div>
        </div>
        
        <div 
          className="cursor-pointer"
          onClick={() => onViewDetails(product)}
        >
          <i className="las la-long-arrow-alt-right text-3xl" />
        </div>
      </div>
    </div>
  )
}

export default ProductCard

