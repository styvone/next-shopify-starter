import AccordianItem from '@/components/AccordianItem';
import ImageTagSection from '@/components/ImageTagSection';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import GentleAndRestorative from '@/components/GentleAndRestorative';
import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function LearnPage() {

  useEffect(() => {
    const droppingPillAnimationContainer = gsap.to('.droppingPillAnimationContainer', {
      scrollTrigger: {
        trigger: '.droppingPillAnimationContainer',
        toggleActions: 'play reverse play reverse',
        start: 'top top',
        end: 'top top',
        endTrigger: '.droppingIntoContainer',
        pin: true,
      },
    });

    return () => {
      droppingPillAnimationContainer.scrollTrigger.kill();
    }
  }, []);

  return (
    <>

      {/* VAGINAL HEALTH 101 WITH BOQUET */}
      <div style={{backgroundColor: '#283F91', color: '#EBE5DB', paddingLeft: '50px', paddingRight: '50px'}} className=" h-fit-content flex flex-col justify-start pb-16">
        <h2 className="ivyPrestoThin text-desktop-oneOff-md lineHeight-desktop-122 pt-32 pb-8">
          <em>Vaginal health</em> 101 with Boquet
        </h2>
        <p className="coreSans text-desktop-p1 w-1/2 pb-16">
        Everything you need to know about using Boquet, the ins and outs of your vaginal flora, and restoring your good protective bacteria.
        </p>
        <img alt="vaginal health 101 banner image" onLoad={ScrollTrigger.refresh} src="/images/vaginal-health-101-with-boquet.png" />
      </div>


      {/* WHEN SHOULD I USE BOQUET? SECTION */}
      <div style={{backgroundColor: "#EBE5DB", color: '#283F91', height: '78rem', paddingLeft: '50px', paddingRight: '50px'}} className="flex justify-center py-8">

        <div className="w-1/2">
          <h1 className="ivyPrestoThin text-desktop-h1 lineHeight-desktop-123">
            When should I use Boquet?
          </h1>
          <p className="coreSans text-desktop-p1 py-8">
            While Boquet is safe for daily usage, we especially recommend our vaginal prebiotic tablets for the following scenarios you may encounter:
          </p>
          <img className="pt-8" alt="when should i use boquet image" onLoad={ScrollTrigger.refresh} src="/images/when-should-i-use-boquet.png"/>
        </div>

        <div className="w-1/2 pl-36">
          <h3 style={{paddingTop: '15.5rem'}} className="ivyPrestoThin text-desktop-h3 lineHeight-desktop-122 pb-8">
            Preparing for pH changes
          </h3>
          <p className="coreSans text-desktop-p2">
            Fluctuating hormones before your menstrual cycle can affect the pH balance of the vaginal flora resulting in symptoms like changes in odor, itchiness and irritation.
          </p>

          <h3 className="ivyPrestoThin text-desktop-h3 lineHeight-desktop-122 pb-8 pt-16">
            Relieving vaginal irritation
          </h3>
          <p className="coreSans text-desktop-p2">
            External stressors from traveling and exhaustion to menstrual products and use of intimacy devices can cause a shift in vaginal flora.
          </p>

          <h3 className="ivyPrestoThin text-desktop-h3 lineHeight-desktop-122 pb-8 pt-16">
            After your period
          </h3>
          <p className="coreSans text-desktop-p2">
            Menstrual blood is slightly alkaline with a pH of 7.4 and can raise the pH level of your vagina  when it sits against the vagina in a pad or tampon. Use Boquet's prebiotic at the end of your period to replenish the flora back to its acidic pH.
          </p>

          <h3 className="ivyPrestoThin text-desktop-h3 lineHeight-desktop-122 pb-8 pt-16">
            Before and after sex
          </h3>
          <p className="coreSans text-desktop-p2">
          Semen is slightly alkaline with a pH of 7.2-8. Having unprotected sex can increase the chances of pathogenic bacterial growth. Use Boquet's vaginal prebiotic before sex to increase vaginal comfort and confidence but take into factor that there will be a residue of the tablet that you may wish to wipe away. Boquet's vaginal prebiotics can also be used after sex to restore the flora from the effects of semen or physical wear and tear.
          </p>
        </div>

      </div>


      {/* DIRECTIONS ON HOW TO USE SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex flex-col justify-center text-center">
          <h2 className="ivyPrestoThin text-desktop-oneOff-lg lineHeight-desktop-123">
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
          <div className="droppingPillAnimationContainer">
            <img alt="pill animation" className="h-56 w-56" src='/images/thepill-animation.png' />
          </div>
          <div className="droppingIntoContainer">
            <img alt="vagina target" className="h-56 w-56" src='/images/thepill-dropin-animation.png' />
          </div>
        </div>


        {/* RESTORE PICS MAINTAIN SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex justify-center pb-16">
          <div className="w-1/3 flex flex-col justify-center text-center pr-16" >
            <h2 className="text-desktop-h2 lineHeight-desktop-122 ivyPrestoThin">
              To Restore:
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
              <img alt="maintain logo" src='/images/restoreandmaintain.png' />
          </div>

          <div className="w-1/3 flex flex-col justify-center text-center pl-16">
            <h2 className="text-desktop-h2 lineHeight-desktop-122 ivyPrestoThin">
              To Maintain:
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

        <GentleAndRestorative />

        {/* FAQ SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex flex-col justify-center">
          <div className="py-16 w-full">
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
        <ImageTagSection backgroundImage="/images/image-tag-section/learn-image-tag-section.png" />
      </Layout>
    )
  }

export default LearnPage;
