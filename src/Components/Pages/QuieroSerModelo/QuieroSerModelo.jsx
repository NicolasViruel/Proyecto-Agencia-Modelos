import React from "react";
import backgroundimg from "../../../Image/quierosermodeloEMD.jpg";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import imagen from "../../../Image/404.jpg";
import { Link } from "react-router-dom";

const QuieroSerModelo = () => {
  const estilo = { height: "500px", width: "500px" };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombre: "",
      apellido: "",
      edad: "",
      correo: "",
      mensaje: "",
    },
  });

  const onSubmit = (datos) => {
    console.log(datos);
    console.log("desde mi funcion submit");
  };

  return (
    <div>
      <h3 className="text-center my-2">ACADEMIA DE MODELOS</h3>
      <div className="text-center">
        <hr className="mx-5" />
        <p className="mx-5 text-center" style={{ fontSize: 20 }}>
          En EMD, tu perfil es importante para nosotros. Queremos brindarte la
          oportunidad de ser considerado para <br></br>
          futuros trabajos en la industria de modelos. El formulario de
          solicitud sera visto solo por nosotros y nadie <br></br>
          más. Nos esformzamos por crear un entorno seguro y acogedor, donde
          todas las identidades son bienvenidas. <br></br>
          Tu éxito es nuestro objetivo, y estamos comprometidos a ayudarte a
          alcanzar tus metas.
        </p>
      </div>
      <div className="d-flex justify-content-center">
      <div className="my-4 importante">
        <h5 className="text-center">¡IMPORTANTE!</h5>
        <p className="my-2 text-center">
          Para aplicar, el modelo tiene que ser mayor a 18 años,<br></br>
          de no ser el caso le pedimos que se comunique con nosotros a su
          representante legal.
        </p>
        <div className="d-flex justify-content-center">
        <div className="my-3 linkParaContacto text-center">
          <Link className="contacto">Dirigir a metodos de contacto</Link>
        </div>
      </div>
      </div>
      </div>
      <section className="d-flex justify-content-center">
        <div >
          <h5>Datos Personales</h5>
          <Form className="my-5 " onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex">
            <Form.Group className="mb-3 mx-3" controlId="formNombre">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Mariana Monteros"
                {...register("nombreapellido", {
                  required: "Este dato es obligatorio*",
                  minLength: {
                    value: 10,
                    message: "Debe ingresar como minimo 10 caracteres",
                  },
                  maxLength: {
                    value: 60,
                    message: "Debe ingresar como maximo 60 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombreapellido?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formApellido">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="MarianaM@gmail.com"
                {...register("email", {
                  required: "Este dato es obligatorio*",
                  minLength: {
                    value: 5,
                    message: "Debe ingresar como minimo 5 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message: "Debe ingresar como maximo 50 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombre?.message}
              </Form.Text>
            </Form.Group>
            </div>
            <div className="d-flex">
            <Form.Group className="mb-3 mx-3" controlId="formEdad">
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                type="number"
                placeholder="3814625333"
                {...register("telefono", {
                  required: "El telefono es un valor requerido*",
                  min: {
                    value: 10,
                    message: "El telefono debe tener como minimo 10 caracteres",
                  },
                  max: {
                    value: 10,
                    message: "El telefono debe tener como maximo 10 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.edad?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCorreo">
              <Form.Label>Red Social</Form.Label>
              <Form.Control
                type="name"
                placeholder="Mariana Monteros (@marianamonterosoficial)"
                
              />
              <Form.Text className="text-danger">
                {errors.correo?.message}
              </Form.Text>
            </Form.Group>
            </div>
            
            
           
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </div>
        
      </section>
    </div>
  );
};

export default QuieroSerModelo;
