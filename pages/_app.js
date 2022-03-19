import '@/styles/globals.css'

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);


  // return (
  //   <Layout>
      // <SEO 
      //   title={process.env.siteTitle}
      // />
  //     <Component {...pageProps} />
  //   </Layout>
  // )
}

export default MyApp
