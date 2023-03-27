import React from "react";
import { Container } from "react-bootstrap";
import ImagenError from "../../../Image/Error.jpg";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <Container>
      <div
        style={{
          backgroundImage: `url(${ImagenError})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: 400,
          width: "100%",
        }}
      ></div>
      <div className="text-center m-3">
        <h2 className="my-5">Oops! La pagina solicitada no se encuentra de momento...</h2>
        <Link className="btn btn-primary" to="/">
          <i class="fas fa-chevron-left"></i> Volver al Inicio
        </Link>
      </div>
    </Container>
  );
};

export default Error404;
