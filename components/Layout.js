import { CartProvider } from '@/context/Store'
import Nav from '@/components/Nav'
import InstagramReel from './InstagramReel'
import Footer from '@/components/Footer'

function Layout(props) {
  
  return (
    <CartProvider>
      <div style={{ backgroundColor: props.backgroundColor }} className="flex flex-col justify-between min-h-screen">
        <Nav logoGray={props.logoGray} isHomePage={props.isHomePage}/>

        <main>
          {props.children}
        </main>
        
        <InstagramReel />
        <Footer />
      </div>
    </CartProvider>
  )
}

export default Layout
