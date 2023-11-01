import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../Layout/Footer/img/logoEmd.jpg"
import "../Footer/Footer.css"



const Footer = () => {
  return (
      <>
       <Container className='' fluid style={{position: 'absolute', marginTop: "auto"}}>
            <Row className='bg-dark'>
            
                   <h2 className='text-warning display-6'>Contacto</h2>
                   <div className='d-flex flex-column align-items-start'>
                   <a className="bi bi-whatsapp text-light btn" href='https://www.whatsapp.com/?lang=es' target='_blank'>  54 9 3812 02-1097</a>
                   <a className="bi bi-envelope text-light btn" href='https://www.gmail.com/mail/help/intl/es/about.html?iframe' target='_blank'> emd.modelsagency@gmail.com</a>
                   <a className="bi bi-instagram text-light btn" href='https://www.instagram.com/emd.modelsagency/' target='_blank'> emd.modelsagency</a>
                   <a className="bi bi-youtube text-light btn " href='https://www.youtube.com/@emdmodelsagency4902' target='_blank'> EMD Models Agency</a>
                   <a className="bi bi-geo-alt text-light btn " href='https://www.google.com.ar/maps/place/Av.+Aconquija+1900,+T4107+Yerba+Buena,+Tucum%C3%A1n/@-26.8129194,-65.2996752,17z/data=!3m1!4b1!4m6!3m5!1s0x942242d7642ecf67:0x697ae6b582d34865!8m2!3d-26.8129242!4d-65.2971003!16s%2Fg%2F11c26kfnvg?entry=ttu' target='_blank'> Av. Aconquija 1900 Yerba Buena</a>
                 </div>
                 <div className='my-5 text-center'>
                  <a href="/">
                  <img src={logo} alt="logo empresa" className='w-25 btn' id='logo' href="/"/>
                  </a>
                  
                 
                 </div>
       
              
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