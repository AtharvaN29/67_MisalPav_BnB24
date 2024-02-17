import React from 'react';
import { useState } from 'react'
import { Button } from './components/ui/button'
import AddProduct from './AddProduct'
import './App.css'
import Table from './Table';
function App() {


  return (
    <>
    <div className='h-20'></div>
    <div className='flex justify-end '><div className='w-1/2'><Table/></div></div>
      
     <AddProduct/>
        
 
    </>
  )
}

export default App
