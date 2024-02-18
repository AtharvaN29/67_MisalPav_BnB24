import './App.css'

import CompanyForm from './Mycomponents/Company_form/CompanyForm'
import NewCompany from './Mycomponents/Company_form/NewCompany'
import NewUser from './Mycomponents/User_form/NewUser'
import UserForm from './Mycomponents/User_form/UserForm'
import Display from './Mycomponents/display/Display'
import PrivateComponent from './Mycomponents/PrivateComponent'
import LandingPageUser from './Mycomponents/LandingPage/LandingPageUser'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import UserProfile from './mycomponents/UserProfile'
// import BuyerProfile from './mycomponents/BuyerProfile'

import LandingPage from './Mycomponents/LandingPage/LandingPage'
import NewProduct from './Mycomponents/NewProduct/NewProduct'

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route element={} /> */}
        <Route element={<PrivateComponent />} />
        <Route path='/companyform' element={<CompanyForm />} />
        <Route path='/newcompany' element={<NewCompany />} />
        <Route path='/userform' element={<UserForm />} />
        <Route path='/newuser' element={<NewUser />} />
        <Route path='/landingpageCompany' element={<LandingPage />} />
        <Route path='/landingpageuser' element={<LandingPageUser />} />
        <Route path='/newProduct' element={<NewProduct />} />
        <Route path='/' element={<Display />} />
      </Routes>
    </Router>
  )
}

export default App
