import React from "react";
import { Button } from "react-bootstrap";

const Perfilacademico = () => {
  return (
    <>
      <div className="my-5">
        <h1>Mi perfil EMD</h1>
        <hr className="mx-2"/>
        <div className="my-5 mx-4">
        <h2>Estado academico:</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ab incidunt asperiores error vitae porro.</p>
      </div>
        <hr className="mx-2"/>
      </div>
      <div>
        <div className="d-flex justify-content-evenly">
          <div>
            <p>Nombre completo: Maria Madgalena Rosales</p>
            <p className="my-3">Edad: 27</p>
            <Button>Editar Perfil</Button>
            <br />
            <Button className="my-3">Portfolio</Button>
          </div>
          <div>
            <img
              width={250}
              height={250}
              src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
        <hr className="mx-5"/>
        <h5 className="mx-5 my-4">Medidas:</h5>
        <div className="mx-3">
          <p>Color Ojos: Azul claro</p>
          <p>Color Pelo: Negro</p>
          <p>Altura: 1.7m</p>
          <p>Calzado: 23</p>
          <p>Pecho: 90cm</p>
          <p>Cintura: 60cm</p>
          <p>Cadera: 90cm</p>
        </div>
        <hr className="mx-4"/>
        <h5 className="text-center">Baul de fotos eventos EMD</h5>
      </div>
    </>
  );
};

export default Perfilacademico;
