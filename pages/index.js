import ImageTagSection from '@/components/ImageTagSection';
import { getAllProductsInCollection } from '@/lib/shopify';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import AccordianItem from '@/components/AccordianItem';
import Link from 'next/link';
import { Component } from 'react';
import React from 'react';
import Slider from "react-slick";
import { useEffect, useState } from 'react';
import Image from 'next/image';

import topSectionBackgroundImage from '../public/images/homepage/top-section-background.png';
import pillIconGif from '../public/images/homepage/pill-icon.gif';
import reducesImage from '../public/images/homepage/reduces.png';
import relievesImage from '../public/images/homepage/relieves.png';
import replenishesImage from '../public/images/homepage/replenishes.png';
import restoresImage from '../public/images/homepage/restores.png';
import boquetVaginalPrebioticBannerImage from '../public/images/homepage/boquet-vaginal-prebiotic.png';

import topSectionBackgroundMobileImage from '../public/images/homepage/top-section-background-mobile.png';
import boquetVaginalPrebioticMobileBannerImage from '../public/images/homepage/boquet-vaginal-prebiotic-mobile.png';

import topSectionBackgroundTabletImage from '../public/images/homepage/top-section-background-tablet.png';

function DesktopVersion() {

  // const [topGradientPos, setTopGradientPos] = useState('');
  // const [topOpacity, setTopOpacity] = useState('');
  // let lastKnownScrollPosition = 0;
  // let ticking = false;

  // function doSomething(scrollPos) {
  //   setTopGradientPos('-' + (scrollPos/100).toString() + '%');
  //   //setTopOpacity(((-1 * (scrollPos/900))+1).toString());
  // }

  // useEffect(() => {

  // document.addEventListener('scroll', function(e) {
  //   lastKnownScrollPosition = window.scrollY;

  //   if (!ticking) {
  //     window.requestAnimationFrame(function() {
  //       doSomething(lastKnownScrollPosition);
  //       ticking = false;
  //     });

  //     ticking = true;
  //   }
  // });

  // }, [])

  return (
    <div className="responsive-desktop">
    {/* BOQUET HOME PAGE TOP SECTION */}

        <div style={{
            backgroundColor: "#888889",
        }} className="h-fit-content">
          <div style={{
              height: '57rem',
              color: '#EBE5DB',
              //opacity: `${topOpacity}`,
          }} className="relative h-fit-content w-full flex flex-col justify-center text-center items-center">

            <Image
                alt="image tag section background"
                src={topSectionBackgroundImage}
                layout="fill"
                objectFit="cover"
                quality={100}
                className="z-0"
                priority={true}
            />


            <h1 className="ivyPrestoThin text-desktop-h1 w-7/12 pb-8 lineHeight-desktop-123 pt-20 z-10">
              Finally, a <em>natural way</em> to enhance your <em>vagina's good bacteria.</em>
            </h1>
            <Link
                href="/shop"
                passHref
            >
                <a className="pl-0 pt-3 z-10" aria-label="cart">
                    <div style={{borderRadius: '50%', borderColor: '#EBE5DB'}} className="border w-56 h-20 flex flex-col justify-center shortPillButtonGradientBeige">
                            <p className="text-center text-desktop-p2 coreSans">
                                SHOP BOQUET
                            </p>
                    </div>
                </a>
            </Link>
          </div>
        </div>

        {/* experimental gradient section */}
        {/* <div style={{
            background: `linear-gradient(#888889 ${topGradientPos}, #EBE5DB)`,
            height: '120rem',
        }} /> */}

        {/* MEET BOQUET SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex flex-col justify-start text-center items-center py-32">
          <h2 style={{paddingBottom: '1.5rem'}} className="ivyPrestoThin text-desktop-oneOff-lg lineHeight-desktop-123">
              Meet <em>Boquet</em>
          </h2>
          <p className="coreSans text-desktop-p1 pb-8">
            A vaginal prebiotic tablet that's gentle and restorative.
          </p>
          <Link
              href="/our-story"
              passHref
          >
              <a className="pl-0" aria-label="cart">
                  <div style={{borderRadius: '50%', borderColor: '#283F91'}} className="border w-56 h-20 flex flex-col justify-center shortPillButtonGradientBlue">
                          <p className="text-center coreSans text-desktop-p2">
                              READ OUR STORY
                          </p>
                  </div>
              </a>
          </Link>
          <div style={{width: '200px'}} className="inline-block pt-20 h-64">
            <Image alt="boquet vaginal prebiotic pill icon gif" src={pillIconGif} />
          </div>
        </div>



        {/* FOUR Rs SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex flex-col justify-start pt-14 pb-16">
          <div style={{paddingBottom: '5rem'}} className="flex justify-between gap-8">
            <div className="h-fit-content w-1/4 flex flex-col justify-start">

              <div style={{marginBottom: '40px', height: '311px'}} className="inline-block">
                <Image alt="reduces image" src={reducesImage} priority={true} />
              </div>

              <h2 style={{paddingBottom: '17px'}} className="ivyPrestoThin text-desktop-h2 text-center lineHeight-desktop-120">
                Reduces
              </h2>
              <p className="coreSans text-desktop-p1 text-center">
                Reduces odor and infection causing bacteria
              </p>
            </div>

            <div className="h-fit-content w-1/4 flex flex-col justify-between">
              <div style={{marginBottom: '40px', height: '311px'}} className="inline-block">
                <Image alt="relieves image" src={relievesImage} priority={true} />
              </div>
              <h2 style={{paddingBottom: '17px'}} className="ivyPrestoThin text-desktop-h2 text-center lineHeight-desktop-120">
                Relieves
              </h2>
              <p className="coreSans text-desktop-p1 text-center">
                Relieves periods of irritation and improves dryness <br/>
              </p>
            </div>

            <div className="h-fit-content w-1/4 flex flex-col justify-between">
              <div style={{marginBottom: '40px', height: '311px'}} className="inline-block">
                <Image alt="replenishes image" src={replenishesImage} priority={true} />
              </div>
              <h2 style={{paddingBottom: '17px'}} className="ivyPrestoThin text-desktop-h2 text-center lineHeight-desktop-120">
                Replenishes
              </h2>
              <p className="coreSans text-desktop-p1 text-center">
                Replenishes the vaginal flora's natural protective state
              </p>
            </div>

            <div className="h-fit-content w-1/4 flex flex-col justify-between">
              <div style={{marginBottom: '40px', height: '311px'}} className="inline-block">
                <Image alt="restores image" src={restoresImage} priority={true} />
              </div>
              <h2 style={{paddingBottom: '17px'}} className="ivyPrestoThin text-desktop-h2 text-center lineHeight-desktop-120">
                Restores
              </h2>
              <p className="coreSans text-desktop-p1 text-center">
                Restores vaginal PH without stripping good bacteria
              </p>
            </div>
          </div>
          <Link
              href="/shop"
              passHref
          >
              <a style={{borderColor: '#283F91', color: '#283F91'}} className="longPillButtonGradientHoverAnimation w-full relative coreSans border border-black flex justify-center rounded-full mr-8" aria-label="shop">
                  <p className="text-desktop-p2 h-24 flex flex-col justify-center">SHOP BOQUET</p>
              </a>
          </Link>
        </div>


        {/* BOQUET VAGINAL PREBIOTIC SECTION */}
        <div style={{backgroundColor: "#283F91", color: '#EBE5DB', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex flex-col justify-start items-center text-center pt-32">
          <h2 className="ivyPrestoThin text-desktop-oneOff-lg pb-10 lineHeight-desktop-113">
            Boquet <em>Vaginal Prebiotic</em>
          </h2>
          <p className="coreSans text-desktop-p1 pb-10 w-6/12">
            Boquet is a prebiotic vaginal tablet that promotes the growth of good bacteria in the vaginal flora (instead of stripping it away). <br/> Backed by science, our tablet is gentle enough to be used everyday.
          </p>
          <Link
              href="/shop"
              passHref
          >
              <a className="pl-0" aria-label="cart">
                  <div style={{borderRadius: '50%', borderColor: '#EBE5DB'}} className="border w-56 h-20 flex flex-col justify-center shortPillButtonGradientBeige">
                          <p className="text-center text-desktop-p2 coreSans">
                              SHOP BOQUET
                          </p>
                  </div>
              </a>
          </Link>

          <div className="inline-block pt-20">
            <Image alt="boquet vaginal prebiotic main product image" src={boquetVaginalPrebioticBannerImage} priority={true} quality={100} />
          </div>

        </div>
        {/* ingredients list at the bottom of BOQUET VAGINAL PREBIOTIC section */}
        <div style={{backgroundColor: "#283F91", color: '#EBE5DB', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex justify-start pb-32 pt-8">
          <div className="flex justify-between w-3/12">
            <p className="coreSans text-desktop-p2">
              INGREDIENTS:
            </p>
          </div>
          <div className="flex justify-between w-5/12">
            <p className="coreSans text-desktop-p2">
              LACTOSE
            </p>
            <p className="coreSans text-desktop-p2">
              SILICON DIOXIDE
            </p>
            <p className="coreSans text-desktop-p2">
              MAGNESIUM STEARATE
            </p>
          </div>
        </div>


        {/* CUSTOMER QUOTE SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex flex-col justify-start py-32">
          <Slider customPaging={i => (
            <div
            style={{
              minWidth: "1rem",
              minHeight: "1.25rem",
              color: "#EBE5DB",
              border: "1px #283F91 solid",
              borderRadius: "50%",
            }}
            >
            </div>
          )} arrows={false} dots={true} autoplay={true} autoplaySpeed={9000} speed={500}>
            <div>
              <div className="flex justify-center text-center w-full py-16">
                <div className="flex flex-col justify-center w-2/3">
                  <h2 className="ivyPrestoThin text-desktop-h2 pb-8 lineHeight-desktop-normal">
                  “I try to treat my body well by eating well. Boquet prebiotic tablets <em>help me feel well down there, and helps me feel more confident when I plan to have sex.</em>”
                  </h2>
                  <p className="coreSans text-desktop-p2">
                  TATIANA K.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center text-center w-full py-16">
                <div className="flex flex-col justify-center w-2/3">
                  <h2 className="ivyPrestoThin text-desktop-h2 pb-8 lineHeight-desktop-normal">
                  “I noticed <em>pretty instant relief</em>. I honestly think Boquet <em>got rid of whatever discomfort and irritation</em> I was feeling after two nights.”
                  </h2>
                  <p className="coreSans text-desktop-p2">
                  ELENA D.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center text-center w-full py-16">
                <div className="flex flex-col justify-center w-2/3">
                  <h2 className="ivyPrestoThin text-desktop-h2 pb-8 lineHeight-desktop-normal">
                  “People think if you have vaginal issues you're dirty but my symptoms were actually due to overwashing. <em>Something was feeling off and it went away after using Boquet.</em>”
                  </h2>
                  <p className="coreSans text-desktop-p2">
                  CHRISTINA M.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        {/* LEARN SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex flex-col justify-start pt-16 pb-20">
          <h1 className="ivyPrestoThin text-desktop-h1 pb-16 lineHeight-desktop-normal">
            Learn
          </h1>

          <div className="pb-14">
            <AccordianItem  answer="The term “vaginal flora” is used to describe the microorganisms or bacteria that populate the vaginal lining. A healthy vaginal flora is dominated by various lactobacillus species which creates a protective barrier with a slightly acidic pH reducing the adhesion of other harmful microorganisms.">
                <h3 className="text-desktop-h3 lineHeight-desktop-normal">What is a <em>vaginal flora</em> and what does it do?</h3>
            </AccordianItem>
          </div>
        

          <div className="pb-20">
            <AccordianItem  answer="Signals your pH may be off include changes in odor, itching, discharge, and possible burning when you urinate. If you're experiencing them consistently, we strongly recommend seeing and consulting with a healthcare provider.">
                <h3 className="text-desktop-h3 lineHeight-desktop-normal">What happens when your <em>vaginal pH balance</em> is off?</h3>
            </AccordianItem>
          </div>

          <Link
              href="/learn"
              passHref
          >
              <a style={{borderColor: '#283F91', color: '#283F91'}} className="longPillButtonGradientHoverAnimation relative coreSans border border-black flex justify-center rounded-full" aria-label="shop">
                  <p className="text-desktop-p2 h-24 flex flex-col justify-center">CHECK OUT VAGINAL HEALTH 101</p>
              </a>
          </Link>
        </div>
    </div>
  );
}

function MobileVersion() {
  return (
    <div className="responsive-mobile">
    {/* BOQUET HOME PAGE TOP SECTION */}
    <div style={{
            backgroundColor: "#EBE5DB",
            height: '43rem',
            color: '#EBE5DB',
            paddingLeft: '16px',
            paddingRight: '16px',
        }} className="relative h-fit-content w-full flex flex-col justify-center text-center items-center">


          <Image
              alt="image tag section background"
              src={topSectionBackgroundMobileImage}
              layout="fill"
              objectFit="cover"
              quality={100}
              className="z-0"
              priority={true}
          />



          <h2 className="ivyPrestoThin text-mobile-h2 w-full pb-6 lineHeight-mobile-38px z-10">
            Finally, a <em>natural way</em> to enhance your <em>vagina's good bacteria.</em>
          </h2>
          <Link
              href="/shop"
              passHref
          >
              <a className="pl-0 z-10" aria-label="cart">
                  <div style={{borderRadius: '50%', borderColor: '#EBE5DB'}} className="border w-44 h-16 flex flex-col justify-center shortPillButtonGradientBeige">
                          <p className="text-center text-mobile-p3 coreSans">
                              SHOP BOQUET
                          </p>
                  </div>
              </a>
          </Link>
        </div>

        {/* MEET BOQUET SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-start text-center items-center pt-16 pb-2">
          <h2 className="ivyPrestoThin text-mobile-oneOff-lg pb-2">
              Meet <em>Boquet</em>
          </h2>
          <p className="coreSans text-mobile-p1 pb-6 lineHeight-mobile-22px">
            A vaginal prebiotic tablet that's gentle and restorative.
          </p>
          <Link
              href="/our-story"
              passHref
          >
              <a className="pl-0" aria-label="cart">
                  <div style={{borderRadius: '50%', borderColor: '#283F91'}} className="border w-44 h-16 flex flex-col justify-center shortPillButtonGradientBlue">
                          <p className="text-center coreSans text-mobile-p3">
                              READ OUR STORY
                          </p>
                  </div>
              </a>
          </Link>

          <div style={{width: '145.453px'}} className="inline-block pt-8 h-40">
            <Image alt="boquet vaginal prebiotic pill clip art" className="pt-8 h-40" src={pillIconGif} />
          </div>

        </div>



        {/* FOUR Rs SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-start py-10">
          <div className="flex flex-col justify-between pb-10">
            <div className="h-fit-content w-full flex flex-col justify-between pb-12">
              <div className="inline-block pb-6">
                <Image alt="reduces image" src={reducesImage} priority={true} />
              </div>
              <h2 className="ivyPrestoThin text-mobile-h2 text-center pb-1">
                Reduces
              </h2>
              <p className="coreSans text-mobile-p1 text-center lineHeight-mobile-22px">
                Reduces odor and infection causing bacteria
              </p>
            </div>

            <div className="h-fit-content w-full flex flex-col justify-between pb-12">
              <div className="inline-block pb-6">
                <Image alt="relieves image" src={relievesImage} priority={true} />
              </div>
              <h2 className="ivyPrestoThin text-mobile-h2 text-center pb-1">
                Relieves
              </h2>
              <p className="coreSans text-mobile-p1 text-center lineHeight-mobile-22px">
                Relieves irritation and improves dryness
              </p>
            </div>

            <div className="h-fit-content w-full flex flex-col justify-between pb-12">
              <div className="inline-block pb-6">
                <Image alt="replenishes image" src={replenishesImage} priority={true} />
              </div>
              <h2 className="ivyPrestoThin text-mobile-h2 text-center pb-1">
                Replenishes
              </h2>
              <p className="coreSans text-mobile-p1 text-center lineHeight-mobile-22px">
                Replenishes the vaginal flora's natural protective state
              </p>
            </div>

            <div className="h-fit-content w-full flex flex-col justify-between">
              <div className="inline-block pb-6">
                <Image alt="restores image" src={restoresImage} priority={true} />
              </div>
              <h2 className="ivyPrestoThin text-mobile-h2 text-center pb-1">
                Restores
              </h2>
              <p className="coreSans text-mobile-p1 text-center lineHeight-mobile-22px">
                Restores vaginal PH without stripping good bacteria
              </p>
            </div>
          </div>
          <Link
              href="/shop"
              passHref
          >
              <a style={{borderColor: '#283F91', color: '#283F91'}} className="longPillButtonGradientHoverAnimation w-full relative coreSans border border-black flex justify-center rounded-full mr-8" aria-label="shop">
                  <p className="text-mobile-p2 flex flex-col justify-center h-14">SHOP BOQUET</p>
              </a>
          </Link>
        </div>


        {/* BOQUET VAGINAL PREBIOTIC SECTION */}
        <div style={{backgroundColor: "#283F91", color: '#EBE5DB', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-start items-center text-center pt-10">
          <h2 className="ivyPrestoThin text-mobile-oneOff-lg pb-4 lineHeight-mobile-43px">
            Boquet <br/> <em>Vaginal Prebiotic</em>
          </h2>
          <p className="coreSans text-mobile-p1 pb-6 w-full lineHeight-mobile-22px">
            Boquet is a prebiotic vaginal tablet that promotes the growth of good.
          </p>
          <Link
              href="/shop"
              passHref
          >
              <a className="pl-0" aria-label="cart">
                  <div style={{borderRadius: '50%', borderColor: '#EBE5DB'}} className="border w-44 h-16 flex flex-col justify-center shortPillButtonGradientBeige">
                          <p className="text-center text-mobile-p3 coreSans">
                              SHOP BOQUET
                          </p>
                  </div>
              </a>
          </Link>
          <div className="pt-10 inline-block">
            <Image alt="boquet vaginal prebiotic main product image"  src={boquetVaginalPrebioticMobileBannerImage} priority={true} quality={100} />
          </div>
        </div>
        {/* ingredients list at the bottom of BOQUET VAGINAL PREBIOTIC section */}
        <div style={{backgroundColor: "#283F91", color: '#EBE5DB', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-start pb-10 pt-4">
          <div className="flex justify-between w-full pb-2">
            <p className="coreSans text-mobile-p3">
              INGREDIENTS:
            </p>
          </div>
          <div className="flex flex-col justify-between w-full">
            <p className="coreSans text-mobile-p3">
              LACTOSE
            </p>
            <p className="coreSans text-mobile-p3">
              SILICON DIOXIDE
            </p>
            <p className="coreSans text-mobile-p3">
              MAGNESIUM STEARATE
            </p>
          </div>
        </div>


        {/* CUSTOMER QUOTE SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-start pt-4 pb-16">
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
          )} arrows={false} dots={true} autoplay={true} autoplaySpeed={9000} speed={500}>
            <div>
              <div className="flex justify-center text-center w-full py-16">
                <div className="flex flex-col justify-center w-full">
                  <h3 className="ivyPrestoThin text-mobile-h3 pb-8 lineHeight-mobile-38px">
                  “I try to treat my body well by eating well. Boquet prebiotic tablets <em>help me feel well down there, and helps me feel more confident when I plan to have sex.</em>”
                  </h3>
                  <p className="coreSans text-mobile-p3">
                  TATIANA K.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center text-center w-full py-16">
                <div className="flex flex-col justify-center w-full">
                  <h3 className="ivyPrestoThin text-mobile-h3 pb-8 lineHeight-mobile-38px">
                  “I noticed <em>pretty instant relief</em>. I honestly think Boquet <em>got rid of whatever discomfort and irritation</em> I was feeling after two nights.”
                  </h3>
                  <p className="coreSans text-mobile-p3">
                  ELENA D.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center text-center w-full py-16">
                <div className="flex flex-col justify-center w-full">
                  <h3 className="ivyPrestoThin text-mobile-h3 pb-8 lineHeight-mobile-38px">
                  “People think if you have vaginal issues you're dirty but my symptoms were actually due to overwashing. <em>Something was feeling off and it went away after using Boquet.</em>”
                  </h3>
                  <p className="coreSans text-mobile-p3">
                  CHRISTINA M.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        {/* LEARN SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-start pt-16 pb-10">
          <h1 className="ivyPrestoThin text-mobile-h1 pb-4">
            Learn
          </h1>

          <div className="pb-8">
            <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5}  answer="The term “vaginal flora” is used to describe the microorganisms or bacteria that populate the vaginal lining. A healthy vaginal flora is dominated by various lactobacillus species which creates a protective barrier with a slightly acidic pH reducing the adhesion of other harmful microorganisms.">
                <h3 className="text-mobile-h3 lineHeight-mobile-39px text-left">What is a <em>vaginal flora</em> and what does it do?</h3>
            </AccordianItem>
          </div>
        

          <div className="pb-10">
            <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5}  answer="Signals your pH may be off include changes in odor, itching, discharge, and possible burning when you urinate. If you're experiencing them consistently, we strongly recommend seeing and consulting with a healthcare provider.">
                <h3 className="text-mobile-h3 lineHeight-mobile-39px text-left">What happens when your <em>vaginal pH balance</em> is off?</h3>
            </AccordianItem>
          </div>

          <Link
              href="/learn"
              passHref
          >
              <a style={{borderColor: '#283F91', color: '#283F91'}} className="longPillButtonGradientHoverAnimation relative coreSans border border-black flex justify-center rounded-full" aria-label="shop">
                  <p className="text-mobile-p2 h-14 flex flex-col justify-center">READ FULL FAQ</p>
              </a>
          </Link>
        </div>
    </div>
  );
}

function TabletVersion() {
  return (
    <div className="responsive-tablet">
    {/* BOQUET HOME PAGE TOP SECTION */}
    <div style={{
            backgroundColor: "#EBE5DB", 
            height: '35rem',
            color: '#EBE5DB',
        }} className="relative h-fit-content w-full flex flex-col justify-center text-center items-center">
          
          <Image
            alt="image tag section background"
            src={topSectionBackgroundTabletImage}
            layout="fill"
            objectFit="cover"
            quality={100}
            className="z-0"
            priority={true}
          />
          
          
          
          <h1 className="ivyPrestoThin text-tablet-h1 w-10/12 pt-20 pb-8 lineHeight-tablet-59px z-10">
            Finally, a <em>natural way</em> to enhance your <em>vagina's good bacteria.</em>
          </h1>
          <Link
              href="/shop"
              passHref
          >
              <a className="pl-0 z-10" aria-label="cart">
                  <div style={{borderRadius: '50%', borderColor: '#EBE5DB'}} className="border w-56 h-20 flex flex-col justify-center shortPillButtonGradientBeige">
                          <p className="text-center text-tablet-p3 lineHeight-tablet-20px coreSans">
                              SHOP BOQUET
                          </p>
                  </div>
              </a>
          </Link>
        </div>

        {/* MEET BOQUET SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-start text-center items-center py-16">
          <h1 className="ivyPrestoThin text-tablet-h1 pb-8 lineHeight-tablet-59px">
              Meet <em>Boquet</em>
          </h1>
          <p className="coreSans text-tablet-p1 pb-8 lineHeight-tablet-25px">
            A vaginal prebiotic tablet that's gentle and restorative.
          </p>
          <Link
              href="/our-story"
              passHref
          >
              <a className="pl-0" aria-label="cart">
                  <div style={{borderRadius: '50%', borderColor: '#283F91'}} className="border w-56 h-20 flex flex-col justify-center shortPillButtonGradientBlue">
                          <p className="text-center coreSans text-tablet-p3 lineHeight-tablet-20px">
                              READ OUR STORY
                          </p>
                  </div>
              </a>
          </Link>

          <div style={{width: '145.453px'}} className="inline-block pt-8 h-40">
            <Image alt="boquet vaginal prebiotic pill icon gif" src={pillIconGif} />
          </div>
        </div>



        {/* FOUR Rs SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-start pb-16">
          <div className="flex justify-evenly pb-16 gap-8">
            <div className="h-fit-content w-1/2 flex flex-col justify-between">
              <div className="inline-block pb-8">
                <Image alt="reduces image" src={reducesImage} priority={true} />
              </div>
              <h2 className="ivyPrestoThin text-tablet-h2 lineHeight-tablet-43px text-center pb-8">
                Reduces
              </h2>
              <p className="coreSans text-tablet-p1 lineHeight-tablet-25px text-center">
                Reduces odor and infection causing bacteria
              </p>
            </div>

            <div className="h-fit-content w-1/2 flex flex-col justify-between">
              <div className="inline-block pb-8">
                <Image alt="relieves image" src={relievesImage} priority={true} />
              </div>
              <h2 className="ivyPrestoThin text-tablet-h2 lineHeight-tablet-43px text-center pb-8">
                Relieves
              </h2>
              <p className="coreSans text-tablet-p1 lineHeight-tablet-25px text-center">
                Relieves irritation and improves dryness
              </p>
            </div>
          </div>
          <div className="flex justify-evenly pb-16 gap-8">

            <div className="h-fit-content w-1/2 flex flex-col justify-between">
              <div className="inline-block pb-8">
                <Image alt="replenishes image" src={replenishesImage} priority={true} />
              </div>
              <h2 className="ivyPrestoThin text-tablet-h2 lineHeight-tablet-43px text-center pb-8">
                Replenishes
              </h2>
              <p className="coreSans text-tablet-p1 lineHeight-tablet-25px text-center">
                Replenishes the vaginal flora's natural protective state
              </p>
            </div>

            <div className="h-fit-content w-1/2 flex flex-col justify-between">
              <div className="inline-block pb-8">
                <Image alt="restores image" src={restoresImage} priority={true} />
              </div>
              <h2 className="ivyPrestoThin text-tablet-h2 lineHeight-tablet-43px text-center pb-8">
                Restores
              </h2>
              <p className="coreSans text-tablet-p1 lineHeight-tablet-25px text-center">
                Restores vaginal PH without stripping good bacteria
              </p>
            </div>

          </div>
          <Link
              href="/shop"
              passHref
          >
              <a style={{borderColor: '#283F91', color: '#283F91', paddingRight: '40px'}} className="longPillButtonGradientHoverAnimation w-full relative coreSans border border-black flex justify-center rounded-full mr-8" aria-label="shop">
                  <p className="text-tablet-p2 lineHeight-tablet-22px h-24 flex flex-col justify-center">SHOP BOQUET</p>
              </a>
          </Link>
        </div>


        {/* BOQUET VAGINAL PREBIOTIC SECTION */}
        <div style={{backgroundColor: "#283F91", color: '#EBE5DB', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-start items-center text-center pt-16">
          <h1 className="ivyPrestoThin text-tablet-h1 lineHeight-tablet-59px pb-8">
            Boquet <em>Vaginal Prebiotic</em>
          </h1>
          <p className="coreSans text-tablet-p1 lineHeight-tablet-25px pb-8 w-8/12">
            Boquet is a prebiotic vaginal tablet that promotes the growth of good bacteria in the vaginal flora (instead of stripping it away). Backed by science, our tablet is gentle enough to be used everyday.
          </p>
          <Link
              href="/shop"
              passHref
          >
              <a className="pl-0" aria-label="cart">
                  <div style={{borderRadius: '50%', borderColor: '#EBE5DB'}} className="border w-48 h-20 flex flex-col justify-center shortPillButtonGradientBeige">
                          <p className="text-center text-tablet-p2 lineHeight-tablet-20px coreSans">
                              SHOP BOQUET
                          </p>
                  </div>
              </a>
          </Link>
          <div className="inline-block pt-8">
            <Image alt="boquet vaginal prebiotic main product image" src={boquetVaginalPrebioticBannerImage} priority={true} quality={100} />
          </div>
        </div>
        {/* ingredients list at the bottom of BOQUET VAGINAL PREBIOTIC section */}
        <div style={{backgroundColor: "#283F91", color: '#EBE5DB', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex justify-start pb-8 pt-8">
          <div className="flex justify-between w-full">
            <p className="coreSans text-tablet-p2 lineHeight-tablet-22px">
              INGREDIENTS:
            </p>
            <p className="coreSans text-tablet-p2 lineHeight-tablet-22px">
              LACTOSE
            </p>
            <p className="coreSans text-tablet-p2 lineHeight-tablet-22px">
              SILICON DIOXIDE
            </p>
            <p className="coreSans text-tablet-p2 lineHeight-tablet-22px">
              MAGNESIUM STEARATE
            </p>
          </div>
        </div>


        {/* CUSTOMER QUOTE SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-start py-8">
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
          )} arrows={false} dots={true} autoplay={true} speed={500}>
            <div>
              <div className="flex justify-center text-center w-full py-8">
                <div className="flex flex-col justify-center w-full">
                  <h3 className="ivyPrestoThin text-tablet-h3 lineHeight-tablet-42px pb-8">
                  “I try to treat my body well by eating well. Boquet prebiotic tablets <em>help me feel well down there, and helps me feel more confident when I plan to have sex.</em>”
                  </h3>
                  <p className="coreSans text-tablet-p2 lineHeight-tablet-22px">
                  TATIANA K.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center text-center w-full py-8">
                <div className="flex flex-col justify-center w-full">
                  <h3 className="ivyPrestoThin text-tablet-h3 lineHeight-tablet-42px pb-8">
                  “I noticed <em>pretty instant relief</em>. I honestly think Boquet <em>got rid of whatever discomfort and irritation</em> I was feeling after two nights.”
                  </h3>
                  <p className="coreSans text-tablet-p2 lineHeight-tablet-22px">
                  ELENA D.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center text-center w-full py-8">
                <div className="flex flex-col justify-center w-full">
                  <h3 className="ivyPrestoThin text-tablet-h3 lineHeight-tablet-42px pb-8">
                  “People think if you have vaginal issues you're dirty but my symptoms were actually due to overwashing. <em>Something was feeling off and it went away after using Boquet.</em>”
                  </h3>
                  <p className="coreSans text-tablet-p2 lineHeight-tablet-22px">
                  CHRISTINA M.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        {/* LEARN SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-start py-16">
          <h1 className="ivyPrestoThin text-tablet-h1 lineHeight-tablet-71px pb-16">
            Learn
          </h1>

          <div className="pb-8">
            <AccordianItem  answer="The term “vaginal flora” is used to describe the microorganisms or bacteria that populate the vaginal lining. A healthy vaginal flora is dominated by various lactobacillus species which creates a protective barrier with a slightly acidic pH reducing the adhesion of other harmful microorganisms.">
                <h3 className="text-tablet-h3 lineHeight-tablet-42px">What is a <em>vaginal flora</em> and what does it do?</h3>
            </AccordianItem>
          </div>
        

          <div className="pb-16">
            <AccordianItem  answer="Signals your pH may be off include changes in odor, itching, discharge, and possible burning when you urinate. If you're experiencing them consistently, we strongly recommend seeing and consulting with a healthcare provider.">
                <h3 className="text-tablet-h3 lineHeight-tablet-42px">What happens when your <em>vaginal pH balance</em> is off?</h3>
            </AccordianItem>
          </div>

          <Link
              href="/learn"
              passHref
          >
              <a style={{borderColor: '#283F91', color: '#283F91'}} className="longPillButtonGradientHoverAnimation relative coreSans border border-black flex justify-center rounded-full" aria-label="shop">
                  <p className="text-tablet-p2 lineHeight-tablet-22px h-20 flex flex-col justify-center">CHECK OUT VAGINAL HEALTH 101</p>
              </a>
          </Link>
        </div>
    </div>
  );
}

class IndexPage extends Component {

  render() {
    return (
      <>
        <DesktopVersion/>
        <MobileVersion/>
        <TabletVersion/>
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
      <div className="responsive-desktop">
        <ImageTagSection backgroundImage="/images/image-tag-section/image-tag-section-test.png" />
      </div>
      <div className="responsive-mobile">
        <ImageTagSection backgroundImage="/images/image-tag-section/image-tag-section-mobile.png"/>
      </div>
      <div className="responsive-tablet">
        <ImageTagSection backgroundImage="/images/image-tag-section/image-tag-section-tablet.png"/>
      </div>
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
