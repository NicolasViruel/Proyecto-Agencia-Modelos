import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../Layout/Footer/img/logoemd.jpg"
import img1 from "../Footer/img/img1.jpg"
import img2 from "../Footer/img/img2.jpg"
import img3 from "../Footer/img/img3.jpg"
import img4 from "../Footer/img/img4.jpg"
import img5 from "../Footer/img/img5.jpg"
import img6 from "../Footer/img/img6.jpg"
import img7 from "../Footer/img/img7.jpg"
import img8 from "../Footer/img/img8.jpg"
import "../Footer/Footer.css"



const Footer = () => {
  return (
      <>
       <section className='container-fluid bg-dark ' >
           
            <div><h2 className='text-warning display-6'>Contacto</h2></div>
          
          <div className='d-flex flex-row'>
          <div className='d-flex flex-column logos'>
                   <a className="bi bi-whatsapp text-light btn " href='https://www.whatsapp.com/?lang=es' target='_blank'>  54 9 3812 02-1097 </a>
                   <a className="bi bi-envelope text-light btn " href='https://www.gmail.com/mail/help/intl/es/about.html?iframe' target='_blank'> emd.modelsagency@gmail.com</a>
                   <a className="bi bi-instagram text-light btn " href='https://www.instagram.com/emd.modelsagency/' target='_blank'> emd.modelsagency</a>
                   <a className="bi bi-youtube text-light btn " href='https://www.youtube.com/@emdmodelsagency4902' target='_blank'> EMD Models Agency</a>
                   <a className="bi bi-geo-alt text-light btn " href='https://www.google.com.ar/maps/place/Av.+Aconquija+1900,+T4107+Yerba+Buena,+Tucum%C3%A1n/@-26.8129194,-65.2996752,17z/data=!3m1!4b1!4m6!3m5!1s0x942242d7642ecf67:0x697ae6b582d34865!8m2!3d-26.8129242!4d-65.2971003!16s%2Fg%2F11c26kfnvg?entry=ttu' target='_blank'> Av. Aconquija 1900 Yerba Buena</a>
                  </div>
                 <div className='d-flex flex-row container-fluid justify-content-center'>
                  <div><img src={img1} alt="sponsor1" className='' id='caja' /></div>
                  <div><img src={img2} alt="sponsor2" className='' id='caja'/></div>
                  <div><img src={img3} alt="sponsor3" className='' id='caja'/></div>
                  <div><img src={img4} alt="sponsor4" className='' id='caja'/></div>
                  <div><img src={img5} alt="sponsor5" className='' id='caja'/></div>
                  <div><img src={img6} alt="sponsor6" className='' id='caja'/></div>
                  <div><img src={img7} alt="sponsor7" className='' id='caja'/></div>
                  <div><img src={img8} alt="sponsor8" className='' id='caja'/></div>
                 </div>
          </div>
          
             
          
          <div className='my- text-start d-flex'>
                  <a href="/">
                  <img src={logo} alt="logo empresa"  className='btn my-5' id='logo' href="/"/>
                  </a>
                  
          </div>
                   
                 
       
              
                
            
        </section>
      </>
 
  )
}

export default Footer