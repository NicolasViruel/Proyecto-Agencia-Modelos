import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import {GoLocation, GoMail} from "react-icons/go";
import {IoLogoWhatsapp, IoLogoInstagram, IoLogoFacebook,IoLogoYoutube} from "react-icons/io";
import locationemd from "../../../Image/locationemd.png"



const Contacto = () => {
  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div>
      <h1 className="text-center my-5">Esperamos tu Mensaje</h1>
      <div>
        <p className="text-center">
          Estaremos contestando tus mensajes dentro de 24hrs en días hábiles
        </p>
        <br />
        <p className="text-center">
          Para poder brindar un mayor acompañamiento y asesoramiento de nuestros
          servicios, le solicitamos tenga presente comunicarnos con
          anterioridad. Gracias
        </p>
      </div>
      <div className="m-5" style={styles}>
        <Form>
          <Row>
            <Col xs={6}>
              <Form.Group controlId="formGridEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Carla Díaz" />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group controlId="formGridPassword">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="CarlaD@gmail.com" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Form.Group controlId="formGridPassword">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="number" placeholder="3814657894" />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group controlId="formGridPassword">
                <Form.Label>Red Social</Form.Label>
                <Form.Control type="text" placeholder="Opcional" />
              </Form.Group>
            </Col>
          </Row>
          <Col xs={12} className="my-3">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>
          </Col>
          <div className="text-center">

          <Button variant="primary" type="submit">
            Enviar Mensaje
          </Button>
          </div>
        </Form>
      </div>
      <div className="text-center">
        <h3>Tambíen Puedes</h3>
        <p>Conocernos por nuestras redes sociales y comunicarte con nosotros por otros medios</p>
      </div>
      <div className="d-flex justify-content-center">
        <div style={{width:400}}>

        <p><GoLocation/> Avenida Aconquija 1900, Yerba Buena Tucumán</p>
        <p><IoLogoWhatsapp/>+54 9 3812 02-1097</p>
        <p><GoMail/> emd.modelsagency@gmail.com</p>
        <p><a href="http://https://www.instagram.com/emd.modelsagency/"><IoLogoInstagram/> emd.modelsagency</a><a href=""></a> </p>
        <p><a href="https://www.facebook.com/people/EMD-Models-Agency/100087454267211/"><IoLogoFacebook/> EMD.modelsagency</a></p>
        <p><a href="https://www.youtube.com/@emdmodelsagency4902"><IoLogoYoutube/> EMD.modelsagency</a> </p>
        </div>
        <div>
          <img src={locationemd} alt="ubicacion google maps" style={{width:400, height:224}}/>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
