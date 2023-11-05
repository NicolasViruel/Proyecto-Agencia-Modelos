import React from 'react'
import { Carousel } from "react-bootstrap";
import img1 from "../img/img1.jpg"
const Calesita = () => {
  return (
    <Carousel fade>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 rounded"
          src={img1}
          alt="modelo"
        />
        <Carousel.Caption>
          <div className="trasluz">

            <h3>EMC Models</h3>
            <p>Agencia de Modelos Tucuman Argentina</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 rounded"
          src={img1}
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

export default Calesita