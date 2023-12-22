import React,{useState} from 'react'
import { auth } from '../config/firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import "../styles/register.css";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    
    const register = async()=>{
        try{
            const res =  await createUserWithEmailAndPassword(auth,email,password);
            if(res){
                alert("Registered Successfully");
            }
        } catch(e){
            alert(e);
        }
    }

    const navigate = useNavigate();
    const handle =()=>{
     
        navigate('/');
      }
  return (
    <div className='hero-image'>
    {/* <h1>hello</h1> */}
 <div className='main-page'>
      <h1>🔒 Register</h1>
     <input className="input-field" type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
     <input className="input-field" type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
      <button className="register-btn" onClick={register}>Register</button>
      <label > Already Registered</label>
      <button  className="btn-1" onClick={handle}>Login</button>
  </div>
 </div>
  )
}

export default Register
