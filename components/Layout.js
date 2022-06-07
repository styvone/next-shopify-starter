import { CartProvider } from '@/context/Store';
import Nav from '@/components/Nav';
import InstagramReel from './InstagramReel';
import Footer from '@/components/Footer';
import CartModal from './CartModal';
import MenuModal from './MenuModal';

function Layout(props) {
  return (
    <CartProvider>
      <div style={{ backgroundColor: props.backgroundColor, letterSpacing: '-0.18px' }} className="flex flex-col justify-between min-h-screen letter-spacing-desktop antialiased">
        <Nav logoGray={props.logoGray} isHomePage={props.isHomePage}/>

        <main>
          {props.children}
        </main>
        
        <InstagramReel />
        <Footer />
      </div>

      <CartModal/>
      <MenuModal/>
    </CartProvider>
  )
}

export default Layout
