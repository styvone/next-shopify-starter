import { createCheckout, updateCheckout } from '@/lib/shopify'

export function saveLocalData(checkoutId) {
  localStorage.setItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_NAME, JSON.stringify([checkoutId]))
}

function getLocalData() {
  return localStorage.getItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_NAME);
}

export function setLocalData(setCheckoutId) {
  const localData = getLocalData()

  if (localData) {
    setCheckoutId(localData[0])
  }
}

export async function createShopifyCheckout(newItem) {
  const data = await createCheckout( newItem['variantId'], newItem['variantQuantity'])  
  return data
}

export async function updateShopifyCheckout(updatedCart, checkoutId) {
  const lineItems = updatedCart.map(item => {
    return {
      variantId: item['variantId'],
      quantity: item['variantQuantity']
    }
  })
  await updateCheckout(checkoutId, lineItems)
}

export function getCartSubTotal(cart) {
  if (cart.length === 0) {
    return 0
  }
  else {
    let totalPrice = 0
    cart.forEach(item => totalPrice += parseInt(item.variantQuantity) * parseFloat(item.variantPrice))
    return Math.round(totalPrice * 100) / 100
  }
}