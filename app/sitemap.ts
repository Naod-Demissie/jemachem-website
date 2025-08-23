import { MetadataRoute } from 'next'
import products from './products/products.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jemachem.com'

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/Jemachem Product Brochure.pdf`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  type ProductItem = { ID: string };

  const productRoutes: MetadataRoute.Sitemap = Array.isArray(products)
    ? (products as ProductItem[])
        .filter((p) => p && typeof p.ID === 'string' && p.ID.trim().length > 0)
        .map((p) => ({
          url: `${baseUrl}/products/${p.ID}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.7,
        }))
    : []

  return [...staticRoutes, ...productRoutes]
}
