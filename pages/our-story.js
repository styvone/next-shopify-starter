import ImageTagSection from '@/components/ImageTagSection';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import Link from 'next/link';

function DesktopVersion() {
    return (
    <div className="responsive-desktop">
        {/* FOR YOUR FLORA BELOW IMAGE SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex flex-col justify-center pb-20 pt-20">
            <h2 className="ivyPrestoThin text-desktop-oneOff-md lineHeight-desktop-123 w-9/12 pb-12">
                For your <em>flora below.</em>
            </h2>
            <div className="flex justify-start">
                <img className="pr-8" style={{height: '22rem'}} alt="pills against black backdrop banner image" src="/images/for-your-flora-below.png" />
                <img style={{height: '22rem'}} alt="nhain portrait" src="/images/nhain.png" />
            </div>
        </div>

        {/* TEXT BLOCK - As you use Boquet, we hope you remember how deserving you are. */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex justify-end pb-20"> 
            <div className="h-fit-content w-7/12">
                <h2 className="ivyPrestoThin text-desktop-h2 lineHeight-desktop-122 w-9/12 pb-12">
                As you use Boquet, <em>we hope you remember how deserving you are.</em>
                </h2>
                <p className="coreSans text-desktop-p1 pb-4">
                You're deserving of joy, care, peace, beauty, support, whatever it is that you often let slip away amidst life's responsibilities and distractions.
                </p>
                <p className="coreSans text-desktop-p1 pb-14">
                Whether we are busy with work, dating, studying, partying, traveling, or raising children, it is easy to miss the signs that our bodies may be stressed. The hope that we take more moments to care for and celebrate ourselves is what led to the creation of Boquet. The symbol of the vagina being both resilient yet delicate makes me not only proud to have one but excited to be on this journey with you. 
                </p>
                <p className="coreSans text-desktop-p1">
                — ESTHER NHAIN LEE
                </p>
                <p className="ivyPrestoThin text-desktop-p1">
                <em>Pharmacist by trade, Lover of cats, Founder of Boquet</em>
                </p>
            </div>
        </div>

        {/* WE BELIEVE THAT OUR VAGINAS DESERVE TO BE CELEBRATED IMAGE SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex flex-col justify-center pt-16 pb-24">
            <h2 className="ivyPrestoThin text-desktop-oneOff-md lineHeight-desktop-111 w-10/12 pb-24">
                We believe that our vaginas <em>deserve to be celebrated.</em>
            </h2>
            <img alt="we believe that our vaginas deserve to be celebrated banner image" src="/images/we-believe-vaginas-celebrated.png" />
        </div>

        {/* TEXT BLOCK - AT BOQUET, WE BELIEVE THAT ALL VAGINAS NEED BETTER CARE AND ATTENTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex justify-end pb-20"> 
            <div className="h-fit-content w-7/12">
                <h2 className="ivyPrestoThin text-desktop-h2 lineHeight-desktop-122 w-10/12 pb-12">
                At Boquet, <em>we believe that all vaginas need better care and attention.</em>
                </h2>
                <p className="coreSans text-desktop-p1 pb-4">
                We know firsthand that caring for our vagina is not a topic that is talked about enough. Double standards, shame, embarrassment — something always tries to stop us.
                </p>
                <p className="coreSans text-desktop-p1 pb-4">
                But whether it's a sexual experience that didn't feel quite right or your body showing signs of an infection you feel embarrased by, trust that someone else has gone through it before and be reassured.
                </p>
                <p className="coreSans text-desktop-p1 pb-4">
                Here's the thing: Not talking about anything only holds us back and taking the steps to talk about our experiences is the solution. Learning how to care for our vaginas is an empowering form of preventative care.
                </p>
                <p className="coreSans text-desktop-p1 pb-4">
                Through Boquet, we hope to finally notice our vaginas and open up real conversations. In the moments when things feel a little off down there or you want to support your vaginal flora, remember: Our vagina's deserve to be celebrated for all the work it's done and will continue to do.
                </p>
            </div>
        </div>

        {/* OUR VAGINAS DESERVE TO BE CELEBRATED */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex flex-col justify-center pb-24">
            <h1 className="ivyPrestoThin text-desktop-h1 lineHeight-desktop-123 w-2/3 pb-16">
            Our vagina's <em>deserve to be celebrated</em> for all the work it's done <em>and will continue to do.</em>
            </h1>
            <Link
                href="/shop"
                passHref
            >
                <a style={{borderColor: '#283F91'}} className="relative coreSans border border-black flex justify-center rounded-full" aria-label="shop">
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
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-center pb-8 pt-8">
            <h1 className="ivyPrestoThin text-mobile-h1 lineHeight-mobile-43px w-9/12 pb-8">
                For your <em>flora below.</em>
            </h1>
            <div className="flex justify-between">
                <div className="flex flex-col justify-start w-1/2">
                    <img style={{paddingRight: '16px'}} alt="pills against black backdrop banner image" src="/images/for-your-flora-below.png" />
                </div>
                <img className="w-1/2" alt="nhain portrait" src="/images/nhain.png" />
            </div>
        </div>

        {/* TEXT BLOCK - As you use Boquet, we hope you remember how deserving you are. */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex justify-end pb-8"> 
            <div className="h-fit-content w-full">
                <h2 className="ivyPrestoThin text-mobile-h2 lineHeight-mobile-39px w-full pb-8">
                As you use Boquet, <em>we hope you remember how deserving you are.</em>
                </h2>
                <p className="coreSans text-mobile-p1 lineHeight-mobile-22px pb-4">
                You're deserving of joy, care, peace, beauty, support, whatever it is that you often let slip away amidst life's responsibilities and distractions.
                </p>
                <p className="coreSans text-mobile-p1 lineHeight-mobile-22px pb-8">
                Whether we are busy with work, dating, studying, partying, traveling, or raising children, it is easy to miss the signs that our bodies may be stressed. The hope that we take more moments to care for and celebrate ourselves is what led to the creation of Boquet. The symbol of the vagina being both resilient yet delicate makes me not only proud to have one but excited to be on this journey with you. 
                </p>
                <p className="coreSans text-mobile-p1 lineHeight-mobile-22px">
                — ESTHER NHAIN LEE
                </p>
                <p className="ivyPrestoThin text-mobile-p1 lineHeight-mobile-22px">
                <em>Pharmacist by trade, Lover of cats, Founder of Boquet</em>
                </p>
            </div>
        </div>

        {/* WE BELIEVE THAT OUR VAGINAS DESERVE TO BE CELEBRATED IMAGE SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-center py-8">
            <h1 className="ivyPrestoThin text-mobile-h1 lineHeight-mobile-49px w-full pb-8">
                We believe that our vaginas <em>deserve to be celebrated.</em>
            </h1>
            <img alt="we believe that our vaginas deserve to be celebrated banner image" src="/images/we-believe-vaginas-celebrated.png" />
        </div>

        {/* TEXT BLOCK - AT BOQUET, WE BELIEVE THAT ALL VAGINAS NEED BETTER CARE AND ATTENTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex justify-end pb-8"> 
            <div className="h-fit-content w-full">
                <h2 className="ivyPrestoThin text-mobile-h2 lineHeight-mobile-39px w-full pb-8">
                At Boquet, <em>we believe that all vaginas need better care and attention.</em>
                </h2>
                <p className="coreSans text-mobile-p1 lineHeight-mobile-22px pb-4">
                We know firsthand that caring for our vagina is not a topic that is talked about enough. Double standards, shame, embarrassment — something always tries to stop us.
                </p>
                <p className="coreSans text-mobile-p1 lineHeight-mobile-22px pb-4">
                But whether it's a sexual experience that didn't feel quite right or your body showing signs of an infection you feel embarrased by, trust that someone else has gone through it before and be reassured.
                </p>
                <p className="coreSans text-mobile-p1 lineHeight-mobile-22px pb-4">
                Here's the thing: Not talking about anything only holds us back and taking the steps to talk about our experiences is the solution. Learning how to care for our vaginas is an empowering form of preventative care.
                </p>
                <p className="coreSans text-mobile-p1 lineHeight-mobile-22px pb-4">
                Through Boquet, we hope to finally notice our vaginas and open up real conversations. In the moments when things feel a little off down there or you want to support your vaginal flora, remember: Our vagina's deserve to be celebrated for all the work it's done and will continue to do.
                </p>
            </div>
        </div>

        {/* OUR VAGINAS DESERVE TO BE CELEBRATED */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-center pb-8">
            <h2 className="ivyPrestoThin text-mobile-h2 lineHeight-mobile-39px w-full pb-8">
            Our vagina's <em>deserve to be celebrated</em> for all the work it's done <em>and will continue to do.</em>
            </h2>
            <Link
                href="/shop"
                passHref
            >
                <a style={{borderColor: '#283F91'}} className="relative coreSans border border-black flex justify-center rounded-full" aria-label="shop">
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
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-center pb-10 pt-12">
            <h1 className="ivyPrestoThin text-tablet-h1 lineHeight-tablet-59px w-9/12 pb-8">
                For your <em>flora below.</em>
            </h1>
            <div className="flex justify-between">

                <img style={{height: '273px'}} alt="pills against black backdrop banner image" src="/images/for-your-flora-below.png" />

                <img style={{height: '273px'}} alt="nhain portrait" src="/images/nhain.png" />
            </div>
        </div>

        {/* TEXT BLOCK - As you use Boquet, we hope you remember how deserving you are. */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex justify-start pb-10"> 
            <div className="h-fit-content w-10/12">
                <h2 className="ivyPrestoThin text-tablet-h2 lineHeight-tablet-44px w-full pb-8">
                As you use Boquet, <em>we hope you remember how deserving you are.</em>
                </h2>
                <p className="coreSans text-tablet-p1 lineHeight-tablet-25px pb-4">
                You're deserving of joy, care, peace, beauty, support, whatever it is that you often let slip away amidst life's responsibilities and distractions.
                </p>
                <p className="coreSans text-tablet-p1 lineHeight-tablet-25px pb-8">
                Whether we are busy with work, dating, studying, partying, traveling, or raising children, it is easy to miss the signs that our bodies may be stressed. The hope that we take more moments to care for and celebrate ourselves is what led to the creation of Boquet. The symbol of the vagina being both resilient yet delicate makes me not only proud to have one but excited to be on this journey with you. 
                </p>
                <p className="coreSans text-tablet-p1 lineHeight-tablet-25px">
                — ESTHER NHAIN LEE
                </p>
                <p className="ivyPrestoThin text-tablet-p1 lineHeight-tablet-25px">
                <em>Pharmacist by trade, Lover of cats, Founder of Boquet</em>
                </p>
            </div>
        </div>

        {/* WE BELIEVE THAT OUR VAGINAS DESERVE TO BE CELEBRATED IMAGE SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-center py-10">
            <h1 className="ivyPrestoThin text-tablet-h1 lineHeight-tablet-59px w-10/12 pb-8">
                We believe that our vaginas <em>deserve to be celebrated.</em>
            </h1>
            <img alt="we believe that our vaginas deserve to be celebrated banner image" src="/images/we-believe-vaginas-celebrated.png" />
        </div>

        {/* TEXT BLOCK - AT BOQUET, WE BELIEVE THAT ALL VAGINAS NEED BETTER CARE AND ATTENTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex justify-start pb-10"> 
            <div className="h-fit-content w-10/12">
                <h2 className="ivyPrestoThin text-tablet-h2 lineHeight-tablet-44px w-full pb-8">
                At Boquet, <em>we believe that all vaginas need better care and attention.</em>
                </h2>
                <p className="coreSans text-tablet-p1 lineHeight-tablet-25px pb-4">
                We know firsthand that caring for our vagina is not a topic that is talked about enough. Double standards, shame, embarrassment — something always tries to stop us.
                </p>
                <p className="coreSans text-tablet-p1 lineHeight-tablet-25px pb-4">
                But whether it's a sexual experience that didn't feel quite right or your body showing signs of an infection you feel embarrased by, trust that someone else has gone through it before and be reassured.
                </p>
                <p className="coreSans text-tablet-p1 lineHeight-tablet-25px pb-4">
                Here's the thing: Not talking about anything only holds us back and taking the steps to talk about our experiences is the solution. Learning how to care for our vaginas is an empowering form of preventative care.
                </p>
                <p className="coreSans text-tablet-p1 lineHeight-tablet-25px pb-4">
                Through Boquet, we hope to finally notice our vaginas and open up real conversations. In the moments when things feel a little off down there or you want to support your vaginal flora, remember: Our vagina's deserve to be celebrated for all the work it's done and will continue to do.
                </p>
            </div>
        </div>

        {/* OUR VAGINAS DESERVE TO BE CELEBRATED */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-center pb-12">
            <h1 className="ivyPrestoThin text-tablet-h1 lineHeight-tablet-59px w-10/12 pb-10">
            Our vagina's <em>deserve to be celebrated</em> for all the work it's done <em>and will continue to do.</em>
            </h1>
            <Link
                href="/shop"
                passHref
            >
                <a style={{borderColor: '#283F91'}} className="relative coreSans border border-black flex justify-center rounded-full" aria-label="shop">
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
      <Layout logoGray={false} backgroundColor={'#EBE5DB'}>
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
