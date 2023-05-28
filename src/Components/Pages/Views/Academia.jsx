import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap"
import Accordion from 'react-bootstrap/Accordion';
import academia1 from "../../../Image/academia1.png"


const Academia = () => {
  return (
    <div>
      <h2 className="text-center my-5">Academia de Modelos</h2>
      <div className="mx-3">
        <MDBCarousel showControls showIndicators>
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={1}
            src="https://mdbootstrap.com/img/new/slides/041.jpg"
            alt="..."
          >
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselItem>
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={2}
            src="https://mdbootstrap.com/img/new/slides/042.jpg"
            alt="..."
          >
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselItem>
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={3}
            src="https://mdbootstrap.com/img/new/slides/043.jpg"
            alt="..."
          >
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </MDBCarouselItem>
        </MDBCarousel>
      </div>
      <h3 className="text-center my-3">Informacion Academica</h3>
      
      
      <hr className="mx-4"/>
      <div><h3 className="text-center">Modelaje Profesional</h3>
      <h4 className="text-center">Nuestras clases</h4>
      <p className="text-center">Duracion 5 meses, incluye tu book de fotos</p>
      <p className="text-center">Horarios: 10:30 a 12:30 - 15:30 a 17:30</p>
      <p className="text-center">EMD te brinda un entrenamiento, en el cual los cursantes adquieren las herramientas necesarias para convertirse en verdaderos profesionales de la moda.
Este curso está orientado no solo a futuros modelos, si no también para aquellas personas que deseen mejorar su imagen y destacar su personalidad en la vida cotidiana.

</p>
<Accordion defaultActiveKey="0" className="mx-4">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Modulo 1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Modulo 2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Modulo 3</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

      </div>
      <hr className="m-4"/>
      <div><h4 className="text-center my-5">¿ Que puedes esperar ?</h4>
        <div className="d-flex justify-content-center">
        <img src={academia1} alt="academia"/>
        </div>
        <p className="text-center my-3">Nosotros esperamos que compartas tus sueños con nosotros, trabajamos con una amplia variedad de perfiles y nos gustaria poder sumar el tuyo a nuestra agencia</p>
      </div>
      <div className="text-center">

      <Link className="btn btn-primary my-3" to="/contacto">Contacto</Link>
      </div>
    </div>
  );
};

export default Academia;
