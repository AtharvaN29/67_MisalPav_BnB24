import './App.css'
import CompanyForm from './mycomponents/Company_form/CompanyForm'
import NewCompany from './mycomponents/Company_form/NewCompany'
import NewUser from './mycomponents/User_form/NewUser'
import UserForm from './mycomponents/User_form/UserForm'
import Display from './mycomponents/display/Display'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
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

export default App
