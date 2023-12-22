import React from 'react'
// import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import "../styles/navbar.css";
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {

    const navigate = useNavigate();
    const logout =async ()=>{
        try{
            await signOut(auth);
            navigate("/");
        } catch(e){
            alert(e);
        }
    }
  return (
    <>
     <div className='main-nav'>
       <ul className='main-ul'>
        <li><Link to="/jobcreation" className='link-col'> JobCreation</Link></li>
        <li><Link to="/jobdisplay" className='link-col'> JobDisplay</Link></li>

       </ul>
       <button onClick={logout} className='log-btn'>logout</button>

     </div>
    </>
  )
}

export default Navbar
