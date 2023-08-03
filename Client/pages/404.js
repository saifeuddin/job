import Head from 'next/head'
import Header from '../component/Header'
import styles from '../styles/Desktop/404.module.scss'



const notFound404 = () => {

    return ( 
        <>
            <Head>
                <title>
                    404 Page not found
                </title>
            </Head>
            <Header />

            <div className={styles.styles}>
                <img src="/sad.gif" alt="" />
                <br />
                <span className={styles.styles2}>
                    Requested Page Not Found
                </span>
            </div>
        </>
    )
}




export default notFound404