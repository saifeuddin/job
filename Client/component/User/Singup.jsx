import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Link from 'next/link'
import { useRouter } from 'next/router'

//
import styles from '../../styles/Desktop/User/Singup.module.scss'


//
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const Register = () => {

    const router = useRouter()

    const [name, setName] = useState({n: '', e: false})
    const [email, setEmail] = useState({em: '', e: false})
    const [birthdate, setBirthdate] = useState({b: '', e: false})
    const [number, setNumber] = useState({ nu: '', e: false })
    const [gender, setGender] = useState('')
    const [pass, setPass] = useState({p: '', e: false})
    const [cpass, setCpass] = useState({cp: '', e: false})



    // ......
    const formSubmitBackend = async ()=> {

        const result = await axios('http://localhost:4000/userRegistration/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
            data: JSON.stringify({
                name: name.n,
                email: email.em,
                birthdate: birthdate.b,
                number: number.nu,
                gender: gender,
                pass: pass.p,
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


        setTimeout( () => {
            router.push('/user/login')
        }, 2000)
    }


    // ......
    const checkInputs = async (event) => {
        event.preventDefault()

        if(
            !name.e && !email.e &&
            !birthdate.e && !number.e && 
            !pass.e && !cpass.e

        ) {
            formSubmitBackend()
        } else {
            toast.error('Please Provide Correct Info', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }

    }

    //
    function chnagePassVasibility(e) {
        if (e.target.classList.contains('fa-eye-slash')) {
            e.target.classList.remove('fa-eye-slash')
            e.target.className += ' fa-eye'
            e.target.previousElementSibling.type = 'password'
        } else {
            e.target.className += '-slash'
            e.target.previousElementSibling.type = 'text'
        }
    }


    return (
    <>
    <section className={styles.section}>
        <div className={styles.content}>
            <img src="/regi_login/launch.gif" alt="" />
            <h2>
                Welcome to Chakrighor
            </h2>
            <h1>Sign Up For Free</h1>
        </div>
        <form className={styles.form} 
        onSubmit={checkInputs}
        >
            <p>
                Please fill in this form to create an account :
            </p>
            <hr />

            <div className={styles.fcontent}>
                <div>
                    <label htmlFor="fullname">Name</label>
                    <input 
                        required
                        type="text"  
                        name="fullname" 
                        id="fullname" 
                        title='Capitalize Each Word'
                        onChange={(e)=> {
                                const value = e.target.value
                                const pattern = /^[A-Z]\D+/g
                                const res = pattern.test(value)
                                if(!res) {
                                    setName({...name, e: true})
                                    return
                                } else {
                                    setName({n: value, e: false})
                                }
                            }
                        }
                    />
                    { name.e?
                        <div className={styles.errormessage}>
                            <i className="fa-solid fa-circle-exclamation"></i>
                            <label> Invalid Name ! </label>
                        </div>
                    :
                        ''
                    }
                </div>



                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        required 
                        type="text"  
                        name="email" 
                        id="email" 
                        onChange={(e)=> {
                            const value = e.target.value
                            const pattern = /[a-z_\-\.0-9]+@[a-z]+\.[a-z]{2,3}/
                            const res = pattern.test(value)
                            if(!res) {
                                setEmail({...email, e: true})
                                return
                            } else {
                                setEmail({em: value, e: false})
                            }
                        }} 
                    />
                    { email.e?
                        <div className={styles.errormessage}>
                            <i className="fa-solid fa-circle-exclamation"></i>
                            <label>Invalid Email !</label>
                        </div>
                    :
                        ''
                    }
                </div>



                <div>
                    <label htmlFor="birthdate"> Birthdate </label>
                    <input 
                        required
                        type="date"  
                        name="birthdate" 
                        id="birthdate"
                        onChange={(e)=> {
                            const value = e.target.value
                            const value1 = e.target.value.split('-')
                            const year = value1[0]
                            const check = year <= 2010
                            console.log(check)
                            if(!check) {
                                    setBirthdate({...birthdate, e: true})
                            } else {
                                    setBirthdate({b: value, e: false})
                            }
                        }}
                    />
                    { birthdate.e?
                        <div className={styles.errormessage}>
                            <i className="fa-solid fa-circle-exclamation"></i>
                            <label> Please Enter Year above 2010 !</label>
                        </div>
                    :
                        ''
                    }
                </div>

                <div>
                    <label htmlFor="number"> Number  </label>
                    <input 
                        type="number" 
                        name="number" 
                        id="number" 
                        onChange={(e)=> {
                            const value = e.target.value
                            const pattern = /^([0])(\d{3})?(\d{3})(\d{4})$/
                            const res = pattern.test(value)
                            if(!res) {
                                setNumber({...number, e: true})
                                return
                            } else {
                                setNumber({nu: value, e: false})
                            }
                        }} 
                    />
                    { number.e ?
                        <div className={styles.errormessage}>
                            <i className="fa-solid fa-circle-exclamation"></i>
                            <label> Invalid Number !</label>
                        </div>
                    :
                        ''
                    }
                </div>

                
                <div>
                    <input
                        required
                        type="radio" 
                        id="male"
                        name="gender"
                        value='male' 
                        onChange={(e)=> setGender(e.target.value)}
                    />
                    <label htmlFor="male"> Male </label>
                    <br />
                    <input 
                        required
                        type="radio" 
                        id="female" 
                        name="gender" 
                        value="female" 
                        onChange={(e)=> setGender(e.target.value)}
                    />
                    <label htmlFor="female"> Female </label>
                </div>


                <div>
                    <label htmlFor="psw"> Password </label>
                    <input 
                        required 
                        type="password" 
                        id="psw" 
                        name="psw" 
                        title="Must contain at least one number and one uppercase 
                                and lowercase letter, one special character and at 
                                least 8 or more characters" 
                        onChange={(e)=> {
                            const value = e.target.value
                            const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\+\-\.\,!@#\$%\^&\*]).{8,}/
                            const res = pattern.test(value)
                            if(!res) {
                                setPass({...pass, e: true})
                                return
                            } else {
                                setPass({p: value, e: false})
                            }
                        }} 
                    />
                    <i className="fa-solid fa-eye" onClick={chnagePassVasibility}></i>
                    { pass.e?
                        <div className={styles.errormessage}>
                            <i className="fa-solid fa-circle-exclamation"></i>
                            <label htmlFor="fullname"> 
                                Password is not valid type !
                            </label>
                        </div>
                    :
                            ''
                    }
                </div> 


                <div>
                    <label htmlFor="psw-repeat"> Repeat Password  </label>
                    <input 
                        required 
                        type="password"  
                        name="psw-repeat" 
                        id="psw-repeat"
                        onChange={(e)=> {
                            const value = e.target.value
                            const {p} = pass
                            if(p === value) {
                                setCpass({cp: value, e: false})
                                return
                            } else {
                                setCpass({...cpass, e: true})
                            }
                        }}  
                    />
                    <i className="fa-solid fa-eye" onClick={chnagePassVasibility}></i>
                    { cpass.e?
                        <div className={styles.errormessage}>
                            <i className="fa-solid fa-circle-exclamation"></i>
                            <label htmlFor="fullname"> Passwords not Matching !</label>
                        </div>
                        :
                            ''
                    }
                </div>


                <p>By creating an account you agree to our {' '}
                    <Link href="/footer/about">
                    <a>
                        Terms & Privacy
                    </a>
                    </Link>
                .</p>
                <button type="submit"> Create User </button>

                <Link href='/user/login'>
                    <button type="button"> Go to Log In </button>
                </Link>
            </div>
        </form>
    </section>

    <div className={styles.signin}>
        <Link href='/user/login'>
            <p>Already have an account? 
                <span> Log In </span>
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



export default Register