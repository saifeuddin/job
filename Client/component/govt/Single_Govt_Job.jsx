import React from 'react'
import Link from 'next/link'

//
    import styles from '../../styles/Desktop/Category/govt/single_govt.module.scss'
//



const Single_Govt_Job = ({ post, path }) => {

    const data = path.split('/')
    data.shift()
    data.pop()


    if (!post) {
        return (
            <div className={styles.nocontent}>
                <img src="/category/error/error.gif" alt="" />
                    <br /> <br />
                <b>
                    404
                </b>
                    <br />
                <b>
                    Sorry!
                </b>
                    <br /> There is no content....
            </div>
        )
    }


    if (post instanceof Array) {
        return (
            <div className={styles.main}>
                <div className={styles.results}>

                    <Link href='/category' passHref>
                        <a>
                            <i className="bx bxs-dashboard"></i>
                        </a>
                    </Link>
                    <Link href='/category'>
                        <a>
                            {data[0]} 
                        </a>
                    </Link>
                    {' / '}
                    <Link href='/category/govt' scroll={false}>
                        <a>
                            {data[1]} 
                        </a>
                    </Link>
                    {' / '} {post[0].title}
                </div>

                {
                    post?.map((p) => {
                            return (
                            <React.Fragment key={p._id}>
                                <div className={styles.submain}>

                                    <div className={styles.details}>
                                        <h1>
                                            {p.title}
                                            <img src="/category/fire.gif" alt="" />
                                        </h1>
                                        <h5>
                                            {p.dep}
                                        </h5>

                                        <div className={styles.desc}>
                                            <div className={styles.vacancy}>
                                                Vacancy
                                                    <p>
                                                        <i className="fa-solid fa-square-caret-right"></i>
                                                        {p.vacancys}
                                                        
                                                    </p>
                                            </div>
                                            <div className={styles.desc}>
                                                Description
                                                    <p>
                                                        <i className="fa-solid fa-square-caret-right"></i>
                                                        {p.desc.full}
                                                    </p>
                                            </div>


                                            <div className={styles.source}>
                                                Job Source
                                                <p>
                                                    <i className="fa-solid fa-square-caret-right"></i>
                                                    <a href={p.source.link} target='_blank'>
                                                        {p.source.name}
                                                    </a>
                                                </p>
                                            </div>
                                            <br />
                                        </div>
                                    </div>
                                

                                    <div className={styles.summary}>
                                        <h5> 
                                            <i className="fa-solid fa-arrow-down-short-wide"></i> 
                                            Briefing 
                                        </h5>

                                        <div>
                                            <p>
                                                <i className='bx bx-calendar'></i>
                                                Published on :
                                                <span>
                                                    {p.published}
                                                </span>
                                            </p>
                                            <p>
                                                <i className='bx bx-calendar-x'></i>
                                                Deadline :
                                                <span>
                                                    {p.deadline[1]}
                                                </span>
                                            </p>

                                            <p>
                                                <i className="fa-solid fa-person"></i>
                                                Vacancy :
                                                <span>
                                                    {p.vacancys}
                                                </span>
                                            </p>

                                            <p>
                                                <i className="fa-solid fa-paperclip"></i>
                                                Official Site :
                                                <a href={p.officialsite.link} target='_blank'>
                                                    <span>
                                                        {p.officialsite.name}
                                                    </span>
                                                </a>
                                            </p>

                                            <p>
                                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                                Apply Site :
                                                <a href={`http://${p.applysite}`} target='_blank'>
                                                    <span>
                                                        {p.applysite}
                                                    </span>
                                                </a>
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                <div className={styles.img}>
                                    <h2>
                                        <i className="fa-solid fa-ball-pile"></i>
                                        {p.title2} Image
                                    </h2>
                                    <p>
                                        {p.imgdesc}
                                    </p>
                                    {
                                        p.image.name.map((img)=> {
                                            return (
                                                <img key={img} src={`http://localhost:4000/images/govt/${p.image.year}/${img}`} alt="" />
                                            )
                                        })
                                    }
                                </div>


                                <div className={styles.apply}>
                                    <h4>
                                        Apply Procedure
                                    </h4>
                                    <p>
                                        {p.applydesc}
                                    </p>
                                    <h5>
                                        Read Everything Before Apply
                                    </h5>

                                    {p?.applysite?
                                    ( 
                                        <div>
                                            <i className="fa-solid fa-circle-arrow-down"></i>
                                            <br />
                                            <button>
                                                <a href={`http://${p.applysite}`} target='block'>
                                                    Application Link    
                                                </a>
                                            </button>
                                        </div>
                                    )
                                    : 
                                        <br />
                                    }
                                    <p>
                                        সময় :  
                                        <span>
                                            {p.deadline[0]}
                                        </span>
                                    </p>
                                </div>

                                {p?.applyfee ? 
                                    <div className={styles.applyfee}>
                                        <h4>
                                            Apply Fee
                                        </h4>
                                        <p>
                                            {p.applyfee}
                                        </p>
                                    </div>
                                : 
                                    ""
                                }

                                {p?.admitdesc ?
                                ( 
                                    <div className={styles.admit}>
                                        <h4>
                                            Admit Card Info
                                        </h4>
                                        <p>
                                            <span>
                                                {p?.admitdesc[0]}
                                            </span> {' '}
                                            {p?.admitdesc[1]}
                                        </p>
                                        <i className="fa-solid fa-circle-arrow-down"></i>
                                        <br />
                                        <button>
                                            <a href={`http://${p.admitdesc[1]}`} target='block'>
                                                Download Admit Card    
                                            </a>
                                        </button>
                                    </div>
                                )
                                :
                                    ""
                                }
                            </React.Fragment>
                            )
                    })
                }
            </div>
            
        )
    }
}



export default Single_Govt_Job