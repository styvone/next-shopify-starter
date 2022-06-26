import { useState, useEffect } from 'react';
import { useMenuModalContext } from '@/context/Store';
import SlidingPane from "react-sliding-pane";
import Link from 'next/link';

function MenuModal() {
    const [toggleModal, isModalOpen] = useMenuModalContext();

    // const [isMobile, setIsMobile] = useState(false);

    // const handleResizeMobile = () => {
    //     if (window.innerWidth < 767) {
    //         setIsMobile(true);
    //     } else {
    //         setIsMobile(false);
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener("resize", handleResizeMobile);
    //     window.addEventListener("load", handleResizeMobile);
    // });

    const mobileView = (
        <SlidingPane
            isOpen={isModalOpen}
            hideHeader={true}
            width='100%'
            from="left"
            className="menuModal mobilePadding antialiased"
            onRequestClose={() => {
                toggleModal();
            }}
        >

            <div style={{color: '#283F91'}} className="w-full flex justify-between">
                <Link
                    href='#'
                    passHref
                >
                    <a onClick={toggleModal} className="h-12 w-fit-content flex flex-col justify-center items-center">
                    <img style={{width: '27px', height: '9px'}}  alt="menu" className="object-contain" src={"/icons/mobile/mobile-menu-icon-navy.svg"} />
                    </a>
                </Link>

                <div className="flex flex-col justify-center">
                <Link href="/" passHref>
                        <a onClick={toggleModal} className=" cursor-pointer">
                            <img style={{width: '101px', height: '31px', margin: '0 auto'}}  alt="logo" className="object-contain" src={"/logo/boquet_logo_gray.svg"} />
                        </a>
                </Link>
                </div>

                <button
                    onClick={() => {
                        toggleModal();
                    }}
                >
                    <p className="coreSans text-mobile-p3">CLOSE</p>
                </button>

            </div>

            <div style={{color: '#283F91'}} className="w-full h-4/5 flex justify-center align-middle ">
                <div className="h-fit-content flex flex-col justify-center gap-4 text-center">
                    <div className="w-full flex justify-center">
                        <Link
                            href="/shop"
                            passHref
                        >
                            <a onClick={toggleModal}>
                                <h2 className="ivyPrestoThin text-mobile-h2">Shop</h2>
                            </a>
                        </Link>
                    </div>
                    <div className="w-full flex justify-center">
                        <Link
                            href="/learn"
                            passHref
                        >
                            <a onClick={toggleModal}>
                                <h2 className="ivyPrestoThin text-mobile-h2">Learn</h2>
                            </a>
                        </Link>
                    </div>
                    <div className="w-full flex justify-center">
                        <Link
                            href="/our-story"
                            passHref
                        >
                            <a onClick={toggleModal}>
                                <h2 className="ivyPrestoThin text-mobile-h2">Our Story</h2>
                            </a>
                        </Link>
                    </div>
                    <div className="w-full flex justify-center">
                        <Link
                            href="/faq"
                            passHref
                        >
                            <a onClick={toggleModal}>
                                <h2 className="ivyPrestoThin text-mobile-h2">FAQ</h2>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            
        </SlidingPane>
    );



    // if (isMobile) {
    //     return mobileView;
    // } else {
    //     return desktopView;
    // }

    return mobileView;
}

export default MenuModal;