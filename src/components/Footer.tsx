import { Facebook, Instagram, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-white border-t border-border/50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-primary italic">
              Bife de Doces
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transformando momentos especiais em memórias doces e
              inesquecíveis. Confeitaria artesanal com amor em cada detalhe.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-foreground">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="hover:text-primary transition-colors"
                >
                  Menu de Doces
                </Link>
              </li>
              <li>
                <Link
                  to="/galeria"
                  className="hover:text-primary transition-colors"
                >
                  Galeria
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="hover:text-primary transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-foreground">
              Contato
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>contato@bifedewdoces.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-foreground">
              Siga-nos
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Bife de Doces Festas. Todos os direitos
            reservados.
          </p>
          <p className="mt-2">Feito com amor ❤️ e açúcar.</p>
        </div>
      </div>
    </footer>
  )
}
