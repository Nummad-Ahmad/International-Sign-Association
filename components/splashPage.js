'use client';
import Image from 'next/image';
import style from './splashpage.module.css';
import LoginPic from '@/public/login pic.png';
import '@/app/global.css';
import { useEffect, useState } from 'react';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Splashpage() {
    // useEffect(()=>{
    //     axios.get('http://localhost:8000/temp');
    // })
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [obsecure, setObsecure] = useState(true);
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    function handleClick() {
        console.log('email', email);
        console.log('Password', password);
        router.push('/dashboard');
    }
    function handleObsecure() {
        setObsecure(!obsecure);
    }
    const [signIn, setSignIn] = useState(false);
    function toggleSignIn() {
        setSignIn(!signIn);
    }
    return (
        <div className={style.splashPage}>
            <div className={style.textDiv}>
                {
                    signIn ?
                        <h2>Login to your account</h2> :
                        <h2>Create a new account</h2>
                }
                <p className={style.text}>Email</p>
                <div className={style.textfieldDiv}>
                    <input className={style.input} placeholder='Enter email' onChange={handleEmail} />
                </div>
                <p className={style.text}>Password</p>
                <div className={style.textfieldDiv}>
                    <input type={`${obsecure ? 'password' : 'text'}`} className={style.input} placeholder='Enter password' onChange={handlePassword} />
                    <span className={style.icon} onClick={handleObsecure}>
                        {
                            obsecure ? <IoMdEye /> : <IoMdEyeOff />
                        }
                    </span>
                </div>
                <p className={style.forgotPassword}>Forgot password</p>
                {/* <button className={style.btn} onClick={handleClick}>Login</button> */}
                {
                    signIn ?
                        <>
                            <button className={style.btn} >Login</button>
                            <p className={style.newAccount}>Don't have an account? <span onClick={toggleSignIn}>Signup</span></p>
                        </> :
                        <>
                            <button className={style.btn} >Sign up</button>
                            <p className={style.newAccount}>Already have an account? <span onClick={toggleSignIn}>Login</span></p>
                        </>
                }
            </div>
            <div className={style.imageDiv}>
                <Image className={style.Image} src={LoginPic} height={600} alt=''></Image>
            </div>
        </div>
    );
}