import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../Components/Layout/Footer'
import Home from '../Components/Pages/Home'
import Navbar from '../Components/Layout/Navbar'
import Contacto from '../Components/Pages/Contacto'
import QuieroSerModelo from '../Components/Pages/QuieroSerModelo'
import Staff from '../Components/Pages/Staff'
import Login from '../Components/Pages/Login'
import Administrador from "../Components/Pages/Views/Administrador"
import EditarModelo from "../Components/Pages/Views/Modelos/EditarModelo"
import CrearModelo from "../Components/Pages/Views/Modelos/CrearModelo"
import DetalleModelo from "../Components/Pages/Views/DetalleModelo"
import Error404 from '../Components/Pages/Views/Error404'
import AboutUs from '../Components/Pages/Views/AboutUs'
import Perfilacademico from '../Components/Pages/Academia/Perfilacademico'


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
        <Route exact path='/Administrador' element={<Administrador/>}/>
        <Route exact path='/Administrar/crear-modelo' element={<CrearModelo/>}/>
        <Route exact path='/Administrar/editar/:id' element={<EditarModelo/>}/>
        <Route exact path='/detalle-modelo/:id' element={<DetalleModelo/>}/>
        <Route exact path='/error404' element={<Error404/>}/>
        <Route exact path='/AboutUs' element={<AboutUs/>}/>
        <Route exact path='/Perfilacademico' element={<Perfilacademico/>}/>

      </Routes>
      
      <Footer/>
      </>
      )
}

export default RouterPrincipal