export interface Product {
  id: string
  name: string
  description: string
  price?: number
  category: 'tradicional' | 'fino' | 'bombom' | 'copinho' | 'bolo'
  imageUrl: string
  minOrder: number
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Testimonial {
  id: string
  name: string
  event: string
  content: string
  avatarUrl: string
}

export interface GalleryItem {
  id: string
  src: string
  category: string
  title: string
  description: string
}
