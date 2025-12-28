import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { useEffect } from 'react'
import { CartProvider } from '@/context/CartContext'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen bg-background font-body text-foreground">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
