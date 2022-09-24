import { createContext, useContext, useState, useEffect } from 'react'
import { createShopifyCheckout, updateShopifyCheckout, setLocalData, saveLocalData } from '@/utils/helpers'
import { getCheckoutUrlWithCheckoutId, getCartWithCheckoutId } from '@/lib/shopify'

const CartContext = createContext()
const AddToCartContext = createContext()
const UpdateCartQuantityContext = createContext()
const CartModalContext = createContext()
const MenuModalContext = createContext()

export function useCartContext() {
  return useContext(CartContext)
}

export function useAddToCartContext() {
  return useContext(AddToCartContext)
}

export function useUpdateCartQuantityContext() {
  return useContext(UpdateCartQuantityContext)
}

export function useCartModalContext() {
  return useContext(CartModalContext);
}

export function useMenuModalContext() {
  return useContext(MenuModalContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [checkoutId, setCheckoutId] = useState('')
  const [checkoutUrl, setCheckoutUrl] = useState('')
  const [isLoading, setisLoading] = useState(false)
  const [cartModalOpen, setCartModalOpen] = useState(false)
  const [menuModalOpen, setMenuModalOpen] = useState(false)

  useEffect(() => {
    setLocalData(setCheckoutId)
  }, [])

  useEffect(() => {
    // do this to make sure multiple tabs are always in sync
    const onReceiveMessage = (e) => {
      console.log(e)
      setLocalData(setCheckoutId)
    }

    window.addEventListener("storage", onReceiveMessage);


    // add code here to populate cart and checkoutUrl by querying using the saved localStorage checkoutID
    const setUpCartFromCheckOutId = async () => {
      setCart(await getCartWithCheckoutId(checkoutId));
      setCheckoutUrl(await getCheckoutUrlWithCheckoutId(checkoutId));
      console.log(cart)
      console.log(checkoutUrl)
    }
    setUpCartFromCheckOutId().catch(console.error);


    return () => {
      window.removeEventListener("storage", onReceiveMessage);
    }
  }, [])

  async function addToCart(newItem) {
    setisLoading(true)
    // empty cart
    if (cart.length === 0 || cart.length === undefined) {
      setCart([
        ...cart,
        newItem
      ])

      const response = await createShopifyCheckout(newItem)
      setCheckoutId(response.id)
      setCheckoutUrl(response.webUrl)
      saveLocalData(response.id)

    } else {
      let newCart = [...cart]
      let itemAdded = false
      // loop through all cart items to check if variant
      // already exists and update quantity
      newCart.map(item => {
        if (item.variantId === newItem.variantId) {
          item.variantQuantity += newItem.variantQuantity
          itemAdded = true
        }
      })

      let newCartWithItem = [...newCart]
      if (itemAdded) {
      } else {
        // if its a new item than add it to the end
        newCartWithItem = [...newCart, newItem]
      }

      setCart(newCartWithItem)
      await updateShopifyCheckout(newCartWithItem, checkoutId)
      saveLocalData(checkoutId)
    }
    setisLoading(false)
  }

  async function updateCartItemQuantity(id, quantity) {
    setisLoading(true)
    let newQuantity = Math.floor(quantity)
    if (quantity === '') {
      newQuantity = ''
    }
    let newCart = [...cart]
    newCart.forEach(item => {
      if (item.variantId === id) {
        item.variantQuantity = newQuantity
      }
    })

    // take out zeroes items
    //newCart = newCart.filter(i => i.variantQuantity !== 0)
    setCart(newCart)

    await updateShopifyCheckout(newCart, checkoutId)
    saveLocalData(checkoutId)
    setisLoading(false)
  }

  function toggleCartModal() {
    setCartModalOpen(!cartModalOpen);
  }

  function toggleMenuModal() {
    setMenuModalOpen(!menuModalOpen);
  }

  return (
  <MenuModalContext.Provider value={[toggleMenuModal, menuModalOpen]}>
    <CartModalContext.Provider value={[toggleCartModal, cartModalOpen]}>
      <CartContext.Provider value={[cart, checkoutUrl, isLoading]}>
        <AddToCartContext.Provider value={addToCart}>
          <UpdateCartQuantityContext.Provider value={updateCartItemQuantity}>
            {children}
          </UpdateCartQuantityContext.Provider>
        </AddToCartContext.Provider>
      </CartContext.Provider>
    </CartModalContext.Provider>
  </MenuModalContext.Provider>
  )
}
