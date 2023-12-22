import React, { useState } from 'react'
import "../styles/joblisting.css";
import { Auth } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';
import Navbar from './Navbar';

const JobCreation = () => {
    const [title,setTitle] = useState();
    const [qualification,setQualification] = useState();
    const [technologies,setTechnologies] = useState();
    const [description,setDescription] = useState();

    const jobCreationRef = collection(db,"jobCreation");
    const onSubmit = async()=>{
        try{
            const res = await addDoc(jobCreationRef,{
                title:title,
                qualification: qualification,
                technologies : technologies,
                description: description,
            })
            if(res){
                alert("Job Created Successfully");
            }

        } catch(e){
            alert(e)
        }
    }

  return (
    <>
    <Navbar />
      <div className='job-main'>
        <div className='job-sub'>
           {/* <form> */}
            <h1> 🖥️ Create job</h1>
            <input className='input-field' placeholder='JOB TITLE' onChange={(e)=>setTitle(e.target.value)} />
            <input className='input-field' placeholder='QUALIFICATION'onChange={(e)=>setQualification(e.target.value)} />
            <input className='input-field' placeholder='TECHNOLOGIES 'onChange={(e)=>setTechnologies(e.target.value)} />
            <textarea className='input-text' placeholder='JOB DESCRIPTION' rows={8} cols={40} onChange={(e)=>setDescription(e.target.value)} />
            <button className='btn-2' onClick={onSubmit}>Create</button>
           {/* </form> */}
        </div> 

      </div>
    </>
  )
}

export default JobCreation