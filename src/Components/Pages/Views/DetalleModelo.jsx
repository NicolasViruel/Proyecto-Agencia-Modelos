import { useEffect, useState } from "react";
import { Badge, Card, Col, Row, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { obtenerModeloAPI } from "../../../helpers/queries";

const DetalleProducto = () => {
  const [modelo, setModelo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    obtenerModeloAPI(id).then((respuesta) => {
      if (respuesta.status === 200) {
        setModelo(respuesta.dato);
      } else {
        Swal.fire("Ocurrio un error", "Vuelva a intentarlo", "error");
      }
    });
  }, []);

  return (
    <div>
      <Link className="btn btn-primary m-5" to="/Staff">
        <i class="fas fa-chevron-left"></i> Volver
      </Link>

      <Card className="container my-5 mainSection">
        <Row className="w-75">
          <Col md={6}>
            <img src={modelo.imagen} className="w-100" />
          </Col>
          <Col md={6} className="py-3">
            <h2 className="text-center">{modelo.nombreModelo}</h2>
            <hr />
            <p>Edad: {modelo.edad}</p>
            <p>Color de Ojos: {modelo.colorOjos}</p>
            <p>Color de Pelo: {modelo.colorPelo}</p>
            <hr />
            <h4 className="mt-3 text-center">Medidas:</h4>
            <p>Altura: {modelo.altura}</p>
            <p>Calzado: {modelo.calzado}</p>
            <p>Pecho: {modelo.pecho}</p>
            <p>Cintura: {modelo.cintura}</p>
            <p>Cadera: {modelo.cadera}</p>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default DetalleProducto;
