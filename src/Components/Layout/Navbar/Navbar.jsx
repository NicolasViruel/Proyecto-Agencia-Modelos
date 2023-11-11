import React from 'react'
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { NavLink} from 'react-router-dom';
import { useAuth } from '../../../Context/authContext';
import "./Navbar.css"
import logoNav from "../../Layout/Footer/img/logoemd.jpg"


const NavbarScroll = () => {
  const {logout, loading} = useAuth()
 
  const handleLogout = async () =>{
    await logout();
  }

  if (loading) return <h2>Loading</h2>


  return (
    <Navbar className="bg-ligth text-center bg-grey" expand="lg">
    <Container>
      <Navbar.Brand href="/" className='text-start container display-flex'><img src={logoNav} alt="logo EMD" className='' id="logo" /></Navbar.Brand>
      
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-4 my-lg-0 container " style={{ maxHeight: '100px' }}navbarScroll>
          <NavLink className="nav-link " to="/">Home</NavLink>
          <NavLink className="nav-link " to="/Contacto">Contacto</NavLink>
          <NavLink className="nav-link " to="/Eventos">Eventos</NavLink>
          <NavLink className="nav-link " to="/QuieroSerModelo">Quiero ser Modelo</NavLink>
          <NavLink className="nav-link " to="/Staff">Staff</NavLink>
          <NavLink className="nav-link " to="/AboutUs">Quienes Somos</NavLink>
   
        
        </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarScroll


