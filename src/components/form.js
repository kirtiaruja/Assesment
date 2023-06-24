import React, { useEffect, useRef } from "react";
import '../css/form.css';
import google_icn from "../assests/google-icon.webp";
import apple from "../assests/Apple-logo.png"
import {useNavigate} from 'react-router-dom'
import { signIn, useSession } from "next-auth/react";


const loadScript = (src) =>
  new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve()
    const script = document.createElement('script')
    script.src = src
    script.onload = () => resolve()
    script.onerror = (err) => reject(err)
    document.body.appendChild(script)
  })
const SignIn = () => {
    const navigate = useNavigate();
    const handleCallBackResponse=(response)=>{ 
        if(response.credential) {
            navigate('/dashboard')
    } }
    useEffect(()=>{
        const source = "https://accounts.google.com/gsi/client";
        loadScript(source).then(()=>{ 
            window.google.accounts.id.initialize({
            client_id: '949029535981-gj2fd40pbvbc1bhsk2t5p2k7f0qq1r8u.apps.googleusercontent.com',
            callback: handleCallBackResponse
        })
        
        window.google.accounts.id.renderButton(
           google_ref.current,
            {theme:"outline"}
        )
        })
        
    },[])
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    
    const google_ref = useRef();
    return (
        <>
            <div className="wrapper">
                <div className="title">
                    <label>Sign In</label><br />
                    <span>Sign in to your account</span>
                </div>
                <div className="direct_login">
                    <div className="google" ref={google_ref}>
                        {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} /> */}
                        {/* <button onClick={(e)=>{e.preventDefault(); signIn()}}><img src={google} /><label>Sign in with Google</label></button> */}
                    </div>
                    <div className="apple">
                        <button><img src={apple} /><label>Sign in with Apple</label></button>
                    </div>
                </div>
                <div className="form_wrapper">
                    <div className="email_input">
                        <label>Email address</label><br />
                        <input type="email" name="email" />
                    </div>
                    <div className="password_input">
                        <label>Password</label><br />
                        <input type="password" name="password" />
                    </div>
                    <div className="forgotPassword"><a href="#">Forgot Password ?</a></div>
                    <div className="sign_in_button">
                        <button onClick={()=>{ navigate('/dashboard')}}>Sign In</button>
                    </div>

                </div>
            </div>
            <div className="register_here">
                <label>Don't have an account? <a href="#">Register here</a> </label>
            </div>
        </>
    );

}
export default SignIn;