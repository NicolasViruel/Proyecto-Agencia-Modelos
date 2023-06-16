import React from "react";
import backgroundimg from "../../../Image/quierosermodeloEMD.jpg";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import imagen from "../../../Image/404.jpg"

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

  const onSubmit = (datos)=>{
    console.log(datos)
    console.log("desde mi funcion submit")
  }

  return (
    <div>
      <h3 className="text-center my-2">Academia de Modelos</h3>
      <div className="text-center">
        <img src={backgroundimg} alt="fondo" style={estilo} />
        <hr className="mx-5" />
        <p className="mx-5" style={{ fontSize: 20 }}>
          Desde EMD ayudamos a personas como vos, que quieren empezar en el
          mundo del modelaje, y si ya tenes experiencia y queres postularte para
          ser parte del staff EMD comunicanos
        </p>
        <hr className="mx-3" />
      </div>
      <section className="d-flex justify-content-around mx-3">
        <div>
          <Form className="my-5" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Label>Nombre *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Mariana Monteros"
                {...register("nombre", {
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
            <Form.Group className="mb-3" controlId="formApellido">
              <Form.Label>Apellido *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Mariana"
                {...register("apellido", {
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
            <Form.Group className="mb-3" controlId="formEdad">
              <Form.Label>Edad*</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ej: 23"
                {...register("edad", {
                  required: "La edad es un valor requerido*",
                  min: {
                    value: 18,
                    message: "La edad como minimo debe ser 18",
                  },
                  max: {
                    value: 40,
                    message: "La edad como maximo debe ser 40",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.edad?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCorreo">
              <Form.Label>Correo*</Form.Label>
              <Form.Control
                type="mail"
                placeholder="RobertoCarlos@gmail.com"
                {...register("correo", {
                  required: "El correo es un dato obligatorio",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Debe ingresar un correo valido",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.correo?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMensaje">
              <Form.Label>Mensaje *</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                type="text"
                placeholder="Ej: Mi nombre es Mariana Monteros y quera consultar sobre EMD"
                {...register("mensaje", {
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
                {errors.mensaje?.message}
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </div>
        <div>
          <h3>Google Maps</h3>
          <img
            src={imagen}
            alt=""
            style={{height:"400px", width:"400px"}}
          />
        </div>
      </section>
    </div>
  );
};

export default QuieroSerModelo;
