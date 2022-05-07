import Link from 'next/link'

function Footer() {
  return (
    <footer style={{backgroundColor: '#283F91', paddingLeft: '50px', paddingRight: '50px', paddingBottom: '50px'}} className="pt-16 flex flex-col justify-center font-primary items-center text-white">
      <div className="h-60 w-full flex border-b-2">
        <div className="pb-4 w-full flex flex-col justify-start">
          <img alt="logo" className="w-48 mr-1 object-contain" src="/logo/boquet_logo_gray.svg" />
        </div>
        <div className="pb-4 w-full flex justify-start">
          <div className="flex flex-col justify-start">
            <h3 className="pr-8 pb-4 ivyPrestoThin text-desktop-h3 lineHeight-desktop-normal">Shop</h3>
            <Link
              href="/shop"
              passHref
            >
              <a className="pr-8 py-2 relative" aria-label="shop">
                <p className="coreSans text-desktop-p3">BOQUET</p>
              </a>
            </Link>
          </div>
          <div className="px-8 flex flex-col justify-start">
            <h3 className="px-8 pb-4 relative ivyPrestoThin text-desktop-h3 lineHeight-desktop-normal">Info</h3>
            <Link
              href="/learn"
              passHref
            >
              <a className="px-8 py-2 relative" aria-label="shop">
                <p className="coreSans text-desktop-p3">LEARN</p>
              </a>
            </Link>
            <Link
              href="/our-story"
              passHref
            >
              <a className="px-8 py-2 relative" aria-label="shop">
                <p className="coreSans text-desktop-p3">OUR STORY</p>
              </a>
            </Link>
            <Link
              href="/faq"
              passHref
            >
              <a className="px-8 py-2 relative" aria-label="shop">
                <p className="coreSans text-desktop-p3">FAQ</p>
              </a>
            </Link>
          </div>
          <div className="px-8 flex flex-col justify-start">
            <h3 className="px-8 pb-4 relative ivyPrestoThin text-desktop-h3 lineHeight-desktop-normal">Community</h3>
            <Link
              href="https://www.instagram.com/styvone/"
              passHref
            >
              <a className="px-8 py-2 relative" aria-label="shop">
                <p className="coreSans text-desktop-p3">INSTAGRAM</p>
              </a>
            </Link>
            <Link
              href="/fb"
              passHref
            >
              <a className="px-8 py-2 relative coreSans" aria-label="shop">
                <p className="coreSans text-desktop-p3">FACEBOOK</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-fit-content w-full flex">
        <div style={{paddingTop: '67px'}} className="w-full flex flex-col justify-center">
          <p className="coreSans text-desktop-p2">
            ©2022 Boquet
          </p>
        </div>
        <div style={{paddingTop: '67px'}} className="w-full flex flex-col justify-center">
          <p style={{fontSize: '12px', lineHeight: 'normal'}} className="coreSans">
            * These statements have not been evaluated by the Food and Drug Administration.<br/> 
            This product is not intended to diagnose, treat, cure or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
