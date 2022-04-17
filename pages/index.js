import StoreHeading from '@/components/StoreHeading'
import ProductListings from '@/components/ProductListings'
import ImageTagSection from '@/components/ImageTagSection'
import { getAllProductsInCollection } from '@/lib/shopify'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import AccordianItem from '@/components/AccordianItem';
import Link from 'next/link'
import { Component } from 'react';
import React from 'react';
import Slider from "react-slick";


{/* <ProductListings products={products} /> */}

class IndexPage extends Component {

  render() {
    return (
      <>

        {/* BOQUET HOME PAGE TOP SECTION */}
        <div style={{
            backgroundColor: "#EBE5DB", 
            height: '56rem',
            backgroundImage: `url(/images/homepage/top-section-background.png)`,
            backgroundSize: '100%',
            color: '#EBE5DB',
        }} className="h-fit-content w-full flex flex-col justify-center text-center items-center">
          <h1 className="ivyPrestoThin text-6xl w-7/12 pb-8">
            Finally, a <em>natural way</em> to enhance your <em>vagina's good bacteria.</em>
          </h1>
          <Link
              href="/shop"
              passHref
          >
              <a className="coreSans pl-0 text-" aria-label="cart">
                  <div style={{borderRadius: '50%', borderColor: '#EBE5DB'}} className="border w-56 h-20 flex flex-col justify-center">
                          <h1 className="text-center">
                              SHOP BOQUET
                          </h1>
                  </div>
              </a>
          </Link>
        </div>

        {/* MEET BOQUET SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91'}} className="h-fit-content flex flex-col justify-start text-center items-center px-8 py-32">
          <h1 className="ivyPrestoThin text-9xl pb-8">
              Meet <em>Boquet</em>
          </h1>
          <p className="coreSans text-xl pb-8">
            A vaginal prebiotic tablet that's gentle and restorative.
          </p>
          <Link
              href="/learn"
              passHref
          >
              <a className="coreSans pl-0 text-" aria-label="cart">
                  <div style={{borderRadius: '50%', borderColor: '#283F91'}} className="border w-56 h-20 flex flex-col justify-center">
                          <h1 className="text-center">
                              READ OUR STORY
                          </h1>
                  </div>
              </a>
          </Link>
          <img alt="boquet vaginal prebiotic pill clip art" className="pt-8 h-64" src='/images/homepage/pill-icon.png' />

        </div>



        {/* FOUR Rs SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91'}} className="h-fit-content flex flex-col justify-start pl-8 py-16">
          <div className="flex justify-between pb-16">
            <div className="h-fit-content w-1/4 flex flex-col justify-between pr-8">
              <img alt="reduces image" className="pb-8" src='/images/homepage/reduces.png' />
              <h1 className="ivyPrestoThin text-6xl text-center pb-8">
                Reduces
              </h1>
              <p className="coreSans text-lg text-center">
                REDUCES ODOR AND INFECTION CAUSING BACTERIA
              </p>
            </div>

            <div className="h-fit-content w-1/4 flex flex-col justify-between pr-8">
              <img alt="relieves image" className="pb-8" src='/images/homepage/relieves.png' />
              <h1 className="ivyPrestoThin text-6xl text-center pb-8">
                Relieves
              </h1>
              <p className="coreSans text-lg text-center">
                RELIEVES IRRITATIONS AND IMPROVES DRYNESS
              </p>
            </div>

            <div className="h-fit-content w-1/4 flex flex-col justify-between pr-8">
              <img alt="replenishes image" className="pb-8" src='/images/homepage/replenishes.png' />
              <h1 className="ivyPrestoThin text-6xl text-center pb-8">
                Replenishes
              </h1>
              <p className="coreSans text-lg text-center">
                REPLENISHES THE VAGINAL FLORA'S NATURAL PROTECTIVE STATE
              </p>
            </div>

            <div className="h-fit-content w-1/4 flex flex-col justify-between pr-8">
              <img alt="restores image" className="pb-8" src='/images/homepage/restores.png' />
              <h1 className="ivyPrestoThin text-6xl text-center pb-8">
                Restores
              </h1>
              <p className="coreSans text-lg text-center">
                RESTORES VAGINAL PH WITHOUT STRIPPING GOOD BACTERIA
              </p>
            </div>
          </div>
          <Link
              href="/shop"
              passHref
          >
              <a style={{borderColor: '#283F91', color: '#283F91'}} className="relative coreSans border border-black flex justify-center rounded-full mr-8" aria-label="shop">
                  <h1 className="text-xl h-24 flex flex-col justify-center">SHOP BOQUET</h1>
              </a>
          </Link>
        </div>


        {/* BOQUET VAGINAL PREBIOTIC SECTION */}
        <div style={{backgroundColor: "#283F91", color: '#EBE5DB'}} className="h-fit-content flex flex-col justify-start items-center text-center px-8 pt-32">
          <h1 className="ivyPrestoThin text-9xl pb-8">
            Boquet <em>Vaginal Prebiotic</em>
          </h1>
          <p className="coreSans text-xl pb-8 w-5/12">
          Boquet is a prebiotic vaginal tablet that promotes the growth of good bacteria in the vaginal flora (instead of stripping it away). Backed by science, our tablet is gentle enough to be used everyday.
          </p>
          <Link
              href="/shop"
              passHref
          >
              <a className="coreSans pl-0 text-" aria-label="cart">
                  <div style={{borderRadius: '50%', borderColor: '#EBE5DB'}} className="border w-48 h-20 flex flex-col justify-center">
                          <h1 className="text-center">
                              SHOP BOQUET
                          </h1>
                  </div>
              </a>
          </Link>
          <img alt="boquet vaginal prebiotic main product image" className="pt-8" src='/images/homepage/boquet-vaginal-prebiotic.png' />
        </div>
        {/* ingredients list at the bottom of BOQUET VAGINAL PREBIOTIC section */}
        <div style={{backgroundColor: "#283F91", color: '#EBE5DB'}} className="h-fit-content flex justify-start px-8 pb-32 pt-8">
          <div className="flex justify-between w-3/12">
            <p className="coreSans text-lg">
              INGREDIENTS:
            </p>
          </div>
          <div className="flex justify-between w-5/12">
            <p className="coreSans text-lg">
              LACTOSE
            </p>
            <p className="coreSans text-lg">
              SILICON DIOXIDE
            </p>
            <p className="coreSans text-lg">
              MAGNESIUM STEARATE
            </p>
          </div>
        </div>


        {/* CUSTOMER QUOTE SECTION - TO BE DONE LAST */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91'}} className="h-fit-content flex flex-col justify-start px-8 py-32">
          <Slider customPaging={i => (
            <div
            style={{
              minWidth: "1.25rem",
              minHeight: "1.25rem",
              color: "#EBE5DB",
              border: "1px #283F91 solid",
              borderRadius: "50%"
            }}
            >
            </div>
          )} arrows={false} dots={true} autoplay={false} speed={500}>
            <div>
              <div className="flex justify-center text-center w-full py-16">
                <div className="flex flex-col justify-center w-2/3">
                  <h2 className="ivyPrestoThin text-5xl pb-8">
                  “I try to treat my body well by eating well. Boquet prebiotic tablets <em>help me feel well down there, and helps me feel more confident when I plan to have sex.</em>”
                  </h2>
                  <p className="coreSans text-lg">
                  TATIANA K.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center text-center w-full py-16">
                <div className="flex flex-col justify-center w-2/3">
                  <h2 className="ivyPrestoThin text-5xl pb-8">
                  “I noticed <em>pretty instant relief</em>. I honestly think Boquet <em>got rid of whatever discomfort and irritation</em> I was feeling after two nights.”
                  </h2>
                  <p className="coreSans text-lg">
                  ELENA D.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center text-center w-full py-16">
                <div className="flex flex-col justify-center w-2/3">
                  <h2 className="ivyPrestoThin text-5xl pb-8">
                  “People think if you have vaginal issues you're dirty but my symptoms were actually due to overwashing. <em>Something was feeling off and it went away after using Boquet.</em>”
                  </h2>
                  <p className="coreSans text-lg">
                  CHRISTINA M.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        {/* LEARN SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91'}} className="h-fit-content flex flex-col justify-start px-8 py-16">
          <h1 className="ivyPrestoThin text-6xl pb-16">
            Learn
          </h1>

          <div className="pb-8">
            <AccordianItem  answer="The term “vaginal flora” is used to describe the microorganisms or bacteria that populate the vaginal lining. A healthy vaginal flora is dominated by various lactobacillus species which creates a protective barrier with a slightly acidic pH reducing the adhesion of other harmful microorganisms.">
                <h1>What is a <em>vaginal flora</em> and what does it do?</h1>
            </AccordianItem>
          </div>
        

          <div className="pb-16">
            <AccordianItem  answer="Signals your pH may be off include changes in odor, itching, discharge, and possible burning when you urinate. If you're experiencing them consistently, we strongly recommend seeing and consulting with a healthcare provider.">
                <h1>What happens when your <em>vaginal pH balance</em> is off?</h1>
            </AccordianItem>
          </div>

          <Link
              href="/learn"
              passHref
          >
              <a style={{borderColor: '#283F91', color: '#283F91'}} className="relative coreSans border border-black flex justify-center rounded-full" aria-label="shop">
                  <h1 className="text-xl h-24 flex flex-col justify-center">CHECK OUT VAGINAL HEALTH 101</h1>
              </a>
          </Link>
        </div>

      </>
    )
  }
}

IndexPage.getLayout = function getLayout(page) {
  return (
    <Layout logoGray={true} isHomePage={true}>
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

export default IndexPage;
