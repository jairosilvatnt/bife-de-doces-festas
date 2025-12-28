import { useState } from 'react'
import { Search, Filter } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/ProductCard'
import { Product } from '@/lib/types'
import { cn } from '@/lib/utils'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

// Mock Data for Menu
const products: Product[] = [
  {
    id: '1',
    name: 'Brigadeiro Belga',
    description: 'Chocolate belga ao leite',
    category: 'tradicional',
    imageUrl: 'https://img.usecurling.com/p/400/400?q=brigadeiro',
    minOrder: 25,
  },
  {
    id: '2',
    name: 'Beijinho de Coco',
    description: 'Coco fresco ralado e cravo',
    category: 'tradicional',
    imageUrl: 'https://img.usecurling.com/p/400/400?q=coconut%20kiss%20candy',
    minOrder: 25,
  },
  {
    id: '3',
    name: 'Camafeu de Nozes',
    description: 'Fondant e nozes',
    category: 'fino',
    imageUrl: 'https://img.usecurling.com/p/400/400?q=walnut%20candy',
    minOrder: 20,
  },
  {
    id: '4',
    name: 'Trufa de Maracujá',
    description: 'Chocolate branco e maracujá',
    category: 'bombom',
    imageUrl:
      'https://img.usecurling.com/p/400/400?q=passion%20fruit%20truffle',
    minOrder: 20,
  },
  {
    id: '5',
    name: 'Copinho de Physalis',
    description: 'Chocolate e creme de physalis',
    category: 'copinho',
    imageUrl:
      'https://img.usecurling.com/p/400/400?q=physalis%20chocolate%20cup',
    minOrder: 15,
  },
  {
    id: '6',
    name: 'Mini Naked Cake',
    description: 'Bolo pelado com frutas vermelhas',
    category: 'bolo',
    imageUrl: 'https://img.usecurling.com/p/400/400?q=mini%20naked%20cake',
    minOrder: 10,
  },
  {
    id: '7',
    name: 'Brigadeiro de Pistache',
    description: 'Pistache importado',
    category: 'fino',
    imageUrl: 'https://img.usecurling.com/p/400/400?q=pistachio%20brigadeiro',
    minOrder: 20,
  },
  {
    id: '8',
    name: 'Bombom de Cereja',
    description: 'Cereja ao licor',
    category: 'bombom',
    imageUrl: 'https://img.usecurling.com/p/400/400?q=cherry%20bonbon',
    minOrder: 20,
  },
  {
    id: '9',
    name: 'Casadinho',
    description: 'Brigadeiro preto e branco',
    category: 'tradicional',
    imageUrl: 'https://img.usecurling.com/p/400/400?q=black%20white%20candy',
    minOrder: 25,
  },
  {
    id: '10',
    name: 'Ourico de Coco',
    description: 'Coco queimado',
    category: 'tradicional',
    imageUrl: 'https://img.usecurling.com/p/400/400?q=coconut%20candy',
    minOrder: 25,
  },
]

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'tradicional', label: 'Tradicionais' },
  { id: 'fino', label: 'Doces Finos' },
  { id: 'bombom', label: 'Bombons' },
  { id: 'copinho', label: 'Copinhos' },
  { id: 'bolo', label: 'Bolos' },
]

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Nosso Cardápio
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore nossa seleção de doces artesanais, feitos com ingredientes
            selecionados e muito amor.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden lg:block w-64 sticky top-28 bg-white p-6 rounded-2xl shadow-sm border border-border">
            <h3 className="font-serif font-bold text-xl mb-6">Categorias</h3>
            <div className="flex flex-col gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={cn(
                    'text-left py-2 px-4 rounded-lg transition-colors text-sm font-medium',
                    selectedCategory === cat.id
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'hover:bg-secondary text-muted-foreground',
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 w-full">
            {/* Search and Mobile Filter */}
            <div className="flex gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Buscar sabores..."
                  className="pl-10 bg-white border-border"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden">
                    <Filter className="w-4 h-4 mr-2" /> Filtros
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader className="mb-6">
                    <SheetTitle>Filtrar por Categoria</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={cn(
                          'text-left py-3 px-4 rounded-lg transition-colors font-medium',
                          selectedCategory === cat.id
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-secondary text-muted-foreground',
                        )}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-muted/20 rounded-2xl">
                <p className="text-muted-foreground">
                  Nenhum doce encontrado com esses filtros.
                </p>
                <Button
                  variant="link"
                  onClick={() => {
                    setSelectedCategory('all')
                    setSearchQuery('')
                  }}
                >
                  Limpar filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
