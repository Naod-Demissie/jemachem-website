"use client";

import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, Filter } from 'lucide-react'
import ProductCard from './ProductCard'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

const ProductGrid = ({ products }) => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  const categories = [
    { value: 'all', label: 'All Categories', count: products.length },
    { value: 'industrial', label: 'Industrial', count: products.filter(p => p.category === 'industrial').length },
    { value: 'agrochemical', label: 'Agrochemical', count: products.filter(p => p.category === 'agrochemical').length },
    { value: 'laboratory', label: 'Laboratory', count: products.filter(p => p.category === 'laboratory').length },
  ]

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.item.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (product.brand && product.brand.toString().toLowerCase().includes(searchTerm.toLowerCase())) ||
                           (product.country && product.country.toString().toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [products, searchTerm, selectedCategory])

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProducts = filteredProducts.slice(startIndex, endIndex)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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

  // Reset to first page when filters change
  useMemo(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedCategory])

  return (
    <div className="space-y-6">

      {/* Search Bar */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="text"
          placeholder="Search products, brands, or countries..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 bg-[#141416] border-[#272729] text-white placeholder:text-gray-400"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <Badge
            key={category.value}
            variant={selectedCategory === category.value ? "default" : "outline"}
            className={`cursor-pointer px-4 py-2 text-sm font-medium transition-all duration-200 ${
              selectedCategory === category.value 
                ? 'bg-orange-500 text-white hover:bg-orange-600'
                : 'bg-[#141416] border-[#272729] text-white hover:bg-[#272729]'
            }`}
            onClick={() => setSelectedCategory(category.value)}
          >
            <Filter className="mr-2 h-3 w-3" />
            {category.label} ({category.count})
          </Badge>
        ))}
      </div>

      {/* Results Summary */}
      <div className="text-center text-gray-300">
        Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} products
      </div>

      {/* Product Grid */}
      {currentProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 justify-items-center">
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={(product) => router.push(`/products/${product.id}`)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-300 mb-2">No products found</h3>
          <p className="text-gray-400">Try adjusting your search terms or filters</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer text-white hover:text-orange-500'}
                />
              </PaginationItem>
              
              {[...Array(totalPages)].map((_, index) => {
                const page = index + 1
                const isCurrentPage = page === currentPage
                const shouldShow = page === 1 || page === totalPages || 
                                 (page >= currentPage - 1 && page <= currentPage + 1)
                
                if (!shouldShow) {
                  if (page === currentPage - 2 || page === currentPage + 2) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationEllipsis className="text-gray-400" />
                      </PaginationItem>
                    )
                  }
                  return null
                }
                
                return (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => handlePageChange(page)}
                      isActive={isCurrentPage}
                      className={`cursor-pointer ${
                        isCurrentPage 
                          ? 'bg-orange-500 text-white hover:bg-orange-600' 
                          : 'text-white hover:text-orange-500'
                      }`}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              })}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer text-white hover:text-orange-500'}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  )
}

export default ProductGrid

