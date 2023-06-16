import React from "react";
import Calesita from "./Carrousel/Carrousel";
import "../Home/home.css";
import academiaImg from "../../../Image/HomeImg/academia.jpeg";
import agenciaImg from "../../../Image/HomeImg/agencia.jpeg";

const Home = () => {
  return (
    <div>
      <Calesita />
      <div className="d-flex justify-content-between my-5 mx-3">
        <figure className="position-relative">
          <div className="academyBox">
            <img src={academiaImg} alt="academia" className="img-fluid" />
          </div>
          <figcaption className="academiaTexto text-light">Academia</figcaption>
        </figure>
        <figure className="position-relative">
          <div className="agencyBox">
            <img src={agenciaImg} alt="agencia" className="img-fluid" />
          </div>
          <figcaption className="agenciaTexto text-light">Agencia</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Home;
