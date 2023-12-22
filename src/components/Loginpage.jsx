import React, { useState } from 'react'
import { auth } from '../config/firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import "../styles/login.css";
import { Link, useNavigate } from 'react-router-dom';
import JobDisplay from './JobDisplay';
import Joblisting from './JobCreation';
const Loginpage = () => {

    const navigate = useNavigate();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    
    const login = async()=>{
        try{
            const res =  await signInWithEmailAndPassword(auth,email,password);
            if(res){
                alert("Login Successfully");
                navigate("/jobdisplay");
            }
        } catch(e){
            alert(e);
        }
    }
    
    
   const handle =()=>{
     
     navigate('/register');
   }
  return (
    <>
     <div className='hero-image'>
        {/* <h1>hello</h1> */}
     <div className='main-page'>
          <h1>🔒 Login</h1>
         <input className="input-field" type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
         <input className="input-field" type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
          <button className="login-btn" onClick={login}>SignIn</button>
          <label > Don't have account</label>
         <button className='btn-1' onClick={handle}> Register</button>
      </div>
     </div>
    </>
  )
}

export default Loginpage