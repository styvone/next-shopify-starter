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

    useEffect(() => {
        let numItems = 0
        cart.forEach(item => {
          numItems += item.variantQuantity
        })
        setNumItems(numItems)
    }, [cart])

    let variantId;
    if (cart[0]) {
        variantId = cart[0].variantId;   
    }

    async function leaveModal() {
        await updateCartQuantity(variantId, numItems);
        toggleModal();
    }

    async function clickCheckOut() {
        await updateCartQuantity(variantId, numItems);
        window.location.href = checkoutUrl;
    }

    return (
    <SlidingPane
        isOpen={isModalOpen}
        hideHeader={true}
        width='56.87%'
        className="checkoutModal"
        onRequestClose={() => {
            leaveModal();
        }}
        >
        <div className="h-fit-content w-full flex justify-between pb-24">
          <h1 style={{color: '#EBE5DB'}} className='ivyPrestoThin text-6xl'>
            Cart
          </h1>
          <button
            onClick={() => {leaveModal();}}
          >
          <img className="h-fit-content" src="/icons/cart-modal/cart-modal-exit.svg" />
          </button>
        </div>

        <div className="h-4/5 w-full flex flex-col justify-between">
          <div style={{backgroundColor: '#283F91', color: '#EBE5DB'}} className="w-full h-36">
            <div className="pb-8 flex justify-between">
            <h2 className="ivyPrestoThin text-5xl">
            Boquet Vaginal Prebiotic
            </h2>
                <div className="w-1/3 flex justify-between">
                    <div className="flex flex-col justify-center">
                        <p classNam="coreSans text-xs">
                        QUANTITY:
                        </p>
                    </div>
                    <div className="flex justify-between items-center w-1/2">
                    <button
                        aria-label="remove item from cart"
                        className="h-full"
                        onClick={() => {
                            if (numItems > 1) {
                                setNumItems(numItems-1)
                            }
                        }}
                        >
                            <img className="h-fit-content" src="/icons/cart-modal/minus.svg" />
                        </button>
                        <h3 className="helvetica text-3xl">
                            {numItems}
                        </h3>
                        <button
                        aria-label="add item to cart"
                        className="h-full"
                        onClick={() => setNumItems(numItems+1)}
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
                        <p classNam="coreSans text-xs">
                            TOTAL:
                        </p>
                    </div>
                    <h3 className="helvetica text-3xl">
                        {`$${numItems * 25}.00`}
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
                    clickCheckOut();
                }} style={{backgroundColor: '#EBE5DB', borderColor: '#283F91', color: '#283F91'}} className="relative coreSans border flex justify-center rounded-full" aria-label="shop">
                    <h1 className="text-xl h-24 flex flex-col justify-center">CHECKOUT</h1>
                </a>
            </Link>
          </div>
        </div>
      </SlidingPane>
    );
}

export default CartModal;