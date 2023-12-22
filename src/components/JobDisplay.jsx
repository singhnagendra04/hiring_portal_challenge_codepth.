import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config/firebase'
import "../styles/jobdisplay.css";
import Navbar from './Navbar';
const JobDisplay = () => {
  const [newjob , setNewJob] = useState([]);

  const getjobDetail = collection(db,"jobCreation");

  useEffect(()=>{
    
     const getData = async()=>{
          try{
           const data = await getDocs(getjobDetail);
            const filterData = data.docs.map((doc) =>({
              ...doc.data(),id:doc.id,
            }));
            console.log(filterData);
            setNewJob(filterData);
         
          } catch(e){
            alert(e);
          }

     };

     getData();
  },[]);
  console.log(newjob);
  return (
    <>
    <Navbar />
    <div className='hero-image'>
      <h1 className='main-head'>We Are Now Hiring !</h1>
    <div className='card-main'>
    {
      newjob.map((job) =>(
        <div className='card-sub'>
           <h1 style={{}}>Role : {job.title}</h1>
           <h3>Qualification : {job.qualification}</h3>
           <h3>Technologies : {job.technologies}</h3>
           <p>Description : {job.description}</p>
           <button className='btn-3' onClick={()=>alert("Applied Successfully")}>Apply</button>
        </div>
      ))
    }
    </div>
    </div>
    </>
  )
}

export default JobDisplay