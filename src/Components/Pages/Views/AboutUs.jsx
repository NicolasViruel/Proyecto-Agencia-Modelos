import React from "react";
import { Container } from "react-bootstrap";
import Majo from "../../../Image/MajoTopa.png";
import Emilse from "../../../Image/EmilseCabrera.png";
import Denice from "../../../Image/DeniceGomez.png";
import EMD from "../../../../src/Components/Pages/Views/Modelos/img/logoEMD.jpg";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup,
  MDBIcon,
} from "mdb-react-ui-kit";

const AboutUs = () => {
  return (
    <Container className="bg-light">
      <div className="text-center">
        <img src={EMD} alt="" className="img-fluid w-25" />
      </div>
      <h3 className="text-center my-5 font-italic">
        <MDBIcon fas icon="quote-left fa-lg text-warning me-2" />
        La elegancia es la única belleza que nunca desaparece.
        <figcaption className="blockquote-footer my-1">
          Audrey Hepburn
        </figcaption>
      </h3>
      <div className="d-flex">
        <div>
          <MDBCardGroup>
            <MDBCard className="m-3">
              <MDBCardImage src={Majo} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle className="text-center my-3">
                  Maria Jose Topa
                </MDBCardTitle>
                <MDBCardText>
                  <p style={{ fontWeight: "bold" }}>CODIRECTORA</p>
                  <p>Modelo Profesional</p>
                  <p>Coach de modelos</p>
                  <p>Coach de adolescentes</p>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="m-3">
              <MDBCardImage src={Emilse} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle className="text-center my-3">
                  Emilse Cabrera
                </MDBCardTitle>
                <MDBCardText>
                  <p style={{ fontWeight: "bold" }}>CODIRECTORA</p>
                  <p>Modelo Profesional</p>
                  <p>Coach de modelos</p>
                  <p>Coach de niños</p>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="m-3">
              <MDBCardImage src={Denice} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle className="text-center my-3">
                  Denice Gomez Veliz
                </MDBCardTitle>
                <MDBCardText>
                  <p style={{ fontWeight: "bold" }}>CODIRECTORA</p>
                  <p>Modelo Profesional</p>
                  <p>Miss Argentina</p>
                  <p>Coach de Misses y modelos</p>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCardGroup>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
