import { useState } from 'react'
import { Plus, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Product } from '@/lib/types'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface ProductCardProps {
  product: Product
  featured?: boolean
}

export function ProductCard({ product, featured = false }: ProductCardProps) {
  const { addItem } = useCart()
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <Card
      className={cn(
        'group relative overflow-hidden border-none shadow-sm hover:shadow-elevation transition-all duration-300 bg-white',
        featured ? 'h-full' : '',
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className={cn(
            'absolute inset-0 bg-black/20 transition-opacity duration-300',
            isHovered ? 'opacity-100' : 'opacity-0',
          )}
        />

        <Button
          variant="ghost"
          size="icon"
          className={cn(
            'absolute top-3 right-3 rounded-full bg-white/80 hover:bg-white text-primary transition-all duration-300',
            isFavorite ? 'fill-primary' : '',
          )}
          onClick={(e) => {
            e.preventDefault()
            setIsFavorite(!isFavorite)
          }}
        >
          <Heart className={cn('w-5 h-5', isFavorite ? 'fill-current' : '')} />
        </Button>
      </div>

      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <div>
            <Badge
              variant="secondary"
              className="mb-2 text-xs font-normal uppercase tracking-wider text-muted-foreground"
            >
              {product.category}
            </Badge>
            <h3 className="font-serif text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-2">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Mínimo: {product.minOrder} unidades
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:translate-y-0"
          onClick={() => addItem(product)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Adicionar ao Orçamento
        </Button>
      </CardFooter>
    </Card>
  )
}
