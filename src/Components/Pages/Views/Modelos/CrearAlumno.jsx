import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearAlumnoAPI } from "../../../../helpers/queries";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CrearAlumno = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombreModelo: "",
      imagen: "",
      edad: 1,
      colorOjos: "",
      colorPelo: "",
      altura: 1,
      calzado: 1,
      pecho: 1,
      cintura: 1,
      cadera: 1,
    },
  });
  const navegacion = useNavigate();

  const onSubmit = (datos) => {
    console.log(datos);
    crearAlumnoAPI(datos).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          "Alumno creado",
          "El alumno fue creado correctamente",
          "success"
        );
        navegacion("/administrador");
      } else {
        Swal.fire("Ocurrio un error", "Vuelva a intentarlo mas tarde", "error");
      }
    });
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nuevo Alumno</h1>
      <Link className="btn btn-primary" to="/administrador">
        <i className="fas fa-chevron-left"></i> Volver
      </Link>

      <hr />
      <Form className="my-5" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreAlumno">
          <Form.Label>Nombre Completo*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Mariana Monteros"
            {...register("nombreAlumno", {
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
            {errors.nombreAlumno?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
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
          <Form.Text className="text-danger">{errors.edad?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEstadoAcademico">
          <Form.Label>Estado Academico*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cursando"
            {...register("estadoacademico", {
              required: "Este dato es obligatorio*",
              minLength: {
                value: 5,
                message: "Debe ingresar como minimo 5 caracteres",
              },
              maxLength: {
                value: 20,
                message: "Debe ingresar como maximo 20 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.estadoacademico?.message}
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
          <Form.Text className="text-danger">{errors.edad?.message}</Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default CrearAlumno;
