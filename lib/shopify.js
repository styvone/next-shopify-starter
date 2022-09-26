import Client from 'shopify-buy';

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN
const collection = process.env.NEXT_PUBLIC_SHOPIFY_COLLECTION

const client = Client.buildClient({
  domain: domain,
  storefrontAccessToken: storefrontAccessToken,
});

async function callShopify(query) {
  const fetchUrl = `https://${domain}/api/2021-01/graphql.json`;

  const fetchOptions = {
    endpoint: fetchUrl,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(fetchUrl, fetchOptions).then((response) =>
      response.json(),
    );
    return data;
  } catch (error) {
    throw new Error("Could not fetch products!");
  }
}

export async function getAllProductsInCollection() {
  const query =
    `{
      collectionByHandle(handle: "${collection}") {
        id
        title
        products(first: 250) {
          edges {
            node {
              id
              title
              description
              handle
              images(first: 250) {
                edges {
                  node {
                    id
                    originalSrc
                    height
                    width     
                    altText             
                  }
                }
              }
              variants(first: 250) {
                edges {
                  node {
                    id
                    title
                    price                
                  }
                }
              }
            }
          }
        }
      }
    }`
  ;

  const response = await callShopify(query);

  const allProducts = response.data.collectionByHandle.products.edges
    ? response.data.collectionByHandle.products.edges
    : [];

  return allProducts;
}

export async function getProductSlugs() {
  const query =
    `{
      collectionByHandle(handle: "${collection}") {
        products(first: 250) {
          edges {
            node {
              handle              
            }
          }
        }
      }
    }`
  ;

  const response = await callShopify(query);

  const slugs = response.data.collectionByHandle.products.edges
    ? response.data.collectionByHandle.products.edges
    : [];

  return slugs;
}

export async function getProduct(handle) {
  const query =
    `{
      productByHandle(handle: "${handle}") {
        id
        title
        handle
        description
        images(first: 250) {
          edges {
            node {
              id
              originalSrc
              height
              width     
              altText             
            }
          }
        }
        variants(first: 250) {
          edges {
            node {
              id
              title
              price                
            }
          }
        }
      }
    }`
  ;

  const response = await callShopify(query);

  const product = response.data.productByHandle
    ? response.data.productByHandle
    : [];

  return product;
}

export async function createCheckout(id, quantity) {
  const query =
    `mutation 
      {
        checkoutCreate(input: {
          lineItems: [{ variantId: "${id}", quantity: ${quantity} }]
        }) {
          checkout {
             id
             webUrl
             lineItems(first: 250) {
               edges {
                 node {
                   id
                   title
                   quantity
                 }
               }
             }
          }
        }
      }      
    `
  ;

  const response = await callShopify(query);

  const checkout = response.data.checkoutCreate.checkout
    ? response.data.checkoutCreate.checkout
    : [];

  return checkout;
}

export async function updateCheckout(id, lineItems) {  
  const formattedLineItems = lineItems.map(item => {
    return `{
      variantId: "${item.variantId}",
      quantity:${item.quantity}
    }`
  })

  const query =
    `mutation 
      {
        checkoutLineItemsReplace(lineItems: [${formattedLineItems}], checkoutId: "${id}") {
          checkout {
             id
             webUrl
             lineItems(first: 250) {
               edges {
                 node {
                   id
                   title
                   quantity
                 }
               }
             }
          }
        }
      }      
    `
  ;

  const response = await callShopify(query);

  console.log(response);

  const checkout = response.data.checkoutLineItemsReplace.checkout
    ? response.data.checkoutLineItemsReplace.checkout
    : [];

  return checkout;
}

export async function getCheckoutUrlWithCheckoutId(checkoutId, setCheckoutUrl) {

  if (checkoutId) {
    const result = await client.checkout.fetch(checkoutId).then((checkout) => {
      return checkout.webUrl;
    });

    if (result) {
      setCheckoutUrl(result);
    }
  }
}

export async function getCartWithCheckoutId(checkoutId, setCart) {

  if (checkoutId) {
    const result = await client.checkout.fetch(checkoutId).then((checkout) => {
      return checkout.lineItems;
    });

    if (result[0]) {
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