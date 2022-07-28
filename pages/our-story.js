import ImageTagSection from '@/components/ImageTagSection';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import Link from 'next/link';
import Image from 'next/image';

import forYourFloraBelowImage from '../public/images/for-your-flora-below.png';
import nhainPortraitImage from '../public/images/nhain.png';
import weBelieveVaginasCelebratedImage from '../public/images/we-believe-vaginas-celebrated.png';

function DesktopVersion() {
    return (
    <div className="responsive-desktop">
        {/* FOR YOUR FLORA BELOW IMAGE SECTION */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex flex-col justify-center pb-20 pt-20">
            <h2 className="ivyPrestoThin text-desktop-oneOff-md lineHeight-desktop-123 w-9/12 pb-12">
                For your <em>flora below.</em>
            </h2>
            <div className="flex justify-start">
                <div style={{height: '352px', width: '541px'}} className="inline-block relative mr-8">
                    <Image alt="pills against black backdrop banner image" src={forYourFloraBelowImage} layout="fill" priority={true} quality={100} placeholder="blur" className='image-blur-duration' />
                </div>
                <div style={{height: '352px', width: '313px'}} className="inline-block relative">
                <Image alt="nhain portrait" src={nhainPortraitImage} layout="fill" priority={true} quality={100} placeholder="blur" className='image-blur-duration' />
                </div>
            </div>
        </div>

        {/* TEXT BLOCK - As you use Boquet, we hope you remember how deserving you are. */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex justify-end pb-20"> 
            <div className="h-fit-content w-7/12">
                <h2 className="ivyPrestoThin text-desktop-h2 lineHeight-desktop-122 w-9/12 pb-12">
                As you use Boquet, <em>we hope you remember how deserving you are.</em>
                </h2>
                <p className="coreSans text-desktop-p1 pb-4">
                You're deserving of joy, support, peace, beauty, rest, whatever it is that you often let slip away amidst life's responsibilities and distractions.
                </p>
                <p className="coreSans text-desktop-p1 pb-4">
                It was during a day when my energy was depleted from being unsure about my career and the person I was dating, the start of feeling irritation down there felt overwhelmingly frustrating. The feminine hygiene product I was using added more gloom to my day and was barely helping. Using my pharmacy background, I formulated a vaginal tablet with a natural prebiotic that supports the vaginal flora from shifting to a state of pH imbalance.
                </p>
                <p className="coreSans text-desktop-p1 pb-14">
                Whether we are busy with work, dating, studying, partying, traveling, or raising children, it is easy to miss the signs that our bodies may be stressed. The hope that we take more moments to care for and celebrate ourselves is what led to the creation of Boquet.
                </p>
                <p className="coreSans text-desktop-p1">
                — Esther Nhain Lee, PharmD, Rph.
                </p>
                <p className="ivyPrestoThin text-desktop-p1">
                <em>Pharmacist by trade, Lover of cats, Founder of Boquet</em>
                </p>
            </div>
        </div>

        {/* WE BELIEVE THAT OUR VAGINAS DESERVE TO BE CELEBRATED IMAGE SECTION */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex flex-col justify-center pt-16 pb-24">
            <h2 className="ivyPrestoThin text-desktop-oneOff-md lineHeight-desktop-111 w-10/12 pb-24">
                We believe that our vaginas <em>deserve to be celebrated.</em>
            </h2>
            <Image alt="we believe that our vaginas deserve to be celebrated banner image" src={weBelieveVaginasCelebratedImage} priority={true} quality={100} />
        </div>

        {/* TEXT BLOCK - AT BOQUET, WE BELIEVE THAT ALL VAGINAS NEED BETTER CARE AND ATTENTION */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex justify-end pb-20"> 
            <div className="h-fit-content w-7/12">
                <h2 className="ivyPrestoThin text-desktop-h2 lineHeight-desktop-122 w-10/12 pb-12">
                At Boquet, <em>we believe vaginas deserve better care and attention.</em>
                </h2>
                <p className="coreSans text-desktop-p1 pb-4">
                We know firsthand that caring for our vagina is not a topic that is talked about enough. Double standards, shame, embarrassment — something always tries to stop us.
                </p>
                <p className="coreSans text-desktop-p1 pb-4">
                Whether it's a sexual experience that didn't feel quite right or your body showing signs of an infection you feel embarrassed by, <em>you are never alone</em> in what you are going through. Finding safe connections in our vulnerabilities and learning how to care for ourselves is an empowering form of preventative care.
                </p>
                <p className="coreSans text-desktop-p1 pb-4">
                Although appropriate at times, it is not always about stripping away the bad (bacteria) but about nurturing the good. In the moments when you want to support your vaginal flora, remember: Our vagina's deserve to be celebrated for all the work it's done and will continue to do.
                </p>
            </div>
        </div>

        {/* OUR VAGINAS DESERVE TO BE CELEBRATED */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex flex-col justify-center pb-24">
            <h1 className="ivyPrestoThin text-desktop-h1 lineHeight-desktop-123 w-2/3 pb-16">
            Our vagina's <em>deserve to be celebrated</em> for all the work it's done <em>and will continue to do.</em>
            </h1>
            <Link
                href="/shop"
                passHref
            >
                <a style={{borderColor: '#283F91'}} className="longPillButtonGradientHoverAnimation relative coreSans border border-black flex justify-center rounded-full" aria-label="shop">
                    <p className="text-desktop-p2 h-24 flex flex-col justify-center">SHOP BOQUET</p>
                </a>
            </Link>
        </div>
    </div>
    );
}

function MobileVersion() {
    return (
    <div className="responsive-mobile">

        {/* FOR YOUR FLORA BELOW IMAGE SECTION */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-center pb-14 pt-12">
            <h1 className="ivyPrestoThin text-mobile-h1 lineHeight-mobile-43px w-full pb-8">
                For your <em>flora below.</em>
            </h1>
            <div className="flex justify-between">
                <div style={{paddingRight: '16px'}} className="flex flex-col justify-start w-1/2">
                    <Image alt="pills against black backdrop banner image" src={forYourFloraBelowImage} priority={true} quality={100} placeholder="blur" className='image-blur-duration' />
                </div>
                <div className="inline-block w-1/2">
                    <Image alt="nhain portrait" src={nhainPortraitImage} priority={true} quality={100} placeholder="blur" className='image-blur-duration' />
                </div>
            </div>
        </div>

        {/* TEXT BLOCK - As you use Boquet, we hope you remember how deserving you are. */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex justify-end pb-10"> 
            <div className="h-fit-content w-full">
                <h2 className="ivyPrestoThin text-mobile-h2 lineHeight-mobile-39px w-full pb-8">
                As you use Boquet, <em>we hope you remember how deserving you are.</em>
                </h2>
                <p className="coreSans text-mobile-p1 lineHeight-mobile-22px pb-4">
                You're deserving of joy, support, peace, beauty, rest, whatever it is that you often let slip away amidst life's responsibilities and distractions.
                </p>
                <p className="coreSans text-mobile-p1 lineHeight-mobile-22px pb-4">
                It was during a day when my energy was depleted from being unsure about my career and the person I was dating, the start of feeling irritation down there felt overwhelmingly frustrating. The feminine hygiene product I was using added more gloom to my day and was barely helping. Using my pharmacy background, I formulated a vaginal tablet with a natural prebiotic that supports the vaginal flora from shifting to a state of pH imbalance.
                </p>
                <p className="coreSans text-mobile-p1 lineHeight-mobile-22px pb-8">
                Whether we are busy with work, dating, studying, partying, traveling, or raising children, it is easy to miss the signs that our bodies may be stressed. The hope that we take more moments to care for and celebrate ourselves is what led to the creation of Boquet.
                </p>
                <p className="coreSans text-mobile-p1 lineHeight-mobile-22px">
                — Esther Nhain Lee, PharmD, Rph.
                </p>
                <p className="ivyPrestoThin text-mobile-p1 lineHeight-mobile-22px">
                <em>Pharmacist by trade, Lover of cats, Founder of Boquet</em>
                </p>
            </div>
        </div>

        {/* WE BELIEVE THAT OUR VAGINAS DESERVE TO BE CELEBRATED IMAGE SECTION */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-center pt-8 pb-10">
            <h1 className="ivyPrestoThin text-mobile-h1 lineHeight-mobile-49px w-full pb-10">
                We believe that our vaginas <em>deserve to be celebrated.</em>
            </h1>
            <Image alt="we believe that our vaginas deserve to be celebrated banner image" src={weBelieveVaginasCelebratedImage} priority={true} quality={100} />
        </div>

        {/* TEXT BLOCK - AT BOQUET, WE BELIEVE THAT ALL VAGINAS NEED BETTER CARE AND ATTENTION */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex justify-end pb-6"> 
            <div className="h-fit-content w-full">
                <h2 className="ivyPrestoThin text-mobile-h2 lineHeight-mobile-39px w-full pb-8">
                At Boquet, <em>we believe vaginas deserve better care and attention.</em>
                </h2>
                <p className="coreSans text-mobile-p1 lineHeight-mobile-22px pb-6">
                We know firsthand that caring for our vagina is not a topic that is talked about enough. Double standards, shame, embarrassment — something always tries to stop us.
                </p>
                <p className="coreSans text-mobile-p1 lineHeight-mobile-22px pb-6">
                Whether it's a sexual experience that didn't feel quite right or your body showing signs of an infection you feel embarrassed by, <em>you are never alone</em> in what you are going through. Finding safe connections in our vulnerabilities and learning how to care for ourselves is an empowering form of preventative care.
                </p>
                <p className="coreSans text-mobile-p1 lineHeight-mobile-22px pb-6">
                Although appropriate at times, it is not always about stripping away the bad (bacteria) but about nurturing the good. In the moments when you want to support your vaginal flora, remember: Our vagina's deserve to be celebrated for all the work it's done and will continue to do.
                </p>
            </div>
        </div>

        {/* OUR VAGINAS DESERVE TO BE CELEBRATED */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-center pb-16">
            <h2 className="ivyPrestoThin text-mobile-h2 lineHeight-mobile-39px w-full pb-10">
            Our vagina's <em>deserve to be celebrated</em> for all the work it's done <em>and will continue to do.</em>
            </h2>
            <Link
                href="/shop"
                passHref
            >
                <a style={{borderColor: '#283F91'}} className="longPillButtonGradientHoverAnimation relative coreSans border border-black flex justify-center rounded-full" aria-label="shop">
                    <p className="text-mobile-p2 h-12 flex flex-col justify-center">SHOP BOQUET</p>
                </a>
            </Link>
        </div>

    </div>
    );
}

function TabletVersion() {
    return (
    <div className="responsive-tablet">

        {/* FOR YOUR FLORA BELOW IMAGE SECTION */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-center pb-10 pt-12">
            <h1 className="ivyPrestoThin text-tablet-h1 lineHeight-tablet-59px w-9/12 pb-8">
                For your <em>flora below.</em>
            </h1>
            <div className="flex justify-between">

                {/* <img style={{height: '273px'}} alt="pills against black backdrop banner image" src="/images/for-your-flora-below.png" /> */}
                <div style={{width: '419.578px'}} className="inline-block">
                    <Image alt="pills against black backdrop banner image" src={forYourFloraBelowImage} priority={true} quality={100} placeholder="blur" className='image-blur-duration' />
                </div>
                {/* <img style={{height: '273px'}} alt="nhain portrait" src="/images/nhain.png" /> */}
                
                <div style={{width: '242.75px'}} className="inline-block">
                    <Image alt="nhain portrait" src={nhainPortraitImage} priority={true} quality={100} placeholder="blur" className='image-blur-duration' />
                </div>
            </div>
        </div>

        {/* TEXT BLOCK - As you use Boquet, we hope you remember how deserving you are. */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex justify-start pb-10"> 
            <div className="h-fit-content w-10/12">
                <h2 className="ivyPrestoThin text-tablet-h2 lineHeight-tablet-44px w-full pb-8">
                As you use Boquet, <em>we hope you remember how deserving you are.</em>
                </h2>
                <p className="coreSans text-tablet-p1 lineHeight-tablet-25px pb-4">
                You're deserving of joy, support, peace, beauty, rest, whatever it is that you often let slip away amidst life's responsibilities and distractions.
                </p>
                <p className="coreSans text-tablet-p1 lineHeight-tablet-25px pb-4">
                It was during a day when my energy was depleted from being unsure about my career and the person I was dating, the start of feeling irritation down there felt overwhelmingly frustrating. The feminine hygiene product I was using added more gloom to my day and was barely helping. Using my pharmacy background, I formulated a vaginal tablet with a natural prebiotic that supports the vaginal flora from shifting to a state of pH imbalance.
                </p>
                <p className="coreSans text-tablet-p1 lineHeight-tablet-25px pb-8">
                Whether we are busy with work, dating, studying, partying, traveling, or raising children, it is easy to miss the signs that our bodies may be stressed. The hope that we take more moments to care for and celebrate ourselves is what led to the creation of Boquet.
                </p>
                <p className="coreSans text-tablet-p1 lineHeight-tablet-25px">
                — Esther Nhain Lee, PharmD, Rph.
                </p>
                <p className="ivyPrestoThin text-tablet-p1 lineHeight-tablet-25px">
                <em>Pharmacist by trade, Lover of cats, Founder of Boquet</em>
                </p>
            </div>
        </div>

        {/* WE BELIEVE THAT OUR VAGINAS DESERVE TO BE CELEBRATED IMAGE SECTION */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-center py-10">
            <h1 className="ivyPrestoThin text-tablet-h1 lineHeight-tablet-59px w-10/12 pb-8">
                We believe that our vaginas <em>deserve to be celebrated.</em>
            </h1>
            <Image alt="we believe that our vaginas deserve to be celebrated banner image" src={weBelieveVaginasCelebratedImage} priority={true} quality={100} />
        </div>

        {/* TEXT BLOCK - AT BOQUET, WE BELIEVE THAT ALL VAGINAS NEED BETTER CARE AND ATTENTION */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex justify-start pb-10"> 
            <div className="h-fit-content w-10/12">
                <h2 className="ivyPrestoThin text-tablet-h2 lineHeight-tablet-44px w-full pb-8">
                At Boquet, <em>we believe vaginas deserve better care and attention.</em>
                </h2>
                <p className="coreSans text-tablet-p1 lineHeight-tablet-25px pb-4">
                We know firsthand that caring for our vagina is not a topic that is talked about enough. Double standards, shame, embarrassment — something always tries to stop us.
                </p>
                <p className="coreSans text-tablet-p1 lineHeight-tablet-25px pb-4">
                Whether it's a sexual experience that didn't feel quite right or your body showing signs of an infection you feel embarrassed by, you are never alone in what you are going through. Finding safe connections in our vulnerabilities and learning how to care for ourselves is an empowering form of preventative care.
                </p>
                <p className="coreSans text-tablet-p1 lineHeight-tablet-25px pb-4">
                Although appropriate at times, it is not always about stripping away the bad (bacteria) but about nurturing the good. In the moments when you want to support your vaginal flora, remember: Our vagina's deserve to be celebrated for all the work it's done and will continue to do.
                </p>
            </div>
        </div>

        {/* OUR VAGINAS DESERVE TO BE CELEBRATED */}
        <div style={{backgroundColor: "#F4F0E8", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-center pb-12">
            <h1 className="ivyPrestoThin text-tablet-h1 lineHeight-tablet-59px w-10/12 pb-10">
            Our vagina's <em>deserve to be celebrated</em> for all the work it's done <em>and will continue to do.</em>
            </h1>
            <Link
                href="/shop"
                passHref
            >
                <a style={{borderColor: '#283F91'}} className="longPillButtonGradientHoverAnimation relative coreSans border border-black flex justify-center rounded-full" aria-label="shop">
                    <p className="text-tablet-p2 lineHeight-tablet-22px h-20 flex flex-col justify-center">SHOP BOQUET</p>
                </a>
            </Link>
        </div>

    </div>
    );
}


function OurStoryPage() {
  return (
    <>  
        <DesktopVersion />
        <MobileVersion />
        <TabletVersion />
    </>
  )
}

OurStoryPage.getLayout = function getLayout(page) {
    return (
      <Layout logoGray={false} backgroundColor={'#F4F0E8'}>
        <SEO 
          title={process.env.siteTitle}
        />
        {page}
        <div className="responsive-desktop">
            <ImageTagSection backgroundImage="/images/image-tag-section/our-story-image-tag-section.png" />
        </div>
        <div className="responsive-mobile">
            <ImageTagSection backgroundImage="/images/image-tag-section/our-story-image-tag-section-mobile.png" />
        </div>
        <div className="responsive-tablet">
            <ImageTagSection backgroundImage="/images/image-tag-section/our-story-image-tag-section-tablet.png" />
        </div>
      </Layout>
    )
  }

export default OurStoryPage;
