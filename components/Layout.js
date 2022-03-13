import { CartProvider } from '@/context/Store'
import Nav from '@/components/Nav'
import InstagramReel from './InstagramReel'
import Footer from '@/components/Footer'
import GentleAndRestorative from './GentleAndRestorative'
import Accordian from './Accordian'

function Layout({ children }) {
  
  return (
    <CartProvider>
      <div className="flex flex-col justify-between min-h-screen">
        <Nav />

        <main>
          {children}
        </main>

        <Accordian />

        <GentleAndRestorative />
        <InstagramReel />
        <Footer />
      </div>
    </CartProvider>
  )
}

export default Layout
