import ImageTagSection from '@/components/ImageTagSection';
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import Link from 'next/link'

function OurStoryPage() {
  return (
    <>  
        {/* FOR YOUR FLORA BELOW IMAGE SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91'}} className="h-fit-content flex flex-col justify-center px-8 pb-16 pt-32">
            <h1 className="ivyPrestoThin text-8xl w-9/12 pb-16">
                For your <em>flora below.</em>
            </h1>
            <div className="flex justify-start">
                <img className="pr-8" style={{height: '22rem'}} alt="pills against black backdrop banner image" src="/images/for-your-flora-below.png" />
                <img style={{height: '22rem'}} alt="nhain portrait" src="/images/nhain.png" />
            </div>
        </div>

        {/* TEXT BLOCK - As you use Boquet, we hope you remember how deserving you are. */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91'}} className="h-fit-content flex justify-end px-8 pb-16"> 
            <div className="h-fit-content w-7/12">
                <h2 className="ivyPrestoThin text-4xl w-8/12 pb-8">
                As you use Boquet, <em>we hope you remember how deserving you are.</em>
                </h2>
                <p className="coreSans text-xl pb-4">
                You're deserving of joy, care, peace, beauty, support, whatever it is that you often let slip away amidst life's responsibilities and distractions.
                </p>
                <p className="coreSans text-xl pb-8">
                Whether we are busy with work, dating, studying, partying, traveling, or raising children, it is easy to miss the signs that our bodies may be stressed. The hope that we take more moments to care for and celebrate ourselves is what led to the creation of Boquet. The symbol of the vagina being both resilient yet delicate makes me not only proud to have one but excited to be on this journey with you. 
                </p>
                <p className="coreSans text-xl">
                — ESTHER NHAIN LEE
                </p>
                <p className="ivyPrestoThin text-xl">
                <em>Pharmacist by trade, Lover of cats, Founder of Boquet</em>
                </p>
            </div>
        </div>

        {/* WE BELIEVE THAT OUR VAGINAS DESERVE TO BE CELEBRATED IMAGE SECTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91'}} className="h-fit-content flex flex-col justify-center px-8 py-16">
            <h1 className="ivyPrestoThin text-8xl w-9/12 pb-16">
                We believe that our vaginas <em>deserve to be celebrated.</em>
            </h1>
            <img alt="we believe that our vaginas deserve to be celebrated banner image" src="/images/we-believe-vaginas-celebrated.png" />
        </div>

        {/* TEXT BLOCK - AT BOQUET, WE BELIEVE THAT ALL VAGINAS NEED BETTER CARE AND ATTENTION */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91'}} className="h-fit-content flex justify-end px-8 pb-16"> 
            <div className="h-fit-content w-7/12">
                <h2 className="ivyPrestoThin text-4xl w-8/12 pb-8">
                At Boquet, <em>we believe that all vaginas need better care and attention.</em>
                </h2>
                <p className="coreSans text-xl pb-4">
                We know firsthand that caring for our vagina is not a topic that is talked about enough. Double standards, shame, embarrassment — something always tries to stop us.
                </p>
                <p className="coreSans text-xl pb-4">
                But whether it's a sexual experience that didn't feel quite right or your body showing signs of an infection you feel embarrased by, trust that someone else has gone through it before and be reassured.
                </p>
                <p className="coreSans text-xl pb-4">
                Here's the thing: Not talking about anything only holds us back and taking the steps to talk about our experiences is the solution. Learning how to care for our vaginas is an empowering form of preventative care.
                </p>
                <p className="coreSans text-xl pb-4">
                Through Boquet, we hope to finally notice our vaginas and open up real conversations. In the moments when things feel a little off down there or you want to support your vaginal flora, remember: Our vagina's deserve to be celebrated for all the work it's done and will continue to do.
                </p>
            </div>
        </div>

        {/* OUR VAGINAS DESERVE TO BE CELEBRATED */}
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91'}} className="h-fit-content flex flex-col justify-center px-8 pb-16">
            <h1 className="ivyPrestoThin text-6xl w-2/3 pb-16">
            Our vagina's <em>deserve to be celebrated</em> for all the work it's done <em>and will continue to do.</em>
            </h1>
            <Link
                href="/shop"
                passHref
            >
                <a style={{borderColor: '#283F91'}} className="relative coreSans border border-black flex justify-center rounded-full" aria-label="shop">
                    <h1 className="text-xl h-24 flex flex-col justify-center">SHOP BOQUET</h1>
                </a>
            </Link>
        </div>
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
        <ImageTagSection backgroundImage="/images/image-tag-section/our-story-image-tag-section.png" />
      </Layout>
    )
  }

export default OurStoryPage;
