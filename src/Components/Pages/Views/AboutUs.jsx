import React from "react";
import { Container } from "react-bootstrap";
import Majo from "../../../Image/MajoTopa.png";
import Emilse from "../../../Image/EmilseCabrera.png";
import Denice from "../../../Image/DeniceGomez.png";
import EMD from "../../../Image/EMDlogo.png";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup,
  MDBIcon,
} from "mdb-react-ui-kit";
import empatia from "../../../Image/empatia.png";
import inclusion from "../../../Image/inclusion.png";
import profesionalismo from "../../../Image/profesionalismo.png";
import seguridad from "../../../Image/seguridad.png";
import "./academia.css";
import { Link } from "react-router-dom";



const AboutUs = () => {
  return (
    <Container >
      <div className="text-center">
        <img src={EMD} alt="" className="img-fluid" />
      </div>
      <h3 className="text-center my-5 font-italic">
        <MDBIcon fas icon="quote-left fa-lg text-warning me-2" />
        La elegancia es la única belleza que nunca desaparece.
        <figcaption className="blockquote-footer my-1">
          Audrey Hepburn
        </figcaption>
      </h3>
      <div>
        <h3 className="text-center">Fundadoras de EMD</h3>
        <p className="text-center">
          Las fundadoras de nuestra agencia de modelos contemplan con
          experiencia como modelos profesionales a<br></br>nivel nacion e
          internacional las convierte en líderes destacadas en la industria de
          la moda.
          <br></br>La combinación de la experiencia en pasarelas, editoriales,
          publicidad y proyectos de gran escala en nuestras
          <br></br>fundadiras es clave para nuestro éxito. Conocen los desafíos
          u oportunidades que enfrentan las modelos en
          <br></br>la industria y están comprometidas en brindarte las
          herramientas y el apoyo necesarios.
        </p>
      </div>
      <div className="d-flex">
        <div>
          <MDBCardGroup>
            <MDBCard className="m-3">
              <MDBCardImage src={Majo} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle
                  className="text-center my-3"
                  style={{ fontWeight: "bold" }}
                >
                  Maria Jose Topa
                </MDBCardTitle>
                <MDBCardText>
                  <p className="text-center">
                    CODIRECTORA <br></br>
                    Modelo Profesional<br></br>Coach de modelos<br></br>Coach de
                    adolescentes
                  </p>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="m-3">
              <MDBCardImage src={Emilse} alt="FotoEmilse" position="top" />
              <MDBCardBody>
                <MDBCardTitle
                  className="text-center my-3"
                  style={{ fontWeight: "bold" }}
                >
                  Emilse Cabrera
                </MDBCardTitle>
                <MDBCardText>
                  <p className="text-center">
                    CODIRECTORA <br></br>
                    Modelo Profesional<br></br>Coach de modelos<br></br>Coach de
                    niños
                  </p>{" "}
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="m-3">
              <MDBCardImage src={Denice} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle
                  className="text-center my-3"
                  style={{ fontWeight: "bold" }}
                >
                  Denice Gomez Veliz
                </MDBCardTitle>
                <MDBCardText>
                  <p className="text-center">
                    CODIRECTORA <br></br>
                    Modelo Profesional<br></br>Miss Argentina<br></br>Coach de
                    Misses y modelos
                  </p>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCardGroup>
        </div>
      </div>
      <hr className="mx-5" />
      <div>
        <h2 className="text-center">Nuestros Valores</h2>
        <div className="d-flex justify-content-center my-3">
          <div>
            <img src={empatia} alt="empatia" />
            <p className="mx-4">
              Nos interesa conocerte y <br></br>procurar que en cada<br></br>
              trabajo o producción se<br></br>puedan respetar tus<br></br>
              valores y preocupaciones
            </p>
          </div>
          <div>
            <img src={inclusion} alt="inclusion" />
            <p className="mx-4">
              Creemos que el futuro de
              <br></br>la moda tiene una
              <br></br>
              oportunidad para todo
              <br></br>tipo de cuerpos y<br></br>
              personas, si tu pasión es la<br></br>
              moda te aseguro que
              <br></br>
              tenemos un lugar para ti
            </p>
          </div>
          <div>
            <img src={profesionalismo} alt="profesionalismo" />
            <p className="mx-4">
              Sabemos cómo lograr un <br></br>
              buen trabajo en tiempo y <br></br>
              forma. <br></br>
              Este resultado será <br></br>
              conllevado por nuestra <br></br>
              experiencia y dedicación <br></br>
              siempre atentos a mejorar <br></br>
              hasta el mas mínimo <br></br>
              detalle.
            </p>
          </div>
          <div>
            <img src={seguridad} alt="seguridad" />
            <p className="mx-4">
              Nos comprometemos a <br></br>
              siempre estar <br></br>
              acompañandote en cada<br></br>
              evento o producción. <br></br>
              El mundo de la moda <br></br>
              puede dar miedo, por eso <br></br>
              te aseguramos que <br></br>
              estaremos listos para ti.
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center my-5">
      <Link className="linkContacto" to="/Contacto">Ponte en Contacto</Link>
      </div>
    </Container>
  );
};

export default AboutUs;
