'use client';
import Image from 'next/image';
import style from './splashpage.module.css';
import LoginPic from '@/public/login pic.png';
import Logo from '@/public/logo1.png';
import '@/app/global.css';
import { useEffect, useState } from 'react';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useRouter } from 'next/navigation';

import toast from 'react-hot-toast';
export default function Splashpage() {
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
    const [forgotPassword, setForgotPassword] = useState(false);
    function handleForgotPassword() {
        setForgotPassword(!forgotPassword);
    }
    function toggleSignIn() {
        setSignIn(!signIn);
        setEmail("");
        setPassword('');
    }
    function handleAuth(){
        if (!email || !password) {
            toast.error('Fill all fields');
        }else{
            if((!email.endsWith('@gmail.com')) || (email == '@gmail.com')){
                toast.error('Invalid email');
            }else if(password.length < 8){
                toast.error('Password length should be minimum 8');
            }
            else{
            toast.success('Login successful, redirecting');
            router.push('/dashboard');
            }
        }
    }
    return (
        <div className={style.splashPage}>
            <Image className={style.image} src={Logo} height={150} alt='' />
            <div className={style.textDiv}>
                {
                    signIn &&
                        !forgotPassword ?
                        <h2>Login to your account</h2> :
                        !signIn &&
                            !forgotPassword ?
                            <h2>Create a new account</h2> :
                            <h2>Change password</h2>
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
                {
                    !forgotPassword ?
                <p className={style.forgotPassword} onClick={handleForgotPassword}>Forgot password</p> :
                <p className={style.forgotPassword} onClick={handleForgotPassword}>Login</p>
                }
                {/* <button className={style.btn} onClick={handleClick}>Login</button> */}
                {
                    !forgotPassword ?
                    signIn ?
                        <>
                            <button onClick={handleAuth} className={style.btn} >Login</button>
                            <p className={style.newAccount}>Don&#39;t have an account? <span onClick={toggleSignIn}>Signup</span></p>
                        </> :
                        <>
                            <button onClick={handleAuth} className={style.btn} >Sign up</button>
                            <p className={style.newAccount}>Already have an account? <span onClick={toggleSignIn}>Login</span></p>
                        </> : 
                        <button onClick={handleAuth} className={style.btn} >Change password</button>
                }
            </div>
            <div className={style.imageDiv}>
                <Image className={style.Image} src={LoginPic} height={600} alt=''></Image>
            </div>
        </div>
    );
}
