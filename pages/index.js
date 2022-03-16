import StoreHeading from '@/components/StoreHeading'
import ProductListings from '@/components/ProductListings'
import ImageTagSection from '@/components/ImageTagSection'
import { getAllProductsInCollection } from '@/lib/shopify'

function IndexPage({ products }) {

  return (
    <>
      <div className="mx-auto max-w-6xl">
        <StoreHeading />
        <ProductListings products={products} />
      </div>
      <ImageTagSection backgroundImage="/images/image-tag-section/image-tag-section-test.png" /> 
    </>
  )
}

export async function getStaticProps() {
  const products = await getAllProductsInCollection()

  return {
    props: {
      products
    },
  }
}

export default IndexPage
