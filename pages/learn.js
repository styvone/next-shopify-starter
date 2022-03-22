import AccordianItem from '@/components/AccordianItem';
import ImageTagSection from '@/components/ImageTagSection';
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import Link from 'next/link'
import GentleAndRestorative from '@/components/GentleAndRestorative';

function LearnPage() {
  return (
    <>
        <GentleAndRestorative />
        <div style={{backgroundColor: "#EBE5DB", color: '#283F91'}} className="h-96 flex flex-col justify-start px-8">
            
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
