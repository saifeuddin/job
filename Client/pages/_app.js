import Head from 'next/head'
import Layout from '../component/Layout'
import ErrorBoundary from '../component/ErrorBoundary'

import '../styles/Desktop/Globals.css'
import '../styles/Desktop/Sidebar/Toggle.css'





function MyApp({ Component, pageProps }) {

  if(Component.getLayout) {
    return Component.getLayout( <Component {...pageProps} /> )
  }


  return(
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Chakrighor.com is the best site to find all latest goverment and private job circulars. It is one of the most trusted online source for job opportunities. Apply for your desired job, get career advice and improve your skill through trainning" />
        <meta name="keywords" content="bd jobs, jobs bd, govt jobs, company jobs bd, latest govt jobs, sorkari chakri, online jobs" />
        <meta name="author" content="Saife Uddin" />
        <link rel="icon" href="/growth.png" />
        <title> Chakrighor.com | Largest Job Site in Bangladesh, Search Jobs </title>
      </Head>


      <ErrorBoundary FallbackComponent={'Loading'}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ErrorBoundary>
    </>
  )
}




export default MyApp