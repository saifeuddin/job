import Link from 'next/link'

//
    import latestJobs from '../../data/latest_jobs'
    import styles from '../../styles/Desktop/Home/Home.module.css'
//




const Latest_Jobs = () => {

    return(latestJobs.map((job) => {
        return (
            <Link href='/category/bank/' key={job.id}>
            <div className={styles.job}>
                <div className={styles.img}>
                    <img src={job.img} alt="Latest Jobs" />
                </div>
                <div className={styles.title_date}>
                    <div className={styles.title}> {job.title} </div>
                    <div className={styles.date}>
                        <b>
                            Publised on: {' '}
                        </b>
                        {job.date}
                    </div>
                </div>
            </div>
            </Link>
        )
    }))
}



export default Latest_Jobs