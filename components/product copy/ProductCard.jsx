import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const ProductCard = ({ product, onViewDetails }) => {
  const getCategoryColor = (category) => {
    switch (category) {
      case 'industrial':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200'
      case 'agrochemical':
        return 'bg-green-100 text-green-800 hover:bg-green-200'
      case 'laboratory':
        return 'bg-purple-100 text-purple-800 hover:bg-purple-200'
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200'
    }
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

  return (
    <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.imageURL}
          alt={product.item}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x300?text=No+Image'
          }}
        />
        <div className="absolute top-3 right-3">
          <Badge className={getCategoryColor(product.category)}>
            {product.category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4 flex-1">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.item}
        </h3>
        
        <div className="space-y-2 text-sm text-gray-600">
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
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={() => onViewDetails(product)}
          className="w-full group/btn"
          variant="outline"
        >
          View Details
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProductCard

