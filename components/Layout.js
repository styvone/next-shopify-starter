import { CartProvider } from '@/context/Store'
import Nav from '@/components/Nav'
import InstagramReel from './InstagramReel'
import Footer from '@/components/Footer'
import GentleAndRestorative from './GentleAndRestorative'
import ImageTagSection from './ImageTagSection'

function Layout({ children }) {
  
  return (
    <CartProvider>
      <div className="flex flex-col justify-between min-h-screen">
        <Nav />

        <main>
          {children}
        </main>

        {/* <AccordianItem question="hi" answer="sup" /> */}

        
        <GentleAndRestorative />
        <InstagramReel />
        <Footer />
      </div>
    </CartProvider>
  )
}

export default Layout
