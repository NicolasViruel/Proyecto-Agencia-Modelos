import React from 'react'
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { NavLink} from 'react-router-dom';
import { useAuth } from '../../../Context/authContext';
import "./Navbar.css"


const NavbarScroll = () => {
  const {logout, loading} = useAuth()
 
  const handleLogout = async () =>{
    await logout();
  }

  if (loading) return <h2>Loading</h2>


  return (
    <Navbar className="bg-ligth text-center" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">E M D Models</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-4 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <NavLink className="nav-link " to="/">Home</NavLink>
          <NavLink className="nav-link " to="/Contacto">Contacto</NavLink>
          <NavLink className="nav-link " to="/QuieroSerModelo">Quiero ser Modelo</NavLink>
          <NavLink className="nav-link " to="/Staff">Staff</NavLink>
          <NavLink className="nav-link " to="/AboutUs">Quienes Somos</NavLink>
          <NavLink className="nav-link " to="/Login">Login</NavLink>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-dark">Buscar</Button>
          <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarScroll


