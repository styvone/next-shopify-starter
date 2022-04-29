import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCartContext, useCartModalContext } from '@/context/Store'

function Nav(props) {
  const toggleModal = useCartModalContext()[0];


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
    <header style={{ color: props.logoGray ? '#EBE5DB' : '#283F91' }} className={`px-8 ${props.isHomePage ? 'absolute w-full' : ''}`}>
      <div className="flex items-center justify-between w-full">
        <Link href="/" passHref>
          <a className=" cursor-pointer">
              <img height="32" width="32" alt="logo" className="h-32 w-32 mr-1 object-contain" src={props.logoGray ? "/logo/boquet_logo_gray.svg" : "/logo/boquet_logo_blue.svg"} />
          </a>
        </Link>
        <div className="h-fit-content flex flex-end justify-between w-1/2">
          <Link
            href="/shop"
            passHref
          >
            <a className="px-8 flex flex-col justify-center" aria-label="shop">
              <p className="coreSans text-base">Shop</p>
            </a>
          </Link>
          <Link
            href="/learn"
            passHref
          >
            <a className="px-8 flex flex-col justify-center" aria-label="learn">
              <p className="coreSans text-base">Learn</p>
            </a>
          </Link>
          <Link
            href="/our-story"
            passHref
          >
            <a className="px-8 flex flex-col justify-center" aria-label="our-story">
              <p className="coreSans text-base">Our Story</p>
            </a>
          </Link>
          <Link
            href='#'
            passHref
          >
            <a onClick={toggleModal} style={{borderRadius: '50%', borderColor: props.logoGray ? '#EBE5DB' : '#283F91'}} className="h-12 w-fit-content border px-8 flex flex-col justify-center items-center" aria-label="cart">
              <p className="coreSans text-base w-16 flex justify-center">
                Cart
                {
                  cartItems === 0 ? null : ' (' + cartItems + ')'
                }
              </p>
            </a>
          </Link>
        </div>
      </div>
    </header >
  )
}

export default Nav
