import { useState } from 'react'
// import { Button } from './components/ui/button'
import './App.css'
import Navbar from './Mycomponents/Header'
import { ThreeDCardDemo } from './Mycomponents/Card'
import { LayoutGridDemo } from './Mycomponents/Grid'
import Welcome from './Mycomponents/Welcome'
import Footer from './Mycomponents/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Welcome/>
      <LayoutGridDemo/>
      <ThreeDCardDemo/>
      <Footer/>
    </>
  )
}

export default App
