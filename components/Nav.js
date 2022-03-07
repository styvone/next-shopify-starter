import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCartContext } from '@/context/Store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Nav() {
  const cart = useCartContext()[0]
  const [cartItems, setCartItems] = useState(0)

  useEffect(() => {
    let numItems = 0
    cart.forEach(item => {
      numItems += item.variantQuantity
    })
    setCartItems(numItems)
  }, [cart])

  return (
    <header className="border-b border-palette-lighter sticky top-0 z-20">
      <div className="flex items-center justify-between mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6">
        <Link href="/" passHref>
          <a className=" cursor-pointer">
            <h1 className="flex no-underline">
              <img height="32" width="32" alt="logo" className="h-32 w-32 mr-1 object-contain" src="/boquet_logo.svg" />
            </h1>
          </a>
        </Link>
        <div className="flex flex-end justify-between">
          <Link
            href="/shop"
            passHref
          >
            <a className="px-8 relative" aria-label="shop">
              <h1>Shop</h1>
            </a>
          </Link>
          <Link
            href="/learn"
            passHref
          >
            <a className="px-8 relative" aria-label="learn">
              <h1>Learn</h1>
            </a>
          </Link>
          <Link
            href="/our-story"
            passHref
          >
            <a className="px-8 relative" aria-label="our-story">
              <h1>Our Story</h1>
            </a>
          </Link>
          <Link
            href="/cart"
            passHref
          >
            <a style={{borderRadius: '50%'}} className="border border-black px-8 relative" aria-label="cart">
              <h1>Cart</h1>
            </a>
          </Link>
        </div>
      </div>
    </header >
  )
}

export default Nav
