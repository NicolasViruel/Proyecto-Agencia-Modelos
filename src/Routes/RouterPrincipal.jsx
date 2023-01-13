import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../Components/Layout/Footer'
import Home from '../Components/Pages/Home'
import Navbar from '../Components/Layout/Navbar'
import Contacto from '../Components/Pages/Contacto'
import QuieroSerModelo from '../Components/Pages/QuieroSerModelo'
import Staff from '../Components/Pages/Staff'
import Login from '../Components/Pages/Login'



const RouterPrincipal = () => {


  return (
      <>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Contacto' element={<Contacto/>}/>
        <Route exact path='/QuieroSerModelo' element={<QuieroSerModelo/>}/>
        <Route exact path='/Staff' element={<Staff/>}/>
        <Route exact path='/Login' element={<Login/>}/>

      </Routes>
      
      <Footer/>
      </>
      )
}

export default RouterPrincipal