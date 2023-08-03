import Link from 'next/link'

//
    import styles from '../../styles/Desktop/Category/govt/all_govt.module.scss'
//



const Govt_Jobs_List = ({post, path}) => {

    const data = path.split('/')
    data.shift()


    if (!post) {
        return (
            <div className={styles.nocontent}>
                <img src="/category/error/error.gif" alt="" />
                <br />
                <br />
                Sorry! 
                <br />
                There is no content....
                <br />
                <br />
            </div>
        )
    }


    if (post instanceof Array) {
    post.reverse()
    return (
        <div className={styles.main}>
            <div className={styles.results}>
                <Link href='/category' passHref>
                    <a>
                        <i className="bx bxs-dashboard"></i>
                    </a>
                </Link>
                <Link href='/category' passHref>
                    <a>
                        {data[0]} 
                    </a>
                </Link>
                {' / '}
                <span>
                    {data[1]}
                </span>
                <i className="fa-solid fa-circle-arrow-right"></i> 
                    Found
                <span>
                    {post.length} Jobs
                </span>
            </div>


            {
                post?.map((p) => {
                    return (
                        <div className={styles.submain} key={p._id}>

                            <Link href={`/category/govt/${p._id}`}>
                            <h1> 
                                <img src="/category/fire.gif" />
                                {p.title}
                            </h1>
                            </Link>

                            <div className={styles.desc}>
                                <div className={styles.details}>
                                    <div className={styles.dep}>
                                        <p> 
				    	                    {p.dep}
                                        </p>
                                        <p> 
                                            {p.desc.half}
                                        </p>
                                    </div>
                                    <div className={styles.seemore}> 
                                        <Link href={`/category/govt/${p._id}`} passHref>
                                        <a>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            Read More ...
                                        </a>
                                        </Link>
                                    </div>
                                    <button className={styles.save}> 
                                        <i className="fa-solid fa-bookmark"></i>
                                        <Link href={`/save`} passHref scroll={false}>
                                        <a>
                                            Save
                                        </a>
                                        </Link>
                                    </button>
                                    <div className={styles.dates}>
                                            <p>
                                                <i className='bx bx-calendar'></i>
                                                <span>
                                                    Published {' : '} 
                                                </span>
                                                {p.published} 
                                            </p>
                                            <p> 
                                                <i className='bx bx-calendar-x'></i>
                                                <span>
                                                    Deadline {' : '}
                                                </span>
                                                {p.deadline[1]}
                                            </p>
                                    </div>
                                </div>

                                <div className={styles.img}>
                                <Link href={`govt/${p._id}`}>
                                    <img src={`http://localhost:4000/images/govt/${p.bannerimg.year}/${p.bannerimg.name}`} 
                                        alt="Banner" 
                                    />
                                </Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
    }
}



export default Govt_Jobs_List