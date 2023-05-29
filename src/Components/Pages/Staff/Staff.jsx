import React, { useEffect, useState } from "react";
import CardModelo from "../Views/Modelos/CardModelo";
import { consultarAPI } from "../../../helpers/queries";
// import { getStudents} from "../../../helpers/students";
import { Container, Row } from "react-bootstrap";
import "../Staff/staff.css";

const Staff = () => {
  const [modelos, setModelos] = useState([]);

  // useEffect(() => {
  //   getStudents().then((respuesta) => {
  //     console.log(respuesta);
  //     setModelos(respuesta);
  //   });
  // }, []);

  useEffect(() => {
    consultarAPI().then((respuesta) => {
      console.log(respuesta);
      setModelos(respuesta);
    });
  }, []);

  return (
    <div>
      <h1 className="text-center my-3">Staff</h1>
      <hr className="mx-4" />
      <Container fluid>
        <Row>
          {modelos.map((modelos) => (
            <CardModelo
              key={modelos.id}
              modelo={modelos}
            ></CardModelo>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Staff;
