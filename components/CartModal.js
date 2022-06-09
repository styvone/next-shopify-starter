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
        if (numItems !== tempNumItems) {
            await updateCartQuantity(variantId, tempNumItems);
        }
        toggleModal();
    }

    async function clickCheckOut() {
        if (numItems !== tempNumItems) {
            await updateCartQuantity(variantId, tempNumItems);
        }
        window.location.href = checkoutUrl;
    }


    // responsive logic:

    const [isMobile, setIsMobile] = useState(false);

    const handleResizeMobile = () => {
        if (window.innerWidth < 767) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
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
        window.addEventListener("load", handleResizeMobile);
    }, [cart])

    const desktopView = (
        <SlidingPane
            isOpen={isModalOpen}
            hideHeader={true}
            width='56.87%'
            className="checkoutModal antialiased"
            onRequestClose={() => {
                leaveModal();
            }}
        >
            <div className="h-fit-content w-full flex justify-between pb-24">
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

            <div className="h-4/5 w-full flex flex-col justify-between">
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
                            className="h-full rounded-l-full px-3"
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
                            className="h-full rounded-r-full px-3"
                            onClick={() => setTempNumItems(tempNumItems+1)}
                            >
                                <img className="h-fit-content" src="/icons/cart-modal/plus.svg" />
                        </button>
                    </div>
                </div>
                </div>

                <div>
                <img alt='cart modal divider between items and subtotal' src='/images/cart-modal/cart-modal-dashed-border.png' />
                </div>

                <div className="h-20 flex flex-col justify-end">
                <div className="flex justify-end">
                    <div className="h-fit-content w-1/3 flex justify-between">
                        <div className="flex flex-col justify-end">
                            <p className="coreSans text-desktop-p3">
                                TOTAL:
                            </p>
                        </div>
                        <h3 className="helvetica text-desktop-h3">
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
                        <p className="text-desktop-p1 h-24 flex flex-col justify-center">
                            {tempNumItems === 0 ? 'EMPTY CART' : 'CHECKOUT'}
                        </p>
                    </a>
                </Link>
            </div>
            </div>
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
            <div className="h-fit-content w-full flex pb-24">
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

            <div className="h-5/6 w-full flex flex-col justify-between">
            <div style={{backgroundColor: '#283F91', color: '#EBE5DB'}} className="w-full h-36">
                <h3 className="ivyPrestoThin text-mobile-h3">
                    Boquet Vaginal Prebiotic
                </h3>


                    <div className="w-full flex justify-between py-8">
                        <div className="flex flex-col justify-center">
                            <p className="coreSans text-mobile-p3">
                            QUANTITY:
                            </p>
                        </div>
                        <div className="flex justify-between items-center w-1/3">
                        <button
                            aria-label="remove item from cart"
                            className="h-full rounded-l-full px-3"
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
                            className="h-full rounded-r-full px-3"
                            onClick={() => setTempNumItems(tempNumItems+1)}
                            >
                                <img style={{height: '13px', width: '13px'}} src="/icons/cart-modal/plus.svg" />
                        </button>
                    </div>

                </div>

                <div>
                <img alt='cart modal divider between items and subtotal' src='/images/cart-modal/cart-modal-dashed-border-mobile.png' />
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
        </SlidingPane>
    );



    if (isMobile) {
        return mobileView;
    } else {
        return desktopView;
    }
}

export default CartModal;