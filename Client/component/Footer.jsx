import styles from '../styles/Desktop/Footer/Footer.module.scss'
import Link from 'next/link'



const Footer = () => {

    return (
        <div className={`${styles.footer} footer`}>
            <div className={styles.info}> 
                <Link href='/footer/about'>
                    <a>
                        About us 
                    </a>
                </Link>
                <Link href='/footer/contactus'>
                    <a>
                        Contact us 
                    </a>
                </Link>
            </div>

            <div className={styles.copyright}>
                <i className='bx bxs-copyright'></i>
                <p>
                    All rights reseved to Charkri Ghor
                </p>
            </div>

            <div></div>

            <div className={styles.social}>
                <i className='bx bxl-facebook-circle'></i>
                <i className='bx bxl-instagram' ></i>
                <i className='bx bxl-twitter' ></i>
                <i className='bx bxl-linkedin'></i>
            </div>
        </div>
    )
}


export default Footer