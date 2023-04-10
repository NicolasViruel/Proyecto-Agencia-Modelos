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
import CrearAlumno from "../Components/Pages/Views/Modelos/CrearAlumno"
import EditarAlumno from "../Components/Pages/Views/Modelos/EditarAlumno"
import EditarPerfil from '../Components/Pages/Academia/EditarPerfil'
import AdministrarAlumnos from '../Components/Pages/Views/Modelos/AdministrarAlumnos'
import AdministrarModelos from "../Components/Pages/Views/Modelos/AdministrarModelos"


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
        <Route exact path='/Administrar/crear-alumno' element={<CrearAlumno/>}/>
        <Route exact path='/Administrar/editar-alumno/:id' element={<EditarAlumno/>}/>
        <Route exact path='/Administrar/Administrar-Campus' element={<AdministrarAlumnos/>}/>
        <Route exact path='/Administrar/Administrar-Modelos' element={<AdministrarModelos/>}/>
        <Route exact path='/Administrar/editar/:id' element={<EditarModelo/>}/>
        <Route exact path='/detalle-modelo/:id' element={<DetalleModelo/>}/>
        <Route exact path='/AboutUs' element={<AboutUs/>}/>
        <Route exact path='/Academia/PerfilAcademico' element={<Perfilacademico/>}/>
        <Route exact path='/Academia/PerfilAcademico/Editar-Perfil' element={<EditarPerfil/>}/>
        <Route exact path='/error404' element={<Error404/>}/>

      </Routes>
      
      <Footer/>
      </>
      )
}

export default RouterPrincipal