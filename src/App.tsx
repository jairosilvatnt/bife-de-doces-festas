import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Index from './pages/Index'
import Menu from './pages/Menu'
import Gallery from './pages/Gallery'
import Quote from './pages/Quote'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'

const App = () => (
  <BrowserRouter
    future={{ v7_startTransition: false, v7_relativeSplatPath: false }}
  >
    <TooltipProvider>
      <Toaster />
      <Sonner position="top-center" />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/orcamento" element={<Quote />} />
          <Route path="/sobre" element={<About />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </BrowserRouter>
)

export default App
