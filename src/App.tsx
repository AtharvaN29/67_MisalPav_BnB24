import './App.css'
import Navbar from './Mycomponents/Header'
import { ThreeDCardDemo } from './Mycomponents/Card'
import { LayoutGridDemo } from './Mycomponents/Grid'
import Welcome from './Mycomponents/Welcome'
import Footer from './Mycomponents/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import CompanyForm from './Mycomponents/Company_form/CompanyForm'
import NewCompany from './Mycomponents/Company_form/NewCompany'
import NewUser from './Mycomponents/User_form/NewUser'
import UserForm from './Mycomponents/User_form/UserForm'
import Display from './Mycomponents/display/Display'
import { Identity } from './Mycomponents/Identity'
function App() {


  return (
    
      
      
   <>
    <Router>
    {/* <Identity/> */}
    <Navbar />
        <Welcome/>
      <LayoutGridDemo/>
      <ThreeDCardDemo/>
      <Footer/>
        <Routes>
        
   
          <Route path='/companyform' element={<CompanyForm />} />
          <Route path='/newcompany' element={<NewCompany />} />
          <Route path='/userform' element={<UserForm />} />
          <Route path='/newuser' element={<NewUser />} />
          <Route path='/' element={<Display />} />
        </Routes>
      </Router>
      </>
  )
}

export default App;
