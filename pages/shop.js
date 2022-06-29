import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import Link from 'next/link';
import GentleAndRestorative from '@/components/GentleAndRestorative';
import AccordianItem from '@/components/AccordianItem';
import { getProduct } from '@/lib/shopify';
import { useAddToCartContext, useCartModalContext } from '@/context/Store';
import { useState, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const productHandle = 'the-pill';

function ShopPage({ productData }) {
    const toggleModal = useCartModalContext()[0];
    const addToCart = useAddToCartContext()
    const [numberOfPills, setnumberOfPills] = useState(1);
    const [variant, setVariant] = useState(productData.variants.edges[0])

    async function handleAddToCart() {
        await addToCart({
            productTitle: productData.title,
            productHandle: productData.handle,
            productImage: productData.images.edges[0].node,
            variantId: variant.node.id,
            variantPrice: variant.node.price,
            variantTitle: variant.node.title,
            variantQuantity: numberOfPills
        });
        toggleModal();
    }

    useEffect(() => {

        const floatingPillAnimationContainerDesktop = gsap.timeline({
            scrollTrigger: {
                trigger: '.floatingPillAnimationContainer-desktop',
                toggleActions: 'play none reverse none',
                start: 'center 100%',
                end: 'center 80%',
            },
        });

        const floatingPillAnimationContainerMobile = gsap.timeline({
            scrollTrigger: {
                trigger: '.floatingPillAnimationContainer-mobile',
                toggleActions: 'play none reverse none',
                start: 'center 100%',
                end: 'center 80%',
            },
        });

        const floatingPillAnimationContainerTablet = gsap.timeline({
            scrollTrigger: {
                trigger: '.floatingPillAnimationContainer-tablet',
                toggleActions: 'play none reverse none',
                start: 'center 100%',
                end: 'center 80%',
            },
        });


        // DESKTOP
        
        floatingPillAnimationContainerDesktop
            .from('.bounce1-desktop', {y: '20', opacity: 0, duration: 0.5})
            .from('.bounce2-desktop', {y: '20', opacity: 0, duration: 0.5})
            .from('.bounce3-desktop', {y: '20', opacity: 0, duration: 0.5});

        const bounce1TimelineDesktop = gsap.timeline({repeat: -1}).yoyo(true);
        const bounce2TimelineDesktop = gsap.timeline({repeat: -1}).yoyo(true);
        const bounce3TimelineDesktop = gsap.timeline({repeat: -1}).yoyo(true);

        bounce1TimelineDesktop
        .delay(0.6)
            .to('.bounce1-desktop', {ease: "sine.out", yPercent:'-1', duration: 0.7})
            .to('.bounce1-desktop', {ease: "sine.out", yPercent:'1', duration: 0.7});

        bounce2TimelineDesktop
        .delay(0.3)
            .to('.bounce2-desktop', {ease: "sine.out", yPercent:'1', duration: 0.7})
            .to('.bounce2-desktop', {ease: "sine.out", yPercent:'-1', duration: 0.7})
            
        bounce3TimelineDesktop
            .to('.bounce3-desktop', {ease: "sine.out", yPercent:'-1', duration: 0.7})
            .to('.bounce3-desktop', {ease: "sine.out", yPercent:'1', duration: 0.7})


        // MOBILE

        floatingPillAnimationContainerMobile
            .from('.bounce1-mobile', {y: '20', opacity: 0, duration: 0.5})
            .from('.bounce2-mobile', {y: '20', opacity: 0, duration: 0.5})
            .from('.bounce3-mobile', {y: '20', opacity: 0, duration: 0.5});

        const bounce1TimelineMobile = gsap.timeline({repeat: -1}).yoyo(true);
        const bounce2TimelineMobile = gsap.timeline({repeat: -1}).yoyo(true);
        const bounce3TimelineMobile = gsap.timeline({repeat: -1}).yoyo(true);

        bounce1TimelineMobile
        .delay(0.6)
            .to('.bounce1-mobile', {ease: "sine.out", yPercent:'-1', duration: 0.7})
            .to('.bounce1-mobile', {ease: "sine.out", yPercent:'1', duration: 0.7});

        bounce2TimelineMobile
        .delay(0.3)
            .to('.bounce2-mobile', {ease: "sine.out", yPercent:'1', duration: 0.7})
            .to('.bounce2-mobile', {ease: "sine.out", yPercent:'-1', duration: 0.7})
            
        bounce3TimelineMobile
            .to('.bounce3-mobile', {ease: "sine.out", yPercent:'-1', duration: 0.7})
            .to('.bounce3-mobile', {ease: "sine.out", yPercent:'1', duration: 0.7})

        
        // TABLET

        floatingPillAnimationContainerTablet
            .from('.bounce1-tablet', {y: '20', opacity: 0, duration: 0.5})
            .from('.bounce2-tablet', {y: '20', opacity: 0, duration: 0.5})
            .from('.bounce3-tablet', {y: '20', opacity: 0, duration: 0.5});

        const bounce1TimelineTablet = gsap.timeline({repeat: -1}).yoyo(true);
        const bounce2TimelineTablet = gsap.timeline({repeat: -1}).yoyo(true);
        const bounce3TimelineTablet = gsap.timeline({repeat: -1}).yoyo(true);

        bounce1TimelineTablet
        .delay(0.6)
            .to('.bounce1-tablet', {ease: "sine.out", yPercent:'-1', duration: 0.7})
            .to('.bounce1-tablet', {ease: "sine.out", yPercent:'1', duration: 0.7});

        bounce2TimelineTablet
        .delay(0.3)
            .to('.bounce2-tablet', {ease: "sine.out", yPercent:'1', duration: 0.7})
            .to('.bounce2-tablet', {ease: "sine.out", yPercent:'-1', duration: 0.7})
            
        bounce3TimelineTablet
            .to('.bounce3-tablet', {ease: "sine.out", yPercent:'-1', duration: 0.7})
            .to('.bounce3-tablet', {ease: "sine.out", yPercent:'1', duration: 0.7})


        return () => {
            floatingPillAnimationContainerDesktop.scrollTrigger.kill();
            floatingPillAnimationContainerMobile.scrollTrigger.kill();
            floatingPillAnimationContainerTablet.scrollTrigger.kill();
        }

    }, []);


  return (
    <>  

    {/* DESKTOP */}
    <div className="responsive-desktop">
        {/* SHOPPING SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex justify-between py-32">
            <div className="w-1/2">
                <img alt="pill product photo" className="w-3/4" src='/images/shop/pill-product.png' />
            </div>
            <div className="w-1/2 flex flex-col justify-start">
                <div className="pb-28">
                    <h1 className="ivyPrestoThin text-desktop-h1 pb-8 lineHeight-desktop-123">
                        Boquet <em>Vaginal Prebiotic</em>
                    </h1>
                    <p className="coreSans text-desktop-p2 pb-8">
                    An easy-to-use vaginal tablet that relieves irritation and odor changes by promoting the growth of good bacteria in the vaginal flora (instead of stripping it away). Backed by science, our tablet is a natural prebiotic that is gentle enough to be used everyday. 
                    </p>
                    <p className="coreSans text-desktop-p3">
                    *INSERT VAGINALLY. DO NOT TAKE ORALLY.
                    </p>
                    <p className="coreSans text-desktop-p3 pb-8">
                    *DO NOT USE BOQUET VAGINAL PREBIOTICS IF YOU HAVE AN ALLERGY TO MILK.
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
                            <p className="coreSans text-desktop-p2">
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
                                <p className="text-desktop-p2 h-24 flex flex-col justify-center">
                                    {`$${numberOfPills * 25}.00 — ADD TO CART`}
                                </p>
                            </button>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="pb-4">
                        <AccordianItem  answer={<div style={{lineHeight: '24px'}}>
                            • Right before period when experiencing pH changes
                            <br/>
                            • After period and sex to replenish flora
                            <br/>
                            • Relief of irritation from stress or other external factors 
                        </div>}
                        size="4"
                        spaceBeforeBar="4"
                        spaceTopAnswer="4"
                        >
                            <p className="coreSans text-desktop-p2">
                                IDEAL FOR
                            </p>
                        </AccordianItem>
                    </div>
                    <div>
                        <AccordianItem  answer={<div style={{lineHeight: '24px'}}>
                            • Lactose*
                            <br/>
                            • Silicon Dioxide
                            <br/>
                            • Magnesium Stearate
                        </div>}
                        size="4"
                        spaceBeforeBar="4"
                        spaceTopAnswer="4"
                        >
                            <p className="coreSans text-desktop-p2">
                                INGREDIENTS
                            </p>
                        </AccordianItem>
                    </div>
                </div>
            </div>
        </div>


        {/* "For all the times your vagina is feeling a little off."" SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex justify-start pb-64 pt-32">
            <h2 className="ivyPrestoThin text-8xl w-3/4 desktop-oneOff-md lineHeight-desktop-113">
                For all the times your vagina is <em>feeling a little off.</em>
            </h2>
        </div>


        {/* TO RESTORE / TO MAINTAIN section */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex justify-between">
            <div className="h-fit-content w-1/3 flex flex-col justify-end">
                <h2 className="ivyPrestoThin text-desktop-h2 pb-8 lineHeight-desktop-120">
                    To restore:
                </h2>
                <p className="coreSans text-desktop-p1 pb-16">
                Restore your vaginal flora or when displaying symptoms of pH imbalance by inserting 1 Boquet tablet vaginally once a day at bedtime for 7 days or until symptoms improve.
                </p>
                <h2 className="ivyPrestoThin text-desktop-h2 pb-8 lineHeight-desktop-120">
                    To maintain:
                </h2>
                <p className="coreSans text-desktop-p1">
                Maintain your vaginal flora's balance and protective state by inserting 1 Boquet tablet vaginally on a weekly or monthly basis at bedtime.
                </p>
            </div>
            <div className="h-fit-content w-1/2">
                <img alt="papayas and other fruits with the pill product" src='/images/shop/papaya.png' />
            </div>
        </div>


        {/* INSERTING BOQUET SECTION x ROTATING PILL ANIMATION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex justify-end">
            <div style={{height: '45rem'}} className="w-1/2 relative floatingPillAnimationContainer-desktop">
                <img alt="smallest pill picture folding animation" style={{transform: 'translate(-240px, 250px)'}} className="inline absolute bounce1-desktop" src='/images/shop/small-pill.png' />
                <img alt="medium pill picture folding animation" style={{transform: 'translate(-30px, 100px)'}} className="inline absolute bounce2-desktop" src='/images/shop/med-pill.png' />
                <img alt="largest pill picture folding animation" style={{transform: 'translate(217px, 0px)'}} className="inline absolute bounce3-desktop" src='/images/shop/large-pill.png' />
            </div>

            <div className="h-fit-content w-1/2 flex flex-col justify-end pb-32">
                <h2 className="ivyPrestoThin text-desktop-h2 lineHeight-desktop-120 w-1/2 pb-8">
                    Inserting Boquet:
                </h2>
                <p className="coreSans text-desktop-p1 w-11/12 pb-16">
                Use clean fingers or an applicator to insert 1 Boquet tablet gently into the vagina as far up as you are comfortable.
                </p>
                <p className="coreSans text-desktop-p3">
                * Laying flat on your back is recommended.
                </p>
                <p className="coreSans text-desktop-p3 pb-8">
                ** You may wish to wear a panty liner in case there is slight leakage.
                </p>
                <p className="coreSans text-desktop-p3">
                DO NOT TAKE ORALLY
                </p>
            </div>
        </div>

        <GentleAndRestorative />

        {/* THE SCIENCE BEHIND BOQUET */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex flex-col justify-start py-32">
            <h1 className="ivyPrestoThin text-desktop-h1 lineHeight-desktop-normal">
                <em>The science</em> behind Boquet
            </h1>

            <div className="pt-16">
                <AccordianItem answer="Boquet's vaginal tablet is made with the prebiotic lactose which promotes the growth of lactobacillus, our beneficial bacteria. Lactobacillus has a high affinity to vaginal cell receptors, produces lactic acid from lactose and produces hydrogen peroxide. The lower pH from lactic acid and the presence of hydrogen peroxide is not tolerated by many organisms. When lactobacillus makes up the majority of the vaginal flora, it prevents the overgrowth of vaginal pathogenic organisms.">
                    <h3 className="text-desktop-h3 lineHeight-desktop-normal">What is <em>Boquet's vaginal prebiotic?</em></h3>
                </AccordianItem>
            </div>

            <div className="pt-16">
                <AccordianItem  answer={<>
                You aren't alone! Vaginal pH can increase around menstruation due to hormone fluctuations and sometimes during intercourse. The causes are not due to poor hygiene and it is not a sexually transmitted infection. Some risk factors include scented soaps, douching, stress and smoking.
                <br/><br/>
                The most common form of vaginal imbalance shows up as bacterial vaginosis. 1 in 3 individuals with vaginas in the U.S. between the age of 14 to 49 will experience imbalances in their flora that lead to bacterial vaginosis.
                </>}>
                    <h3 className="text-desktop-h3 lineHeight-desktop-normal">How common are <em>vaginal imbalances?</em></h3>
                </AccordianItem>
            </div>

            <div className="py-16">
                <AccordianItem  answer="An overgrowth of pathogens (gardnerella vaginalis) produces enzymes that break down peptides to amines which have a fishy odor. Boquet's primary ingredient, lactose, promotes the growth of healthy bacteria (lactobacillus) which prevents the adhesion and growth of odor causing bacteria to the vaginal epithelium.">
                    <h3 className="text-desktop-h3 lineHeight-desktop-normal">What is the <em>science behind the causes of vaginal odor?</em></h3>
                </AccordianItem>
            </div>

            <Link
                href="/learn"
                passHref
            >
                <a style={{borderColor: '#283F91'}} className="relative coreSans border border-black flex justify-center rounded-full" aria-label="shop">
                    <p className="text-desktop-p2 h-24 flex flex-col justify-center">CHECK OUT VAGINAL HEALTH 101</p>
                </a>
            </Link>
        </div>
    </div>



    {/* MOBILE */}
    <div className="responsive-mobile">
        {/* SHOPPING SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-between py-8">
            <div className="w-full pb-8">
                <h1 className="ivyPrestoThin text-mobile-h1 pb-8 lineHeight-mobile-43px">
                    Boquet <em>Vaginal Prebiotic</em>
                </h1>
                <img alt="pill product photo" src='/images/shop/pill-product.png' />
            </div>
            <div className="w-full flex flex-col justify-start">
                <div className="pb-16">

                    <p className="coreSans text-mobile-p1 lineHeight-mobile-22px pb-8">
                    An easy-to-use vaginal tablet that relieves irritation and odor changes by promoting the growth of good bacteria in the vaginal flora (instead of stripping it away). Backed by science, our tablet is a natural prebiotic that is gentle enough to be used everyday. 
                    </p>
                    <p className="coreSans text-mobile-p1 lineHeight-mobile-22px">
                    *INSERT VAGINALLY. DO NOT TAKE ORALLY.
                    </p>
                    <p className="coreSans text-mobile-p1 lineHeight-mobile-22px pb-8">
                    *Do not use Boquet vaginal prebiotics if you have an allergy to milk.
                    </p>

                    <div className="flex flex-col justify-between">
                        
                        <div id="shopCounterButton" style={{borderColor: '#283F91', backgroundColor: '#EBE5DB', color: '#283F91'}} className="h-14 border border-black rounded-full w-full mr-8 flex justify-between items-center overflow-hidden mb-8">
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
                            <p className="coreSans text-mobile-p1 lineHeight-mobile-22px">
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
                                className="relative coreSans border flex justify-center rounded-full w-full" 
                                aria-label="add to cart button"
                                onClick={handleAddToCart}
                            >
                                <div className="h-14 w-full flex flex-col justify-center">
                                    <div className="flex justify-between">
                                    <p className="text-mobile-p1 lineHeight-mobile-22px ml-8">
                                        {`$${numberOfPills * 25}.00`}
                                    </p>
                                    <p className="text-mobile-p1 lineHeight-mobile-22px mr-8">
                                        ADD TO CART
                                    </p>
                                    </div>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="pb-8">
                        <AccordianItem  answer={<div style={{lineHeight: '24px'}}>
                            • Right before period when experiencing pH changes
                            <br/>
                            • After period and sex to replenish flora
                            <br/>
                            • Relief of irritation from stress or other external factors 
                        </div>}
                        size="4"
                        spaceBeforeBar="4"
                        spaceTopAnswer="4"
                        >
                            <p className="coreSans text-mobile-p2 lineHeight-mobile-20px">
                                IDEAL FOR
                            </p>
                        </AccordianItem>
                    </div>
                    <div>
                        <AccordianItem  answer={<div style={{lineHeight: '24px'}}>
                            • Lactose*
                            <br/>
                            • Silicon Dioxide
                            <br/>
                            • Magnesium Stearate
                        </div>}
                        size="4"
                        spaceBeforeBar="4"
                        spaceTopAnswer="4"
                        >
                            <p className="coreSans text-mobile-p2 lineHeight-mobile-20px">
                                INGREDIENTS
                            </p>
                        </AccordianItem>
                    </div>
                </div>
            </div>
        </div>


        {/* "For all the times your vagina is feeling a little off."" SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex justify-start pb-8 pt-16">
            <h2 className="ivyPrestoThin text-mobile-h1 lineHeight-mobile-43px w-full">
                For all the times your vagina is <em>feeling a little off.</em>
            </h2>
        </div>


        {/* TO RESTORE / TO MAINTAIN section */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-between">
            <div className="h-fit-content w-full pb-8">
                <img alt="papayas and other fruits with the pill product" src='/images/shop/papaya.png' />
            </div>
            <div className="h-fit-content w-full flex flex-col justify-end">
                <h2 className="ivyPrestoThin text-mobile-h2 pb-4 lineHeight-mobile-35px">
                    To Restore
                </h2>
                <p className="coreSans text-mobile-p1 lineHeight-mobile-22px pb-8">
                Restore your vaginal flora or when displaying symptoms of pH imbalance by inserting 1 Boquet tablet vaginally once a day at bedtime for 7 days or until symptoms improve.
                </p>
                <h2 className="ivyPrestoThin text-mobile-h2 pb-4 lineHeight-mobile-35px">
                    To Maintain
                </h2>
                <p className="coreSans text-mobile-p1 lineHeight-mobile-22px">
                Maintain your vaginal flora's balance and protective state by inserting 1 Boquet tablet vaginally on a weekly or monthly basis at bedtime.
                </p>
            </div>
        </div>


        {/* INSERTING BOQUET SECTION x ROTATING PILL ANIMATION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-end">
            <div style={{height: '20rem'}} className="w-1/2 relative floatingPillAnimationContainer-mobile py-16">
                <img alt="smallest pill picture folding animation" style={{transform: 'translate(-20px, 90px)'}} className="inline absolute bounce1-mobile" src='/images/shop/small-pill.png' />
                <img alt="medium pill picture folding animation" style={{transform: 'translate(60px, 15px)'}} className="inline absolute bounce2-mobile" src='/images/shop/med-pill.png' />
                <img alt="largest pill picture folding animation" style={{transform: 'translate(160px, -30px)'}} className="inline absolute bounce3-mobile" src='/images/shop/large-pill.png' />
            </div>

            <div className="h-fit-content w-full flex flex-col justify-end pb-16">
                <h2 className="ivyPrestoThin text-mobile-h2 lineHeight-mobile-35px w-full pb-4">
                    Inserting Boquet
                </h2>
                <p className="coreSans text-mobile-p1 lineHeight-mobile-22px w-full pb-4">
                Use clean fingers or an applicator to insert 1 Boquet tablet gently into the vagina as far up as you are comfortable.
                </p>
                <p className="coreSans text-mobile-p1 lineHeight-mobile-22px">
                * Laying flat on your back is recommended.
                </p>
                <p className="coreSans text-mobile-p1 lineHeight-mobile-22px pb-4">
                ** You may wish to wear a panty liner in case there is slight leakage.
                </p>
                <p className="coreSans text-mobile-p1 lineHeight-mobile-22px">
                DO NOT TAKE ORALLY
                </p>
            </div>
        </div>

        <GentleAndRestorative />

        {/* THE SCIENCE BEHIND BOQUET */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-start py-16">
            <h1 className="ivyPrestoThin text-mobile-h1 lineHeight-mobile-49px">
                <em>The science</em><br/> behind Boquet
            </h1>

            <div className="pt-16">
                <AccordianItem answer="Boquet's vaginal tablet is made with the prebiotic lactose which promotes the growth of lactobacillus, our beneficial bacteria. Lactobacillus has a high affinity to vaginal cell receptors, produces lactic acid from lactose and produces hydrogen peroxide. The lower pH from lactic acid and the presence of hydrogen peroxide is not tolerated by many organisms. When lactobacillus makes up the majority of the vaginal flora, it prevents the overgrowth of vaginal pathogenic organisms.">
                    <h3 className="text-mobile-h3 lineHeight-mobile-39px">What is <em>Boquet's vaginal prebiotic?</em></h3>
                </AccordianItem>
            </div>

            <div className="pt-8">
                <AccordianItem  answer={<>
                You aren't alone! Vaginal pH can increase around menstruation due to hormone fluctuations and sometimes during intercourse. The causes are not due to poor hygiene and it is not a sexually transmitted infection. Some risk factors include scented soaps, douching, stress and smoking.
                <br/><br/>
                The most common form of vaginal imbalance shows up as bacterial vaginosis. 1 in 3 individuals with vaginas in the U.S. between the age of 14 to 49 will experience imbalances in their flora that lead to bacterial vaginosis.
                </>}>
                    <h3 className="text-mobile-h3 lineHeight-mobile-39px">How common are <em>vaginal imbalances?</em></h3>
                </AccordianItem>
            </div>

            <div className="py-8">
                <AccordianItem  answer="An overgrowth of pathogens (gardnerella vaginalis) produces enzymes that break down peptides to amines which have a fishy odor. Boquet's primary ingredient, lactose, promotes the growth of healthy bacteria (lactobacillus) which prevents the adhesion and growth of odor causing bacteria to the vaginal epithelium.">
                    <h3 className="text-mobile-h3 lineHeight-mobile-39px">What is the <em>science behind the causes of vaginal odor?</em></h3>
                </AccordianItem>
            </div>

            <Link
                href="/learn"
                passHref
            >
                <a style={{borderColor: '#283F91'}} className="relative coreSans border border-black flex justify-center rounded-full" aria-label="shop">
                    <p className="text-mobile-p1 lineHeight-mobile-22px h-14 flex flex-col justify-center">READ FULL FAQ</p>
                </a>
            </Link>
        </div>
    </div>


    {/* TABLET */}
    <div className="responsive-tablet">
        {/* SHOPPING SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-between pb-8 pt-12">
            <div className="w-full pb-8">
                <h1 className="ivyPrestoThin text-tablet-h1 lineHeight-tablet-59px pb-8">
                    Boquet <em>Vaginal Prebiotic</em>
                </h1>
                <img className="w-8/12" alt="pill product photo" src='/images/shop/pill-product.png' />
            </div>
            <div className="w-full flex flex-col justify-start">
                <div className="pb-8">

                    <div className="w-10/12">
                        <p className="coreSans text-tablet-p1 lineHeight-tablet-25px pb-8">
                        An easy-to-use vaginal tablet that relieves irritation and odor changes by promoting the growth of good bacteria in the vaginal flora (instead of stripping it away). Backed by science, our tablet is a natural prebiotic that is gentle enough to be used everyday. 
                        </p>
                        <p className="coreSans text-tablet-p1 lineHeight-tablet-25px">
                        *INSERT VAGINALLY. DO NOT TAKE ORALLY.
                        </p>
                        <p className="coreSans text-tablet-p1 lineHeight-tablet-25px pb-12">
                        *Do not use Boquet vaginal prebiotics if you have an allergy to milk.
                        </p>
                    </div>

                    <div className="flex justify-between">
                        
                        <div id="shopCounterButton" style={{borderColor: '#283F91', backgroundColor: '#EBE5DB', color: '#283F91'}} className="h-20 border border-black rounded-full w-7/12 mr-8 flex justify-between items-center overflow-hidden mb-8">
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
                            <p className="coreSans text-tablet-p2 lineHeight-tablet-22px">
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
                                className="h-20 relative coreSans border flex flex-col justify-center rounded-full w-full" 
                                aria-label="add to cart button"
                                onClick={handleAddToCart}
                            >
                                <div className="w-full flex flex-col justify-center">
                                    <div className="flex justify-evenly">
                                        <p className="text-tablet-p2 lineHeight-tablet-22px ml-8">
                                            {`$${numberOfPills * 25}.00`}
                                        </p>
                                        <p className="text-tablet-p2 lineHeight-tablet-22px mr-8">
                                            ADD TO CART
                                        </p>
                                    </div>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="pb-8">
                        <AccordianItem  answer={<div style={{lineHeight: '24px'}}>
                            • Right before period when experiencing pH changes
                            <br/>
                            • After period and sex to replenish flora
                            <br/>
                            • Relief of irritation from stress or other external factors 
                        </div>}
                        size="4"
                        spaceBeforeBar="4"
                        spaceTopAnswer="4"
                        >
                            <p className="coreSans text-tablet-p2 lineHeight-tablet-22px">
                                IDEAL FOR
                            </p>
                        </AccordianItem>
                    </div>
                    <div>
                        <AccordianItem  answer={<div style={{lineHeight: '24px'}}>
                            • Lactose*
                            <br/>
                            • Silicon Dioxide
                            <br/>
                            • Magnesium Stearate
                        </div>}
                        size="4"
                        spaceBeforeBar="4"
                        spaceTopAnswer="4"
                        >
                            <p className="coreSans text-tablet-p2 lineHeight-tablet-22px">
                                INGREDIENTS
                            </p>
                        </AccordianItem>
                    </div>
                </div>
            </div>
        </div>


        {/* "For all the times your vagina is feeling a little off."" SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex justify-start pb-8 pt-16">
            <h1 className="ivyPrestoThin text-tablet-h1 lineHeight-tablet-59px w-10/12">
                For all the times your vagina is <em>feeling a little off.</em>
            </h1>
        </div>


        {/* TO RESTORE / TO MAINTAIN section */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-between">
            <div className="h-fit-content w-full pb-8">
                <img alt="papayas and other fruits with the pill product" src='/images/shop/papaya.png' />
            </div>
            <div className="h-fit-content w-10/12 flex flex-col justify-end">
                <h2 className="ivyPrestoThin text-tablet-h2 lineHeight-tablet-43px pb-4">
                    To Restore
                </h2>
                <p className="coreSans text-tablet-p1 lineHeight-tablet-25px pb-8">
                Restore your vaginal flora or when displaying symptoms of pH imbalance by inserting 1 Boquet tablet vaginally once a day at bedtime for 7 days or until symptoms improve.
                </p>
                <h2 className="ivyPrestoThin text-tablet-h2 lineHeight-tablet-43px pb-4">
                    To Maintain
                </h2>
                <p className="coreSans text-tablet-p1 lineHeight-tablet-25px">
                Maintain your vaginal flora's balance and protective state by inserting 1 Boquet tablet vaginally on a weekly or monthly basis at bedtime.
                </p>
            </div>
        </div>


        {/* INSERTING BOQUET SECTION x ROTATING PILL ANIMATION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-end">
            <div style={{height: '36rem'}} className="w-1/2 relative floatingPillAnimationContainer-tablet py-16">
                <img alt="smallest pill picture folding animation" style={{transform: 'translate(13px, 175px)'}} className="inline absolute bounce1-tablet" src='/images/shop/small-pill.png' />
                <img alt="medium pill picture folding animation" style={{transform: 'translate(160px, 28px)'}} className="inline absolute bounce2-tablet" src='/images/shop/med-pill.png' />
                <img alt="largest pill picture folding animation" style={{transform: 'translate(347px, -78px)'}} className="inline absolute bounce3-tablet" src='/images/shop/large-pill.png' />
            </div>

            <div className="h-fit-content w-full flex flex-col justify-end pb-16">
                <h2 className="ivyPrestoThin text-tablet-h2 lineHeight-tablet-53px w-full pb-4">
                    Inserting Boquet
                </h2>
                <p className="coreSans text-tablet-p1 lineHeight-tablet-25px w-10/12 pb-4">
                Use clean fingers or an applicator to insert 1 Boquet tablet gently into the vagina as far up as you are comfortable.
                </p>
                <p className="coreSans text-tablet-p3 lineHeight-tablet-20px">
                * Laying flat on your back is recommended.
                </p>
                <p className="coreSans text-tablet-p3 lineHeight-tablet-20px pb-4">
                ** You may wish to wear a panty liner in case there is slight leakage.
                </p>
                <p className="coreSans text-tablet-p3 lineHeight-tablet-20px">
                DO NOT TAKE ORALLY
                </p>
            </div>
        </div>

        <GentleAndRestorative />

        {/* THE SCIENCE BEHIND BOQUET */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-start py-16">
            <h1 className="ivyPrestoThin text-tablet-h1 lineHeight-tablet-71px">
                <em>The science</em> behind Boquet
            </h1>

            <div className="pt-16">
                <AccordianItem answer="Boquet's vaginal tablet is made with the prebiotic lactose which promotes the growth of lactobacillus, our beneficial bacteria. Lactobacillus has a high affinity to vaginal cell receptors, produces lactic acid from lactose and produces hydrogen peroxide. The lower pH from lactic acid and the presence of hydrogen peroxide is not tolerated by many organisms. When lactobacillus makes up the majority of the vaginal flora, it prevents the overgrowth of vaginal pathogenic organisms.">
                    <h3 className="text-tablet-h3 lineHeight-tablet-42px">What is <em>Boquet's vaginal prebiotic?</em></h3>
                </AccordianItem>
            </div>

            <div className="pt-8">
                <AccordianItem  answer={<>
                You aren't alone! Vaginal pH can increase around menstruation due to hormone fluctuations and sometimes during intercourse. The causes are not due to poor hygiene and it is not a sexually transmitted infection. Some risk factors include scented soaps, douching, stress and smoking.
                <br/><br/>
                The most common form of vaginal imbalance shows up as bacterial vaginosis. 1 in 3 individuals with vaginas in the U.S. between the age of 14 to 49 will experience imbalances in their flora that lead to bacterial vaginosis.
                </>}>
                    <h3 className="text-tablet-h3 lineHeight-tablet-42px">How common are <em>vaginal imbalances?</em></h3>
                </AccordianItem>
            </div>

            <div className="pt-8 pb-16">
                <AccordianItem  answer="An overgrowth of pathogens (gardnerella vaginalis) produces enzymes that break down peptides to amines which have a fishy odor. Boquet's primary ingredient, lactose, promotes the growth of healthy bacteria (lactobacillus) which prevents the adhesion and growth of odor causing bacteria to the vaginal epithelium.">
                    <h3 className="text-tablet-h3 lineHeight-tablet-42px">What is the <em>science behind the causes of vaginal odor?</em></h3>
                </AccordianItem>
            </div>

            <Link
                href="/learn"
                passHref
            >
                <a style={{borderColor: '#283F91'}} className="relative coreSans border border-black flex justify-center rounded-full" aria-label="shop">
                    <p className="text-tablet-p2 lineHeight-tablet-22px h-20 flex flex-col justify-center">CHECK OUT VAGINAL HEALTH 101</p>
                </a>
            </Link>
        </div>
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
  
  export async function getStaticProps() {
    const productData = await getProduct(productHandle)  
  
    return {
      props: {
        productData,
      },
    }
  }

export default ShopPage;
