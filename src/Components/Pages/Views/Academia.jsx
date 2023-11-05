import React from "react";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import academia1 from "../../../Image/academia1.png";
import foto1 from "../../../Image/Academia/academia01.png";
import foto2 from "../../../Image/Academia/academia02.png";
import foto3 from "../../../Image/Academia/academia03.png";
import foto4 from "../../../Image/Academia/academia04.png";
import "./academia.css";

const fotoChicas = {
  width: "250px",
};

const Academia = () => {
  return (
    <div>
      <h2 className="text-center my-5">Nuestras Clases</h2>
      <div className="d-flex justify-content-center">
      <p className="text-center">
        <i className="bi bi-stopwatch mx-2"></i> Horarios: 10:30 a 12:30 - 15:30
        a 17:30
      </p>
       <a href="#seccion1" className="mx-4 linkEstudio  align-items-center">Plan de estudios <i className="bi bi-book"></i></a>
      </div>

      <div className="my-3">
        <h3 className="text-center">¿QUE PUEDES ESPERAR?</h3>
        <p className="text-center">
          Duracion 5 meses, incluye tu book de fotos
        </p>
        <p className="text-center">
          EMD te brinda un entrenamiento, en el cual los cursantes adquieren las
          herramientas necesarias para convertirse en verdaderos profesionales
          de la moda. Este curso está orientado no solo a futuros modelos, si no
          también para aquellas personas que deseen mejorar su imagen y destacar
          su personalidad en la vida cotidiana.
        </p>

        <div>
          <div className="d-flex justify-content-center mx-5 my-5">
            <img
              src={foto1}
              alt="academia1"
              style={fotoChicas}
              className="mx-2 "
            />
            <img
              src={foto2}
              alt="academia2"
              style={fotoChicas}
              className="mx-2 "
            />
            <img
              src={foto3}
              alt="academia3"
              style={fotoChicas}
              className="mx-2 "
            />
            <img
              src={foto4}
              alt="academia4"
              style={fotoChicas}
              className="mx-2 "
            />
          </div>
          <div>
            <p className="text-center " id='seccion1'>
              Esperamos que compartas tus sueños con nosotros, <br></br>
              trabajamos con una amplia variedad de perfiles y nos gustaria
              poder sumar el tuyo a nuestra agencia
            </p>
            
          </div>
          <hr className="mx-4" />
        </div>
        <div className="my-3" > 
          <h3 className="my-3 text-center">Programa de Estudio</h3>
          <Accordion defaultActiveKey="0" className="mx-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Modulo 1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Modulo 2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Modulo 3</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <div className="my-5">
        <h3 className="text-center">ACADEMIA DE MODELOS</h3>
        <p className="text-center">
          Puedes venir a nuestra agencia los sabados durante el horario de
          clases (Horarios: 10:30 a 12:30 - 15:30 a 17:30), <br></br>y tener tu primera clase gratis
        </p>
        
      </div>
      <hr className="m-4" />

      <div className="d-flex justify-content-center">
        <div className=" divContacto my-3 text-center">
          <Link className="botonContacto" to="/contacto">
            Ponte en contacto
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Academia;
