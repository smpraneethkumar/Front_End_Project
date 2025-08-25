import { useState } from 'react'
import './App.css'

import Routing from './Routes/Routing'
import Footer from './Components/Footer'
import { Forms } from './Components/Forms'
import Header from './Components/Header'

function App() {
  

  return (
    <>
    {/* <Forms/>   */}
       <Header/>
     <Routing/> 
     <Footer/>
    {/* <Dummay/> */}
    </>
  )
}

export default App
