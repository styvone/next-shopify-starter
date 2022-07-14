import AccordianItem from '@/components/AccordianItem';
import ImageTagSection from '@/components/ImageTagSection';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import GentleAndRestorative from '@/components/GentleAndRestorative';
import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from 'next/link';
import Image from 'next/image';


import vaginalHealth101BannerImage from '../public/images/vaginal-health-101-with-boquet.png';
import whenShouldIUseBoquetImage from '../public/images/when-should-i-use-boquet.png';
import pillAnimationImage from '../public/images/thepill-animation.png';
import vaginaTargetImage from '../public/images/thepill-dropin-animation.png';
import maintainLogoImage from '../public/images/restoreandmaintain.png';

gsap.registerPlugin(ScrollTrigger);

function LearnPage() {

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
      <div style={{backgroundColor: '#283F91', color: '#EBE5DB', paddingLeft: '50px', paddingRight: '50px'}} className=" h-fit-content flex flex-col justify-start pb-16">
        <h2 className="ivyPrestoThin text-desktop-oneOff-md lineHeight-desktop-122 pt-20 pb-6">
          <em>Vaginal health</em> 101 with Boquet
        </h2>
        <p className="coreSans text-desktop-p1 w-1/2 pb-20">
        Everything you need to know about using Boquet, the ins and outs of your vaginal flora, and restoring your good protective bacteria.
        </p>
        {/* <img alt="vaginal health 101 banner image" onLoad={ScrollTrigger.refresh} src="/images/vaginal-health-101-with-boquet.png" /> */}
        <Image src={vaginalHealth101BannerImage} alt="vaginal health 101 banner image" onLoad={ScrollTrigger.refresh} />
      </div>


      {/* WHEN SHOULD I USE BOQUET? SECTION */}
      <div style={{backgroundColor: "#EBE5DB", color: '#283F91', height: '78rem', paddingLeft: '50px', paddingRight: '50px'}} className="flex flex-col justify-center pt-8 pb-24">

        <div className="w-1/2">
          <h1 className="ivyPrestoThin text-desktop-h1 lineHeight-desktop-123">
            When should I use Boquet?
          </h1>
          <p className="coreSans text-desktop-p1 pb-8 pt-4">
            While Boquet is safe for daily usage, we especially recommend our vaginal prebiotic tablets for the following scenarios you may encounter:
          </p>
          
        </div>

        <div className="flex justify-between w-full">
         
          <div className="pt-8 w-1/2">
            {/* <img alt="when should i use boquet image" onLoad={ScrollTrigger.refresh} src="/images/when-should-i-use-boquet.png"/> */}
            <Image src={whenShouldIUseBoquetImage}  alt="when should i use boquet image" onLoad={ScrollTrigger.refresh} />
          </div>

          <div className="pl-36 pt-8 w-1/2">
            <h3 className="ivyPrestoThin text-desktop-h3 lineHeight-desktop-122 pb-4">
              Preparing for pH changes
            </h3>
            <p className="coreSans text-desktop-p2">
              Fluctuating hormones before your menstrual cycle can affect the pH balance of the vaginal flora resulting in symptoms like changes in odor, itchiness and irritation.
            </p>

            <h3 className="ivyPrestoThin text-desktop-h3 lineHeight-desktop-122 pb-4 pt-14">
              Relieving vaginal irritation
            </h3>
            <p className="coreSans text-desktop-p2">
              External stressors from traveling and exhaustion to menstrual products and use of intimacy devices can cause a shift in vaginal flora.
            </p>

            <h3 className="ivyPrestoThin text-desktop-h3 lineHeight-desktop-122 pb-4 pt-14">
              After your period
            </h3>
            <p className="coreSans text-desktop-p2">
              Menstrual blood is slightly alkaline with a pH of 7.4 and can raise the pH level of your vagina  when it sits against the vagina in a pad or tampon. Use Boquet's prebiotic at the end of your period to replenish the flora back to its acidic pH.
            </p>

            <h3 className="ivyPrestoThin text-desktop-h3 lineHeight-desktop-122 pb-4 pt-14">
              Before and after sex
            </h3>
            <p className="coreSans text-desktop-p2">
            Semen is slightly alkaline with a pH of 7.2-8. Having unprotected sex can increase the chances of pathogenic bacterial growth. Use Boquet's vaginal prebiotic before sex to increase vaginal comfort and confidence but take into factor that there will be a residue of the tablet that you may wish to wipe away. Boquet's vaginal prebiotics can also be used after sex to restore the flora from the effects of semen or physical wear and tear.
            </p>
          </div>
        </div>

      </div>


      {/* DIRECTIONS ON HOW TO USE SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex flex-col justify-center text-center pb-20">
          <h2 className="ivyPrestoThin text-desktop-oneOff-lg lineHeight-desktop-123 pb-8">
            Directions on <em>how to use</em>
          </h2>
          <div className="pb-8 vbn m flex justify-center">
            <p className="coreSans text-desktop-p1 w-1/2">
            Use clean fingers or an applicator to insert 1 vaginal tablet gently into the vagina as far up as you are comfortable.
            </p>
          </div>
          <p className="coreSans text-desktop-p3">
            *DO NOT TAKE ORALLY
            <br/>
            *Laying flat on your back is recommended.
            <br/>
            *You may wish to wear a panty liner in case there is slight leakage.
          </p>
        </div>

        {/* PILL DROPPING ANIMATION SECTION */}

        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', height: '50rem'}} className="flex flex-col items-center justify-between">
          <div className="droppingPillAnimationContainer-desktop h-56 w-56">
            
            {/* <img alt="pill animation" className="h-56 w-56" src='/images/thepill-animation.png' /> */}
            <Image alt="pill animation" src={pillAnimationImage} />
          </div>
          <div className="droppingIntoContainer-desktop h-56 w-56">
            {/* <img alt="vagina target" className="h-56 w-56" src='/images/thepill-dropin-animation.png' /> */}
            <Image alt="vagina target" src={vaginaTargetImage} />
          </div>
        </div>


        {/* RESTORE PICS MAINTAIN SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex justify-center pt-20 pb-20">
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
              Use 1 Boquet tablet vaginally once a day at bedtime for 7 days or until symptoms improve.
            </p>
          </div>

          <div className="w-1/3 flex flex-col justify-center relative">
              {/* <img alt="maintain logo" src='/images/restoreandmaintain.png' /> */}
              <Image alt="maintain logo" src={maintainLogoImage} />
          </div>

          <div className="w-1/3 flex flex-col justify-center text-center pl-16">
            <h2 className="text-desktop-h2 lineHeight-desktop-122 ivyPrestoThin pb-4">
              To Maintain
            </h2>
            <br/>
            <p className="coreSans text-desktop-p1">
              Restore your vaginal flora when displaying symptoms of pH imbalance.
            </p>
            <br/>
            <p className="coreSans text-desktop-p1">
              Use 1 Boquet tablet vaginally once a day at bedtime for 7 days or until symptoms improve.
            </p>
          </div>
        </div>

        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="pb-20">
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

        {/* FAQ SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex flex-col justify-center">
          <div className="py-20 w-full">
                  <AccordianItem answer={<>
                  Boquet vaginal prebiotic tablets help deodorize, improve dryness, and relieve irritation by promoting the growth of the beneficial, protective bacteria in our vaginal flora. 
                  <br/> <br/> 
                  Boquet's vaginal prebiotic contains lactose. A prebiotic is a nutrient that stimulates the growth of beneficial microorganisms. Lactose stimulates the growth of the beneficial bacteria, lactobacilli in our vaginal flora.
                  </>}>
                      <h3 className="text-desktop-h3 lineHeight-desktop-normal">What is <em>Boquet's vaginal prebiotic?</em></h3>
                  </AccordianItem>

                  <div className="pt-8">
                      <AccordianItem  answer="The term “vaginal flora” is used to describe the microorganisms or bacteria that colonize the vaginal lining, it is also referred to as “vaginal microbiome.” A healthy vaginal flora is dominated by various lactobacillus species which maintain a low pH, creating a protective barrier that prevents the growth of other microorganisms.">
                          <h3 className="text-desktop-h3 lineHeight-desktop-normal">What is a <em>vaginal flora</em> and what does it do?</h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem  answer="Signals your pH may be off include changes in odor, itching, discharge, and possible burning when you urinate. If you're experiencing them consistently, we strongly recommend seeing and consulting with a healthcare provider.">
                          <h3 className="text-desktop-h3 lineHeight-desktop-normal">What happens when your <em>vaginal pH balance</em> is off?</h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem  answer={<>
                        Boquet vaginal prebiotics deodorizes by preventing the growth and adhesion of odor causing bacteria (gardnerella vaginalis) to the vaginal epithelium.
                        <br/><br/>
                        An overgrowth of pathogens produces enzymes that break down peptides to amines which have a fishy odor. Boquet's primary ingredient, lactose, promotes the growth of healthy bacteria (lactobacillus) which displaces the pathogenic organisms hence reducing their adhesion.
                      </>}>
                          <h3 className="text-desktop-h3 lineHeight-desktop-normal">How does Boquet <em>help deodorize?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem  answer={<>
                        Lactobacilli is natural and indigenous to the vaginal flora and has a high affinity to vaginal cell receptors.. It derives energy from fermenting lactose to lactic acid and produces hydrogen peroxide which is not tolerated by many organisms.
                        <br/><br/>
                        Because Lactobacillus produces lactic acid, a healthy vagina has a low pH of 3.8-4.5. High pH is one of the factors that contribute to growth of the most common pathogenic bacterial offenders. When lactobacillus makes up the majority of the vaginal flora, it prevents the overgrowth of vaginal pathogenic organisms.
                      </>}>
                          <h3 className="text-desktop-h3 lineHeight-desktop-normal">How is <em>Lactobacilli protective?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem  answer={<>
                        Vaginal pH can increase around menstruation due to hormone fluctuations and sometimes during intercourse. The causes are not due to poor hygiene and it is not a sexually transmitted infection. Some risk factors include scented soaps, douching, stress and smoking.
                        <br/><br/>
                        The most common form of vaginal imbalance shows up as bacterial vaginosis. 1 in 3 individuals with vaginas in the U.S. between the age of 14 to 49 will experience imbalances in their flora that lead to bacterial vaginosis.
                      </>}>
                          <h3 className="text-desktop-h3 lineHeight-desktop-normal">How common are <em>vaginal imbalances?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem  answer={<>
                        Yes. Lactose is a naturally occurring carbohydrate in milk and a commonly used inactive ingredient in many oral tablets and capsules. The only reported side effect is a slight discharge of the tablet residue. Do not use Boquet's vaginal prebiotics if you have an allergy to milk.
                        <br/><br/>
                        Boquet vaginal prebiotics can be safely used in people with dietary lactose intolerance as it is not ingested orally and does not get digested. Lactose is a component of many FDA approved medications and widely used vaginal hygiene products.
                      </>}>
                          <h3 className="text-desktop-h3 lineHeight-desktop-normal">Are Boquet prebiotics <em>safe?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem  answer="Yes. {Elaborate}">
                          <h3 className="text-desktop-h3 lineHeight-desktop-normal">Can I use Boquet <em>while pregnant?</em></h3>
                      </AccordianItem>
                  </div>
          </div>
        </div>
    </div>


    {/* Mobile */}
    <div className="responsive-mobile">
      {/* VAGINAL HEALTH 101 WITH BOQUET */}
      <div style={{backgroundColor: '#283F91', color: '#EBE5DB', paddingLeft: '16px', paddingRight: '16px'}} className=" h-fit-content flex flex-col justify-start pb-12">
        <h1 className="ivyPrestoThin text-mobile-h1 lineHeight-mobile-43px pb-4 pt-12">
          <em>Vaginal health</em> 101 with Boquet
        </h1>
        <p className="coreSans text-mobile-p1 lineHeight-mobile-22px w-full pb-10">
        Everything you need to know about using Boquet, the ins and outs of your vaginal flora, and restoring your good protective bacteria.
        </p>
        <img alt="vaginal health 101 banner image" onLoad={ScrollTrigger.refresh} src="/images/vaginal-health-101-with-boquet.png" />
      </div>


      {/* WHEN SHOULD I USE BOQUET? SECTION */}
      <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-evenly pb-8 pt-12">

        <div className="w-full">
          <h2 className="ivyPrestoThin text-mobile-h2 lineHeight-mobile-39px pb-3">
            When should I use Boquet?
          </h2>
          <p className="coreSans text-mobile-p1 lineHeight-mobile-22px pb-16">
            While Boquet is safe for daily usage, we especially recommend our vaginal prebiotic tablets for the following scenarios you may encounter:
          </p>
        </div>

        <div className="w-full">
          <h3 className="ivyPrestoThin text-mobile-h3 lineHeight-mobile-32px pb-2">
            Preparing for pH changes
          </h3>
          <p className="coreSans text-mobile-p2 lineHeight-mobile-20px pb-8">
            Fluctuating hormones before your menstrual cycle can affect the pH balance of the vaginal flora resulting in symptoms like changes in odor, itchiness and irritation.
          </p>

          <h3 className="ivyPrestoThin text-mobile-h3 lineHeight-mobile-32px pb-2">
            Relieving vaginal irritation
          </h3>
          <p className="coreSans text-mobile-p2 lineHeight-mobile-20px pb-8">
            External stressors from traveling and exhaustion to menstrual products and use of intimacy devices can cause a shift in vaginal flora.
          </p>

          <h3 className="ivyPrestoThin text-mobile-h3 lineHeight-mobile-32px pb-2">
            After your period
          </h3>
          <p className="coreSans text-mobile-p2 lineHeight-mobile-20px pb-8">
            Menstrual blood is slightly alkaline with a pH of 7.4 and can raise the pH level of your vagina  when it sits against the vagina in a pad or tampon. Use Boquet's prebiotic at the end of your period to replenish the flora back to its acidic pH.
          </p>

          <h3 className="ivyPrestoThin text-mobile-h3 lineHeight-mobile-32px pb-2">
            Before and after sex
          </h3>
          <p className="coreSans text-mobile-p2 lineHeight-mobile-20px pb-10">
          Semen is slightly alkaline with a pH of 7.2-8. Having unprotected sex can increase the chances of pathogenic bacterial growth. Use Boquet's vaginal prebiotic before sex to increase vaginal comfort and confidence but take into factor that there will be a residue of the tablet that you may wish to wipe away. Boquet's vaginal prebiotics can also be used after sex to restore the flora from the effects of semen or physical wear and tear.
          </p>
          <img className="pb-6" alt="when should i use boquet image" onLoad={ScrollTrigger.refresh} src="/images/when-should-i-use-boquet.png"/>
        </div>

      </div>


      {/* DIRECTIONS ON HOW TO USE SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-center text-start">
          <h1 className="w-2/3 ivyPrestoThin text-mobile-h1 lineHeight-mobile-43px pb-4">
            Directions on <em>how to use</em>
          </h1>
          <div className="pb-8 vbn m flex justify-center">
            <p className="coreSans text-mobile-p1 lineHeight-mobile-22px w-full">
            Use clean fingers or an applicator to insert 1 vaginal tablet gently into the vagina as far up as you are comfortable.
            </p>
          </div>
          <p className="coreSans text-mobile-p2 lineHeight-mobile-20px">
            *DO NOT TAKE ORALLY
            <br/>
            *Laying flat on your back is recommended.
            <br/>
            *You may wish to wear a panty liner in case there is slight leakage.
          </p>
        </div>

        {/* PILL DROPPING ANIMATION SECTION */}

        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', height: '50rem'}} className="flex flex-col items-center justify-between">
          <div className="droppingPillAnimationContainer-mobile">
            <img alt="pill animation" className="h-56 w-56" src='/images/thepill-animation.png' />
          </div>
          <div className="droppingIntoContainer-mobile">
            <img alt="vagina target" className="h-56 w-56" src='/images/thepill-dropin-animation.png' />
          </div>
        </div>


        {/* RESTORE PICS MAINTAIN SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-evenly pb-12">
          <div className="w-full flex flex-col justify-center relative pb-16">
            <img alt="maintain logo" src='/images/restoreandmaintain.png' />
          </div>
          
          
          <div className="w-full flex flex-col justify-center text-start pb-16" >
            <h2 className="text-mobile-h2 lineHeight-mobile-35px ivyPrestoThin pb-4">
              To Restore
            </h2>

            <p className="coreSans text-mobile-p1 lineHeight-mobile-22px pb-4">
              Restore your vaginal flora when displaying symptoms of pH imbalance.
            </p>

            <p className="coreSans text-mobile-p1 lineHeight-mobile-22px">
              Use 1 Boquet tablet vaginally once a day at bedtime for 7 days or until symptoms improve.
            </p>
          </div>



          <div className="w-full flex flex-col justify-center text-start pb-12">
            <h2 className="text-mobile-h2 lineHeight-mobile-35px ivyPrestoThin pb-4">
              To Maintain
            </h2>
 
            <p className="coreSans text-mobile-p1 lineHeight-mobile-22px pb-4">
              Restore your vaginal flora when displaying symptoms of pH imbalance.
            </p>

            <p className="coreSans text-mobile-p1 lineHeight-mobile-22px">
              Use 1 Boquet tablet vaginally once a day at bedtime for 7 days or until symptoms improve.
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

        {/* FAQ SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-center">
          <div className="pt-16 pb-12 w-full">
                  <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5} answer={<>
                  Boquet vaginal prebiotic tablets help deodorize, improve dryness, and relieve irritation by promoting the growth of the beneficial, protective bacteria in our vaginal flora. 
                  <br/> <br/> 
                  Boquet's vaginal prebiotic contains lactose. A prebiotic is a nutrient that stimulates the growth of beneficial microorganisms. Lactose stimulates the growth of the beneficial bacteria, lactobacilli in our vaginal flora.
                  </>}>
                      <h3 className="text-mobile-h3 lineHeight-mobile-39px">What is <em>Boquet's vaginal prebiotic?</em></h3>
                  </AccordianItem>

                  <div className="pt-8">
                      <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5}  answer="The term “vaginal flora” is used to describe the microorganisms or bacteria that colonize the vaginal lining, it is also referred to as “vaginal microbiome.” A healthy vaginal flora is dominated by various lactobacillus species which maintain a low pH, creating a protective barrier that prevents the growth of other microorganisms.">
                          <h3 className="text-mobile-h3 lineHeight-mobile-39px">What is a <em>vaginal flora</em> and what does it do?</h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5} answer="Signals your pH may be off include changes in odor, itching, discharge, and possible burning when you urinate. If you're experiencing them consistently, we strongly recommend seeing and consulting with a healthcare provider.">
                          <h3 className="text-mobile-h3 lineHeight-mobile-39px">What happens when your <em>vaginal pH balance</em> is off?</h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5} answer={<>
                        Boquet vaginal prebiotics deodorizes by preventing the growth and adhesion of odor causing bacteria (gardnerella vaginalis) to the vaginal epithelium.
                        <br/><br/>
                        An overgrowth of pathogens produces enzymes that break down peptides to amines which have a fishy odor. Boquet's primary ingredient, lactose, promotes the growth of healthy bacteria (lactobacillus) which displaces the pathogenic organisms hence reducing their adhesion.
                      </>}>
                          <h3 className="text-mobile-h3 lineHeight-mobile-39px">How does Boquet <em>help deodorize?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5} answer={<>
                        Lactobacilli is natural and indigenous to the vaginal flora and has a high affinity to vaginal cell receptors.. It derives energy from fermenting lactose to lactic acid and produces hydrogen peroxide which is not tolerated by many organisms.
                        <br/><br/>
                        Because Lactobacillus produces lactic acid, a healthy vagina has a low pH of 3.8-4.5. High pH is one of the factors that contribute to growth of the most common pathogenic bacterial offenders. When lactobacillus makes up the majority of the vaginal flora, it prevents the overgrowth of vaginal pathogenic organisms.
                      </>}>
                          <h3 className="text-mobile-h3 lineHeight-mobile-39px">How is <em>Lactobacilli protective?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5} answer={<>
                        Vaginal pH can increase around menstruation due to hormone fluctuations and sometimes during intercourse. The causes are not due to poor hygiene and it is not a sexually transmitted infection. Some risk factors include scented soaps, douching, stress and smoking.
                        <br/><br/>
                        The most common form of vaginal imbalance shows up as bacterial vaginosis. 1 in 3 individuals with vaginas in the U.S. between the age of 14 to 49 will experience imbalances in their flora that lead to bacterial vaginosis.
                      </>}>
                          <h3 className="text-mobile-h3 lineHeight-mobile-39px">How common are <em>vaginal imbalances?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5} answer={<>
                        Yes. Lactose is a naturally occurring carbohydrate in milk and a commonly used inactive ingredient in many oral tablets and capsules. The only reported side effect is a slight discharge of the tablet residue. Do not use Boquet's vaginal prebiotics if you have an allergy to milk.
                        <br/><br/>
                        Boquet vaginal prebiotics can be safely used in people with dietary lactose intolerance as it is not ingested orally and does not get digested. Lactose is a component of many FDA approved medications and widely used vaginal hygiene products.
                      </>}>
                          <h3 className="text-mobile-h3 lineHeight-mobile-39px">Are Boquet prebiotics <em>safe?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5} answer="Yes. {Elaborate}">
                          <h3 className="text-mobile-h3 lineHeight-mobile-39px">Can I use Boquet <em>while pregnant?</em></h3>
                      </AccordianItem>
                  </div>
          </div>
        </div>
    </div>



    {/* Tablet */}
    <div className="responsive-tablet">
      {/* VAGINAL HEALTH 101 WITH BOQUET */}
      <div style={{backgroundColor: '#283F91', color: '#EBE5DB', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-start pb-10">
        <h1 className="ivyPrestoThin text-tablet-h1 lineHeight-tablet-59px pb-4 pt-10 w-10/12">
          <em>Vaginal health</em> 101 with Boquet
        </h1>
        <p className="coreSans text-tablet-p1 lineHeight-tablet-25px pb-10 w-10/12">
          Everything you need to know about using Boquet, the ins and outs of your vaginal flora, and restoring your good protective bacteria.
        </p>
        <img alt="vaginal health 101 banner image" onLoad={ScrollTrigger.refresh} src="/images/vaginal-health-101-with-boquet.png" />
      </div>


      {/* WHEN SHOULD I USE BOQUET? SECTION */}
      <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-evenly py-10">

        <div className="w-10/12">
          <h1 className="ivyPrestoThin text-tablet-h1 lineHeight-tablet-71px pb-4">
            When should I <em>use Boquet?</em>
          </h1>
          <p className="coreSans text-tablet-p1 lineHeight-tablet-25px pb-10">
            While Boquet is safe for daily usage, we especially recommend our vaginal prebiotic tablets for the following scenarios you may encounter:
          </p>
        </div>

        <div className="">
          <h3 className="w-10/12 ivyPrestoThin text-tablet-h3 lineHeight-tablet-34px pb-4">
            Preparing for pH changes
          </h3>
          <p className="w-10/12 coreSans text-tablet-p2 lineHeight-tablet-22px pb-10">
            Fluctuating hormones before your menstrual cycle can affect the pH balance of the vaginal flora resulting in symptoms like changes in odor, itchiness and irritation.
          </p>

          <h3 className="w-10/12 ivyPrestoThin text-tablet-h3 lineHeight-tablet-34px pb-4">
            Relieving vaginal irritation
          </h3>
          <p className="w-10/12 coreSans text-tablet-p2 lineHeight-tablet-22px pb-10">
            External stressors from traveling and exhaustion to menstrual products and use of intimacy devices can cause a shift in vaginal flora.
          </p>

          <h3 className="w-10/12 ivyPrestoThin text-tablet-h3 lineHeight-tablet-34px pb-4">
            After your period
          </h3>
          <p className="w-10/12 coreSans text-tablet-p2 lineHeight-tablet-22px pb-10">
            Menstrual blood is slightly alkaline with a pH of 7.4 and can raise the pH level of your vagina  when it sits against the vagina in a pad or tampon. Use Boquet's prebiotic at the end of your period to replenish the flora back to its acidic pH.
          </p>

          <h3 className="w-10/12 ivyPrestoThin text-tablet-h3 lineHeight-tablet-34px pb-4">
            Before and after sex
          </h3>
          <p className="w-10/12 coreSans text-tablet-p2 lineHeight-tablet-22px pb-10">
          Semen is slightly alkaline with a pH of 7.2-8. Having unprotected sex can increase the chances of pathogenic bacterial growth. Use Boquet's vaginal prebiotic before sex to increase vaginal comfort and confidence but take into factor that there will be a residue of the tablet that you may wish to wipe away. Boquet's vaginal prebiotics can also be used after sex to restore the flora from the effects of semen or physical wear and tear.
          </p>
          <img className="pb-10" alt="when should i use boquet image" onLoad={ScrollTrigger.refresh} src="/images/when-should-i-use-boquet-tablet.png"/>
        </div>

      </div>


      {/* DIRECTIONS ON HOW TO USE SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-center text-center">
          <h1 className="ivyPrestoThin text-tablet-h1 lineHeight-tablet-59px pb-4">
            Directions on <em>how to use</em>
          </h1>
          <div className="pb-8 vbn m flex justify-center">
            <p className="coreSans text-tablet-p1 lineHeight-tablet-25px w-8/12">
            Use clean fingers or an applicator to insert 1 vaginal tablet gently into the vagina as far up as you are comfortable.
            </p>
          </div>
          <p className="coreSans text-tablet-p3 lineHeight-tablet-20px">
            *DO NOT TAKE ORALLY
            <br/>
            *Laying flat on your back is recommended.
            <br/>
            *You may wish to wear a panty liner in case there is slight leakage.
          </p>
        </div>

        {/* PILL DROPPING ANIMATION SECTION */}

        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', height: '30rem'}} className="flex flex-col items-center justify-between">
          <div className="droppingPillAnimationContainer-tablet">
            <img alt="pill animation" className="h-24 w-24" src='/images/thepill-animation.png' />
          </div>
          <div className="droppingIntoContainer-tablet">
            <img alt="vagina target" className="h-24 w-24" src='/images/thepill-dropin-animation.png' />
          </div>
        </div>


        {/* RESTORE PICS MAINTAIN SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content pb-16">
          <div className="w-full flex justify-center pb-16">
            <img className="w-1/2" alt="maintain logo" src='/images/restoreandmaintain-tablet.png' />
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
                Use 1 Boquet tablet vaginally once a day at bedtime for 7 days or until symptoms improve.
              </p>
            </div>



            <div className="w-1/2 flex flex-col justify-center text-left">
              <h2 className="text-tablet-h2 lineHeight-tablet-43px ivyPrestoThin">
                To Maintain:
              </h2>
  
              <p className="coreSans text-tablet-p1 lineHeight-tablet-25px pb-4">
                Restore your vaginal flora when displaying symptoms of pH imbalance.
              </p>

              <p className="coreSans text-tablet-p1 lineHeight-tablet-25px">
                Use 1 Boquet tablet vaginally once a day at bedtime for 7 days or until symptoms improve.
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

        {/* FAQ SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-center">
          <div className="py-16 w-full">
                  <AccordianItem answer={<>
                  Boquet vaginal prebiotic tablets help deodorize, improve dryness, and relieve irritation by promoting the growth of the beneficial, protective bacteria in our vaginal flora. 
                  <br/> <br/> 
                  Boquet's vaginal prebiotic contains lactose. A prebiotic is a nutrient that stimulates the growth of beneficial microorganisms. Lactose stimulates the growth of the beneficial bacteria, lactobacilli in our vaginal flora.
                  </>}>
                      <h3 className="text-tablet-h3 lineHeight-tablet-43px">What is <em>Boquet's vaginal prebiotic?</em></h3>
                  </AccordianItem>

                  <div className="pt-8">
                      <AccordianItem  answer="The term “vaginal flora” is used to describe the microorganisms or bacteria that colonize the vaginal lining, it is also referred to as “vaginal microbiome.” A healthy vaginal flora is dominated by various lactobacillus species which maintain a low pH, creating a protective barrier that prevents the growth of other microorganisms.">
                          <h3 className="text-tablet-h3 lineHeight-tablet-43px">What is a <em>vaginal flora</em> and what does it do?</h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem  answer="Signals your pH may be off include changes in odor, itching, discharge, and possible burning when you urinate. If you're experiencing them consistently, we strongly recommend seeing and consulting with a healthcare provider.">
                          <h3 className="text-tablet-h3 lineHeight-tablet-43px">What happens when your <em>vaginal pH balance</em> is off?</h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem  answer={<>
                        Boquet vaginal prebiotics deodorizes by preventing the growth and adhesion of odor causing bacteria (gardnerella vaginalis) to the vaginal epithelium.
                        <br/><br/>
                        An overgrowth of pathogens produces enzymes that break down peptides to amines which have a fishy odor. Boquet's primary ingredient, lactose, promotes the growth of healthy bacteria (lactobacillus) which displaces the pathogenic organisms hence reducing their adhesion.
                      </>}>
                          <h3 className="text-tablet-h3 lineHeight-tablet-43px">How does Boquet <em>help deodorize?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem  answer={<>
                        Lactobacilli is natural and indigenous to the vaginal flora and has a high affinity to vaginal cell receptors.. It derives energy from fermenting lactose to lactic acid and produces hydrogen peroxide which is not tolerated by many organisms.
                        <br/><br/>
                        Because Lactobacillus produces lactic acid, a healthy vagina has a low pH of 3.8-4.5. High pH is one of the factors that contribute to growth of the most common pathogenic bacterial offenders. When lactobacillus makes up the majority of the vaginal flora, it prevents the overgrowth of vaginal pathogenic organisms.
                      </>}>
                          <h3 className="text-tablet-h3 lineHeight-tablet-43px">How is <em>Lactobacilli protective?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem  answer={<>
                        Vaginal pH can increase around menstruation due to hormone fluctuations and sometimes during intercourse. The causes are not due to poor hygiene and it is not a sexually transmitted infection. Some risk factors include scented soaps, douching, stress and smoking.
                        <br/><br/>
                        The most common form of vaginal imbalance shows up as bacterial vaginosis. 1 in 3 individuals with vaginas in the U.S. between the age of 14 to 49 will experience imbalances in their flora that lead to bacterial vaginosis.
                      </>}>
                          <h3 className="text-tablet-h3 lineHeight-tablet-43px">How common are <em>vaginal imbalances?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem  answer={<>
                        Yes. Lactose is a naturally occurring carbohydrate in milk and a commonly used inactive ingredient in many oral tablets and capsules. The only reported side effect is a slight discharge of the tablet residue. Do not use Boquet's vaginal prebiotics if you have an allergy to milk.
                        <br/><br/>
                        Boquet vaginal prebiotics can be safely used in people with dietary lactose intolerance as it is not ingested orally and does not get digested. Lactose is a component of many FDA approved medications and widely used vaginal hygiene products.
                      </>}>
                          <h3 className="text-tablet-h3 lineHeight-tablet-43px">Are Boquet prebiotics <em>safe?</em></h3>
                      </AccordianItem>
                  </div>

                  <div className="pt-8">
                      <AccordianItem  answer="Yes. {Elaborate}">
                          <h3 className="text-tablet-h3 lineHeight-tablet-43px">Can I use Boquet <em>while pregnant?</em></h3>
                      </AccordianItem>
                  </div>
          </div>
        </div>
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
