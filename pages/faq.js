import AccordianItem from '@/components/AccordianItem';
import ImageTagSection from '@/components/ImageTagSection';
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import Link from 'next/link'

function FAQPage() {

  return (
    <>
        {/* DESKTOP */}
        <div className="responsive-desktop">
            <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '50px', paddingRight: '50px'}} className="h-fit-content flex flex-col justify-start">
                <div className="pb-16 flex justify-evenly h-fit-content pt-32">
                    <div className="ivyPrestoThin text-desktop-h2 lineHeight-desktop-123 w-1/3">
                        <h2>
                            FAQ
                        </h2>
                    </div>
                    <div className="w-2/3">
                        <AccordianItem answer="Boquet offers prebiotic vaginal tablets that promote the growth of the vaginal flora's protective good bacteria, lactobacillus. Founded in New York City by licensed pharmacist Esther Nhain Lee.">
                            <h3 className="text-desktop-h3 lineHeight-desktop-normal">What is Boquet?</h3>
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
                                <h3 className="text-desktop-h3 lineHeight-desktop-normal">When and how should I use Boquet?</h3>
                            </AccordianItem>
                        </div>

                    </div>
                </div>

                <div className="py-16 flex justify-evenly h-fit-content">
                    <div className="ivyPrestoThin text-desktop-h2 lineHeight-desktop-123 w-1/3">
                        <h2>
                            Shipping
                        </h2>
                    </div>
                    <div className="w-2/3">
                        <AccordianItem answer="We offer free shipping on all US orders of $60 or more (excluding taxes). For orders under $60, standard shipping costs $5.90.">
                            <h3 className="text-desktop-h3 lineHeight-desktop-normal">Do you offer <em>free shipping?</em></h3>
                        </AccordianItem>

                        <div className="pt-8">
                            <AccordianItem  answer="Unfortunately, we do not ship internationally at this time.">
                                <h3 className="text-desktop-h3 lineHeight-desktop-normal">Do you <em>ship internationally?</em></h3>
                            </AccordianItem>
                        </div>

                        <div className="pt-8">
                            <AccordianItem  answer="Once processed, parcels are shipped from New York by the United States Postal Service, UPS, or Fedex. It typically takes 3-9 business days to arrive. With the possible exception of shipments during special holidays, our orders are typically processed within 1-2 business days from when the order was placed.">
                                <h3 className="text-desktop-h3 lineHeight-desktop-normal"><em>Where will my order ship from</em> and <em>how long will it take</em> to arrive?</h3>
                            </AccordianItem>
                        </div>

                    </div>
                </div>

                <div className="py-16 flex justify-evenly h-fit-content">
                    <div className="ivyPrestoThin text-desktop-h2 lineHeight-desktop-123 w-1/3">
                        <h2>
                            Payments + Returns
                        </h2>
                    </div>
                    <div className="w-2/3">
                        <AccordianItem answer="Boquet accepts all major Credit Cards (Visa, Mastercard, American Express and Discover), Amazon Pay, Google Pay, Apple Pay, and PayPal.">
                            <h3 className="text-desktop-h3 lineHeight-desktop-normal">What <em>payment methods</em> do you accept?</h3>
                        </AccordianItem>

                        <div className="pt-8">
                            <AccordianItem  answer="We accept return products within 30  days of receipt. Please contact us at [insert email] with your order number to start the return process.">
                                <h3 className="text-desktop-h3 lineHeight-desktop-normal">What is Boquet's <em>return policy?</em></h3>
                            </AccordianItem>
                        </div>

                    </div>
                </div>

                <div className="pt-16 flex justify-evenly h-fit-content pb-32">
                    <div className="ivyPrestoThin text-desktop-h2 lineHeight-desktop-123 w-1/3">
                        <h2>
                            Contact + Press
                        </h2>
                    </div>
                    <div className="w-2/3">
                        <AccordianItem answer={<>If you have any questions or concerns, please feel free to reach out to us at [insert email]. We will get back to you as soon as possible. <br/> <br/> For press opportunities and inquiries, please send us an email at [insert email].</>}>
                            <h3 className="text-desktop-h3 lineHeight-desktop-normal">How else can I reach you?</h3>
                        </AccordianItem>
                    </div>
                </div>
            </div>
        </div>


        {/* MOBILE */}
        <div className="responsive-mobile">
            <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '16px', paddingRight: '16px'}} className="h-fit-content flex flex-col justify-start">
                
                <div className="pt-12 flex flex-col justify-evenly h-fit-content">
                    <div className="w-full pb-8">
                        <h1 className="ivyPrestoThin text-mobile-h1 lineHeight-mobile-43px">
                            FAQ
                        </h1>
                    </div>
                    <div className="w-full">
                        <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5}  answer="Boquet offers prebiotic vaginal tablets that promote the growth of the vaginal flora's protective good bacteria, lactobacillus. Founded in New York City by licensed pharmacist Esther Nhain Lee.">
                            <h3 className="text-mobile-h3 lineHeight-mobile-39px">What is Boquet?</h3>
                        </AccordianItem>

                        <div className="pt-6">
                            <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5} answer={<h3>You can find all the information and detailed explanations regarding direct usage of Boquet's Vaginal Prebiotic on our&nbsp;
                            <Link
                                href="/learn"
                                passHref
                            >
                                <a className="inline-block underline" aria-label="learn">
                                Learn: Vaginal 101 page
                                </a>
                            </Link>.</h3>}>
                                <h3 className="text-mobile-h3 lineHeight-mobile-39px">When and how should I use Boquet?</h3>
                            </AccordianItem>
                        </div>

                    </div>
                </div>

                <div className="py-16 flex flex-col justify-evenly h-fit-content">
                    <div className="w-full pb-8">
                        <h1 className="ivyPrestoThin text-mobile-h1 lineHeight-mobile-43px">
                            Shipping
                        </h1>
                    </div>
                    <div className="w-full">
                        <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5} answer="We offer free shipping on all US orders of $60 or more (excluding taxes). For orders under $60, standard shipping costs $5.90.">
                            <h3 className="text-mobile-h3 lineHeight-mobile-39px">Do you offer <em>free shipping?</em></h3>
                        </AccordianItem>

                        <div className="pt-6">
                            <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5} answer="Unfortunately, we do not ship internationally at this time.">
                                <h3 className="text-mobile-h3 lineHeight-mobile-39px">Do you <em>ship internationally?</em></h3>
                            </AccordianItem>
                        </div>

                        <div className="pt-6">
                            <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5} answer="Once processed, parcels are shipped from New York by the United States Postal Service, UPS, or Fedex. It typically takes 3-9 business days to arrive. With the possible exception of shipments during special holidays, our orders are typically processed within 1-2 business days from when the order was placed.">
                                <h3 className="text-mobile-h3 lineHeight-mobile-39px"><em>Where will my order ship from</em> and <em>how long will it take</em> to arrive?</h3>
                            </AccordianItem>
                        </div>

                    </div>
                </div>

                <div className="pb-16 flex flex-col justify-evenly h-fit-content">
                    <div className="w-full pb-8">
                        <h1 className="ivyPrestoThin text-mobile-h1 lineHeight-mobile-43px">
                            Payments + Returns
                        </h1>
                    </div>
                    <div className="w-full">
                        <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5} answer="Boquet accepts all major Credit Cards (Visa, Mastercard, American Express and Discover), Amazon Pay, Google Pay, Apple Pay, and PayPal.">
                            <h3 className="text-mobile-h3 lineHeight-mobile-39px">What <em>payment methods</em> do you accept?</h3>
                        </AccordianItem>

                        <div className="pt-6">
                            <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5} answer="We accept return products within 30  days of receipt. Please contact us at [insert email] with your order number to start the return process.">
                                <h3 className="text-mobile-h3 lineHeight-mobile-39px">What is Boquet's <em>return policy?</em></h3>
                            </AccordianItem>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col justify-evenly h-fit-content pb-16">
                    <div className="w-full pb-8">
                        <h1 className="ivyPrestoThin text-mobile-h1 lineHeight-mobile-43px">
                            Contact + Press
                        </h1>
                    </div>
                    <div className="w-full">
                        <AccordianItem spaceAbovePlusMinusMobile={'9px'} size={5} answer={<>If you have any questions or concerns, please feel free to reach out to us at [insert email]. We will get back to you as soon as possible. <br/> <br/> For press opportunities and inquiries, please send us an email at [insert email].</>}>
                            <h3 className="text-mobile-h3 lineHeight-mobile-39px">How else can I reach you?</h3>
                        </AccordianItem>
                    </div>
                </div>
            </div>
        </div>


        {/* TABLET */}
        <div className="responsive-tablet">
            <div style={{backgroundColor: "#EBE5DB", color: '#283F91', paddingLeft: '40px', paddingRight: '40px'}} className="h-fit-content flex flex-col justify-start">
                
                <div className="pt-16 flex flex-col justify-evenly h-fit-content">
                    <div className="w-full pb-8">
                        <h2 className="ivyPrestoThin text-tablet-h2 lineHeight-tablet-44px">
                            FAQ
                        </h2>
                    </div>
                    <div className="w-full">
                        <AccordianItem answer="Boquet offers prebiotic vaginal tablets that promote the growth of the vaginal flora's protective good bacteria, lactobacillus. Founded in New York City by licensed pharmacist Esther Nhain Lee.">
                            <h3 className="text-tablet-h3 lineHeight-tablet-42px">What is Boquet?</h3>
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
                                <h3 className="text-tablet-h3 lineHeight-tablet-42px">When and how should I use Boquet?</h3>
                            </AccordianItem>
                        </div>

                    </div>
                </div>

                <div className="py-16 flex flex-col justify-evenly h-fit-content">
                    <div className="w-full pb-8">
                        <h2 className="ivyPrestoThin text-tablet-h2 lineHeight-tablet-44px">
                            Shipping
                        </h2>
                    </div>
                    <div className="w-full">
                        <AccordianItem answer="We offer free shipping on all US orders of $60 or more (excluding taxes). For orders under $60, standard shipping costs $5.90.">
                            <h3 className="text-tablet-h3 lineHeight-tablet-42px">Do you offer <em>free shipping?</em></h3>
                        </AccordianItem>

                        <div className="pt-8">
                            <AccordianItem  answer="Unfortunately, we do not ship internationally at this time.">
                                <h3 className="text-tablet-h3 lineHeight-tablet-42px">Do you <em>ship internationally?</em></h3>
                            </AccordianItem>
                        </div>

                        <div className="pt-8">
                            <AccordianItem  answer="Once processed, parcels are shipped from New York by the United States Postal Service, UPS, or Fedex. It typically takes 3-9 business days to arrive. With the possible exception of shipments during special holidays, our orders are typically processed within 1-2 business days from when the order was placed.">
                                <h3 className="text-tablet-h3 lineHeight-tablet-42px"><em>Where will my order ship from</em> and <em>how long will it take</em> to arrive?</h3>
                            </AccordianItem>
                        </div>

                    </div>
                </div>

                <div className="pb-16 flex flex-col justify-evenly h-fit-content">
                    <div className="w-full pb-8">
                        <h2 className="ivyPrestoThin text-tablet-h2 lineHeight-tablet-44px">
                            Payments + Returns
                        </h2>
                    </div>
                    <div className="w-full">
                        <AccordianItem answer="Boquet accepts all major Credit Cards (Visa, Mastercard, American Express and Discover), Amazon Pay, Google Pay, Apple Pay, and PayPal.">
                            <h3 className="text-tablet-h3 lineHeight-tablet-42px">What <em>payment methods</em> do you accept?</h3>
                        </AccordianItem>

                        <div className="pt-8">
                            <AccordianItem  answer="We accept return products within 30  days of receipt. Please contact us at [insert email] with your order number to start the return process.">
                                <h3 className="text-tablet-h3 lineHeight-tablet-42px">What is Boquet's <em>return policy?</em></h3>
                            </AccordianItem>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col justify-evenly h-fit-content pb-16">
                    <div className="w-full pb-8">
                        <h1 className="ivyPrestoThin text-tablet-h2 lineHeight-tablet-44px">
                            Contact + Press
                        </h1>
                    </div>
                    <div className="w-full">
                        <AccordianItem answer={<>If you have any questions or concerns, please feel free to reach out to us at [insert email]. We will get back to you as soon as possible. <br/> <br/> For press opportunities and inquiries, please send us an email at [insert email].</>}>
                            <h3 className="text-tablet-h3 lineHeight-tablet-42px">How else can I reach you?</h3>
                        </AccordianItem>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

FAQPage.getLayout = function getLayout(page) {
    return (
      <Layout logoGray={false} backgroundColor={'#EBE5DB'}>
        <SEO 
          title={process.env.siteTitle}
        />
        {page}
        <div className="responsive-desktop">
            <ImageTagSection backgroundImage="/images/image-tag-section/faq-image-tag-section.png" />
        </div>
        <div className="responsive-mobile">
            <ImageTagSection backgroundImage="/images/image-tag-section/faq-image-tag-section-mobile.png" />
        </div>
        <div className="responsive-tablet">
            <ImageTagSection backgroundImage="/images/image-tag-section/faq-image-tag-section-tablet.png" />
        </div>
      </Layout>
    )
  }

export default FAQPage;
