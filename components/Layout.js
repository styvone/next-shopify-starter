import { CartProvider } from '@/context/Store'
import Nav from '@/components/Nav'
import InstagramReel from './InstagramReel'
import Footer from '@/components/Footer'
import GentleAndRestorative from './GentleAndRestorative'

function Layout(props) {
  
  return (
    <CartProvider>
      <div style={{ backgroundColor: props.backgroundColor }} className="flex flex-col justify-between min-h-screen">
        <Nav logoGray={props.logoGray}/>

        <main>
          {props.children}
        </main>
        
        <GentleAndRestorative />
        <InstagramReel />
        <Footer />
      </div>
    </CartProvider>
  )
}

export default Layout
