import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";




const Contacto = () => {
  const styles = {
    display: '',
    alignItems: '',
    justifyContent: '',
  };

  return (
    <div className="">
      <h1 className="text-center my-5">Esperamos tu Mensaje</h1>
      <div>
        <p className="text-center">
          Estaremos contestando tus mensajes dentro de 24hrs en días hábiles
        </p>
        <br />
        <p className="text-center m-3">
          Para poder brindar un mayor acompañamiento y asesoramiento de nuestros
          servicios, le solicitamos tenga presente comunicarnos con
          anterioridad. Gracias
        </p>
      </div>
      <div className="container text-center" style={styles}>
        <Form className="p-5">
          <Row>
            <Col className="row container">
              <Form.Group controlId="formGridEmail" className="">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Carla Díaz" />
              </Form.Group>
            </Col>
            <Col className="row container">
              <Form.Group controlId="formGridPassword">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="CarlaD@gmail.com"/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="row container">
              <Form.Group controlId="formGridPassword">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="number" placeholder="3814657894" />
              </Form.Group>
            </Col>
            <Col className="row container">
              <Form.Group controlId="formGridPassword">
                <Form.Label>Red Social</Form.Label>
                <Form.Control type="text" placeholder="Opcional" />
              </Form.Group>
            </Col>
          </Row>
          <Col  className="my-3 row container">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>
          </Col>
          <div className="text-center">

          <Button variant="btn btn-outline-dark" type="submit">
            Enviar Mensaje
          </Button>
          </div>
        </Form>
      </div>
      <div className="text-center my-5">
        <h3>Tambíen Puedes</h3>
        <p>Conocernos por nuestras redes sociales y comunicarte con nosotros por otros medios</p>
      </div>

    </div>
  );
};

export default Contacto;
