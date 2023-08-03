import Link from 'next/link'

//
    import styles from '../../styles/Desktop/Category/bank/all_bank.module.scss'
//



const Bank_Jobs_List = ({post, path}) => {

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
    return (
        <div className={styles.main}>
            <div className={styles.results}>
                <Link href='/category' scroll={false} passHref>
                    <a>
                        <i className="bx bxs-dashboard"></i>
                    </a>
                </Link>
                <Link href='/category' scroll={false} passHref>
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
                post?.map((d) => {
                    return (
                        <div className={styles.submain} key={d._id} id='anim'>
                            <div className={styles.details1}>
                                <div className={styles.desc}>
                                    <Link href={`bank/${d._id}`} passHref>
                                    <div>
                                        <h1> 
                                            <img src="/category/fire.gif" alt="" />
                                            {d.title}
                                        </h1>
                                        <p>Bnagladesh Bank</p>
                                        <p> 
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt neque nisi quisquam 
                                            voluptatibus odit possimus explicabo .
                                        </p>
                                    </div>
                                    </Link>

                                    <div className={styles.seemore}> 
                                        <Link href={`bank/${d._id}`} passHref>
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
                                        <Link href={`/save`} passHref>
                                        <a>
                                            Save
                                        </a>
                                        </Link>
                                    </button>
                                </div>

                                <Link href={`bank/${d._id}`}>
                                <div className={styles.img}>
                                    <img src="https://chakrirkhobor.net/wp-content/uploads/2018/03/Bank-Asia-Job-Circular.jpg" alt="" />
                                </div>
                                </Link>
                            </div>

                            <div className={styles.details2}>
                                <div className={styles.things}>
                                    <p>
                                        <i className="fa-solid fa-location-pin"></i>
                                        <span>
                                            Anywhere in Bangladesh
                                        </span>
                                    </p>
                                    <p className={styles.graduation}>
                                        <i className="fa-solid fa-graduation-cap"></i>
                                        <span>
                                            Bachelor degree in any discipline
                                        </span>
                                    </p>
                                    <p>
                                        <i className="fa-solid fa-briefcase"></i>
                                        <span>
                                            Experience requiredAt least 3 year(s)
                                        </span>
                                    </p>
                                </div>

                                <div className={styles.dates}>
                                    <p>
                                        <i className='bx bx-calendar'></i>
                                        <span>
                                            Published {' : '}
                                        </span>
                                        {new Date('March, 22, 2022').toDateString()} 
                                    </p>
                                    <p> 
                                        <i className='bx bx-calendar-x'></i>
                                        <span>
                                            Deadline {' : '}
                                        </span>
                                        {new Date('April, 12, 2022').toDateString()} 
                                    </p>
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



export default Bank_Jobs_List