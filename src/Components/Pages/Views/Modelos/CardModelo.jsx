import React from 'react';
import { Card} from "react-bootstrap"
import { Link } from "react-router-dom";


const CardModelo = ({modelo}) => {
    return (
        <Card
        style={{ width: "18rem" }}
        className="m-5 img-fluid shadow p-4 mb-3 bg-white rounded"
      >
        <Card.Img
          variant="top"
          src={modelo.imagen}
        />
        <Card.Body>
          <Card.Title>{modelo.nombreModelo}</Card.Title>
          <Card.Text>
            ¡Mariana Rojas, con su aspecto audaz y su encanto de colegial, puede
            hacer que tu corazón dé un vuelco!
          </Card.Text>
          <Link className="my-3 btn btn-primary" to={`/detalle-modelo/${modelo.id}`}>Ver detalle</Link>
        </Card.Body>
      </Card>
    );
};

export default CardModelo;