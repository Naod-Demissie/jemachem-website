import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Package, MapPin, Building2, Info } from 'lucide-react'
import Image from 'next/image'

const ProductDetail = ({ product, onBack }) => {
  if (!product) return null

  const getCategoryColor = (category) => {
    const categoryLower = category.toLowerCase();
    if (categoryLower.includes('detergent') || categoryLower.includes('cosmetics')) {
      return 'bg-blue-100 text-blue-800'
    } else if (categoryLower.includes('food') || categoryLower.includes('beverage') || categoryLower.includes('brewery')) {
      return 'bg-green-100 text-green-800'
    } else if (categoryLower.includes('water') || categoryLower.includes('treatment')) {
      return 'bg-purple-100 text-purple-800'
    } else if (categoryLower.includes('textile')) {
      return 'bg-pink-100 text-pink-800'
    } else if (categoryLower.includes('tannery') || categoryLower.includes('shoes')) {
      return 'bg-orange-100 text-orange-800'
    } else if (categoryLower.includes('paint') || categoryLower.includes('pigment') || categoryLower.includes('solvents')) {
      return 'bg-yellow-100 text-yellow-800'
    } else {
      return 'bg-gray-100 text-gray-800'
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

  const getCategories = () => {
    if (!product.Category) return [];
    return product.Category.split(',').map(cat => cat.trim());
  }

  const categories = getCategories();

  const formatBrand = (brand) => {
    if (!brand || brand.trim() === '') {
      return 'Various brands available'
    }
    return brand
  }

  const formatCountry = (country) => {
    if (!country || country.trim() === '') {
      return 'Multiple origins'
    }
    return country
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 relative flex min-h-[40vh] w-full overflow-hidden bg-[url('/laboratory-chemicals.webp')] bg-cover bg-center bg-no-repeat font-sans after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:bg-black/60 after:content-['']">
        <div className="relative z-30 m-auto flex max-w-[46.25rem] flex-col items-center justify-center gap-6 px-5">
          <h1 className="text-white text-center font-sans text-3xl leading-tight md:text-4xl lg:text-5xl max-w-4xl font-extrabold">
            {product["Product Name"]}
          </h1>
          <div className="flex flex-wrap gap-2 justify-center">
                          {categories.map((category, index) => (
                <Badge key={index} className={`${getCategoryColor(category)} text-xs px-3 py-1 rounded-full border backdrop-blur-sm`}>
                  {mapCategoryLabel(category)}
                </Badge>
              ))}
          </div>
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
                <div className="relative aspect-square max-h-[540px]">
                  <Image
                    src={`/products/${product["Image Path"]}`}
                    alt={product["Product Name"]}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 540px"
                    onError={(e) => {
                      // fallback not supported directly by next/image; keep container consistent
                    }}
                  />

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
                    {product.Description || 'High-quality chemical product suitable for various industrial, agricultural, and laboratory applications. Contact us for detailed specifications and technical data sheets.'}
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
                      <Building2 className="h-5 w-5 text-green-400 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white">Brand</h4>
                        <p className="text-gray-300 text-sm">{formatBrand(product["Brand Name"])}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-[#141416] rounded-lg border border-[#272729]">
                      <MapPin className="h-5 w-5 text-red-400 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white">Country of Origin</h4>
                        <p className="text-gray-300 text-sm">{formatCountry(product["Source Country"])}</p>
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
                        {product["Safety Notice"] || 'Please ensure proper handling and storage according to safety data sheets. Contact our technical team for safety guidelines and handling instructions.'}
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

