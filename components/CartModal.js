import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { useCartContext, useUpdateCartQuantityContext, useCartModalContext } from '@/context/Store';

function CartModal() {
    const [toggleModal, isModalOpen] = useCartModalContext();
    const [cart, checkoutUrl] = useCartContext();
    const updateCartQuantity = useUpdateCartQuantityContext();
    const [numItems, setNumItems] = useState(0);
    const [tempNumItems, setTempNumItems] = useState(0);

    let variantId;
    if (cart[0]) {
        variantId = cart[0].variantId;
    }

    async function leaveModal() {
        toggleModal();
        if (numItems !== tempNumItems) {
            await updateCartQuantity(variantId, tempNumItems);
        }
    }

    async function clickCheckOut() {
        if (numItems !== tempNumItems) {
            await updateCartQuantity(variantId, tempNumItems);
        }
        window.location.href = checkoutUrl;
    }


    // responsive logic:

    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    const handleResizeMobile = () => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    const handleResizeTablet = () => {
        if (window.innerWidth >= 768 && window.innerWidth < 1024) {
            setIsTablet(true);
        } else {
            setIsTablet(false);
        }
    }

    // grand useEffect
    useEffect(() => {
        let numItems = 0
        cart.forEach(item => {
          numItems += item.variantQuantity
        })
        setNumItems(numItems);
        setTempNumItems(numItems);

        window.addEventListener("resize", handleResizeMobile);
        window.addEventListener("DOMContentLoaded", handleResizeMobile);

        window.addEventListener("resize", handleResizeTablet);
        window.addEventListener("DOMContentLoaded", handleResizeTablet);

        const body = document.querySelector('body');
        body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    }, [cart, isModalOpen])

    const desktopView = (
        <SlidingPane
            isOpen={isModalOpen}
            hideHeader={true}
            width='56.87%'
            className="checkoutModal desktopPadding antialiased"
            onRequestClose={() => {
                leaveModal();
            }}
        >
            <div className="z-20 h-fit-content w-full flex justify-between pb-16">
            <h1 style={{color: '#EBE5DB'}} className='ivyPrestoThin text-desktop-h1'>
                Cart
            </h1>
            <button
                onClick={() => {
                    leaveModal();
                }}
            >
            <img className="h-fit-content" src="/icons/cart-modal/cart-modal-exit.svg" />
            </button>
            </div>

            {(numItems > 0) && 
            <div style={{flexGrow: '1'}} className="w-full flex flex-col justify-between">
                <div style={{backgroundColor: '#283F91', color: '#EBE5DB'}} className="w-full h-36">
                    <div className="pb-8 flex justify-between">
                    <h2 className="ivyPrestoThin text-desktop-h2">
                    Boquet Vaginal Prebiotic
                    </h2>
                        <div className="w-1/3 flex justify-between">
                            <div className="flex flex-col justify-center">
                                <p className="coreSans text-desktop-p3">
                                QUANTITY:
                                </p>
                            </div>
                            <div className="flex justify-between items-center w-1/2">
                            <button
                                aria-label="remove item from cart"
                                className="noOutlineButton h-full rounded-l-full px-3"
                                onClick={() => {
                                    if (tempNumItems >= 1) {
                                        setTempNumItems(tempNumItems-1)
                                    }
                                }}
                                >
                                    <img className="h-fit-content" src="/icons/cart-modal/minus.svg" />
                                </button>
                                <h3 className="helvetica text-desktop-h3">
                                    {tempNumItems}
                                </h3>
                                <button
                                aria-label="add item to cart"
                                className="noOutlineButton h-full rounded-r-full pl-3"
                                onClick={() => setTempNumItems(tempNumItems+1)}
                                >
                                    <img className="h-fit-content" src="/icons/cart-modal/plus.svg" />
                            </button>
                        </div>
                    </div>
                    </div>

                    <div>
                    <img className="w-full" alt='cart modal divider between items and subtotal' src='/images/cart-modal/cart-modal-dashed-border.png' />
                    </div>

                    <div className="h-20 flex flex-col justify-end">
                    <div className="flex justify-end">
                        <div className="h-fit-content w-1/3 flex justify-between">
                            <div className="flex flex-col justify-end">
                                <p className="coreSans text-desktop-p3">
                                    TOTAL:
                                </p>
                            </div>
                            <div className="flex flex-col justify-end">
                            <h3 style={{lineHeight: 'normal'}} className="helvetica text-desktop-h3">
                                {`$${tempNumItems * 25}.00`}
                            </h3>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>


                <div>
                    <Link
                        href='#'
                        passHref
                    >
                        <a onClick={(e) => {
                            e.preventDefault();
                            if (tempNumItems > 0) {
                                clickCheckOut();
                            }
                        }} style={{backgroundColor: '#EBE5DB', borderColor: '#283F91', color: '#283F91'}} className={"relative coreSans border flex justify-center rounded-full" + (tempNumItems === 0 ? ' disabledLink' : '')} aria-label="shop">
                            <p className="text-desktop-p1 h-24 flex flex-col justify-center">
                                {tempNumItems === 0 ? 'EMPTY CART' : 'CHECKOUT'}
                            </p>
                        </a>
                    </Link>
                </div>
            </div> 
            }

            {(numItems === 0) && 
            <div style={{flexGrow: '1'}} className="w-full flex flex-col justify-between">
                <div style={{backgroundColor: '#283F91', color: '#EBE5DB'}} className="w-full h-36">
                    <p className="coreSans text-desktop-p1">
                        YOUR CART IS CURRENTLY EMPTY.
                    </p>
                </div>
                <div>
                    <Link
                        href="/shop"
                        passHref
                    >
                        <a onClick={toggleModal} style={{backgroundColor: '#EBE5DB', borderColor: '#283F91', color: '#283F91'}} className={"relative coreSans border flex justify-center rounded-full"} aria-label="shop">
                            <p className="text-desktop-p1 h-24 flex flex-col justify-center">
                                SHOP BOQUET
                            </p>
                        </a>
                    </Link>
                </div>
            </div>
            }
        </SlidingPane>
    );

    const mobileView = (
        <SlidingPane
            isOpen={isModalOpen}
            hideHeader={true}
            width='100%'
            className="checkoutModal mobilePadding antialiased"
            onRequestClose={() => {
                leaveModal();
            }}
        >
            <div className="h-fit-content w-full flex pb-14">
            <div className="flex-1"/>
            <div className="flex flex-col justify-center">
                <Link href="/" passHref>
                        <a className=" cursor-pointer">
                            <img style={{width: '101px', height: '31px', margin: '0 auto'}}  alt="logo" className="object-contain" src={"/logo/boquet_logo_gray.svg"} />
                        </a>
                </Link>
            </div>
            <div className="flex-1 flex justify-end">
                <button
                    onClick={() => {
                        leaveModal();
                    }}
                >
                    <img className="h-8" src="/icons/cart-modal/cart-modal-exit.svg" />
                </button>
            </div>
            </div>

            {(numItems > 0) &&
            <div style={{flexGrow: '1'}} className="w-full flex flex-col justify-between">
                <div style={{backgroundColor: '#283F91', color: '#EBE5DB'}} className="w-full h-36">
                    <h3 className="ivyPrestoThin text-mobile-h3">
                        Boquet Vaginal Prebiotic
                    </h3>


                        <div className="w-full flex justify-between pt-8 pb-6">
                            <div className="flex flex-col justify-center">
                                <p className="coreSans text-mobile-p3">
                                QUANTITY:
                                </p>
                            </div>
                            <div className="flex justify-between items-center w-1/3">
                            <button
                                aria-label="remove item from cart"
                                className="noOutlineButton h-full rounded-l-full px-3"
                                onClick={() => {
                                    if (tempNumItems >= 1) {
                                        setTempNumItems(tempNumItems-1)
                                    }
                                }}
                                >
                                    <img style={{height: '13px', width: '13px'}} src="/icons/cart-modal/minus.svg" />
                                </button>
                                <p className="helvetica text-mobile-p1">
                                    {tempNumItems}
                                </p>
                                <button
                                aria-label="add item to cart"
                                className="noOutlineButton h-full rounded-r-full pl-3"
                                onClick={() => setTempNumItems(tempNumItems+1)}
                                >
                                    <img style={{height: '13px', width: '13px'}} src="/icons/cart-modal/plus.svg" />
                            </button>
                        </div>

                    </div>

                    <div>
                    <img className="w-full" alt='cart modal divider between items and subtotal' src='/images/cart-modal/cart-modal-dashed-border-mobile.png' />
                    </div>

                    <div className="h-fit-content flex flex-col justify-end pt-8">
                    <div className="flex justify-end">
                        <div className="h-fit-content w-full flex justify-between">
                            <div className="flex flex-col justify-end">
                                <p className="coreSans text-mobile-p3">
                                    TOTAL:
                                </p>
                            </div>
                            <p className="helvetica text-mobile-p1">
                                {`$${tempNumItems * 25}.00`}
                            </p>
                        </div>
                    </div>
                    </div>
                </div>


                <div>
                    <Link
                        href='#'
                        passHref
                    >
                        <a onClick={(e) => {
                            e.preventDefault();
                            if (tempNumItems > 0) {
                                clickCheckOut();
                            }
                        }} style={{backgroundColor: '#EBE5DB', borderColor: '#283F91', color: '#283F91'}} className={"relative coreSans border flex justify-center rounded-full" + (tempNumItems === 0 ? ' disabledLink' : '')} aria-label="shop">
                            <p className="text-mobile-p2 h-14 flex flex-col justify-center">
                                {tempNumItems === 0 ? 'EMPTY CART' : 'CHECKOUT'}
                            </p>
                        </a>
                    </Link>
                </div>
            </div>
            }

            {(numItems === 0) &&
            <div style={{flexGrow: '1'}} className="w-full flex flex-col justify-between">
                <div style={{backgroundColor: '#283F91', color: '#EBE5DB'}} className="w-full h-36 flex justify-center">
                    <p className="coreSans text-mobile-p1 lineHeight-mobile-22px">
                    YOUR CART IS CURRENTLY EMPTY.
                    </p>
                </div>


                <div>
                    <Link
                        href='/shop'
                        passHref
                    >
                        <a onClick={toggleModal} style={{backgroundColor: '#EBE5DB', borderColor: '#283F91', color: '#283F91'}} className={"relative coreSans border flex justify-center rounded-full"} aria-label="shop">
                            <p className="text-mobile-p2 h-14 flex flex-col justify-center">
                               SHOP BOQUET
                            </p>
                        </a>
                    </Link>
                </div>
            </div>
            }

        </SlidingPane>
    );

    const tabletView = (
    <SlidingPane
        isOpen={isModalOpen}
        hideHeader={true}
        width='100%'
        className="checkoutModal tabletPadding antialiased"
        onRequestClose={() => {
            leaveModal();
        }}
    >
        <div className="h-fit-content w-full flex justify-between pb-16">
        <h1 style={{color: '#EBE5DB'}} className='ivyPrestoThin text-tablet-h1 lineHeight-tablet-59px'>
            Cart
        </h1>
        <button
            onClick={() => {
                leaveModal();
            }}
        >
        <img className="h-fit-content" src="/icons/cart-modal/cart-modal-exit.svg" />
        </button>
        </div>

        {(numItems > 0) &&
        <div style={{flexGrow: '1'}} className="w-full flex flex-col justify-between">
            <div style={{backgroundColor: '#283F91', color: '#EBE5DB'}} className="w-full h-36">
                <div className="pb-8 flex justify-between">
                <h2 className="ivyPrestoThin text-tablet-h2 lineHeight-tablet-44px">
                Boquet Vaginal Prebiotic
                </h2>
                    <div className="w-1/3 flex justify-between">
                        <div className="flex flex-col justify-center">
                            <p style={{fontSize: '12px', lineHeight: '15px'}} className="coreSans">
                            QUANTITY:
                            </p>
                        </div>
                        <div className="flex justify-between items-center w-1/2">
                        <button
                            aria-label="remove item from cart"
                            className="noOutlineButton h-full rounded-l-full px-3"
                            onClick={() => {
                                if (tempNumItems >= 1) {
                                    setTempNumItems(tempNumItems-1)
                                }
                            }}
                            >
                                <img className="h-fit-content" src="/icons/cart-modal/minus.svg" />
                            </button>
                            <h3 className="helvetica text-tablet-h3 lineHeight-tablet-32px">
                                {tempNumItems}
                            </h3>
                            <button
                            aria-label="add item to cart"
                            className="noOutlineButton h-full rounded-r-full pl-3"
                            onClick={() => setTempNumItems(tempNumItems+1)}
                            >
                                <img className="h-fit-content" src="/icons/cart-modal/plus.svg" />
                        </button>
                    </div>
                </div>
                </div>

                <div>
                <img className="w-full" alt='cart modal divider between items and subtotal' src='/images/cart-modal/cart-modal-dashed-border.png' />
                </div>

                <div className="h-20 flex flex-col justify-end pt-16">
                <div className="flex justify-end">
                    <div className="h-fit-content w-1/3 flex justify-between">
                        <div className="flex flex-col justify-end">
                            <p style={{fontSize: '12px', lineHeight: '15px'}} className="coreSans">
                                TOTAL:
                            </p>
                        </div>
                        <h3 className="helvetica text-tablet-h3 lineHeight-tablet-32px">
                            {`$${tempNumItems * 25}.00`}
                        </h3>
                    </div>
                </div>
                </div>
            </div>


            <div>
                <Link
                    href='#'
                    passHref
                >
                    <a onClick={(e) => {
                        e.preventDefault();
                        if (tempNumItems > 0) {
                            clickCheckOut();
                        }
                    }} style={{backgroundColor: '#EBE5DB', borderColor: '#283F91', color: '#283F91'}} className={"relative coreSans border flex justify-center rounded-full" + (tempNumItems === 0 ? ' disabledLink' : '')} aria-label="shop">
                        <p className="text-tablet-p2 lineHeight-tablet-22px h-24 flex flex-col justify-center">
                            {tempNumItems === 0 ? 'EMPTY CART' : 'CHECKOUT'}
                        </p>
                    </a>
                </Link>
            </div>
        </div> 
        }

        {(numItems === 0) &&
        <div style={{flexGrow: '1'}} className="w-full flex flex-col justify-between">
            <div style={{backgroundColor: '#283F91', color: '#EBE5DB'}} className="w-full h-36">
               <p className="coreSans text-tablet-p1 lineHeight-tablet-25px">
                YOUR CART IS CURRENTLY EMPTY.
               </p>
            </div>

            <div>
                <Link
                    href='/shop'
                    passHref
                >
                    <a onClick={toggleModal} style={{backgroundColor: '#EBE5DB', borderColor: '#283F91', color: '#283F91'}} className={"relative coreSans border flex justify-center rounded-full"} aria-label="shop">
                        <p className="text-tablet-p2 lineHeight-tablet-22px h-24 flex flex-col justify-center">
                            SHOP BOQUET
                        </p>
                    </a>
                </Link>
            </div>
        </div> 
        }
    </SlidingPane>
    );

    if (isMobile) {
        return mobileView;
    } else if (isTablet) {
        return tabletView;
    } else {
        return desktopView;
    }
}

export default CartModal;