
import Sidebar from "./Sidebar"
import Footer from "./Footer"


import styles from '../styles/Desktop/Layout.module.css'



const Layout = ({ children }) => {


    return (
        <div id='layout'>
            <Sidebar />
            <div className={styles.container}>
                {children}
                <Footer />
            </div>
        </div>
    )

}


export default Layout