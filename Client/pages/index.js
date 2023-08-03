import Header from '../component/Header'
import Latest_Jobs from '../component/Latest_Jobs'
import styles from '../styles/Desktop/Home/Home.module.css'


const home = () => {


    return (
        <>
            <Header />
            <section className={styles.section}>
                <div className={styles.firstdiv}>
                    <h1>
                        Latest Jobs
                    </h1>
                </div>

                <div className={styles.newjobs}>
                    <Latest_Jobs />
                </div>
            </section>
        </>
    )

}


export default home