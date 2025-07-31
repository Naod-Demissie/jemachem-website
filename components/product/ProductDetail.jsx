import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Package, MapPin, Building2, Info } from 'lucide-react'

const ProductDetail = ({ product, onBack }) => {
  if (!product) return null

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
    return brand || 'Various brands available'
  }

  const formatCountry = (country) => {
    if (Array.isArray(country)) {
      return country.join(', ')
    }
    return country || 'Multiple origins'
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 relative flex min-h-[40vh] w-full overflow-hidden bg-[url('/laboratory-chemicals.png')] bg-cover bg-center bg-no-repeat font-sans after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:bg-black/60 after:content-['']">
        <div className="relative z-30 m-auto flex max-w-[46.25rem] flex-col items-center justify-center gap-6 px-5">
          <h1 className="text-white text-center font-sans text-3xl leading-tight md:text-4xl lg:text-5xl max-w-4xl font-extrabold">
            {product.item}
          </h1>
          <Badge className={`${getCategoryColor(product.category)} text-base px-4 py-2`}>
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Badge>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-16" style={{ backgroundColor: "#0c0c0c" }}>
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Product Image */}
            <div className="space-y-4">
              <Card className="overflow-hidden" style={{ backgroundColor: "#0c0c0c", borderColor: "#272729" }}>
                <div className="relative aspect-square">
                  <img
                    src={product.imageURL}
                    alt={product.item}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/600x600?text=No+Image+Available'
                    }}
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={getCategoryColor(product.category)}>
                      {product.category}
                    </Badge>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Product Information */}
            <div className="space-y-6">
              {/* Product Description */}
              <Card style={{ backgroundColor: "#0c0c0c", borderColor: "#272729" }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Info className="h-5 w-5" />
                    Product Description
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    {product.description || 'High-quality chemical product suitable for various industrial, agricultural, and laboratory applications. Contact us for detailed specifications and technical data sheets.'}
                  </p>
                </CardContent>
              </Card>

              {/* Product Specifications */}
              <Card style={{ backgroundColor: "#0c0c0c", borderColor: "#272729" }}>
                <CardHeader>
                  <CardTitle className="text-white">Product Specifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-3 bg-[#141416] rounded-lg border border-[#272729]">
                      <Package className="h-5 w-5 text-blue-400 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white">Packaging</h4>
                        <p className="text-gray-300 text-sm">{formatPackaging(product.packaging)}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-[#141416] rounded-lg border border-[#272729]">
                      <Building2 className="h-5 w-5 text-green-400 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white">Brand</h4>
                        <p className="text-gray-300 text-sm">{formatBrand(product.brand)}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-[#141416] rounded-lg border border-[#272729] sm:col-span-2">
                      <MapPin className="h-5 w-5 text-red-400 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white">Country of Origin</h4>
                        <p className="text-gray-300 text-sm">{formatCountry(product.country)}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Safety Information */}
              <Card className="border-orange-200" style={{ backgroundColor: "#0c0c0c" }}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-500/20 p-2 rounded-full">
                      <Info className="h-4 w-4 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-400 mb-1">Safety Notice</h4>
                      <p className="text-gray-300 text-sm">
                        Please ensure proper handling and storage according to safety data sheets. 
                        Contact our technical team for safety guidelines and handling instructions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail

