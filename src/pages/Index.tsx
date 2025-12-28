import { Link } from 'react-router-dom'
import { ArrowRight, Star, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/ProductCard'
import { Product, Testimonial } from '@/lib/types'
import { cn } from '@/lib/utils'

// Mock Data
const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Brigadeiro Belga ao Leite',
    description:
      'O clássico elevado à perfeição com chocolate belga Callebaut e granulados premium.',
    category: 'tradicional',
    imageUrl: 'https://img.usecurling.com/p/400/400?q=brigadeiro%20gourmet',
    minOrder: 25,
  },
  {
    id: '2',
    name: 'Camafeu de Nozes',
    description:
      'Doce fino tradicional coberto com fondant artesanal e decorado com noz inteira.',
    category: 'fino',
    imageUrl: 'https://img.usecurling.com/p/400/400?q=walnut%20candy%20white',
    minOrder: 20,
  },
  {
    id: '3',
    name: 'Tartalette de Limão Siciliano',
    description:
      'Base crocante de sablé com creme suave de limão siciliano e merengue maçaricado.',
    category: 'fino',
    imageUrl: 'https://img.usecurling.com/p/400/400?q=lemon%20tart',
    minOrder: 15,
  },
  {
    id: '4',
    name: 'Bombom de Morango',
    description:
      'Morango fresco inteiro envolto em brigadeiro branco e banhado no chocolate.',
    category: 'bombom',
    imageUrl:
      'https://img.usecurling.com/p/400/400?q=strawberry%20chocolate%20truffle',
    minOrder: 20,
  },
]

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Mariana & Pedro',
    event: 'Casamento',
    content:
      'Os doces foram o ponto alto da nossa festa! Todos os convidados elogiaram a delicadeza e o sabor. O camafeu estava divino!',
    avatarUrl: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1',
  },
  {
    id: '2',
    name: 'Patrícia Souza',
    event: 'Aniversário de 15 anos',
    content:
      'Atendimento impecável desde o primeiro contato. A mesa de doces ficou maravilhosa, parecia um sonho. Recomendo muito!',
    avatarUrl: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=2',
  },
  {
    id: '3',
    name: 'Empresa TechSolution',
    event: 'Evento Corporativo',
    content:
      'Profissionalismo e qualidade. Os kits individuais para o nosso evento de final de ano foram um sucesso.',
    avatarUrl: 'https://img.usecurling.com/ppl/thumbnail?gender=male',
  },
]

export default function Index() {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://img.usecurling.com/p/1920/1080?q=wedding%20dessert%20table%20elegant"
            alt="Mesa de doces luxuosa"
            className="w-full h-full object-cover animate-zoom-in-slow"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>

        <div className="container relative z-10 px-4 text-center text-white">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm mb-6 animate-fade-in-down">
            Confeitaria Artesanal Premium
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-shadow-md animate-fade-in-up">
            Momentos Inesquecíveis <br /> Pedem Sabores Marcantes
          </h1>
          <p
            className="font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/90 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Buffet de doces artesanais exclusivo para casamentos, festas
            infantis e eventos corporativos.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <Link to="/menu">
              <Button
                size="lg"
                className="rounded-full px-8 text-base bg-primary hover:bg-primary/90 text-white w-full sm:w-auto shadow-lg hover:shadow-xl transition-all"
              >
                Ver Cardápio
              </Button>
            </Link>
            <Link to="/orcamento">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 text-base bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto"
              >
                Pedir Orçamento
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Especialidades
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Casamentos',
                img: 'https://img.usecurling.com/p/600/800?q=wedding%20cake%20luxury',
                desc: 'Elegância e sofisticação para o seu grande dia.',
              },
              {
                title: 'Festas Infantis',
                img: 'https://img.usecurling.com/p/600/800?q=kids%20party%20candy',
                desc: 'Cores e sabores que encantam as crianças.',
              },
              {
                title: 'Eventos Corporativos',
                img: 'https://img.usecurling.com/p/600/800?q=corporate%20event%20food',
                desc: 'Impressione seus clientes e colaboradores.',
              },
            ].map((cat, idx) => (
              <Link to="/menu" key={idx} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <h3 className="font-serif text-2xl font-bold text-white mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-white/80 text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      {cat.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
                Nossos Favoritos
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
                Os Queridinhos
              </h2>
            </div>
            <Link
              to="/menu"
              className="hidden md:flex items-center text-primary font-medium hover:underline"
            >
              Ver cardápio completo <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/menu">
              <Button variant="outline" className="rounded-full">
                Ver todos os doces
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="container px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que dizem nossos clientes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Histórias reais de momentos que ajudamos a tornar mais doces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-foreground/80 italic mb-6 leading-relaxed">
                  "{item.content}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-sm">{item.name}</h4>
                    <span className="text-xs text-muted-foreground">
                      {item.event}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Newsletter */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-dots" />
        <div className="container px-4 text-center relative z-10">
          <Instagram className="w-12 h-12 mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
            Acompanhe nossas doçuras
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-10 text-lg">
            Siga nosso Instagram para inspirações diárias, bastidores da nossa
            produção e dicas para sua festa.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full px-8 text-primary font-bold hover:bg-white"
          >
            Seguir no Instagram
          </Button>
        </div>
      </section>
    </div>
  )
}
