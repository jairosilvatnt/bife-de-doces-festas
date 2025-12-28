import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const { items } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu de Doces', path: '/menu' },
    { name: 'Galeria', path: '/galeria' },
    { name: 'Sobre Nós', path: '/sobre' },
  ]

  const itemCount = items.length

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'glass h-16 shadow-subtle' : 'bg-transparent h-24',
      )}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="text-2xl md:text-3xl font-serif font-bold text-primary italic">
            Bife de Doces
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                location.pathname === link.path
                  ? 'text-primary font-bold'
                  : 'text-foreground/80',
              )}
            >
              {link.name}
            </Link>
          ))}

          <Link to="/orcamento">
            <Button
              variant="default"
              className="rounded-full px-6 shadow-lg hover:scale-105 transition-transform bg-primary text-primary-foreground"
            >
              Solicitar Orçamento
              {itemCount > 0 && (
                <Badge
                  variant="secondary"
                  className="ml-2 bg-white/20 hover:bg-white/30 text-white border-none"
                >
                  {itemCount}
                </Badge>
              )}
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          <Link to="/orcamento" className="relative">
            <ShoppingBag className="w-6 h-6 text-foreground/80" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-background/95 backdrop-blur-xl border-l border-primary/10"
            >
              <nav className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/orcamento" className="mt-4">
                  <Button className="w-full rounded-full">
                    Solicitar Orçamento
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
