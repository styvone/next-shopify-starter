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
import Image from 'next/image';

import pillProductPhoto from '../public/images/shop/pill-product.png';
import papayaImage from '../public/images/shop/papaya.png';

gsap.registerPlugin(ScrollTrigger);

// this is set inside of Shopify dashboard
const productHandle = 'the-pill';

function ShopPage({ productData }) {
    const toggleModal = useCartModalContext()[0];
    const addToCart = useAddToCartContext()
    const [numberOfPills, setnumberOfPills] = useState(1);
    const [variant, setVariant] = useState(productData.variants.edges[0])

    const [isTopImageLoaded, setIsTopImageLoaded] = useState(false);

    async function handleAddToCart() {
        toggleModal();
        await addToCart({
            productTitle: productData.title,
            productHandle: productData.handle,
            productImage: productData.images.edges[0].node,
            variantId: variant.node.id,
            variantPrice: variant.node.price,
            variantTitle: variant.node.title,
            variantQuantity: numberOfPills
        });
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
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex justify-between pt-20 pb-48">
            <div className="w-1/2">
                <div className="inline-block w-3/4">
                    <Image 
                        alt="pill product photo" 
                        src={pillProductPhoto} 
                        priority={true}
                        quality={100} 
                        className={'image-opacity-duration' + (isTopImageLoaded ? ' onLoad-opacity-trigger': '')}
                        onLoadingComplete={() => {
                            setIsTopImageLoaded(true);
                        }}
                    />
                </div>
            </div>
            <div className="w-1/2 flex flex-col justify-start">
                <div className="pb-24">
                    <h1 className="ivyPrestoThin text-desktop-h1 pb-4 lineHeight-desktop-123">
                        Boquet <em>Vaginal Prebiotic</em>
                    </h1>
                    <p className="coreSans text-desktop-p2 pb-8">
                    An easy-to-use vaginal tablet that promotes a protective pH and relieves odor and irritation. Each bottle contains 30 vaginal tablets.
                    </p>
                    <p className="coreSans text-desktop-p3">
                    * When displaying symptoms of pH imbalance
                    </p>
                    <p className="coreSans text-desktop-p3">
                    * Before and/or after your period when experiencing hormonal changes
                    </p>
                    <p className="coreSans text-desktop-p3 pb-20">
                    * Before and/or after sex to replenish the vaginal flora
                    </p>


                    <div className="flex justify-between h-24">
                        
                        <div id="shopCounterButton" style={{borderColor: '#283F91', backgroundColor: '#F4F0E8', color: '#283F91'}} className="border border-black rounded-full w-1/3 mr-8 flex justify-between items-center overflow-hidden">
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
                            href="javascript:void(0)"
                            passHref
                        >
                            <button 
                                style={{borderColor: '#283F91', backgroundColor: '#283F91', color: '#F4F0E8'}} 
                                className="noOutlineButton relative coreSans border flex justify-center rounded-full w-2/3" 
                                aria-label="add to cart button"
                                onClick={handleAddToCart}
                            >
                                <p className="text-desktop-p2 h-24 flex flex-col justify-center">
                                    {`$${numberOfPills * 29}.00 — ADD TO CART`}
                                </p>
                            </button>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="pb-4">
                        <AccordianItem  answer={<div style={{lineHeight: '24px'}}>
                            • Insert vaginally. Do not take orally.
                            <br/>
                            • Do not use Boquet Vaginal Prebiotics if you have an allergy to milk.
                            <br/>
                            • Boquet Vaginal Prebiotics are safe to use in cases of lactose intolerance.
                        </div>}
                        size="4"
                        spaceBeforeBar="4"
                        spaceTopAnswer="4"
                        customAnswerWidth="full"
                        >
                            <p className="coreSans text-desktop-p2">
                                CAUTION
                            </p>
                        </AccordianItem>
                    </div>
                    <div>
                        <AccordianItem  answer={<div style={{lineHeight: '24px'}}>
                            • Lactose
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


        {/* "For all the times your vagina is feeling a little off."" SECTION
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex justify-start pb-40 pt-32">
            <h2 className="ivyPrestoThin text-8xl w-3/4 desktop-oneOff-md lineHeight-desktop-113">
                For all the times your <br/> vagina is <em>feeling a little off.</em>
            </h2>
        </div> */}


        {/* TO RESTORE / TO MAINTAIN section */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex justify-between pb-32">
            <div className="h-fit-content w-1/3 flex flex-col justify-end">
                <h2 className="ivyPrestoThin text-desktop-h2 pb-4 lineHeight-desktop-120">
                    To restore
                </h2>
                <p className="coreSans text-desktop-p1 pb-16">
                Restore your vaginal flora when displaying symptoms of pH imbalance by inserting 1 Boquet tablet vaginally once a day at bedtime for 7 days or until symptoms improve.
                </p>
                <h2 className="ivyPrestoThin text-desktop-h2 pb-4 lineHeight-desktop-120">
                    To maintain
                </h2>
                <p className="coreSans text-desktop-p1">
                Maintain your vaginal flora's balance and protective state by inserting 1 Boquet tablet vaginally on a weekly or monthly basis at bedtime.
                </p>
            </div>
            <div style={{height: '434.73px'}} className="h-fit-content w-1/2">
                <Image alt="papayas and other fruits with the pill product" src={papayaImage} priority={true} />
            </div>
        </div>


        {/* INSERTING BOQUET SECTION x ROTATING PILL ANIMATION */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex justify-end pb-8">
            <div style={{height: '45rem'}} className="w-1/2 relative floatingPillAnimationContainer-desktop">
                <img alt="smallest pill picture folding animation" style={{left: '-35%', top: '35%'}} className="inline absolute bounce1-desktop" src='/images/shop/small-pill.png' />
                <img alt="medium pill picture folding animation" style={{left: '-4%', top: '15%'}} className="inline absolute bounce2-desktop" src='/images/shop/med-pill.png' />
                <img alt="largest pill picture folding animation" style={{left: '33%', top: '1%'}} className="inline absolute bounce3-desktop " src='/images/shop/large-pill.png' />
            </div>

            <div className="h-fit-content w-1/2 flex flex-col justify-end pb-80">
                <h2 className="ivyPrestoThin text-desktop-h2 lineHeight-desktop-120 w-1/2 pb-4">
                    Inserting Boquet
                </h2>
                <p className="coreSans text-desktop-p1 w-11/12 pb-8">
                Use clean fingers to insert 1 Boquet tablet gently into the vagina to where it is comfortable.
                </p>
                <p className="coreSans text-desktop-p3">
                * Laying flat on your back may help.
                </p>
                <p className="coreSans text-desktop-p3 pb-4">
                ** You may wish to wear a panty liner in case there is slight leakage.
                </p>
                <p className="coreSans text-desktop-p3">
                DO NOT TAKE ORALLY
                </p>
            </div>
        </div>

        <GentleAndRestorative />

        {/* THE SCIENCE BEHIND BOQUET */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex flex-col justify-start pt-32 pb-24">
            <h1 className="ivyPrestoThin text-desktop-h1 lineHeight-desktop-normal">
                Some more <em>info</em>
            </h1>

            <div className="pt-12">
                <AccordianItem answer="Signs you may be experiencing a pH imbalance include changes in odor, itching, discharge, and/or a burning sensation upon urination. If you experience these symptoms consistently, we strongly recommend you consult with a healthcare provider.">
                    <h3 className="text-desktop-h3 lineHeight-desktop-normal">What are <em>symptoms of pH imbalance?</em></h3>
                </AccordianItem>
            </div>

            <div className="pt-12 pb-16">
                <AccordianItem  answer={<>
                    Boquet Vaginal Prebiotics prevent the growth of odor causing bacteria (gardnerella vaginalis).<br/><br/>
                    
                    An overgrowth of gardnerella vaginalis produces enzymes that break down peptides to amines which have a fishy odor. Boquet's primary ingredient, lactose, promotes the growth of our beneficial bacteria, lactobacillus, which displaces gardnerella vaginalis, reducing their adhesion to the vaginal flora.
                </>}>
                    <h3 className="text-desktop-h3 lineHeight-desktop-normal">How does Boquet <em>treat and prevent odor?</em></h3>
                </AccordianItem>
            </div>

            <Link
                href="/learn"
                passHref
            >
                <a style={{borderColor: '#283F91'}} className="longPillButtonGradientHoverAnimation relative coreSans border border-black flex justify-center rounded-full" aria-label="shop">
                    <p className="text-desktop-p2 h-24 flex flex-col justify-center">LEARN MORE</p>
                </a>
            </Link>
        </div>
    </div>



    {/* MOBILE */}
    <div className="responsive-mobile">
        {/* SHOPPING SECTION */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-between pb-16 pt-12">
            <div className="w-full pb-10">
                <h1 className="ivyPrestoThin text-mobile-h1 pb-8 lineHeight-mobile-43px">
                    Boquet <em>Vaginal Prebiotic</em>
                </h1>
                <Image 
                    alt="pill product photo" 
                    src={pillProductPhoto} 
                    priority={true} 
                    quality={100}
                    className={'image-opacity-duration' + (isTopImageLoaded ? ' onLoad-opacity-trigger': '')}
                    onLoadingComplete={() => {
                        setIsTopImageLoaded(true);
                    }}
                />
            </div>
            <div className="w-full flex flex-col justify-start">
                <div className="pb-16">

                    <p className="coreSans text-mobile-p1 lineHeight-mobile-22px pb-8">
                    An easy-to-use vaginal tablet that promotes a protective pH and relieves odor and irritation. Each bottle contains 30 vaginal tablets.
                    </p>
                    <p className="coreSans text-mobile-p1 lineHeight-mobile-22px">
                    * When displaying symptoms of pH imbalance
                    </p>
                    <p className="coreSans text-mobile-p1 lineHeight-mobile-22px">
                    * Before and/or after your period when experiencing hormonal changes
                    </p>
                    <p className="coreSans text-mobile-p1 lineHeight-mobile-22px pb-12">
                    * Before and/or after sex to replenish the vaginal flora
                    </p>

                    <div className="flex flex-col justify-between">
                        
                        <div id="shopCounterButton" style={{borderColor: '#283F91', backgroundColor: '#F4F0E8', color: '#283F91'}} className="h-14 border border-black rounded-full w-full mr-8 flex justify-between items-center overflow-hidden mb-6">
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
                            href="javascript:void(0)"
                            passHref
                        >
                            <button 
                                style={{borderColor: '#283F91', backgroundColor: '#283F91', color: '#F4F0E8'}} 
                                className="relative coreSans border flex justify-center rounded-full w-full" 
                                aria-label="add to cart button"
                                onClick={handleAddToCart}
                            >
                                <div className="h-14 w-full flex flex-col justify-center">
                                    <div className="flex justify-between">
                                    <p className="text-mobile-p1 lineHeight-mobile-22px ml-8">
                                        {`$${numberOfPills * 29}.00`}
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
                    <div className="pb-4">
                        <AccordianItem  answer={<div style={{lineHeight: '24px'}}>
                            • Insert vaginally. Do not take orally.
                            <br/>
                            • Do not use Boquet Vaginal Prebiotics if you have an allergy to milk.
                            <br/>
                            • Boquet Vaginal Prebiotics are safe to use in cases of lactose intolerance.
                        </div>}
                        size="4"
                        spaceBeforeBar="4"
                        spaceTopAnswer="4"
                        >
                            <p className="coreSans text-mobile-p2 lineHeight-mobile-20px">
                                CAUTION
                            </p>
                        </AccordianItem>
                    </div>
                    <div>
                        <AccordianItem  answer={<div style={{lineHeight: '24px'}}>
                            • Lactose
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
        {/* <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex justify-start pb-8 pt-10">
            <h2 className="ivyPrestoThin text-mobile-h1 lineHeight-mobile-43px w-full">
                For all the times your vagina is <em>feeling a little off.</em>
            </h2>
        </div> */}


        {/* TO RESTORE / TO MAINTAIN section */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-between">
            <div className="h-fit-content w-full pb-10">
                <Image alt="papayas and other fruits with the pill product" src={papayaImage} priority={true} quality={100} />
            </div>
            <div className="h-fit-content w-full flex flex-col justify-end">
                <h2 className="ivyPrestoThin text-mobile-h2 pb-2 lineHeight-mobile-35px">
                    To Restore
                </h2>
                <p className="coreSans text-mobile-p1 lineHeight-mobile-22px pb-10">
                Restore your vaginal flora when displaying symptoms of pH imbalance by inserting 1 Boquet tablet vaginally once a day at bedtime for 7 days or until symptoms improve.
                </p>
                <h2 className="ivyPrestoThin text-mobile-h2 pb-2 lineHeight-mobile-35px">
                    To Maintain
                </h2>
                <p className="coreSans text-mobile-p1 lineHeight-mobile-22px">
                Maintain your vaginal flora's balance and protective state by inserting 1 Boquet tablet vaginally on a weekly or monthly basis at bedtime.
                </p>
            </div>
        </div>


        {/* INSERTING BOQUET SECTION x ROTATING PILL ANIMATION */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-end">
            <div style={{height: '20rem'}} className="w-1/2 relative floatingPillAnimationContainer-mobile py-16">
                <img alt="smallest pill picture folding animation" style={{left: '5%', top: '43%', maxHeight: '100%', zIndex: '0'}} className="inline absolute bounce1-mobile" src='/images/shop/small-pill.png' />
                <img alt="medium pill picture folding animation" style={{left: '47%', top: '26%', maxHeight: '100%', zIndex: '0'}} className="inline absolute bounce2-mobile" src='/images/shop/med-pill.png' />
                <img alt="largest pill picture folding animation" style={{left: '101%', top: '12%', maxHeight: '100%', zIndex: '0'}} className="inline absolute bounce3-mobile" src='/images/shop/large-pill.png' />
            </div>

            <div className="h-fit-content w-full flex flex-col justify-end pb-16 z-10 pt-8">
                <h2 className="ivyPrestoThin text-mobile-h2 lineHeight-mobile-35px w-full pb-4">
                    Inserting Boquet
                </h2>
                <p className="coreSans text-mobile-p1 lineHeight-mobile-22px w-full pb-4">
                Use clean fingers to insert 1 Boquet tablet gently into the vagina to where it is comfortable.
                </p>
                <p className="coreSans text-mobile-p1 lineHeight-mobile-22px">
                * Laying flat on your back may help.
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
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-start pb-16 pt-12">
            <h1 className="ivyPrestoThin text-mobile-h1 lineHeight-mobile-49px">
            Some more <em>info</em>
            </h1>

            <div className="pt-12">
                <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5} answer="Signs you may be experiencing a pH imbalance include changes in odor, itching, discharge, and/or a burning sensation upon urination. If you experience these symptoms consistently, we strongly recommend you consult with a healthcare provider.">
                    <h3 className="text-mobile-h3 lineHeight-mobile-39px">What are <em>symptoms of pH imbalance?</em></h3>
                </AccordianItem>
            </div>

            <div className="pt-8 pb-10">
                <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5}  answer={
                    <>
                    Boquet Vaginal Prebiotics prevent the growth of odor causing bacteria (gardnerella vaginalis).<br/><br/>
                    An overgrowth of gardnerella vaginalis produces enzymes that break down peptides to amines which have a fishy odor. Boquet's primary ingredient, lactose, promotes the growth of our beneficial bacteria, lactobacillus, which displaces gardnerella vaginalis, reducing their adhesion to the vaginal flora.
                    </>                }>
                    <h3 className="text-mobile-h3 lineHeight-mobile-39px">How does Boquet <em>treat and prevent odor?</em></h3>
                </AccordianItem>
            </div>

            <Link
                href="/learn"
                passHref
            >
                <a style={{borderColor: '#283F91'}} className="longPillButtonGradientHoverAnimation relative coreSans border border-black flex justify-center rounded-full" aria-label="shop">
                    <p className="text-mobile-p1 lineHeight-mobile-22px h-14 flex flex-col justify-center">LEARN MORE</p>
                </a>
            </Link>
        </div>
    </div>


    {/* TABLET */}
    <div className="responsive-tablet">
        {/* SHOPPING SECTION */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-between pb-8 pt-12">
            <div className="w-full pb-16">
                <h1 className="ivyPrestoThin text-tablet-h1 lineHeight-tablet-59px pb-8">
                    Boquet <em>Vaginal Prebiotic</em>
                </h1>
                <div className="inline-block w-8/12">
                    <Image 
                        alt="pill product photo" 
                        src={pillProductPhoto} 
                        priority={true} 
                        quality={100}
                        className={'image-opacity-duration' + (isTopImageLoaded ? ' onLoad-opacity-trigger': '')}
                        onLoadingComplete={() => {
                            setIsTopImageLoaded(true);
                        }}
                    />
                </div>
            </div>
            <div className="w-full flex flex-col justify-start">
                <div className="pb-8">

                    <div className="w-10/12">
                        <p className="coreSans text-tablet-p1 lineHeight-tablet-25px pb-8">
                        An easy-to-use vaginal tablet that promotes a protective pH and relieves odor and irritation. Each bottle contains 30 vaginal tablets.
                        </p>
                        <p className="coreSans text-tablet-p1 lineHeight-tablet-25px">
                        * When displaying symptoms of pH imbalance
                        </p>
                        <p className="coreSans text-tablet-p1 lineHeight-tablet-25px">
                        * Before and/or after your period when experiencing hormonal changes
                        </p>
                        <p className="coreSans text-tablet-p1 lineHeight-tablet-25px pb-12">
                        * Before and/or after sex to replenish the vaginal flora
                        </p>
                    </div>

                    <div className="flex justify-between">
                        
                        <div id="shopCounterButton" style={{borderColor: '#283F91', backgroundColor: '#F4F0E8', color: '#283F91'}} className="h-20 border border-black rounded-full w-7/12 mr-8 flex justify-between items-center overflow-hidden mb-8">
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
                            href="javascript:void(0)"
                            passHref
                        >
                            <button 
                                style={{borderColor: '#283F91', backgroundColor: '#283F91', color: '#F4F0E8'}} 
                                className="h-20 relative coreSans border flex flex-col justify-center rounded-full w-full" 
                                aria-label="add to cart button"
                                onClick={handleAddToCart}
                            >
                                <div className="w-full flex flex-col justify-center">
                                    <div className="flex justify-evenly">
                                        <p className="text-tablet-p2 lineHeight-tablet-22px ml-8">
                                            {`$${numberOfPills * 29}.00`}
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
                            • Insert vaginally. Do not take orally.
                            <br/>
                            • Do not use Boquet Vaginal Prebiotics if you have an allergy to milk.
                            <br/>
                            • Boquet Vaginal Prebiotics are safe to use in cases of lactose intolerance.
                        </div>}
                        size="4"
                        spaceBeforeBar="4"
                        spaceTopAnswer="4"
                        >
                            <p className="coreSans text-tablet-p2 lineHeight-tablet-22px">
                                CAUTION
                            </p>
                        </AccordianItem>
                    </div>
                    <div>
                        <AccordianItem  answer={<div style={{lineHeight: '24px'}}>
                            • Lactose
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
        {/* <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex justify-start pb-8 pt-16">
            <h1 className="ivyPrestoThin text-tablet-h1 lineHeight-tablet-59px w-10/12">
                For all the times your vagina is <em>feeling a little off.</em>
            </h1>
        </div> */}


        {/* TO RESTORE / TO MAINTAIN section */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-between pt-20">
            <div className="h-fit-content w-full pb-8">
                <Image alt="papayas and other fruits with the pill product" src={papayaImage} priority={true} quality={100} />
            </div>
            <div className="h-fit-content w-10/12 flex flex-col justify-end">
                <h2 className="ivyPrestoThin text-tablet-h2 lineHeight-tablet-43px pb-4">
                    To Restore
                </h2>
                <p className="coreSans text-tablet-p1 lineHeight-tablet-25px pb-8">
                Restore your vaginal flora when displaying symptoms of pH imbalance by inserting 1 Boquet tablet vaginally once a day at bedtime for 7 days or until symptoms improve.
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
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-end">
            <div style={{height: '40rem'}} className="w-1/2 relative floatingPillAnimationContainer-tablet py-16">
                <img alt="smallest pill picture folding animation" style={{left: '10%', top: '42%'}} className="inline absolute bounce1-tablet" src='/images/shop/small-pill.png' />
                <img alt="medium pill picture folding animation" style={{left: '47%', top: '19%'}}   className="inline absolute bounce2-tablet" src='/images/shop/med-pill.png' />
                <img alt="largest pill picture folding animation" style={{left: '97%', top: '3%'}}  className="inline absolute bounce3-tablet" src='/images/shop/large-pill.png' />
            </div>

            <div className="h-fit-content w-full flex flex-col justify-end pb-20">
                <h2 className="ivyPrestoThin text-tablet-h2 lineHeight-tablet-53px w-full pb-4">
                    Inserting Boquet
                </h2>
                <p className="coreSans text-tablet-p1 lineHeight-tablet-25px w-10/12 pb-4">
                Use clean fingers to insert 1 Boquet tablet gently into the vagina to where it is comfortable.
                </p>
                <p className="coreSans text-tablet-p3 lineHeight-tablet-20px">
                * Laying flat on your back may help.
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
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-start py-16">
            <h1 className="ivyPrestoThin text-tablet-h1 lineHeight-tablet-71px">
            Some more <em>info</em>
            </h1>

            <div className="pt-16">
                <AccordianItem answer="Signs you may be experiencing a pH imbalance include changes in odor, itching, discharge, and/or a burning sensation upon urination. If you experience these symptoms consistently, we strongly recommend you consult with a healthcare provider.">
                    <h3 className="text-tablet-h3 lineHeight-tablet-42px">What are <em>symptoms of pH imbalance?</em></h3>
                </AccordianItem>
            </div>

            <div className="pt-8 pb-16">
                <AccordianItem  answer={
                    <>
                    Boquet Vaginal Prebiotics prevent the growth of odor causing bacteria (gardnerella vaginalis).<br/><br/>
                    An overgrowth of gardnerella vaginalis produces enzymes that break down peptides to amines which have a fishy odor. Boquet's primary ingredient, lactose, promotes the growth of our beneficial bacteria, lactobacillus, which displaces gardnerella vaginalis, reducing their adhesion to the vaginal flora.
                    </>
                }>
                    <h3 className="text-tablet-h3 lineHeight-tablet-42px">How does Boquet <em>treat and prevent odor?</em></h3>
                </AccordianItem>
            </div>

            <Link
                href="/learn"
                passHref
            >
                <a style={{borderColor: '#283F91'}} className="longPillButtonGradientHoverAnimation relative coreSans border border-black flex justify-center rounded-full" aria-label="shop">
                    <p className="text-tablet-p2 lineHeight-tablet-22px h-20 flex flex-col justify-center">LEARN MORE</p>
                </a>
            </Link>
        </div>
    </div>




    </>
  )
}

ShopPage.getLayout = function getLayout(page) {
    return (
      <Layout logoGray={false} backgroundColor={'#F4F0E8'}>
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
