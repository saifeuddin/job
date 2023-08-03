
import Head from 'next/head'
import Link from 'next/link'

import Header from '../../component/Header'
import styles from '../../styles/Desktop/Category/index.module.scss'




const category = () => {

    return (
        <>
            <Head>
                <title> Chakri Ghor Jobs Category </title>
            </Head>
            <Header />

            <div className={styles.head}>
                <h1>
                    Jobs Category
                </h1>
            </div>

            <div className={styles.category}>
                <div className={styles.circle}>
                    <Link href='/category/accounting'>
                    <div>
                        <Link href='/category/accounting'>
                        <a>
                            Accounting
                        </a>
                        </Link>
                    </div>
                    </Link>
                    <Link href='/category/educations'>
                    <div>
                        <Link href='/category/educations'>
                        <a>
                            Educations
                        </a>
                        </Link>
                    </div>
                    </Link>
                    <Link href='/category/bank'>
                    <div>
                        <Link href='/category/bank'>
                        <a>
                            Bank
                        </a>
                        </Link>
                    </div>
                    </Link>
                    <Link href='/category/Engineer'>
                    <div>
                        <Link href='/category/Engineer'>
                        <a>
                            Engineer/Architects
                        </a>
                        </Link>
                    </div>
                    </Link>
                    <Link href='/category/govt'>
                    <div>
                        <Link href='/category/govt'>
                        <a>
                            Govt
                        </a>
                        </Link>
                    </div>
                    </Link>
                    <Link href='/category/ngo'>
                    <div>
                        <Link href='/category/ngo'>
                        <a>
                            NGO
                        </a>
                        </Link>
                    </div>
                    </Link>
                    <Link href='/category/company'>
                    <div>
                        <Link href='/category/company'>
                        <a>
                            Company 
                        </a>
                        </Link>
                    </div>
                    </Link>
                    <Link href='/category/marketing'>
                    <div>
                        <Link href='/category/marketing'>
                        <a>
                            Marketing
                        </a>
                        </Link>
                    </div>
                    </Link>
                    <Link href='/category/medical'>
                    <div>
                        <Link href='/category/medical'>
                        <a>
                            Medical
                        </a>
                        </Link>
                    </div>
                    </Link>
                    <Link href='/catrgory/agro'>
                    <div>
                        <Link href='/catrgory/agro'>
                        <a>
                            Agro
                        </a>
                        </Link>
                    </div>
                    </Link>
                    <Link href='/category/garments'>
                    <div>
                        <Link href='/category/garments'>
                        <a>
                            Garments/Factory
                        </a>
                        </Link>
                    </div>
                    </Link>
                    <Link href='/category/driving'>
                    <div>
                        <Link href='/category/driving'>
                        <a>
                            Driving
                        </a>
                        </Link>
                    </div>
                    </Link>
                    <Link href='/category/it'>
                    <div>
                        <Link href='/category/it'>
                        <a>
                            IT/Proggrammer 
                        </a>
                        </Link>
                    </div>
                    </Link>
                    <Link href='/category/data_entry'>
                    <div>
                        <Link href='/category/data_entry'>
                        <a>
                            Data Entry
                        </a>
                        </Link>
                    </div>
                    </Link>
                    <Link href='/category/security'>
                    <div>
                        <Link href='/category/security'>
                        <a>
                            Security Service
                        </a>
                        </Link>
                    </div>
                    </Link>
                    <Link href='/category/online'>
                    <div>
                        <Link href='/category/online'>
                        <a>
                            Online Jobs
                        </a>
                        </Link>
                    </div>
                    </Link>
                </div>
                <br />
                <br />
            </div>
        </>
    )
}




export default category