import Link from 'next/link';
import Marquee from "react-fast-marquee";

function imageWrapper(src, href) {
  return (
    <div className="h-48 w-48 overflow-hidden inline-block mr-8 rounded-lg">
      <Link
        href={href}
        passHref
      >
        <img alt="logo" className="h-56 w-56 inline transform duration-500 ease-in-out hover:scale-110 cursor-pointer" src={src} />
      </Link>
    </div>
  );
}

function createImageReel() {
  return (
    <Marquee gradient={false} speed={50}>
      <div className="whitespace-nowrap overflow-hidden">
        {imageWrapper('/images/instagram/place-1.png', '/instagram')}
        {imageWrapper('/images/instagram/place-2.png', '/instagram')}
        {imageWrapper('/images/instagram/place-3.png', '/instagram')}
        {imageWrapper('/images/instagram/place-4.png', '/instagram')}
        {imageWrapper('/images/instagram/place-5.png', '/instagram')}
        {imageWrapper('/images/instagram/place-6.png', '/instagram')}
        {imageWrapper('/images/instagram/place-7.png', '/instagram')}
      </div>
    </Marquee>
  );
}

function InstagramReel() {
  return (
      <div style={{backgroundColor: "#EBE5DB"}} className="h-80 w-full flex flex-col justify-evenly">
        <div className="h-8 flex justify-end">
          <div style={{color: '#283F91'}} className="flex flex-col justify-center">
            <Link
                href="https://www.instagram.com/styvone/"
                passHref
              >
                <a className="coreSans text-l pr-12">
                <u>FOLLOW US ON INSTAGRAM +</u>
                </a>
            </Link>
          </div>
        </div>
        <div className="h-56 flex flex-col justify-center">
          {createImageReel()}
        </div>
      </div>
    );
  }

export default InstagramReel
