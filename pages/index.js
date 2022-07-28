import ImageTagSection from '@/components/ImageTagSection';
import { getAllProductsInCollection } from '@/lib/shopify';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import AccordianItem from '@/components/AccordianItem';
import Link from 'next/link';
import { Component } from 'react';
import React from 'react';
import { useState } from 'react';
import Slider from "react-slick";
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
  const [isTopImageLoaded, setIsTopImageLoaded] = useState(false);

  return (
    <div className="responsive-desktop">
    {/* BOQUET HOME PAGE TOP SECTION */}

        <div style={{
            backgroundColor: "#888889",
        }} className="h-fit-content">
          <div style={{
              height: '57rem',
              color: '#F4F0E8',
          }} className="relative h-fit-content w-full flex flex-col justify-center text-center items-center">

            <Image
                alt="image tag section background"
                src={topSectionBackgroundImage}
                layout="fill"
                objectFit="cover"
                quality={100}
                priority={true}
                className={'image-opacity-duration' + (isTopImageLoaded ? ' onLoad-opacity-trigger': '')}
                onLoadingComplete={() => {
                    setIsTopImageLoaded(true);
                }}
            />

            <h1 className="ivyPrestoThin text-desktop-h1 w-7/12 pb-8 lineHeight-desktop-123 pt-20 z-10">
              Finally, a <em>natural way</em> to enhance our <em>vagina's good bacteria.</em>
            </h1>
            <Link
                href="/shop"
                passHref
            >
                <a className="pl-0 pt-3 z-10" aria-label="cart">
                    <div style={{borderRadius: '50%', borderColor: '#F4F0E8'}} className="border w-56 h-20 flex flex-col justify-center shortPillButtonGradientBeige">
                            <p className="text-center text-desktop-p2 coreSans">
                                SHOP BOQUET
                            </p>
                    </div>
                </a>
            </Link>
          </div>
        </div>

        {/* MEET BOQUET SECTION */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex flex-col justify-start text-center items-center pt-16 pb-2">
          <h1 style={{paddingBottom: '1.5rem'}} className="ivyPrestoThin text-desktop-h1 lineHeight-desktop-123">
          Flourish your flora
          </h1>
          <p className="coreSans text-desktop-p1 pb-8">
          When our vaginal flora stays balanced with good bacteria,<br/> it has magnicifent abilities to preserve a protective pH.
          </p>
          {/* <Link
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
          </div> */}
        </div>



        {/* FOUR Rs SECTION */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex flex-col justify-start pt-14 pb-16">
          <div style={{paddingBottom: '5rem'}} className="flex justify-between gap-8">
            <div className="h-fit-content w-1/4 flex flex-col justify-start">

              <div style={{marginBottom: '40px', height: '311px', height: 'fit-content'}} className="inline-block">
                <Image alt="reduces image" src={reducesImage} priority={true} />
              </div>

              <h2 style={{paddingBottom: '17px'}} className="ivyPrestoThin text-desktop-h2 text-center lineHeight-desktop-120">
                Remedy Odor
              </h2>
              <p className="coreSans text-desktop-p1 text-center">
                Displace odor causing amines
              </p>
            </div>

            <div className="h-fit-content w-1/4 flex flex-col justify-between">
              <div style={{marginBottom: '40px', height: '311px', height: 'fit-content'}} className="inline-block">
                <Image alt="relieves image" src={relievesImage} priority={true} />
              </div>
              <h2 style={{paddingBottom: '17px'}} className="ivyPrestoThin text-desktop-h2 text-center lineHeight-desktop-120">
                Replenish Flora
              </h2>
              <p className="coreSans text-desktop-p1 text-center">
                Prevent growth of infection causing bacteria
              </p>
            </div>

            <div className="h-fit-content w-1/4 flex flex-col justify-between">
              <div style={{marginBottom: '40px', height: '311px', height: 'fit-content'}} className="inline-block">
                <Image alt="replenishes image" src={replenishesImage} priority={true} />
              </div>
              <h2 style={{paddingBottom: '17px'}} className="ivyPrestoThin text-desktop-h2 text-center lineHeight-desktop-120">
                Relieve Irritation 
              </h2>
              <p className="coreSans text-desktop-p1 text-center">
              Stimulate protective and healing bacteria
              </p>
            </div>

            <div className="h-fit-content w-1/4 flex flex-col justify-start">
              <div style={{marginBottom: '40px', height: '311px', height: 'fit-content'}} className="inline-block">
                <Image alt="restores image" src={restoresImage} priority={true} />
              </div>
              <h2 style={{paddingBottom: '17px'}} className="ivyPrestoThin text-desktop-h2 text-center lineHeight-desktop-120">
              Restore pH
              </h2>
              <p className="coreSans text-desktop-p1 text-center">
              Maintain a balanced, protective pH
              </p>
            </div>
          </div>
          <Link
              href="/learn"
              passHref
          >
              <a style={{borderColor: '#283F91', color: '#283F91'}} className="longPillButtonGradientHoverAnimation w-full relative coreSans border border-black flex justify-center rounded-full mr-8" aria-label="shop">
                  <p className="text-desktop-p2 h-24 flex flex-col justify-center">LEARN MORE</p>
              </a>
          </Link>
        </div>


        {/* BOQUET VAGINAL PREBIOTIC SECTION */}
        <div style={{backgroundColor: "#283F91", color: '#F4F0E8', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex flex-col justify-start items-center text-center pt-32">
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
                  <div style={{borderRadius: '50%', borderColor: '#F4F0E8'}} className="border w-56 h-20 flex flex-col justify-center shortPillButtonGradientBeige">
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
        <div style={{backgroundColor: "#283F91", color: '#F4F0E8', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex justify-start pb-32 pt-8">
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
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex flex-col justify-start py-32">
          <Slider customPaging={i => (
            <div
            style={{
              minWidth: "1rem",
              minHeight: "1.25rem",
              color: "#F4F0E8",
              border: "1px #283F91 solid",
              borderRadius: "50%",
            }}
            >
            </div>
          )} arrows={false} dots={true} autoplay={true} autoplaySpeed={9000} speed={500}>
            <div>
              <div className="flex justify-center text-center w-full py-16">
                <div style={{width: '69%'}} className="flex flex-col justify-center">
                  <h2 className="ivyPrestoThin text-desktop-h2 pb-8 lineHeight-desktop-normal">“I've been using Boquet after my period for five months. It has <em>kept infections away and my pH feels balanced so I'm more confident when I plan to have sex.</em>”
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
                <div style={{width: '71%'}} className="flex flex-col justify-center">
                  <h2 className="ivyPrestoThin text-desktop-h2 pb-8 lineHeight-desktop-normal">
                  “People think vaginal issues happen when you're dirty but my odor was actually <em>due to overwashing. I'm so glad I treated the cause and restored my pH using Boquet.</em>”
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
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex flex-col justify-start pt-16 pb-20">
          <h1 className="ivyPrestoThin text-desktop-h1 pb-16 lineHeight-desktop-normal">
            Some more <em>info</em>
          </h1>

          <div className="pb-14">
            <AccordianItem  answer="Signals your pH is not in balance include changes in odor, itching, discharge, and possible burning when urinating. If you're experiencing them consistently, we strongly recommend seeing and consulting with a healthcare provider.">
                <h3 className="text-desktop-h3 lineHeight-desktop-normal">What are <em>symptoms of pH imbalance?</em></h3>
            </AccordianItem>
          </div>
        

          <div className="pb-20">
            <AccordianItem  answer="Boquet vaginal prebiotics prevent the growth of odor causing bacteria (gardnerella vaginalis). An overgrowth of gardnerella vaginalis produces enzymes that break down peptides to amines which have a fishy odor. Boquet's primary ingredient, lactose, promotes the growth of our beneficial bacteria, lactobacillus, which displaces gardnerella vaginalis, reducing their adhesion to the vaginal flora.">
                <h3 className="text-desktop-h3 lineHeight-desktop-normal">How does Boquet <em>treat and prevent odor?</em></h3>
            </AccordianItem>
          </div>

          <Link
              href="/learn"
              passHref
          >
              <a style={{borderColor: '#283F91', color: '#283F91'}} className="longPillButtonGradientHoverAnimation relative coreSans border border-black flex justify-center rounded-full" aria-label="shop">
                  <p className="text-desktop-p2 h-24 flex flex-col justify-center">LEARN MORE</p>
              </a>
          </Link>
        </div>
    </div>
  );
}

function MobileVersion() {
  const [isTopImageLoaded, setIsTopImageLoaded] = useState(false);

  return (
    <div className="responsive-mobile">
    {/* BOQUET HOME PAGE TOP SECTION */}
    <div style={{
            backgroundColor: "#F4F0E8",
            height: '43rem',
            color: '#F4F0E8',
            paddingLeft: '16px',
            paddingRight: '16px',
        }} className="relative h-fit-content w-full flex flex-col justify-center text-center items-center">


          <Image
              alt="image tag section background"
              src={topSectionBackgroundMobileImage}
              layout="fill"
              objectFit="cover"
              quality={100}
              priority={true}
              className={'image-opacity-duration' + (isTopImageLoaded ? ' onLoad-opacity-trigger': '')}
              onLoadingComplete={() => {
                  setIsTopImageLoaded(true);
              }}  
          />



          <h2 className="ivyPrestoThin text-mobile-h2 w-full pb-6 lineHeight-mobile-38px z-10">
            Finally, a <em>natural way</em> to enhance our <em>vagina's good bacteria.</em>
          </h2>
          <Link
              href="/shop"
              passHref
          >
              <a className="pl-0 z-10" aria-label="cart">
                  <div style={{borderRadius: '50%', borderColor: '#F4F0E8'}} className="border w-44 h-16 flex flex-col justify-center shortPillButtonGradientBeige">
                          <p className="text-center text-mobile-p3 coreSans">
                              SHOP BOQUET
                          </p>
                  </div>
              </a>
          </Link>
        </div>

        {/* MEET BOQUET SECTION */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-start text-center items-center pt-16 pb-2">
          <h1 className="ivyPrestoThin text-mobile-h1 pb-2">
          Flourish your flora
          </h1>
          <p className="coreSans text-mobile-p1 pb-6 lineHeight-mobile-22px">
          When our vaginal flora stays balanced with good bacteria, <br/> it has magnicifent abilities to preserve a protective pH.
          </p>
          {/* <Link
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
          </div> */}

        </div>



        {/* FOUR Rs SECTION */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-start py-10">
          <div className="flex flex-col justify-between pb-10">
            <div className="h-fit-content w-full flex flex-col justify-between pb-12">
              <div className="inline-block pb-6">
                <Image alt="reduces image" src={reducesImage} priority={true} />
              </div>
              <h2 className="ivyPrestoThin text-mobile-h2 text-center pb-1">
              Remedy Odor
              </h2>
              <p className="coreSans text-mobile-p1 text-center lineHeight-mobile-22px">
              Displace odor causing amines
              </p>
            </div>

            <div className="h-fit-content w-full flex flex-col justify-between pb-12">
              <div className="inline-block pb-6">
                <Image alt="relieves image" src={relievesImage} priority={true} />
              </div>
              <h2 className="ivyPrestoThin text-mobile-h2 text-center pb-1">
              Replenish Flora
              </h2>
              <p className="coreSans text-mobile-p1 text-center lineHeight-mobile-22px">
              Prevent growth of infection causing bacteria
              </p>
            </div>

            <div className="h-fit-content w-full flex flex-col justify-between pb-12">
              <div className="inline-block pb-6">
                <Image alt="replenishes image" src={replenishesImage} priority={true} />
              </div>
              <h2 className="ivyPrestoThin text-mobile-h2 text-center pb-1">
              Relieve Irritation
              </h2>
              <p className="coreSans text-mobile-p1 text-center lineHeight-mobile-22px">
              Stimulate protective and healing bacteria
              </p>
            </div>

            <div className="h-fit-content w-full flex flex-col justify-between">
              <div className="inline-block pb-6">
                <Image alt="restores image" src={restoresImage} priority={true} />
              </div>
              <h2 className="ivyPrestoThin text-mobile-h2 text-center pb-1">
              Restore pH
              </h2>
              <p className="coreSans text-mobile-p1 text-center lineHeight-mobile-22px">
              Maintain a balanced, protective pH
              </p>
            </div>
          </div>
          <Link
              href="/learn"
              passHref
          >
              <a style={{borderColor: '#283F91', color: '#283F91'}} className="longPillButtonGradientHoverAnimation w-full relative coreSans border border-black flex justify-center rounded-full mr-8" aria-label="shop">
                  <p className="text-mobile-p2 flex flex-col justify-center h-14">LEARN MORE</p>
              </a>
          </Link>
        </div>


        {/* BOQUET VAGINAL PREBIOTIC SECTION */}
        <div style={{backgroundColor: "#283F91", color: '#F4F0E8', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-start items-center text-center pt-10">
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
                  <div style={{borderRadius: '50%', borderColor: '#F4F0E8'}} className="border w-44 h-16 flex flex-col justify-center shortPillButtonGradientBeige">
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
        <div style={{backgroundColor: "#283F91", color: '#F4F0E8', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-start pb-10 pt-4">
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
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-start pt-4 pb-16">
          <Slider customPaging={i => (
            <div
            style={{
              minWidth: "1.25rem",
              minHeight: "1.25rem",
              color: "#F4F0E8",
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
                  “I've been using Boquet after my period for five months. It has <em>kept infections away and my pH feels balanced so I'm more confident when I plan to have sex.</em>”
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
                  “People think vaginal issues happen when you're dirty but my odor was actually <em>due to overwashing. I'm so glad I treated the cause and restored my pH using Boquet.</em>”
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
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-start pt-16 pb-10">
          <h1 className="ivyPrestoThin text-mobile-h1 pb-4">
            Some more <em>info</em>
          </h1>

          <div className="pb-8">
            <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5}  answer="Signals your pH is not in balance include changes in odor, itching, discharge, and possible burning when urinating. If you're experiencing them consistently, we strongly recommend seeing and consulting with a healthcare provider.">
                <h3 className="text-mobile-h3 lineHeight-mobile-39px text-left">What are <em>symptoms of pH imbalance?</em></h3>
            </AccordianItem>
          </div>
        

          <div className="pb-10">
            <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5}  answer="Boquet vaginal prebiotics prevent the growth of odor causing bacteria (gardnerella vaginalis).
An overgrowth of gardnerella vaginalis produces enzymes that break down peptides to amines which have a fishy odor. Boquet's primary ingredient, lactose, promotes the growth of our beneficial bacteria, lactobacillus, which displaces gardnerella vaginalis, reducing their adhesion to the vaginal flora.">
                <h3 className="text-mobile-h3 lineHeight-mobile-39px text-left">How does Boquet <em>treat and prevent odor?</em></h3>
            </AccordianItem>
          </div>

          <Link
              href="/learn"
              passHref
          >
              <a style={{borderColor: '#283F91', color: '#283F91'}} className="longPillButtonGradientHoverAnimation relative coreSans border border-black flex justify-center rounded-full" aria-label="shop">
                  <p className="text-mobile-p2 h-14 flex flex-col justify-center">LEARN MORE</p>
              </a>
          </Link>
        </div>
    </div>
  );
}

function TabletVersion() {
  const [isTopImageLoaded, setIsTopImageLoaded] = useState(false);

  return (
    <div className="responsive-tablet">
    {/* BOQUET HOME PAGE TOP SECTION */}
    <div style={{
            backgroundColor: "#F4F0E8", 
            height: '35rem',
            color: '#F4F0E8',
        }} className="relative h-fit-content w-full flex flex-col justify-center text-center items-center">
          
          <Image
            alt="image tag section background"
            src={topSectionBackgroundTabletImage}
            layout="fill"
            objectFit="cover"
            quality={100}  
            priority={true}
            className={'image-opacity-duration' + (isTopImageLoaded ? ' onLoad-opacity-trigger': '')}
            onLoadingComplete={() => {
                setIsTopImageLoaded(true);
            }}
          />
          
          
          
          <h1 className="ivyPrestoThin text-tablet-h1 w-10/12 pt-20 pb-8 lineHeight-tablet-59px z-10">
            Finally, a <em>natural way</em> to enhance our <em>vagina's good bacteria.</em>
          </h1>
          <Link
              href="/shop"
              passHref
          >
              <a className="pl-0 z-10" aria-label="cart">
                  <div style={{borderRadius: '50%', borderColor: '#F4F0E8'}} className="border w-56 h-20 flex flex-col justify-center shortPillButtonGradientBeige">
                          <p className="text-center text-tablet-p3 lineHeight-tablet-20px coreSans">
                              SHOP BOQUET
                          </p>
                  </div>
              </a>
          </Link>
        </div>

        {/* MEET BOQUET SECTION */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-start text-center items-center py-16">
          <h1 className="ivyPrestoThin text-tablet-h1 pb-8 lineHeight-tablet-59px">
          Flourish your flora
          </h1>
          <p className="coreSans text-tablet-p1 pb-8 lineHeight-tablet-25px">
          When our vaginal flora stays balanced with good bacteria,<br/> it has magnicifent abilities to preserve a protective pH.
          </p>
          {/* <Link
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
          </div> */}
        </div>



        {/* FOUR Rs SECTION */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-start pb-16">
          <div className="flex justify-evenly pb-16 gap-8">
            <div className="h-fit-content w-1/2 flex flex-col justify-start">
              <div className="inline-block pb-8">
                <Image alt="reduces image" src={reducesImage} priority={true} />
              </div>
              <h2 className="ivyPrestoThin text-tablet-h2 lineHeight-tablet-43px text-center pb-8">
              Remedy Odor
              </h2>
              <p className="coreSans text-tablet-p1 lineHeight-tablet-25px text-center">
              Displace odor causing amines
              </p>
            </div>

            <div className="h-fit-content w-1/2 flex flex-col justify-between">
              <div className="inline-block pb-8">
                <Image alt="relieves image" src={relievesImage} priority={true} />
              </div>
              <h2 className="ivyPrestoThin text-tablet-h2 lineHeight-tablet-43px text-center pb-8">
              Replenish Flora
              </h2>
              <p className="coreSans text-tablet-p1 lineHeight-tablet-25px text-center">
              Prevent growth of infection causing bacteria
              </p>
            </div>
          </div>
          <div className="flex justify-evenly pb-16 gap-8">

            <div className="h-fit-content w-1/2 flex flex-col justify-between">
              <div className="inline-block pb-8">
                <Image alt="replenishes image" src={replenishesImage} priority={true} />
              </div>
              <h2 className="ivyPrestoThin text-tablet-h2 lineHeight-tablet-43px text-center pb-8">
              Relieve Irritation
              </h2>
              <p className="coreSans text-tablet-p1 lineHeight-tablet-25px text-center">
              Stimulate protective and healing bacteria
              </p>
            </div>

            <div className="h-fit-content w-1/2 flex flex-col justify-start">
              <div className="inline-block pb-8">
                <Image alt="restores image" src={restoresImage} priority={true} />
              </div>
              <h2 className="ivyPrestoThin text-tablet-h2 lineHeight-tablet-43px text-center pb-8">
              Restore pH
              </h2>
              <p className="coreSans text-tablet-p1 lineHeight-tablet-25px text-center">
              Maintain a balanced, protective pH
              </p>
            </div>

          </div>
          <Link
              href="/learn"
              passHref
          >
              <a style={{borderColor: '#283F91', color: '#283F91'}} className="longPillButtonGradientHoverAnimation w-full relative coreSans border border-black flex justify-center rounded-full mr-8" aria-label="shop">
                  <p className="text-tablet-p2 lineHeight-tablet-22px h-24 flex flex-col justify-center">LEARN MORE</p>
              </a>
          </Link>
        </div>


        {/* BOQUET VAGINAL PREBIOTIC SECTION */}
        <div style={{backgroundColor: "#283F91", color: '#F4F0E8', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-start items-center text-center pt-16">
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
                  <div style={{borderRadius: '50%', borderColor: '#F4F0E8'}} className="border w-48 h-20 flex flex-col justify-center shortPillButtonGradientBeige">
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
        <div style={{backgroundColor: "#283F91", color: '#F4F0E8', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex justify-start pb-8 pt-8">
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
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-start py-8">
          <Slider customPaging={i => (
            <div
            style={{
              minWidth: "1.25rem",
              minHeight: "1.25rem",
              color: "#F4F0E8",
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
                  “I've been using Boquet after my period for five months. It has <em>kept infections away and my pH feels balanced so I'm more confident when I plan to have sex.</em>”
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
                  “People think vaginal issues happen when you're dirty but my odor was actually <em>due to overwashing. I'm so glad I treated the cause and restored my pH using Boquet.</em>”
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
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-start py-16">
          <h1 className="ivyPrestoThin text-tablet-h1 lineHeight-tablet-71px pb-16">
            Some more <em>info</em>
          </h1>

          <div className="pb-8">
            <AccordianItem  answer="Signals your pH is not in balance include changes in odor, itching, discharge, and possible burning when urinating. If you're experiencing them consistently, we strongly recommend seeing and consulting with a healthcare provider.">
                <h3 className="text-tablet-h3 lineHeight-tablet-42px">What are <em>symptoms of pH imbalance?</em></h3>
            </AccordianItem>
          </div>
        

          <div className="pb-16">
            <AccordianItem  answer="Boquet vaginal prebiotics prevent the growth of odor causing bacteria (gardnerella vaginalis).
An overgrowth of gardnerella vaginalis produces enzymes that break down peptides to amines which have a fishy odor. Boquet's primary ingredient, lactose, promotes the growth of our beneficial bacteria, lactobacillus, which displaces gardnerella vaginalis, reducing their adhesion to the vaginal flora.">
                <h3 className="text-tablet-h3 lineHeight-tablet-42px">How does Boquet <em>treat and prevent odor?</em></h3>
            </AccordianItem>
          </div>

          <Link
              href="/learn"
              passHref
          >
              <a style={{borderColor: '#283F91', color: '#283F91'}} className="longPillButtonGradientHoverAnimation relative coreSans border border-black flex justify-center rounded-full" aria-label="shop">
                  <p className="text-tablet-p2 lineHeight-tablet-22px h-20 flex flex-col justify-center">LEARN MORE</p>
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
