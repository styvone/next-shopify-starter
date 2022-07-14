import Link from 'next/link';
import Marquee from "react-fast-marquee";
import Image from 'next/image';

function imageWrapper(src, href) {
  return (
    <div className="h-48 w-48 overflow-hidden inline-block mr-8 rounded-lg">
      <Link
        href={href}
        passHref
      >
        <Image alt="instagram reel image" className="inline transform duration-500 ease-in-out hover:scale-110 cursor-pointer" src={src} width={192} height={192} />
      </Link>
    </div>
  );
}

function createImageReel() {
  return (
    <Marquee gradient={false} speed={50}>
      <div className="whitespace-nowrap overflow-hidden">
        {imageWrapper('/images/instagram/place-1.png', 'https://www.instagram.com/withboquet/')}
        {imageWrapper('/images/instagram/place-2.png', 'https://www.instagram.com/withboquet/')}
        {imageWrapper('/images/instagram/place-3.png', 'https://www.instagram.com/withboquet/')}
        {imageWrapper('/images/instagram/place-4.png', 'https://www.instagram.com/withboquet/')}
        {imageWrapper('/images/instagram/place-5.png', 'https://www.instagram.com/withboquet/')}
        {imageWrapper('/images/instagram/place-6.png', 'https://www.instagram.com/withboquet/')}
        {imageWrapper('/images/instagram/place-7.png', 'https://www.instagram.com/withboquet/')}
      </div>
    </Marquee>
  );
}

function InstagramReel() {
  return (
    <>
        <div className="responsive-desktop">
          <div style={{backgroundColor: "#EBE5DB"}} className="h-fit-content w-full flex flex-col justify-start pb-16">
            <div style={{paddingLeft: '50px', paddingRight: '50px'}} className="pb-10 pt-20 h-8 flex justify-end">
              <div style={{color: '#283F91'}} className="flex flex-col justify-center">
                <Link
                    href="https://www.instagram.com/withboquet/"
                    passHref
                  >
                    <a>
                      <p className="coreSans text-desktop-p2">
                        <u>FOLLOW US ON INSTAGRAM +</u>
                      </p>
                    </a>
                </Link>
              </div>
            </div>
            <div className="h-56 flex flex-col justify-center z-0">
              {createImageReel()}
            </div>
          </div>
        </div>

        <div className="responsive-mobile">
          <div style={{backgroundColor: "#EBE5DB"}} className="h-80 w-full flex flex-col justify-evenly">
            <div style={{paddingLeft: '16px', paddingRight: '16px'}} className="h-8 flex justify-start">
              <div style={{color: '#283F91'}} className="flex flex-col justify-center">
                <Link
                    href="https://www.instagram.com/withboquet/"
                    passHref
                  >
                    <a>
                      <p className="coreSans text-mobile-p2">
                        <u>FOLLOW US ON INSTAGRAM +</u>
                      </p>
                    </a>
                </Link>
              </div>
            </div>
            <div className="h-56 flex flex-col justify-center z-0">
              {createImageReel()}
            </div>
          </div>
        </div>

        <div className="responsive-tablet">
          <div style={{backgroundColor: "#EBE5DB"}} className="h-80 w-full flex flex-col justify-evenly">
            <div style={{paddingLeft: '40px', paddingRight: '40px'}} className="h-8 flex justify-end">
              <div style={{color: '#283F91'}} className="flex flex-col justify-center">
                <Link
                    href="https://www.instagram.com/withboquet/"
                    passHref
                  >
                    <a>
                      <p className="coreSans text-tablet-p2">
                        <u>FOLLOW US ON INSTAGRAM +</u>
                      </p>
                    </a>
                </Link>
              </div>
            </div>
            <div className="h-56 flex flex-col justify-center z-0">
              {createImageReel()}
            </div>
          </div>
        </div>
    </>
    );
  }

export default InstagramReel
