import Client from 'shopify-buy';

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN

const client = Client.buildClient({
  domain: domain,
  storefrontAccessToken: storefrontAccessToken,
});

// export async function getAllProductsInCollection() {
//   const query =
//     `{
//       collectionByHandle(handle: "${collection}") {
//         id
//         title
//         products(first: 250) {
//           edges {
//             node {
//               id
//               title
//               description
//               handle
//               images(first: 250) {
//                 edges {
//                   node {
//                     id
//                     originalSrc
//                     height
//                     width     
//                     altText             
//                   }
//                 }
//               }
//               variants(first: 250) {
//                 edges {
//                   node {
//                     id
//                     title
//                     price                
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }`
//   ;

//   const response = await callShopify(query);

//   const allProducts = response.data.collectionByHandle.products.edges
//     ? response.data.collectionByHandle.products.edges
//     : [];

//   return allProducts;
// }

// export async function getProductSlugs() {
//   const query =
//     `{
//       collectionByHandle(handle: "${collection}") {
//         products(first: 250) {
//           edges {
//             node {
//               handle              
//             }
//           }
//         }
//       }
//     }`
//   ;

//   const response = await callShopify(query);

//   const slugs = response.data.collectionByHandle.products.edges
//     ? response.data.collectionByHandle.products.edges
//     : [];

//   return slugs;
// }

export async function getProduct(handle) {
  // const query =
  //   `{
  //     productByHandle(handle: "${handle}") {
  //       id
  //       title
  //       handle
  //       description
  //       images(first: 250) {
  //         edges {
  //           node {
  //             id
  //             originalSrc
  //             height
  //             width     
  //             altText             
  //           }
  //         }
  //       }
  //       variants(first: 250) {
  //         edges {
  //           node {
  //             id
  //             title
  //             price                
  //           }
  //         }
  //       }
  //     }
  //   }`
  // ;

  // const response = await callShopify(query);

  // const product = response.data.productByHandle
  //   ? response.data.productByHandle
  //   : [];

  // return product;

  let resultProduct;
  await client.product.fetchByHandle(handle).then((product) => {
    resultProduct = product;
  });
  return JSON.stringify(resultProduct);
}

export async function createCheckout(quantity) {
  // const query =
  //   `mutation 
  //     {
  //       checkoutCreate(input: {
  //         lineItems: [{ variantId: "${id}", quantity: ${quantity} }]
  //       }) {
  //         checkout {
  //            id
  //            webUrl
  //            lineItems(first: 250) {
  //              edges {
  //                node {
  //                  id
  //                  title
  //                  quantity
  //                }
  //              }
  //            }
  //         }
  //       }
  //     }      
  //   `
  // ;
  // const response = await callShopify(query);
  // const checkout = response.data.checkoutCreate.checkout
  //   ? response.data.checkoutCreate.checkout
  //   : [];
  // console.log("OLD CHECKOUT", checkout);
  // return checkout;

  // Create an empty checkout
  let checkoutId = "";
  await client.checkout.create().then((checkout) => {
    checkoutId = checkout.id;
  });
  // Get product id so we can add quantity to it
  let productId = "";
  await client.collection.fetchAllWithProducts().then((collections) => {
    productId = collections[0].products[0].variants[0].id;
  });
  const lineItemsToAdd = [
    {
      variantId: productId,
      quantity: quantity,
    }
  ];
  // Add an item to the checkout
  let resultCheckout;
  await client.checkout.addLineItems(checkoutId, lineItemsToAdd).then((checkout) => {
    resultCheckout = checkout;
  });

  return resultCheckout;
}

export async function updateCheckout(id, lineItems) {  
  let lineItemId = "";
  await client.checkout.fetch(id).then((checkout) => {
    lineItemId = checkout.lineItems[0].id;
  });
  const lineItemsToUpdate = [
    {
      id: lineItemId,
      quantity: lineItems[0].quantity,
    }
  ];
  // Update the line item on the checkout (change the quantity or variant)
  let resultCheckout;
  await client.checkout.updateLineItems(id, lineItemsToUpdate).then((checkout) => {
    console.log(checkout.lineItems);
    resultCheckout = checkout;
  });
  return resultCheckout;

  // const formattedLineItems = lineItems.map(item => {
  //   return `{
  //     variantId: "${item.variantId}",
  //     quantity:${item.quantity}
  //   }`
  // })

  // const query =
  //   `mutation 
  //     {
  //       checkoutLineItemsReplace(lineItems: [${formattedLineItems}], checkoutId: "${id}") {
  //         checkout {
  //            id
  //            webUrl
  //            lineItems(first: 250) {
  //              edges {
  //                node {
  //                  id
  //                  title
  //                  quantity
  //                }
  //              }
  //            }
  //         }
  //       }
  //     }      
  //   `
  // ;

  // const response = await callShopify(query);

  // console.log(response);

  // const checkout = response.data.checkoutLineItemsReplace.checkout
  //   ? response.data.checkoutLineItemsReplace.checkout
  //   : [];

  // return checkout;
}

export async function getCheckoutUrlWithCheckoutId(checkoutId, setCheckoutUrl) {

  if (checkoutId) {
    const result = await client.checkout.fetch(checkoutId).then((checkout) => {

      if (checkout.completedAt) {
        return "";
      }

      return checkout.webUrl;
    });

    if (result !== "") {
      setCheckoutUrl(result);
    }
  }
}

export async function getCartWithCheckoutId(checkoutId, setCart) {

  if (checkoutId) {
    const result = await client.checkout.fetch(checkoutId).then((checkout) => {
      
      if (checkout.completedAt) {
        return [];
      }

      return checkout.lineItems;
    });

    if (result.length !== 0) {
      const resultArray = [{
        productHandle: result[0].variant.product.handle,
        productImage: {
          altText: result[0].attrs.variant.image.altText,
          height: result[0].attrs.variant.image.height,
          id: result[0].variableValues.id,
          originalSrc: result[0].attrs.variant.image.src,
          width: result[0].attrs.variant.image.width,
        },
        productTitle: result[0].attrs.title.value,
        variantId: result[0].variant.id,
        variantPrice: result[0].variant.price,
        variantQuantity: result[0].quantity,
        variantTitle: result[0].variant.title,
      }];
      setCart(resultArray);
    }
  }
}

export async function removeLineItemFromCart(checkoutId) {
  const tempId = await client.checkout.fetch(checkoutId).then((checkout) => {
    // Do something with the checkout
    return checkout.lineItems[0].id;
  });

  const lineItemIdsToRemove = [
    tempId
  ];
  
  // Remove an item from the checkout
  client.checkout.removeLineItems(checkoutId, lineItemIdsToRemove).then((checkout) => {
    // Do something with the updated checkout
    console.log(checkout.lineItems); // Checkout with line item 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ=' removed
  });
}