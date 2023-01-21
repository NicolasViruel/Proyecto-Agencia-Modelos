import React from "react";
import { Card, Button } from "react-bootstrap";
import "../Staff/staff.css";

const Staff = () => {
  return (
    <div>
      <h1 className="text-center my-3">Staff</h1>
      <hr className="mx-4" />
      <Card
        style={{ width: "18rem" }}
        className="m-5 img-fluid shadow p-4 mb-3 bg-white rounded"
      >
        <Card.Img
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6fqq_I5J2vx6indILC-iA_0qpipndzYxsgXg7Sc51A0NOX6533tJMdMiLLoq-RN74SA&usqp=CAU"
        />
        <Card.Body>
          <Card.Title>Mariana Rojas</Card.Title>
          <Card.Text>
            ¡Mariana Rojas, con su aspecto audaz y su encanto de colegial, puede
            hacer que tu corazón dé un vuelco!
          </Card.Text>
          <Button variant="primary">Ver detalle</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Staff;
