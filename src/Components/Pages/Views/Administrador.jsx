import React from "react";
import { Link } from "react-router-dom";

const Administrador = () => {
  return (
    <div>
        <h2 className="text-center my-5">Administrador</h2>
        <hr className="mx-5"/>
    <div className="d-flex">
      <Link to="/Administrar/Administrar-Modelos">
        <div className="m-3">
          <h2 className="text-center">Staff</h2>
          <img
            src="https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="modelos"
          />
        </div>
      </Link>
      <Link to="/Administrar/Administrar-Campus">
        <div className="m-3">
          <h2 className="text-center">Alumnos</h2>
          <img
            src="https://media.istockphoto.com/id/942952674/photo/students-in-university.jpg?b=1&s=612x612&w=0&k=20&c=0Ru61D0hC5Y3X-d0WsD98oWW1vTJqeSfxQw8oNRca3g="
            alt="alumnos"
          />
        </div>
      </Link>
    </div>
    </div>
  );
};

export default Administrador;
