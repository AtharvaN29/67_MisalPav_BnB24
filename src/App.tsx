import './App.css'
import Analytics from './Analytics'
import CompanyForm from './Mycomponents/Company_form/CompanyForm'

import UserForm from './Mycomponents/User_form/UserForm'
import Display from './Mycomponents/display/Display'
import { Identity } from './Mycomponents/Identity'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Table from './Table';
import Navbar from './Mycomponents/Header'
import { ThreeDCardDemo } from './Mycomponents/Card'
import { LayoutGridDemo } from './Mycomponents/Grid'
import Welcome from './Mycomponents/Welcome'
import Footer from './Mycomponents/Footer'
import NewCompany from './Mycomponents/Company_form/NewCompany'
import NewUser from './Mycomponents/User_form/NewUser'
import PrivateComponent from './Mycomponents/PrivateComponent'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import UserProfile from './Mycomponents/UserProfile'
// import BuyerProfile from './Mycomponents/BuyerProfile'

import LandingPage from './Mycomponents/LandingPage/LandingPage'
import NewProduct from './Mycomponents/NewProduct/NewProduct'

function App() {
  return (
    
   
      
      
   
    <Router>
      
    <Identity/>
    <Navbar />
        <Welcome/>
      <LayoutGridDemo/>
      <ThreeDCardDemo/>
      
      <Footer/>
    
     
        <Routes>
          {/* <Route element={} /> */}
          <Route element={<PrivateComponent />} />
          <Route path='/companyform' element={<CompanyForm />} />
          <Route path='/newcompany' element={<NewCompany />} />
          <Route path='/userform' element={<UserForm />} />
          <Route path='/newuser' element={<NewUser />} />
          <Route path='/landingpageCompany' element={<LandingPage />} />
          <Route path='/newProduct' element={<NewProduct />} />
          <Route path='/' element={<Display />} />
        </Routes>
      </Router>
  
  )
}

export default App
