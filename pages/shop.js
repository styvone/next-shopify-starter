import ImageTagSection from '@/components/ImageTagSection';
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import Link from 'next/link'
import GentleAndRestorative from '@/components/GentleAndRestorative';
import AccordianItem from '@/components/AccordianItem';

import { useAddToCartContext } from '@/context/Store'
import { useState, useEffect } from 'react'

function ShopPage() {
    const addToCart = useAddToCartContext()
    const [numberOfPills, setnumberOfPills] = useState(1);

    async function handleAddToCart() {
        //const varId = variant.node.id
        // update store context
        if (numberOfPills !== '') {
          addToCart({
            productTitle: "da pill",
            productHandle: "da pill",
            productImage: "da pill",
            variantId: "da-pill",
            variantPrice: 25,
            variantTitle: "da pill",
            variantQuantity: numberOfPills
          })
        }
    }


  return (
    <>  

    {/* SHOPPING SECTION */}
    <div style={{backgroundColor: "#EBE5DB", color: '#283F91'}} className="h-fit-content flex justify-between px-8 py-32">
        <div className="w-1/2">
            <img alt="pill product photo" className="w-3/4" src='/images/shop/pill-product.png' />
        </div>
        <div className="w-1/2 flex flex-col justify-start">
            <div className="pb-28">
                <h1 className="ivyPrestoThin text-6xl pb-8">
                    Boquet <em>Vaginal Prebiotic</em>
                </h1>
                <p className="coreSans text-lg pb-8">
                An easy-to-use vaginal tablet that relieves irritation and odor changes by promoting the growth of good bacteria in the vaginal flora (instead of stripping it away). Backed by science, our tablet is a natural prebiotic that is gentle enough to be used everyday. 
                </p>
                <p className="coreSans text-base">
                *INSERT VAGINALLY. DO NOT TAKE ORALLY.
                </p>
                <p className="coreSans text-base pb-8">
                *Do not use Boquet vaginal prebiotics if you have an allergy to milk.
                </p>

                <div className="flex justify-between">
                    
                    <div id="shopCounterButton" style={{borderColor: '#283F91', backgroundColor: '#EBE5DB', color: '#283F91'}} className="border border-black rounded-full w-1/3 mr-8 flex justify-between items-center overflow-hidden">
                        <button
                        aria-label="remove item from cart"
                        className="h-full w-1/3"
                        onClick={() => {
                            if (numberOfPills > 1) {
                                setnumberOfPills(numberOfPills-1)
                            }
                        }}
                        >
                            -
                        </button>
                        <p className="coreSans text-xl">
                            {numberOfPills}
                        </p>
                        <button
                        aria-label="add item to cart"
                        className="h-full w-1/3"
                        onClick={() => setnumberOfPills(numberOfPills+1)}
                        >
                            +
                        </button>
                    </div>
                    <Link
                        href="/shop"
                        passHref
                    >
                        <button 
                            style={{borderColor: '#283F91', backgroundColor: '#283F91', color: '#EBE5DB'}} 
                            className="relative coreSans border flex justify-center rounded-full w-2/3" 
                            aria-label="add to cart button"
                            onClick={handleAddToCart}
                        >
                            <h1 className="text-xl h-24 flex flex-col justify-center">
                                {`$${numberOfPills * 25}.00 — ADD TO CART`}
                            </h1>
                        </button>
                    </Link>
                </div>
            </div>
            <div>
                <div className="pb-4">
                    <AccordianItem  answer={<>
                        • Right before period when experiencing pH changes
                        <br/>
                        • After period and sex to replenish flora
                        <br/>
                        • Relief of irritation from stress or other external factors 
                    </>}
                    size="4"
                    spaceBeforeBar="4"
                    spaceTopAnswer="4"
                    >
                        <p className="coreSans text-lg">
                            IDEAL FOR
                        </p>
                    </AccordianItem>
                </div>
                <div>
                    <AccordianItem  answer={<>
                        • Lactose*
                        <br/>
                        • Silicon Dioxide
                        <br/>
                        • Magnesium Stearate
                    </>}
                    size="4"
                    spaceBeforeBar="4"
                    spaceTopAnswer="4"
                    >
                        <p className="coreSans text-lg">
                            INGREDIENTS
                        </p>
                    </AccordianItem>
                </div>
            </div>
        </div>
    </div>


    {/* "For all the times your vagina is feeling a little off."" SECTION */}
    <div style={{backgroundColor: "#EBE5DB", color: '#283F91'}} className="h-fit-content flex justify-start px-8 pb-64 pt-32">
        <h1 className="ivyPrestoThin text-8xl w-2/3">
            For all the times your vagina is <em>feeling a little off.</em>
        </h1>
    </div>


    {/* TO RESTORE / TO MAINTAIN section */}
    <div style={{backgroundColor: "#EBE5DB", color: '#283F91'}} className="h-fit-content flex justify-between px-8">
        <div className="h-fit-content w-1/3 flex flex-col justify-end">
            <h2 className="ivyPrestoThin text-5xl pb-8">
                To restore:
            </h2>
            <p className="coreSans text-lg pb-16">
            Restore your vaginal flora or when displaying symptoms of pH imbalance by inserting 1 Boquet tablet vaginally once a day at bedtime for 7 days or until symptoms improve.
            </p>
            <h2 className="ivyPrestoThin text-5xl pb-8">
                To maintain:
            </h2>
            <p className="coreSans text-lg">
            Maintain your vaginal flora's balance and protective state by inserting 1 Boquet tablet vaginally on a weekly or monthly basis at bedtime.
            </p>
        </div>
        <div className="h-fit-content w-1/2">
            <img alt="papayas and other fruits with the pill product" src='/images/shop/papaya.png' />
        </div>
    </div>


    {/* (NOT FINISHED!!! NEED ANIMATION) INSERTING BOQUET SECTION x ROTATING PILL */}
    <div style={{backgroundColor: "#EBE5DB", color: '#283F91'}} className="h-fit-content flex justify-end px-8">
        <div>
            <img alt="largest pill picture folding animation" src='/images/shop/pill-1.png' />
        </div>

        <div className="h-fit-content w-1/2 flex flex-col justify-end pb-32">
            <h2 className="ivyPrestoThin text-5xl w-1/2 pb-8">
                Inserting Boquet:
            </h2>
            <p className="coreSans text-2xl w-11/12 pb-16">
            Use clean fingers or an applicator to insert 1 Boquet tablet gently into the vagina as far up as you are comfortable.
            </p>
            <p className="coreSans text-base">
            * Laying flat on your back is recommended. 
            </p>
            <p className="coreSans text-base pb-8">
            ** You may wish to wear a panty liner in case there is slight leakage.
            </p>
            <p className="coreSans text-base">
            DO NOT TAKE ORALLY
            </p>
        </div>
    </div>

    <GentleAndRestorative />

    {/* THE SCIENCE BEHIND BOQUET */}
    <div style={{backgroundColor: "#EBE5DB", color: '#283F91'}} className="h-fit-content flex flex-col justify-start px-8 py-32">
        <h1 className="ivyPrestoThin text-6xl">
            <em>The science</em> behind Boquet
        </h1>

        <div className="pt-16">
            <AccordianItem answer="Boquet's vaginal tablet is made with the prebiotic lactose which promotes the growth of lactobacillus, our beneficial bacteria. Lactobacillus has a high affinity to vaginal cell receptors, produces lactic acid from lactose and produces hydrogen peroxide. The lower pH from lactic acid and the presence of hydrogen peroxide is not tolerated by many organisms. When lactobacillus makes up the majority of the vaginal flora, it prevents the overgrowth of vaginal pathogenic organisms.">
                <h1>What is <em>Boquet's vaginal prebiotic?</em></h1>
            </AccordianItem>
        </div>

        <div className="pt-16">
            <AccordianItem  answer={<>
            You aren't alone! Vaginal pH can increase around menstruation due to hormone fluctuations and sometimes during intercourse. The causes are not due to poor hygiene and it is not a sexually transmitted infection. Some risk factors include scented soaps, douching, stress and smoking.
            <br/><br/>
            The most common form of vaginal imbalance shows up as bacterial vaginosis. 1 in 3 individuals with vaginas in the U.S. between the age of 14 to 49 will experience imbalances in their flora that lead to bacterial vaginosis.
            </>}>
                <h1>How common are <em>vaginal imbalances?</em></h1>
            </AccordianItem>
        </div>

        <div className="py-16">
            <AccordianItem  answer="An overgrowth of pathogens (gardnerella vaginalis) produces enzymes that break down peptides to amines which have a fishy odor. Boquet's primary ingredient, lactose, promotes the growth of healthy bacteria (lactobacillus) which prevents the adhesion and growth of odor causing bacteria to the vaginal epithelium.">
                <h1>What is the <em>science behind the causes of vaginal odor?</em></h1>
            </AccordianItem>
        </div>

        <Link
            href="/learn"
            passHref
        >
            <a style={{borderColor: '#283F91'}} className="relative coreSans border border-black flex justify-center rounded-full" aria-label="shop">
                <h1 className="text-xl h-24 flex flex-col justify-center">CHECK OUT VAGINAL HEALTH 101</h1>
            </a>
        </Link>
    
    </div>

    </>
  )
}

ShopPage.getLayout = function getLayout(page) {
    return (
      <Layout logoGray={false} backgroundColor={'#EBE5DB'}>
        <SEO 
          title={process.env.siteTitle}
        />
        {page}
      </Layout>
    )
  }

export default ShopPage;
