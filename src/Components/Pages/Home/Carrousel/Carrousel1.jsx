import React from 'react'
import { Carousel } from "react-bootstrap";
import mod6 from "../img/mod6.jpg"
/*import "../../Home/home.css"*/
const Calesita1 = () => {
  return (
    <Carousel fade className='container justify-content-center'>
      <Carousel.Item interval={1000} className=''>
       
        <img
          className=""
          src={mod6}
          alt="modelo"
        />
     
        <Carousel.Caption>
          <div className="trasluz">

            <h3>EMC Models</h3>
            <p>Agencia de Modelos Tucuman Argentina</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item interval={1000} className=''>
        <img
          className=""
          src={mod6}
          alt="modelo"
        />
        <Carousel.Caption>
          <div className="trasluz">
            <h3>Un excelente lugar </h3>
            <p>Conocenos</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>


    </Carousel>
  )
}

export default Calesita1