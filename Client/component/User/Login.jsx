import React, { useState } from 'react'

import Link from 'next/link'
import {useRouter} from 'next/router'

//
    import axios from 'axios'

//
    import styles from '../../styles/Desktop/User/Login.module.scss'


//
    import { ToastContainer, toast } from 'react-toastify'
    import 'react-toastify/dist/ReactToastify.css'




const Login = () => {

    const router = useRouter()

    // 
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [file, setfile] = useState({
        name:'', size: 0, type: ''
    })


    const formSubmitBackend = async () => {

        const result = await axios('http://localhost:4000/userLogin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
            data: JSON.stringify({
                email,
                pass,
                file
            }),
        })

        if (result) {
            toast.success(result.data, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }

    //
    const loginValidation = (ev)=> {
        ev.preventDefault()

        formSubmitBackend()

        setTimeout(() => {
            router.push('/user/saved')
        }, 3000);
    }



    return (
        <>
            <section className={styles.section}>

                <div className={styles.content}>
                    <img src="/regi_login/launch.gif" alt="" />
                    <h2>
                        Welcome to Chakrighor
                    </h2>
                    <h1>Log In</h1>
                </div>

                <form className={styles.form} onSubmit={loginValidation}>
                    <div className={styles.fcontent}>
                        <div>
                            <label htmlFor="logemail"> Email </label>
                            <input 
                                type="text" 
                                name="email" 
                                id="logemail" 
                                required 
                                onChange={(e)=> setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="logpsw"> Password </label>
                            <input 
                                type="password" 
                                name="psw" 
                                id="logpsw" 
                                required
                                onChange={(e)=> setPass(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="profile"> Profile Pic </label>
                            <input 
                                type="file" 
                                name="profilePic" 
                                id="profile"
                                accept="image/jpeg, image/png, image/jpg"
                                onChange={(ev)=> {
                                    setfile({ ...file, 
                                        name: ev.target.files[0].name, 
                                        size: ev.target.files[0].size, 
                                        type: ev.target.files[0].type 
                                    })
                                }}
                            />
                        </div>

                        <button type="submit"> Log In </button>
                    </div>
                </form>
            </section>

            <div className={styles.signup}>
                <Link href='/user/registration'>
                    <p>Don't have an account?
                        <span> Sign Up </span>
                    </p>
                </Link>
            </div>


            <ToastContainer
                newestOnTop
                rtl={false}
            />
        </>
    )
}




export default Login