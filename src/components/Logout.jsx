import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

const Logout = () => {
    const signOut =async ()=>{
        try{
            await signOut(auth);
        } catch(e){
            alert(e);
        }
    }
  return (
   <>
    <button onClick={signOut}>Logout</button>
   </>
  )
}

export default Logout