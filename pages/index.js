import StoreHeading from '@/components/StoreHeading'
import ProductListings from '@/components/ProductListings'
import ImageTagSection from '@/components/ImageTagSection'
import { getAllProductsInCollection } from '@/lib/shopify'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'

function IndexPage({ products }) {

  return (
    <div className="mx-auto max-w-6xl">
      <StoreHeading />
      <ProductListings products={products} />
    </div>
  )
}

IndexPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SEO 
        title={process.env.siteTitle}
      />
      {page}
      <ImageTagSection backgroundImage="/images/image-tag-section/image-tag-section-test.png" /> 
    </Layout>
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
