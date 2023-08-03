import Head from 'next/head'
import Link from 'next/link'


import styles from '../styles/Desktop/Sidebar/Sidebar.module.css'
import style from '../styles/Desktop/Sidebar/Sidenav.module.scss'
import styled from '../styles/Desktop/Sidebar/Profile.module.css'




const Sidebar = () => {

    const toggle = (e) => {
        let sideBar = document.querySelector('#sidebar')

        const check = e.target.classList.contains('bx-search') && sideBar.classList.contains('active')
        if(check) {
            return
        }

        sideBar.classList.toggle('active')

        const checker = sideBar.classList.contains('active')
        const checkId = document.getElementById('btn')


        if(checker && checkId.id === 'btn') {
            checkId.className += '-alt-right'
        }
        else if (checkId.id === 'btn') {
            checkId.className = 'bx bx-menu'
        }
        // console.log(e, sideBar, checker, checkId.id)
    }
    
    
    
    const toggle2 = () => {
        let check = document.querySelector('#sidebar').classList.contains('active')
        let sideBar = document.querySelector('#sidebar')


        if(check) {
            sideBar.classList.toggle('active')

            const checker = sideBar.classList.contains('active')
            const checkId = document.getElementById('btn')


            if (checker && checkId.id === 'btn') {
                checkId.className += '-alt-right'
            }
            else if (checkId.id === 'btn') {
                checkId.className = 'bx bx-menu'
            }
        }
    }



    const activePage = () => {
        const getLinks = document.getElementsByTagName('a')

        for (let i = 0; i < getLinks.length; i++) {
            getLinks[i].addEventListener('click', () => {
                var current = document.getElementsByClassName(' activeIcon')

                if (current.length > 0) {
                    current[0].className = current[0].className.replace(' activeIcon', '')
                }

                getLinks[i].className += ' activeIcon'
            })
        }
        // console.log(getLinks)
    }




    return (
    <>
        <Head>
            <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"/>
        </Head>


        <div className={`sidebar ${styles.sidebar}`} id='sidebar' onClick={activePage}>
            <div className={styles.logoContent}>
                <div className={styles.logo} id='logo'>
                    <Link href='/'>
                        <div id='logoname' className={styles.logoName} onClick={toggle}> ChakriGhor </div>
                    </Link>
                    <Link href='/'>
                        <i className='bx bxs-paper-plane' id='plane' onClick={toggle}></i>
                    </Link>
                </div>
                <i className='bx bx-menu' id='btn' onClick={toggle}></i>
            </div>


            <nav className={style.sideNav} id='sidenav'>
                <ul className='navList'>
                    <li>
                        <i className={`bx bx-search ${style.icon}`} onClick={toggle}></i>
                        <input type="text" placeholder='Search'/>
                        <span className={style.tooltip}> Search </span>
                    </li>

                    <div onClick={toggle2}>
                    <li>
                        <Link href="/category"> 
                        <a className='icon' >
                            <i className='bx bxs-dashboard'></i>
                            <span className='links_name'> Category </span>
                        </a>
                        </Link>
                        <span className={style.tooltip}> Category </span>
                    </li>
                    <li>
                        <Link href="/">
                        <a className='icon'>
                            <i className="fa-solid fa-house-chimney-crack"></i>
                            <span className='links_name'> Home </span>
                        </a>
                        </Link>
                        <span className={style.tooltip}> Home </span>
                    </li>
                    <li>
                        <Link href="/category/govt">
                        <a className='icon'>
                            <i className="fa-solid fa-fire-flame-curved"></i>
                            <span className='links_name'> Govt Jobs </span>
                        </a>
                        </Link>
                        <span className={style.tooltip}> Govt Jobs </span>
                    </li>
                    <li>
                        <Link href="/user/saved">
                        <a className='icon'>
                            <i className="fa-solid fa-hand-holding-heart"></i>
                            <span className='links_name'> Saved Jobs </span>
                        </a>
                        </Link>
                        <span className={style.tooltip}> Saved Jobs </span>
                    </li>
                    <li>
                        <Link href="/user/registration">
                        <a className='icon'>
                            <i className="fa-solid fa-right-to-bracket"></i>
                            <span className='links_name'> Regi / Login </span>
                        </a>
                        </Link>
                        <span className={style.tooltip}> Regi/Login </span>
                    </li>
                    </div>
                </ul>
            </nav>



            <div className={styled.profile_content}>
                <div className={styled.profile} id='profile'>
                    <div className={styled.profile_details} id='details'>
                        <img className={styled.img} src="/profile.png" alt="" />
                        <div className={styled.name_job} id='name_job'>
                            <div className={styled.name}>
                                Saife Uddin
                            </div>
                            <div className={styled.job}>
                                Web Designer
                            </div>
                        </div>
                    </div>
                    <i className='bx bx-log-out'></i>
                </div>
            </div>


        </div>
    </>
    )
}



export default Sidebar