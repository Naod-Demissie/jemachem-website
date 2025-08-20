"use client";

import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import ProductCard from './ProductCard'
import Dropdown from '@/components/ui/dropdown'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { motion } from 'framer-motion'

const ProductGrid = ({ products }) => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
  }

  // Extract all unique categories from products
  const allCategories = useMemo(() => {
    const categorySet = new Set();
    products.forEach(product => {
      if (product.Category) {
        const categories = product.Category.split(',').map(cat => cat.trim());
        categories.forEach(cat => categorySet.add(cat));
      }
    });
    return Array.from(categorySet).sort();
  }, [products]);

  // Function to convert text to title case
  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  // Create category options for dropdown
  const categoryOptions = useMemo(() => {
    const options = [
      { value: 'all', label: 'All Categories', count: products.length }
    ];

    allCategories.forEach(category => {
      const count = products.filter(product => {
        if (!product.Category) return false;
        const productCategories = product.Category.split(',').map(cat => cat.trim());
        return productCategories.includes(category);
      }).length;
      
      options.push({
        value: category,
        label: toTitleCase(category.replace(/\s*CHEMICALS\s*/gi, '').trim()),
        count
      });
    });

    return options;
  }, [products, allCategories]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product["Product Name"]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (product["Brand Name"] && product["Brand Name"].toString().toLowerCase().includes(searchTerm.toLowerCase())) ||
                           (product["Source Country"] && product["Source Country"].toString().toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'all' || 
        (product.Category && product.Category.split(',').map(cat => cat.trim()).includes(selectedCategory))
      
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

  // Reset to first page when filters change
  useMemo(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedCategory])

  return (
    <div className="space-y-6">

      {/* Search and Filter Row */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        {/* Search Bar */}
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search products, brands, or countries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 bg-[#141416] border-[#272729] text-white placeholder:text-gray-400"
          />
        </div>

        {/* Category Dropdown */}
        <div className="w-full sm:w-64">
          <Dropdown
            options={categoryOptions}
            value={selectedCategory}
            onChange={setSelectedCategory}
            placeholder="Select Category"
            className="w-full"
          />
        </div>
      </div>

      {/* Results Summary */}
      <div className="text-center text-gray-300">
        Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} products
      </div>

      {/* Product Grid */}
      {currentProducts.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-4 gap-x-0 justify-items-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {currentProducts.map((product) => (
            <motion.div key={product.ID} variants={fadeInUp} className="w-full flex justify-center">
              <ProductCard
                product={product}
                onViewDetails={(product) => router.push(`/products/${product.ID}`)}
              />
            </motion.div>
          ))}
        </motion.div>
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
                      className={`cursor-pointer transition-all duration-200 flex items-center justify-center ${
                        isCurrentPage
                          ? 'w-10 h-10 rounded-full border bg-orange-500 text-white hover:bg-orange-600 border-orange-500'
                          : 'h-10 px-3 text-white hover:text-orange-500'
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

