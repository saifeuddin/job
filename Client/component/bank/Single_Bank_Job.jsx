import React from 'react'
import Link from 'next/link'

//
    import styles from '../../styles/Desktop/Category/bank/single_bank.module.scss'
//



const Single_Bank_Job = ({ post, path }) => {

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

                    <Link href='/category' scroll={false} passHref>
                        <a>
                            <i className="bx bxs-dashboard"></i>
                        </a>
                    </Link>
                    <Link href='/category' scroll={false}>
                        <a>
                            {data[0]} 
                        </a>
                    </Link>
                    {' / '}
                    <Link href='/category/bank' scroll={false}>
                        <a>
                            {data[1]} 
                        </a>
                    </Link>
                    {' / '} {post[0].title}
                </div>

                {
                    post?.map((d) => {
                        console.log(d)

                        if(d.short === 'yes') {
                            return 'Hello'

                        }  else {
                            return (
                                <React.Fragment key={d._id}>
                                <div className={styles.submain}>

                                    <div className={styles.details}>
                                        <h1>
                                            {d.title}
                                            <img src="/category/fire.gif" alt="" />
                                        </h1>
                                        <h5>Bnagladesh Bank</h5>

                                        <div className={styles.desc}>
                                            <div className={styles.vacancy}>
                                                Vacancy
                                                <p>
                                                    <i className="fa-solid fa-square-caret-right"></i>
                                                    Not Specific
                                                </p>
                                            </div>

                                            <div className={styles.resp}>
                                                Job Responsibilities
                                                <ul>
                                                    <li>
                                                        Represent the organization as necessary, particularly in regulatory affairs, banking and business development negotiations.
                                                    </li>
                                                    <li>
                                                        Policy formulation on business growth and process solution, regulatory compliance issues, financial planning, budgeting, cash flow, investment priorities, present critical financial matters, policy matters.
                                                    </li>
                                                    <li>
                                                        Issue management, underwriting, margin loan facility, bond, preference shares, derivative products, strategic goals and set objectives as well as the overall management of the organization.
                                                    </li>
                                                    <li>
                                                        Contribute to the development of merchant banking business which includes portfolio.
                                                    </li>
                                                    <li>
                                                        Oversee, direct, and organize the work of the finance and operations teams.
                                                    </li>
                                                    <li>
                                                        Maintain continuous lines of communication, keeping the Board of Directors informed of all critical issues.
                                                    </li>
                                                    <li>
                                                        Plan, coordinate, and execute the annual budget process.
                                                    </li>
                                                    <li>
                                                        Provide analytical support to the internal management team including development of internal management reporting capabilities.
                                                    </li>
                                                    <li>
                                                        Improve administrative and operational accounting services such as client payment processing, payroll, accounts payable, and purchasing.
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className={styles.vacancy}>
                                                Employment Status

                                                <p>
                                                    <i className="fa-solid fa-square-caret-right"></i>
                                                    Full-time
                                                </p>
                                            </div>

                                            <div className={styles.vacancy}>
                                                Workplace
                                                <p>
                                                    <i className="fa-solid fa-square-caret-right"></i>
                                                    Work at office
                                                </p>
                                            </div>

                                            <div className={styles.vacancy}>
                                                Age
                                                <p>
                                                    <i className="fa-solid fa-square-caret-right"></i>
                                                    25-35
                                                </p>
                                            </div>

                                            <div className={styles.educa}>
                                                Educational Requirements
                                                <p>
                                                    <i className="fa-solid fa-square-caret-right"></i>
                                                    Bachelor degree in any discipline 
                                                    <br />
                                                    <i className="fa-solid fa-square-caret-right"></i>
                                                    Skills Required: Leadership, Target Oriented
                                                </p>
                                            </div>

                                            <div className={styles.expri}>
                                                Experience Requirements
                                                <p>
                                                    <i className="fa-solid fa-square-caret-right"></i>
                                                    At least 10 year(s)
                                                </p>
                                            </div>

                                            <div className={styles.additional}>
                                                Additional Requirements
                                                <p>
                                                    <i className="fa-solid fa-square-caret-right"></i>
                                                    Must have experience in the following areas: <br />
                                                    <span>
                                                        {' '}Issue Management, Portfolio Management, 
                                                        <span>
                                                            Underwriting, Corporate Advisory & Trustee
                                                        </span> 
                                                    </span>
                                                </p>
                                            </div>

                                            <div className={styles.vacancy}>
                                                Job Location
                                                <p>
                                                    <i className="fa-solid fa-square-caret-right"></i>
                                                    Dhaka
                                                </p>
                                            </div>

                                            <div className={styles.vacancy}>
                                                Salary
                                                <p>
                                                    <i className="fa-solid fa-square-caret-right"></i>
                                                    Negotiable
                                                </p>
                                            </div>

                                            <div className={styles.vacancy}>
                                                    Compensation & Other Benefits
                                                <p>
                                                    <i className="fa-solid fa-square-caret-right"></i>
                                                    Salary Review: Yearly 
                                                    <br />
                                                    <i className="fa-solid fa-square-caret-right"></i>
                                                    Festival Bonus: 2
                                                    <br />
                                                    <i className="fa-solid fa-square-caret-right"></i>
                                                    As per company policy
                                                </p>
                                            </div>

                                            <div className={styles.source}>
                                                Job Source
                                                <p>
                                                    <i className="fa-solid fa-square-caret-right"></i>
                                                    <a href="https://jobs.bdjobs.com/">
                                                        Bdjobs.com
                                                    </a>
                                                </p>
                                            </div>
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
                                                    {new Date('March, 22, 2022').toDateString()}
                                                </span>
                                            </p>
                                            <p>
                                                <i className='bx bx-calendar-x'></i>
                                                Deadline :
                                                <span>
                                                    {new Date('April, 12, 2022').toDateString()}
                                                </span>
                                            </p>

                                            <p>
                                                <i className="fa-solid fa-person"></i>
                                                Vacancy :
                                                <span>
                                                    Not Specific
                                                </span>
                                            </p>
                                            <p>
                                                <i className="fa-solid fa-briefcase"></i>
                                                Experience :
                                                <span>
                                                    At least 10 years
                                                </span>
                                            </p>
                                            <p>
                                                <i className="fa-solid fa-location-crosshairs"></i>
                                                Location :
                                                <span>
                                                    Anywhere in Bangladesh
                                                </span>
                                            </p>
                                            <p>
                                                <i className='bx bxs-wallet'></i>
                                                Salary :
                                                <span>
                                                    Negotiable 
                                                </span>
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                <div className={styles.img}>
                                    <img src="https://i.pinimg.com/736x/39/da/76/39da765ba84db6cbc1be826745fd5e73.jpg" alt="" />
                                </div>

                                <div className={styles.more_info}>
                                    <h4>
                                        Apply Procedure
                                    </h4>
                                    <h5>
                                        Read Everything Before Apply
                                    </h5>
                                    <i className="fa-solid fa-circle-arrow-down"></i>
                                    <br />
                                    <button>
                                        <a href="https://jobs.bdjobs.com/jobdetails.asp?id=1043176&fcatId=2&ln=1" target='block'>
                                            Application Link    
                                        </a>
                                    </button>
                                    <p>
                                        <i className="fa-solid fa-face-holding-back-tears"></i>
                                        Application Deadline : 11 Apr 2022
                                    </p>
                                </div>

                                <div className={styles.company_info}>
                                    <h4>
                                        Company Information
                                    </h4>
                                    <p>
                                        Company Name bla bla
                                    </p>
                                    <p>
                                        Dhaka Bangladesh
                                    </p>
                                </div>
                                </React.Fragment>
                            )
                        }
                    })
                }
            </div>
        )
    }
}



export default Single_Bank_Job