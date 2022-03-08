import Link from 'next/link'

function Footer() {
  return (
    <footer style={{backgroundColor: '#283F91'}} className="pb-8 pt-16 px-8 flex flex-col justify-center font-primary items-center text-white">
      <div className="h-40 w-full flex border-b-2">
        <div className="py-4 w-full flex flex-col justify-center">
          <img height="32" width="32" alt="logo" className="h-32 w-32 mr-1 object-contain" src="/boquet_logo.svg" />
        </div>
        <div className="py-4 w-full flex justify-start">
          <div className="flex flex-col justify-start">
            <h1 className="pr-8">Shop</h1>
            <Link
              href="/shop"
              passHref
            >
              <a className="pr-8 relative" aria-label="shop">
                <h2>Boquet</h2>
              </a>
            </Link>
          </div>
          <div className="px-8 flex flex-col justify-start">
            <h1 className="px-8 relative">Info</h1>
            <Link
              href="/learn"
              passHref
            >
              <a className="px-8 relative" aria-label="shop">
                <h2>Learn</h2>
              </a>
            </Link>
            <Link
              href="/our-story"
              passHref
            >
              <a className="px-8 relative" aria-label="shop">
                <h2>Our Story</h2>
              </a>
            </Link>
            <Link
              href="/faq"
              passHref
            >
              <a className="px-8 relative" aria-label="shop">
                <h2>FAQ</h2>
              </a>
            </Link>
          </div>
          <div className="px-8 flex flex-col justify-start">
            <h1 className="px-8 relative">Community</h1>
            <Link
              href="/ig"
              passHref
            >
              <a className="px-8 relative" aria-label="shop">
                <h2>Instagram</h2>
              </a>
            </Link>
            <Link
              href="/fb"
              passHref
            >
              <a className="px-8 relative" aria-label="shop">
                <h2>Facebook</h2>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-40 w-full flex">
        <div className="py-4 w-full flex flex-col justify-center">©2022 Boquet</div>
        <div className="py-4 w-full flex flex-col justify-center">* These statements have not been evaluated by the Food and Drug Administration.<br/> 
          This product is not intended to diagnose, treat, cure or prevent any disease.</div>
      </div>
    </footer>
  )
}

export default Footer
