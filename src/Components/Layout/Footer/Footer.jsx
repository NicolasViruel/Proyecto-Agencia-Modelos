import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from "../../../Image/Imagen.jpg";
import fiscal from '../../../Image/dataFiscal.png'
import "./footer.css"

const Footer = () => {
  return (
      <>
       <Container className='text-center' fluid style={{position: 'absolute', marginTop: "auto"}}>
            <Row className='bg-dark row'>
                <Col xs={12} md={6} lg={3} >
                    <Image src={logo} alt="logo" width="150" className='mt-3' />
                </Col>
                <Col className='d-flex align-items-center flex-wrap justify-content-center' xs={12} md={6} lg={3}>
                    <div className='d-flex align-items-center flex-wrap justify-content-center'>
                        <Link className="nav-link text-danger" to="/">Home</Link>
                        <Link className="nav-link text-warning mx-2" to="/contacto">Contacto</Link>
                        <Link className="nav-link text-warning" to="/staff">Staff</Link>
                        <Link className="nav-link text-warning mx-2" to="/login">Login</Link>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={3} >
                    <h5 className="mb-3 text-white font-weight-bolder mt-3">Nuestras Redes</h5>
                    <div className='d-flex flex-wrap justify-content-center align-items-center'>
                        <a href="https://www.facebook.com/login/" className=" redes fa-brands fa-facebook text-decoration-none text-center mx-2 mt-2" target="_blank"></a>
                        <a href="https://www.whatsapp.com/" className="redes fa-brands fa-whatsapp text-center text-decoration-none mx-2 mt-2" target="_blank"></a>
                        <a href="https://twitter.com/i/flow/login" className="redes fa-brands fa-twitter text-center text-decoration-none mx-2 mt-2" target="_blank"></a>
                        <a href="https://www.instagram.com/accounts/login/?" className="redes fa-brands fa-instagram text-center text-decoration-none mx-2 mt-2" target="_blank"></a>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={3} className="my-auto">
                    <Image className='my-3' src={fiscal} alt="fiscal" width="100" />
                </Col>
                <Row className='text-center d-none d-md-block' >
                    <small className="text-white text-center mt-2 mb-2">Quoted prices may vary without prior notice and do not include VAT - Invoice A. All images and commercial descriptions are not contractual. Descriptions of all products and conditions are subject to change without notice, may contain errors, or may not contain all descriptive data. In order to obtain complete and comprehensive advice, they must attend the premises. <Link to='/terminos' className="text-center">Terms and Conditions</Link></small>
                    <p><small className="mt-2 text-white font-weight-bolder border-bottom-2">Copyrigth 2022 © All rights reserved<span className="text-info"> Fieros Web</span></small></p>
                </Row>
            </Row>
        </Container>
      </>
 
  )
}

export default Footer