import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../Components/Layout/Footer'
import Home from '../Components/Pages/Home'
import Navbar from '../Components/Layout/Navbar'
import Contacto from '../Components/Pages/Contacto'
import QuieroSerModelo from '../Components/Pages/QuieroSerModelo'
import Staff from '../Components/Pages/Staff'
import Login from '../Components/Pages/Login'
import RecuperarPass from '../Components/Pages/RecuperarPass/RecuperarPass'
import { AuthProvider } from "../Context/authContext"
import { ProtectecRoute } from '../Components/ProtectecRoute/ProtectecRoute'


const RouterPrincipal = () => {


  return (
      <>
      <AuthProvider>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={ <ProtectecRoute> <Home/> </ProtectecRoute>  }/>
          <Route exact path='/Contacto' element={<Contacto/>}/>
          <Route exact path='/QuieroSerModelo' element={<QuieroSerModelo/>}/>
          <Route exact path='/Staff' element={<Staff/>}/>
          <Route exact path='/Login' element={<Login/>}/>
          <Route exact path='/recuperarPass' element={<RecuperarPass/>}/>
        </Routes>
      </AuthProvider>
      <Footer/>
      </>
      )
}

export default RouterPrincipal