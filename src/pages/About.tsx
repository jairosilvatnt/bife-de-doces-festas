import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[400px]">
        <img
          src="https://img.usecurling.com/p/1600/900?q=pastry%20chef%20making%20dessert"
          alt="Chef fazendo doces"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-serif text-white font-bold">
            Nossa História
          </h1>
        </div>
      </div>

      <div className="container px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-bold uppercase tracking-wide text-sm">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-6">
              Tradição em criar momentos doces
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Fundado em 2010, o Bife de Doces nasceu da paixão pela confeitaria
              clássica e do desejo de levar mais sabor para celebrações
              especiais. O que começou como uma pequena produção caseira de
              brigadeiros gourmet, hoje é uma referência em catering de doces
              para grandes eventos em São Paulo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nossa missão é transformar açúcar em arte. Utilizamos apenas
              ingredientes de primeira linha, como chocolate belga, frutas
              frescas e castanhas selecionadas, garantindo uma experiência
              gastronômica inesquecível para você e seus convidados.
            </p>
            <Link to="/orcamento">
              <Button className="rounded-full">
                Fale Conosco <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://img.usecurling.com/p/400/600?q=making%20chocolate"
              className="rounded-lg w-full h-full object-cover mt-8"
              alt="Fazendo chocolate"
            />
            <img
              src="https://img.usecurling.com/p/400/600?q=decorating%20cake"
              className="rounded-lg w-full h-full object-cover"
              alt="Decorando bolo"
            />
          </div>
        </div>
      </div>

      <div className="bg-secondary/30 py-20">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-12">
            Nossos Diferenciais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="font-bold text-lg mb-2">Ingredientes Premium</h3>
              <p className="text-muted-foreground text-sm">
                Trabalhamos exclusivamente com marcas renomadas como Callebaut e
                Leite Moça.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="font-bold text-lg mb-2">Produção Artesanal</h3>
              <p className="text-muted-foreground text-sm">
                Cada doce é boleado e decorado à mão, garantindo acabamento
                perfeito.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="font-bold text-lg mb-2">Entrega Cuidadosa</h3>
              <p className="text-muted-foreground text-sm">
                Transporte refrigerado e montagem da mesa no local do evento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
