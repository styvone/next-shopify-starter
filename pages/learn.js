import AccordianItem from '@/components/AccordianItem';
import ImageTagSection from '@/components/ImageTagSection';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import GentleAndRestorative from '@/components/GentleAndRestorative';
import { useEffect, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from 'next/link';
import Image from 'next/image';


import vaginalHealth101BannerImage from '../public/images/vaginal-health-101-with-boquet.png';
import whenShouldIUseBoquetImage from '../public/images/when-should-i-use-boquet.png';
import pillAnimationImage from '../public/images/thepill-animation.png';
import vaginaTargetImage from '../public/images/thepill-dropin-animation.png';
import maintainLogoImage from '../public/images/restoreandmaintain.png';

import whenShouldIUseBoquetTabletImage from '../public/images/when-should-i-use-boquet-tablet.png';
import maintainLogoTabletImage from '../public/images/restoreandmaintain-tablet.png';

gsap.registerPlugin(ScrollTrigger);

function LearnPage() {

  const [isTopImageLoaded, setIsTopImageLoaded] = useState(false);

  useEffect(() => {
    // const sections = gsap.utils.toArray('.droppingPillAnimationContainer');

    // sections.forEach(section => {
    //   gsap.to(section, {
    //     scrollTrigger: {
    //       trigger: section,
    //       toggleActions: 'play reverse play reverse',
    //       start: 'top top',
    //       end: 'top top',
    //       endTrigger: '.droppingIntoContainer',
    //       pin: true,
    //     },
    //   })
    // });


    const droppingPillAnimationContainerDesktop = gsap.to('.droppingPillAnimationContainer-desktop', {
      scrollTrigger: {
        trigger: '.droppingPillAnimationContainer-desktop',
        toggleActions: 'play reverse play reverse',
        start: 'top top',
        end: 'top top',
        endTrigger: '.droppingIntoContainer-desktop',
        pin: true,
      },
    });

    const droppingPillAnimationContainerMobile = gsap.to('.droppingPillAnimationContainer-mobile', {
      scrollTrigger: {
        trigger: '.droppingPillAnimationContainer-mobile',
        toggleActions: 'play reverse play reverse',
        start: 'top top',
        end: 'top top',
        endTrigger: '.droppingIntoContainer-mobile',
        pin: true,
      },
    });

    const droppingPillAnimationContainerTablet = gsap.to('.droppingPillAnimationContainer-tablet', {
      scrollTrigger: {
        trigger: '.droppingPillAnimationContainer-tablet',
        toggleActions: 'play reverse play reverse',
        start: 'top top',
        end: 'top top',
        endTrigger: '.droppingIntoContainer-tablet',
        pin: true,
      },
    });

    return () => {
      droppingPillAnimationContainerDesktop.scrollTrigger.kill();
      droppingPillAnimationContainerMobile.scrollTrigger.kill();
      droppingPillAnimationContainerTablet.scrollTrigger.kill();
    }
  }, []);

  return (
    <>
      {/* Desktop */}  
      <div className="responsive-desktop">
      {/* VAGINAL HEALTH 101 WITH BOQUET */}
      <div style={{backgroundColor: '#283F91', color: '#F4F0E8', paddingLeft: '50px', paddingRight: '50px'}} className=" h-fit-content flex flex-col justify-start pb-16">
        <h2 className="ivyPrestoThin text-desktop-oneOff-md lineHeight-desktop-122 pt-20 pb-6">
          <em>Flourish your flora</em> with Boquet
        </h2>
        <p className="coreSans text-desktop-p1 w-1/2 pb-20">
        Everything you need to know about using Boquet and restoring your good protective bacteria.
        </p>
        <Image 
          src={vaginalHealth101BannerImage} 
          alt="vaginal health 101 banner image"
          priority={true} 
          quality={100}
          className={'image-opacity-duration' + (isTopImageLoaded ? ' onLoad-opacity-trigger': '')}
          onLoadingComplete={() => {
              ScrollTrigger.refresh();
              setIsTopImageLoaded(true);
          }}
        />
      </div>


      {/* WHEN SHOULD I USE BOQUET? SECTION */}
      <div style={{backgroundColor: "#F4F0E8", color: '#283F91', height: '78rem', paddingLeft: '50px', paddingRight: '50px'}} className="flex flex-col justify-center pt-8 pb-24">

        <div className="w-1/2">
          <h1 className="ivyPrestoThin text-desktop-h1 lineHeight-desktop-123">
            When should I use Boquet?
          </h1>
          <p className="coreSans text-desktop-p1 pb-8 pt-4 w-3/4">
            While Boquet is used to treat odor and irritation, it also helps support pH balance in the following scenarios:
          </p>
          
        </div>

        <div className="flex justify-between w-full">
         
          <div className="pt-8 w-1/2">
            <Image src={whenShouldIUseBoquetImage}  alt="when should i use boquet image" onLoadingComplete={ScrollTrigger.refresh} priority={true} quality={100} />
          </div>

          <div className="pl-36 pt-8 w-1/2">
            <h3 className="ivyPrestoThin text-desktop-h3 lineHeight-desktop-122 pb-4">
            During hormonal changes
            </h3>
            <p className="coreSans text-desktop-p2">
            Fluctuating hormones around our menstrual cycle can affect vaginal pH balance resulting in symptoms like changes in odor, itchiness and irritation.
            </p>

            <h3 className="ivyPrestoThin text-desktop-h3 lineHeight-desktop-122 pb-4 pt-14">
            Stress
            </h3>
            <p className="coreSans text-desktop-p2">
            Exhaustion, stress to external stressors like menstrual products, douching and sex can cause a shift in vaginal flora.
            </p>

            <h3 className="ivyPrestoThin text-desktop-h3 lineHeight-desktop-122 pb-4 pt-14">
            After your period
            </h3>
            <p className="coreSans text-desktop-p2">
            Menstrual blood is slightly alkaline with a pH of 7.4 and can raise vaginal pH. Use Boquet's prebiotic at the end of your period to replenish the flora back to its low pH.
            </p>

            <h3 className="ivyPrestoThin text-desktop-h3 lineHeight-desktop-122 pb-4 pt-14">
            Before and after sex
            </h3>
            <p className="coreSans text-desktop-p2">
            Sex can cause a shift in the vaginal flora. Additionally, semen has a higher pH of 7.2-8.  Boquet's vaginal prebiotic can be used before sex to replenish the flora but take into factor that there will be a residue of the tablet that you may wish to wipe away. Boquet's vaginal prebiotics can also be used after sex to restore the flora.
            </p>
          </div>
        </div>

      </div>






      {/* FAQ SECTION */}
      <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex flex-col justify-center">
          <div className="py-20 w-full">
                  <AccordianItem answer="Boquet's vaginal prebiotic is made with the prebiotic lactose. Lactose promotes the growth of our good bacteria, lactobacillus, in the vaginal flora and supports a protective pH.">
                      <h3 className="text-desktop-h3 lineHeight-desktop-normal">What is <em>Boquet's vaginal prebiotic?</em></h3>
                  </AccordianItem>

                  <div className="pt-8">
                      <AccordianItem  answer="Signals your pH is not in balance include changes in odor, itching, discharge, and possible burning when you urinate. If you're experiencing them consistently, we strongly recommend seeing and consulting with a healthcare provider.">
                          <h3 className="text-desktop-h3 lineHeight-desktop-normal">What are <em>symptoms of pH imbalance?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem  answer={<>Boquet vaginal prebiotics prevents the growth of odor causing bacteria (gardnerella vaginalis). <br/> An overgrowth of gardnerella vaginalis produces enzymes that break down peptides to amines which have a fishy odor. Boquet's primary ingredient, lactose, promotes the growth of our beneficial bacteria, lactobacillus, which displaces gardnerella vaginalis, reducing their adhesion to the vaginal flora.
                      </>}>
                          <h3 className="text-desktop-h3 lineHeight-desktop-normal">How does Boquet <em>treat and prevent odor?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem  answer="Lactobacilli is natural and indigenous to the vaginal flora and has a high affinity to vaginal cell receptors. When lactobacillus makes up the majority of the vaginal flora, it prevents the overgrowth of infection causing organisms. Lactobacillus derives energy from fermenting lactose to lactic acid and produces hydrogen peroxide which is not tolerated by many organisms.  Because Lactobacillus produces lactic acid, a healthy vagina has a low pH of 3.8-4.5 which prevents the growth of the most common pathogens in the vagina.">
                          <h3 className="text-desktop-h3 lineHeight-desktop-normal">How is <em>Lactobacilli protective?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem  answer="The term “vaginal flora” is used to describe the microorganisms or bacteria that populate the vaginal lining. It is usually dominated by various lactobacillus species, aka our “good bacteria,” which preserves a protective low pH.">
                          <h3 className="text-desktop-h3 lineHeight-desktop-normal">What is a <em>vaginal flora and what does it do?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem  answer={<>
                        Vaginal pH can increase around menstruation due to hormone fluctuations and sometimes during intercourse. The causes are not due to poor hygiene and it is not a sexually transmitted infection. Some risk factors include scented soaps, douching, stress and smoking.
                        <br/><br/>
                        Bacterial vaginosis is the most common form of vaginal imbalance effecting as many as 1 in 3 people in the U.S. between the age of 14 to 49. It is often undiagnosed and can have no symptoms. The most common symptoms are abnormal vaginal discharge, itching, or odor.
                      </>}>
                          <h3 className="text-desktop-h3 lineHeight-desktop-normal">How common are <em>vaginal imbalances?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem  answer="Because Boquet prebiotics are not a drug, it does not require FDA approval. However lactose, Boquet's main ingredient, is a component of many FDA approved medications.">
                          <h3 className="text-desktop-h3 lineHeight-desktop-normal">Are Boquet prebiotics <em>FDA approved?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem  answer={<>
                        The only reported side effect is a slight discharge of the tablet residue. <br/><br/>
                        <em>Do not use Boquet's vaginal prebiotics if you have an allergy to milk.</em> <br/>
                        Boquet vaginal prebiotics can be safely used in people with dietary lactose intolerance as it is not ingested orally and does not get digested.
                      </>}>
                          <h3 className="text-desktop-h3 lineHeight-desktop-normal">Are there any <em>side effects?</em></h3>
                      </AccordianItem>
                  </div>
          </div>
        </div>









      {/* DIRECTIONS ON HOW TO USE SECTION */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex flex-col justify-center text-center pb-20">
          <h2 className="ivyPrestoThin text-desktop-oneOff-lg lineHeight-desktop-123 pb-8">
            Directions on <em>how to use</em>
          </h2>
          <div className="pb-8 vbn m flex justify-center">
            <p className="coreSans text-desktop-p1 w-1/2">
            Use clean fingers to insert 1 vaginal tablet gently into the vagina to where it is comfortable.
            </p>
          </div>
          <p className="coreSans text-desktop-p3">
            *DO NOT TAKE ORALLY
            <br/>
            *Laying flat on your back may help.
            <br/>
            *You may wish to wear a panty liner in case there is slight leakage.
          </p>
        </div>

        {/* PILL DROPPING ANIMATION SECTION */}

        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', height: '50rem'}} className="flex flex-col items-center justify-between">
          <div className="droppingPillAnimationContainer-desktop h-56 w-56">
            
            {/* <img alt="pill animation" className="h-56 w-56" src='/images/thepill-animation.png' /> */}
            <Image alt="pill animation" src={pillAnimationImage} priority={true} />
          </div>
          <div className="droppingIntoContainer-desktop h-56 w-56">
            {/* <img alt="vagina target" className="h-56 w-56" src='/images/thepill-dropin-animation.png' /> */}
            <Image alt="vagina target" src={vaginaTargetImage} priority={true} />
          </div>
        </div>


        {/* RESTORE PICS MAINTAIN SECTION */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex justify-center pt-20 pb-20">
          <div className="w-1/3 flex flex-col justify-center text-center pr-16" >
            <h2 className="text-desktop-h2 lineHeight-desktop-122 ivyPrestoThin pb-4">
              To Restore
            </h2>
            <br/>
            <p className="coreSans text-desktop-p1">
              Restore your vaginal flora when displaying symptoms of pH imbalance.
            </p>
            <br/>
            <p className="coreSans text-desktop-p1">
              Insert 1 Boquet tablet vaginally once a day at bedtime for 7 days or until symptoms improve.
            </p>
          </div>

          <div className="w-1/3 flex flex-col justify-center relative">
              {/* <img alt="maintain logo" src='/images/restoreandmaintain.png' /> */}
              <Image alt="maintain logo" src={maintainLogoImage} onLoadingComplete={ScrollTrigger.refresh} priority={true} />
          </div>

          <div className="w-1/3 flex flex-col justify-center text-center pl-16">
            <h2 className="text-desktop-h2 lineHeight-desktop-122 ivyPrestoThin pb-4">
              To Maintain
            </h2>
            <br/>
            <p className="coreSans text-desktop-p1">
              Maintain your vaginal flora when displaying symptoms of pH imbalance.
            </p>
            <br/>
            <p className="coreSans text-desktop-p1">
              Insert 1 Boquet tablet vaginally once a day at bedtime for 7 days or until symptoms improve.
            </p>
          </div>
        </div>

        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="pb-20">
          <Link
                  href="/shop"
                  passHref
              >
              <a style={{borderColor: '#283F91'}} className="longPillButtonGradientHoverAnimation relative coreSans border border-black flex justify-center rounded-full" aria-label="shop">
                  <p className="text-desktop-p2 h-24 flex flex-col justify-center">SHOP BOQUET</p>
              </a>
          </Link>
        </div>

        <GentleAndRestorative />
    </div>


    {/* Mobile */}
    <div className="responsive-mobile">
      {/* VAGINAL HEALTH 101 WITH BOQUET */}
      <div style={{backgroundColor: '#283F91', color: '#F4F0E8', paddingLeft: '16px', paddingRight: '16px'}} className=" h-fit-content flex flex-col justify-start pb-12">
        <h1 className="ivyPrestoThin text-mobile-h1 lineHeight-mobile-43px pb-4 pt-12">
        <em>Flourish your flora</em> with Boquet
        </h1>
        <p className="coreSans text-mobile-p1 lineHeight-mobile-22px w-full pb-10">
        Everything you need to know about using Boquet and restoring your good protective bacteria.
        </p>
        <Image 
          src={vaginalHealth101BannerImage} 
          alt="vaginal health 101 banner image"
          priority={true} quality={100} 
          className={'image-opacity-duration' + (isTopImageLoaded ? ' onLoad-opacity-trigger': '')}
          onLoadingComplete={() => {
              ScrollTrigger.refresh();
              setIsTopImageLoaded(true);
          }} 
        />
      </div>


      {/* WHEN SHOULD I USE BOQUET? SECTION */}
      <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-evenly pb-8 pt-12">

        <div className="w-full">
          <h2 className="ivyPrestoThin text-mobile-h2 lineHeight-mobile-39px pb-3">
            When should I use Boquet?
          </h2>
          <p className="coreSans text-mobile-p1 lineHeight-mobile-22px pb-16">
          While Boquet is used to treat odor and irritation, it also helps support pH balance in the following scenarios:
          </p>
        </div>

        <div className="w-full">
          <h3 className="ivyPrestoThin text-mobile-h3 lineHeight-mobile-32px pb-2">
          During hormonal changes
          </h3>
          <p className="coreSans text-mobile-p2 lineHeight-mobile-20px pb-8">
          Fluctuating hormones around our menstrual cycle can affect vaginal pH balance resulting in symptoms like changes in odor, itchiness and irritation.
          </p>

          <h3 className="ivyPrestoThin text-mobile-h3 lineHeight-mobile-32px pb-2">
          Stress
          </h3>
          <p className="coreSans text-mobile-p2 lineHeight-mobile-20px pb-8">
          Exhaustion, stress to external stressors like menstrual products, douching and sex can cause a shift in vaginal flora.
          </p>

          <h3 className="ivyPrestoThin text-mobile-h3 lineHeight-mobile-32px pb-2">
            After your period
          </h3>
          <p className="coreSans text-mobile-p2 lineHeight-mobile-20px pb-8">
          Menstrual blood is slightly alkaline with a pH of 7.4 and can raise vaginal pH. Use Boquet's prebiotic at the end of your period to replenish the flora back to its low pH.
          </p>

          <h3 className="ivyPrestoThin text-mobile-h3 lineHeight-mobile-32px pb-2">
            Before and after sex
          </h3>
          <p className="coreSans text-mobile-p2 lineHeight-mobile-20px pb-10">
          Sex can cause a shift in the vaginal flora. Additionally, semen has a higher pH of 7.2-8.  Boquet's vaginal prebiotic can be used before sex to replenish the flora but take into factor that there will be a residue of the tablet that you may wish to wipe away. Boquet's vaginal prebiotics can also be used after sex to restore the flora.
          </p>
          <div className="pb-6">
            <Image alt="when should i use boquet image" onLoadingComplete={ScrollTrigger.refresh} src={whenShouldIUseBoquetImage} priority={true} quality={100} />
          </div>
        </div>

      </div>





        {/* FAQ SECTION */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-center">
          <div className="pt-16 pb-12 w-full">
                  <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5} answer="Boquet's vaginal prebiotic is made with the prebiotic lactose. Lactose promotes the growth of our good bacteria, lactobacillus, in the vaginal flora and supports a protective pH.">
                      <h3 className="text-mobile-h3 lineHeight-mobile-39px">What is <em>Boquet's vaginal prebiotic?</em></h3>
                  </AccordianItem>

                  <div className="pt-8">
                      <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5}  answer="Signals your pH is not in balance include changes in odor, itching, discharge, and possible burning when you urinate. If you're experiencing them consistently, we strongly recommend seeing and consulting with a healthcare provider.">
                          <h3 className="text-mobile-h3 lineHeight-mobile-39px">What are <em>symptoms of pH imbalance?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5} answer={<>Boquet vaginal prebiotics prevents the growth of odor causing bacteria (gardnerella vaginalis). <br/> An overgrowth of gardnerella vaginalis produces enzymes that break down peptides to amines which have a fishy odor. Boquet's primary ingredient, lactose, promotes the growth of our beneficial bacteria, lactobacillus, which displaces gardnerella vaginalis, reducing their adhesion to the vaginal flora.</>}>
                          <h3 className="text-mobile-h3 lineHeight-mobile-39px">How does Boquet <em>treat and prevent odor?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5} answer="Lactobacilli is natural and indigenous to the vaginal flora and has a high affinity to vaginal cell receptors. When lactobacillus makes up the majority of the vaginal flora, it prevents the overgrowth of infection causing organisms. Lactobacillus derives energy from fermenting lactose to lactic acid and produces hydrogen peroxide which is not tolerated by many organisms.  Because Lactobacillus produces lactic acid, a healthy vagina has a low pH of 3.8-4.5 which prevents the growth of the most common pathogens in the vagina.">
                          <h3 className="text-mobile-h3 lineHeight-mobile-39px">How is <em>Lactobacilli protective?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5} answer="The term “vaginal flora” is used to describe the microorganisms or bacteria that populate the vaginal lining. It is usually dominated by various lactobacillus species, aka our “good bacteria,” which preserves a protective low pH.">
                          <h3 className="text-mobile-h3 lineHeight-mobile-39px">What is a <em>vaginal flora and what does it do?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5} answer={<>
                        Vaginal pH can increase around menstruation due to hormone fluctuations and sometimes during intercourse. The causes are not due to poor hygiene and it is not a sexually transmitted infection. Some risk factors include scented soaps, douching, stress and smoking.
                        <br/><br/>
                        Bacterial vaginosis is the most common form of vaginal imbalance effecting as many as 1 in 3 people in the U.S. between the age of 14 to 49. It is often undiagnosed and can have no symptoms. The most common symptoms are abnormal vaginal discharge, itching, or odor.
                      </>}>
                          <h3 className="text-mobile-h3 lineHeight-mobile-39px">How common are <em>vaginal imbalances?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5} answer="Because Boquet prebiotics are not a drug, it does not require FDA approval. However lactose, Boquet's main ingredient, is a component of many FDA approved medications.">
                          <h3 className="text-mobile-h3 lineHeight-mobile-39px">Are Boquet prebiotics <em>FDA approved?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5} answer={<>
                        The only reported side effect is a slight discharge of the tablet residue. <br/><br/>
                        <em>Do not use Boquet's vaginal prebiotics if you have an allergy to milk.</em> <br/>
                        Boquet vaginal prebiotics can be safely used in people with dietary lactose intolerance as it is not ingested orally and does not get digested.
                      </>}>
                          <h3 className="text-mobile-h3 lineHeight-mobile-39px">Are there any <em>side effects?</em></h3>
                      </AccordianItem>
                  </div>
          </div>
        </div>


















      {/* DIRECTIONS ON HOW TO USE SECTION */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-center text-start">
          <h1 className="w-2/3 ivyPrestoThin text-mobile-h1 lineHeight-mobile-43px pb-4">
            Directions on <em>how to use</em>
          </h1>
          <div className="pb-8 vbn m flex justify-center">
            <p className="coreSans text-mobile-p1 lineHeight-mobile-22px w-full">
            Use clean fingers to insert 1 vaginal tablet gently into the vagina to where it is comfortable.
            </p>
          </div>
          <p className="coreSans text-mobile-p2 lineHeight-mobile-20px">
            *DO NOT TAKE ORALLY
            <br/>
            *Laying flat on your back may help.
            <br/>
            *You may wish to wear a panty liner in case there is slight leakage.
          </p>
        </div>

        {/* PILL DROPPING ANIMATION SECTION */}

        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', height: '50rem'}} className="flex flex-col items-center justify-between">
          <div className="droppingPillAnimationContainer-mobile h-56 w-56">
            <Image alt="pill animation" src={pillAnimationImage} priority={true} />
          </div>
          <div className="droppingIntoContainer-mobile h-56 w-56">
            <Image alt="vagina target" src={vaginaTargetImage} priority={true} />
          </div>
        </div>


        {/* RESTORE PICS MAINTAIN SECTION */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-evenly pb-12">
          <div className="w-full flex flex-col justify-center relative pb-16">
          <Image alt="maintain logo" src={maintainLogoImage} onLoadingComplete={ScrollTrigger.refresh} priority={true} />
          </div>
          
          
          <div className="w-full flex flex-col justify-center text-start pb-16" >
            <h2 className="text-mobile-h2 lineHeight-mobile-35px ivyPrestoThin pb-4">
              To Restore
            </h2>

            <p className="coreSans text-mobile-p1 lineHeight-mobile-22px pb-4">
              Restore your vaginal flora when displaying symptoms of pH imbalance.
            </p>

            <p className="coreSans text-mobile-p1 lineHeight-mobile-22px">
              Insert 1 Boquet tablet vaginally once a day at bedtime for 7 days or until symptoms improve.
            </p>
          </div>



          <div className="w-full flex flex-col justify-center text-start pb-12">
            <h2 className="text-mobile-h2 lineHeight-mobile-35px ivyPrestoThin pb-4">
              To Maintain
            </h2>
 
            <p className="coreSans text-mobile-p1 lineHeight-mobile-22px pb-4">
              Maintain your vaginal flora when displaying symptoms of pH imbalance.
            </p>

            <p className="coreSans text-mobile-p1 lineHeight-mobile-22px">
              Insert 1 Boquet tablet vaginally once a day at bedtime for 7 days or until symptoms improve.
            </p>
          </div>

          <Link
                href="/shop"
                passHref
            >
              <a style={{borderColor: '#283F91'}} className="longPillButtonGradientHoverAnimation relative coreSans border border-black flex justify-center rounded-full" aria-label="shop">
                  <p className="text-mobile-p2 h-12 flex flex-col justify-center">SHOP BOQUET</p>
              </a>
          </Link>
        </div>

        <GentleAndRestorative />
    </div>



    {/* Tablet */}
    <div className="responsive-tablet">
      {/* VAGINAL HEALTH 101 WITH BOQUET */}
      <div style={{backgroundColor: '#283F91', color: '#F4F0E8', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-start pb-10">
        <h1 className="ivyPrestoThin text-tablet-h1 lineHeight-tablet-59px pb-4 pt-10 w-10/12">
        <em>Flourish your flora</em> with Boquet
        </h1>
        <p className="coreSans text-tablet-p1 lineHeight-tablet-25px pb-10 w-10/12">
        Everything you need to know about using Boquet and restoring your good protective bacteria.
        </p>
        <Image 
          src={vaginalHealth101BannerImage} 
          alt="vaginal health 101 banner image"
          priority={true} 
          quality={100}
          className={'image-opacity-duration' + (isTopImageLoaded ? ' onLoad-opacity-trigger': '')}
          onLoadingComplete={() => {
              ScrollTrigger.refresh();
              setIsTopImageLoaded(true);
          }}
        />
      </div>


      {/* WHEN SHOULD I USE BOQUET? SECTION */}
      <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-evenly py-10">

        <div className="w-10/12">
          <h1 className="ivyPrestoThin text-tablet-h1 lineHeight-tablet-71px pb-4">
            When should I <em>use Boquet?</em>
          </h1>
          <p className="coreSans text-tablet-p1 lineHeight-tablet-25px pb-10">
          While Boquet is used to treat odor and irritation, it also helps support pH balance in the following scenarios:
          </p>
        </div>

        <div className="">
          <h3 className="w-10/12 ivyPrestoThin text-tablet-h3 lineHeight-tablet-34px pb-4">
          During hormonal changes
          </h3>
          <p className="w-10/12 coreSans text-tablet-p2 lineHeight-tablet-22px pb-10">
          Fluctuating hormones around our menstrual cycle can affect vaginal pH balance resulting in symptoms like changes in odor, itchiness and irritation.
          </p>

          <h3 className="w-10/12 ivyPrestoThin text-tablet-h3 lineHeight-tablet-34px pb-4">
          Stress
          </h3>
          <p className="w-10/12 coreSans text-tablet-p2 lineHeight-tablet-22px pb-10">
          Exhaustion, stress to external stressors like menstrual products, douching and sex can cause a shift in vaginal flora.
          </p>

          <h3 className="w-10/12 ivyPrestoThin text-tablet-h3 lineHeight-tablet-34px pb-4">
            After your period
          </h3>
          <p className="w-10/12 coreSans text-tablet-p2 lineHeight-tablet-22px pb-10">
          Menstrual blood is slightly alkaline with a pH of 7.4 and can raise vaginal pH. Use Boquet's prebiotic at the end of your period to replenish the flora back to its low pH.
          </p>

          <h3 className="w-10/12 ivyPrestoThin text-tablet-h3 lineHeight-tablet-34px pb-4">
            Before and after sex
          </h3>
          <p className="w-10/12 coreSans text-tablet-p2 lineHeight-tablet-22px pb-10">
          Sex can cause a shift in the vaginal flora. Additionally, semen has a higher pH of 7.2-8.  Boquet's vaginal prebiotic can be used before sex to replenish the flora but take into factor that there will be a residue of the tablet that you may wish to wipe away. Boquet's vaginal prebiotics can also be used after sex to restore the flora.
          </p>
          <div className="pb-10">
            <Image alt="when should i use boquet image" onLoadingComplete={ScrollTrigger.refresh} src={whenShouldIUseBoquetTabletImage} priority={true} quality={100} />
          </div>
        </div>

      </div>





        {/* FAQ SECTION */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-center">
          <div className="py-16 w-full">
                  <AccordianItem answer="Boquet's vaginal prebiotic is made with the prebiotic lactose. Lactose promotes the growth of our good bacteria, lactobacillus, in the vaginal flora and supports a protective pH.">
                      <h3 className="text-tablet-h3 lineHeight-tablet-43px">What is <em>Boquet's vaginal prebiotic?</em></h3>
                  </AccordianItem>

                  <div className="pt-8">
                      <AccordianItem  answer="Signals your pH is not in balance include changes in odor, itching, discharge, and possible burning when you urinate. If you're experiencing them consistently, we strongly recommend seeing and consulting with a healthcare provider.">
                          <h3 className="text-tablet-h3 lineHeight-tablet-43px">What are <em>symptoms of pH imbalance?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem  answer={<>Boquet vaginal prebiotics prevents the growth of odor causing bacteria (gardnerella vaginalis). <br/> An overgrowth of gardnerella vaginalis produces enzymes that break down peptides to amines which have a fishy odor. Boquet's primary ingredient, lactose, promotes the growth of our beneficial bacteria, lactobacillus, which displaces gardnerella vaginalis, reducing their adhesion to the vaginal flora.</>}>
                          <h3 className="text-tablet-h3 lineHeight-tablet-43px">How does Boquet <em>treat and prevent odor?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem  answer="Lactobacilli is natural and indigenous to the vaginal flora and has a high affinity to vaginal cell receptors. When lactobacillus makes up the majority of the vaginal flora, it prevents the overgrowth of infection causing organisms. Lactobacillus derives energy from fermenting lactose to lactic acid and produces hydrogen peroxide which is not tolerated by many organisms.  Because Lactobacillus produces lactic acid, a healthy vagina has a low pH of 3.8-4.5 which prevents the growth of the most common pathogens in the vagina.">
                          <h3 className="text-tablet-h3 lineHeight-tablet-43px">How is <em>Lactobacilli protective?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem  answer="The term “vaginal flora” is used to describe the microorganisms or bacteria that populate the vaginal lining. It is usually dominated by various lactobacillus species, aka our “good bacteria,” which preserves a protective low pH.">
                          <h3 className="text-tablet-h3 lineHeight-tablet-43px">What is a <em>vaginal flora and what does it do?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem  answer={<>
                        Vaginal pH can increase around menstruation due to hormone fluctuations and sometimes during intercourse. The causes are not due to poor hygiene and it is not a sexually transmitted infection. Some risk factors include scented soaps, douching, stress and smoking.
                        <br/><br/>
                        Bacterial vaginosis is the most common form of vaginal imbalance effecting as many as 1 in 3 people in the U.S. between the age of 14 to 49. It is often undiagnosed and can have no symptoms. The most common symptoms are abnormal vaginal discharge, itching, or odor.
                      </>}>
                          <h3 className="text-tablet-h3 lineHeight-tablet-43px">How common are <em>vaginal imbalances?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem  answer="Because Boquet prebiotics are not a drug, it does not require FDA approval. However lactose, Boquet's main ingredient, is a component of many FDA approved medications.">
                          <h3 className="text-tablet-h3 lineHeight-tablet-43px">Are Boquet prebiotics <em>FDA approved?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem  answer={<>
                        The only reported side effect is a slight discharge of the tablet residue. <br/><br/>
                        <em>Do not use Boquet's vaginal prebiotics if you have an allergy to milk.</em> <br/>
                        Boquet vaginal prebiotics can be safely used in people with dietary lactose intolerance as it is not ingested orally and does not get digested.
                      </>}>
                          <h3 className="text-tablet-h3 lineHeight-tablet-43px">Are there any <em>side effects?</em></h3>
                      </AccordianItem>
                  </div>
          </div>
        </div>






















      {/* DIRECTIONS ON HOW TO USE SECTION */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-center text-center">
          <h1 className="ivyPrestoThin text-tablet-h1 lineHeight-tablet-59px pb-4">
            Directions on <em>how to use</em>
          </h1>
          <div className="pb-8 vbn m flex justify-center">
            <p className="coreSans text-tablet-p1 lineHeight-tablet-25px w-8/12">
            Use clean fingers to insert 1 vaginal tablet gently into the vagina to where it is comfortable.
            </p>
          </div>
          <p className="coreSans text-tablet-p3 lineHeight-tablet-20px">
            *DO NOT TAKE ORALLY
            <br/>
            *Laying flat on your back may help.
            <br/>
            *You may wish to wear a panty liner in case there is slight leakage.
          </p>
        </div>

        {/* PILL DROPPING ANIMATION SECTION */}

        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', height: '30rem'}} className="flex flex-col items-center justify-between">
          <div className="droppingPillAnimationContainer-tablet h-24 w-24">
            <Image alt="pill animation" src={pillAnimationImage} priority={true} />
          </div>
          <div className="droppingIntoContainer-tablet h-24 w-24">
            <Image alt="vagina target" src={vaginaTargetImage} priority={true} />
          </div>
        </div>


        {/* RESTORE PICS MAINTAIN SECTION */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content pb-16">
          <div className="w-full flex justify-center pb-16">
            <div className="w-1/2 inline-block">
              <Image alt="maintain logo" src={maintainLogoTabletImage} priority={true} onLoadingComplete={ScrollTrigger.refresh} />
            </div>
          </div>
          
          <div className="flex justify-evenly">
            <div className="w-1/2 flex flex-col justify-center text-left pr-4" >
              <h2 className="text-tablet-h2 lineHeight-tablet-43px ivyPrestoThin">
                To Restore:
              </h2>

              <p className="coreSans text-tablet-p1 lineHeight-tablet-25px pb-4">
                Restore your vaginal flora when displaying symptoms of pH imbalance.
              </p>

              <p className="coreSans text-tablet-p1 lineHeight-tablet-25px">
                Insert 1 Boquet tablet vaginally once a day at bedtime for 7 days or until symptoms improve.
              </p>
            </div>



            <div className="w-1/2 flex flex-col justify-center text-left">
              <h2 className="text-tablet-h2 lineHeight-tablet-43px ivyPrestoThin">
                To Maintain:
              </h2>
  
              <p className="coreSans text-tablet-p1 lineHeight-tablet-25px pb-4">
                Maintain your vaginal flora when displaying symptoms of pH imbalance.
              </p>

              <p className="coreSans text-tablet-p1 lineHeight-tablet-25px">
                Insert 1 Boquet tablet vaginally once a day at bedtime for 7 days or until symptoms improve.
              </p>
            </div>
          </div>
          <Link
                href="/shop"
                passHref
            >
                <a style={{borderColor: '#283F91'}} className="longPillButtonGradientHoverAnimation mt-16 relative coreSans border border-black flex justify-center rounded-full" aria-label="shop">
                    <p className="text-tablet-p2 lineHeight-tablet-22px h-20 flex flex-col justify-center">SHOP BOQUET</p>
                </a>
            </Link>
        </div>

        <GentleAndRestorative />
    </div>
    </>
  )
}

LearnPage.getLayout = function getLayout(page) {
    return (
      <Layout logoGray={true} backgroundColor={'#283F91'}>
        <SEO 
          title={process.env.siteTitle}
        />
        {page}
        <div className="responsive-desktop">
          <ImageTagSection backgroundImage="/images/image-tag-section/learn-image-tag-section.png" />
        </div>
        <div className="responsive-mobile">
          <ImageTagSection backgroundImage="/images/image-tag-section/learn-image-tag-section-mobile.png" />
        </div>
        <div className="responsive-tablet">
          <ImageTagSection backgroundImage="/images/image-tag-section/learn-image-tag-section-tablet.png" />
        </div>
      </Layout>
    )
  }

export default LearnPage;
