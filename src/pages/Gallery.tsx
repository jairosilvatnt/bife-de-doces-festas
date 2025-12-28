import { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { X } from 'lucide-react'

const galleryItems = [
  {
    id: '1',
    src: 'https://img.usecurling.com/p/800/1000?q=wedding%20candy%20table',
    category: 'Casamento',
    title: 'Casamento Maria & João',
    desc: 'Mesa clássica com tons de branco e dourado.',
  },
  {
    id: '2',
    src: 'https://img.usecurling.com/p/800/600?q=kids%20party%20desserts',
    category: 'Infantil',
    title: 'Aniversário Mundo Bita',
    desc: 'Colorido e divertido, com muitos doces temáticos.',
  },
  {
    id: '3',
    src: 'https://img.usecurling.com/p/800/1200?q=chocolate%20fountain',
    category: 'Corporativo',
    title: 'Festa de Fim de Ano',
    desc: 'Cascata de chocolate e frutas frescas.',
  },
  {
    id: '4',
    src: 'https://img.usecurling.com/p/800/800?q=macarons%20tower',
    category: 'Casamento',
    title: 'Torre de Macarons',
    desc: 'Um toque francês para a celebração.',
  },
  {
    id: '5',
    src: 'https://img.usecurling.com/p/800/600?q=birthday%20cake%20luxury',
    category: 'Aniversário',
    title: '15 Anos Dourado',
    desc: 'Bolo de 5 andares com flores de açúcar.',
  },
  {
    id: '6',
    src: 'https://img.usecurling.com/p/800/900?q=dessert%20buffet',
    category: 'Corporativo',
    title: 'Coffee Break Premium',
    desc: 'Mini tartalettes e doces finos para reunião.',
  },
]

export default function Gallery() {
  const [filter, setFilter] = useState('Todos')
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryItems)[0] | null
  >(null)

  const filters = [
    'Todos',
    'Casamento',
    'Infantil',
    'Aniversário',
    'Corporativo',
  ]

  const filteredItems =
    filter === 'Todos'
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter)

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Galeria de Eventos
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Inspire-se com fotos reais de eventos que tivemos o prazer de
            adoçar.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === f
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-white text-muted-foreground hover:bg-secondary'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <Badge className="self-start mb-2 bg-white/20 hover:bg-white/30 text-white border-none">
                  {item.category}
                </Badge>
                <h3 className="text-white font-serif font-bold text-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog
          open={!!selectedImage}
          onOpenChange={(open) => !open && setSelectedImage(null)}
        >
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none text-white">
            <div className="relative bg-black/90 rounded-xl overflow-hidden flex flex-col md:flex-row">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors md:hidden"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex-1 bg-black flex items-center justify-center">
                {selectedImage && (
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="max-h-[80vh] w-auto object-contain"
                  />
                )}
              </div>
              <div className="w-full md:w-80 bg-white text-foreground p-6 md:p-8 flex flex-col justify-center">
                {selectedImage && (
                  <>
                    <Badge className="self-start mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                      {selectedImage.category}
                    </Badge>
                    <h2 className="font-serif text-2xl font-bold mb-4">
                      {selectedImage.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedImage.desc}
                    </p>
                    <div className="mt-8 pt-6 border-t border-border">
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-2">
                        Gostou?
                      </p>
                      <p className="text-sm">
                        Peça um orçamento com referência a este evento.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
