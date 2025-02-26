import Head from 'next/head'

function SEO({ title }) {
  // customize meta properties
  // you can pass them as an argument like title in case you want to change for each page
  const description = process.env.siteDescription
  const keywords = process.env.siteKeywords
  const siteURL = process.env.siteUrl
  const imagePreview = `${siteURL}/${process.env.siteImagePreviewUrl}`

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:url" content={siteURL} key="ogurl" />
      <meta property="og:image" content={imagePreview} key="ogimage" />
      <meta property="og:site_name" content={siteURL} key="ogsitename" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <title>{title}</title>


      <link rel="manifest" href="/manifest.json" />
      <link
        href="/icons/favicon-16x16.png"
        rel="icon"
        type="image/png"
        sizes="16x16"
        purpose="any maskable"
      />
      <link
        href="/icons/favicon-32x32.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
        purpose="any maskable"
      />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png"></link>
      <meta name="theme-color" content="white" />


      <link rel="stylesheet" href="https://use.typekit.net/dxh6hfl.css"/>
      <link
            rel="preload"
            href="/fonts/CoreSansD35Regular.otf"
            as="font"
            crossOrigin=""
      />
    </Head>
  )
}

export default SEO
