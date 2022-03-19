import AccordianItem from '@/components/AccordianItem';
import ImageTagSection from '@/components/ImageTagSection';
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import Link from 'next/link'

function FAQPage() {

  return (
    <div style={{backgroundColor: "#EBE5DB", color: '#283F91'}} className="h-fit-content flex flex-col justify-start px-8">
        <div className="pb-16 flex justify-evenly h-fit-content pt-32">
            <div className="ivyPrestoThin text-5xl w-1/3">
                <h1>
                    FAQ
                </h1>
            </div>
            <div className="w-2/3">
                <AccordianItem answer="Boquet offers prebiotic vaginal tablets that promote the growth of the vaginal flora's protective good bacteria, lactobacillus. Founded in New York City by licensed pharmacist Esther Nhain Lee.">
                    <h1>What is Boquet?</h1>
                </AccordianItem>

                <div className="pt-8">
                    <AccordianItem  answer={<h3>You can find all the information and detailed explanations regarding direct usage of Boquet's Vaginal Prebiotic on our&nbsp;
                    <Link
                        href="/learn"
                        passHref
                    >
                        <a className="inline-block underline" aria-label="learn">
                        Learn: Vaginal 101 page
                        </a>
                    </Link>.</h3>}>
                        <h1>When and how should I use Boquet?</h1>
                    </AccordianItem>
                </div>

            </div>
        </div>

        <div className="py-16 flex justify-evenly h-fit-content">
            <div className="ivyPrestoThin text-5xl w-1/3">
                <h1>
                    Shipping
                </h1>
            </div>
            <div className="w-2/3">
                <AccordianItem answer="We offer free shipping on all US orders of $60 or more (excluding taxes). For orders under $60, standard shipping costs $5.90.">
                    <h1>Do you offer <em>free shipping?</em></h1>
                </AccordianItem>

                <div className="pt-8">
                    <AccordianItem  answer="Unfortunately, we do not ship internationally at this time.">
                        <h1>Do you <em>ship internationally?</em></h1>
                    </AccordianItem>
                </div>

                <div className="pt-8">
                    <AccordianItem  answer="Once processed, parcels are shipped from New York by the United States Postal Service, UPS, or Fedex. It typically takes 3-9 business days to arrive. With the possible exception of shipments during special holidays, our orders are typically processed within 1-2 business days from when the order was placed.">
                        <h1><em>Where will my order ship from</em> and <em>how long will it take</em> to arrive?</h1>
                    </AccordianItem>
                </div>

            </div>
        </div>

        <div className="py-16 flex justify-evenly h-fit-content">
            <div className="ivyPrestoThin text-5xl w-1/3">
                <h1>
                    Payments + Returns
                </h1>
            </div>
            <div className="w-2/3">
                <AccordianItem answer="Boquet accepts all major Credit Cards (Visa, Mastercard, American Express and Discover), Amazon Pay, Google Pay, Apple Pay, and PayPal.">
                    <h1>What <em>payment methods</em> do you accept?</h1>
                </AccordianItem>

                <div className="pt-8">
                    <AccordianItem  answer="We accept return products within 30  days of receipt. Please contact us at [insert email] with your order number to start the return process.">
                        <h1>What is Boquet's <em>return policy?</em></h1>
                    </AccordianItem>
                </div>

            </div>
        </div>

        <div className="pt-16 flex justify-evenly h-fit-content pb-32">
            <div className="ivyPrestoThin text-5xl w-1/3">
                <h1>
                    Contact + Press
                </h1>
            </div>
            <div className="w-2/3">
                <AccordianItem answer={<>If you have any questions or concerns, please feel free to reach out to us at [insert email]. We will get back to you as soon as possible. <br/> <br/> For press opportunities and inquiries, please send us an email at [insert email].</>}>
                    <h1>How else can I reach you?</h1>
                </AccordianItem>
            </div>
        </div>
    </div>
  )
}

FAQPage.getLayout = function getLayout(page) {
    return (
      <Layout logoGray={false} backgroundColor={'#EBE5DB'}>
        <SEO 
          title={process.env.siteTitle}
        />
        {page}
        <ImageTagSection backgroundImage="/images/image-tag-section/faq-image-tag-section.png" />
      </Layout>
    )
  }

export default FAQPage;
