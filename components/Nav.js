import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCartContext } from '@/context/Store'

function Nav(props) {
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
    <header style={{ color: props.logoGray ? '#EBE5DB' : '#283F91' }} className="px-8">
      <div className="flex items-center justify-between w-full">
        <Link href="/" passHref>
          <a className=" cursor-pointer">
            <h1 className="flex no-underline">
              <img height="32" width="32" alt="logo" className="h-32 w-32 mr-1 object-contain" src={props.logoGray ? "/logo/boquet_logo_gray.svg" : "/logo/boquet_logo_blue.svg"} />
            </h1>
          </a>
        </Link>
        <div className="flex flex-end justify-between w-1/2">
          <Link
            href="/shop"
            passHref
          >
            <a className="px-8 relative coreSans" aria-label="shop">
              <h1>Shop</h1>
            </a>
          </Link>
          <Link
            href="/learn"
            passHref
          >
            <a className="px-8 relative coreSans" aria-label="learn">
              <h1>Learn</h1>
            </a>
          </Link>
          <Link
            href="/our-story"
            passHref
          >
            <a className="px-8 relative coreSans" aria-label="our-story">
              <h1>Our Story</h1>
            </a>
          </Link>
          <Link
            href="/cart"
            passHref
          >
            <a style={{borderRadius: '50%', borderColor: props.logoGray ? '#EBE5DB' : '#283F91'}} className="border px-8 relative coreSans" aria-label="cart">
              <h1>Cart</h1>
            </a>
          </Link>
        </div>
      </div>
    </header >
  )
}

export default Nav
