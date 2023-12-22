import React from 'react'
import Loginpage from './components/Loginpage'
import './App.css';
import Joblisting from './components/JobCreation';
import Register from './components/Register';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import JobDisplay from './components/JobDisplay';
import Logout from './components/Logout';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
     <BrowserRouter>
     <Routes>
     
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<Loginpage />} />
      <Route path='/jobcreation' element={<Joblisting />} />
      <Route path='/jobdisplay' element={<JobDisplay />} />
      <Route path='/navbar' element={<Navbar />} />
      <Route path='/logout' element={<Logout />} />

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App