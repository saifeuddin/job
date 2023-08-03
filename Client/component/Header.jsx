import Link from 'next/link'
import styles from '../styles/Desktop/Home/Home.module.css'



const Header = () => {

    const activeRemoved = () => {
        const getLinks = document.getElementsByTagName('a')

        for (let i = 0; i < getLinks.length; i++) {
            var current = document.getElementsByClassName(' activeIcon')

            if (current.length > 0) {
                current[0].className = current[0].className.replace(' activeIcon', '')
            }
        }
    }




    return (
        <>
            <header className={styles.header} onClick={activeRemoved}>
                <Link href='/' passHref>
                    <img src="/logo2.png" alt="Chakri Ghor Logo" />
                </Link>
            </header>
        </>
    )
}



export default Header