import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { editarAlumnoAPI, obtenerAlumnoAPI } from "../../../../helpers/queries";

const EditarAlumno = () => {
  //traer el parametro de la ruta
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      nombreAlumno: "",
      imagen: "",
      edad: "",
      colorOjos: "",
      colorPelo: "",
      altura: 1,
      calzado: 1,
      pecho: 1,
      cintura: 1,
      cadera: 1,
      estadoacademico: "",
      correo: "",
    },
  });
  const navegacion = useNavigate();
  useEffect(() => {
    obtenerAlumnoAPI(id).then((respuesta) => {
      console.log(respuesta);
      if (respuesta.status === 200) {
        //cargar los datos de la respuesta en el formulario
        setValue("nombreAlumno", respuesta.dato.nombreAlumno);
        setValue("edad", respuesta.dato.edad);
        setValue("correo", respuesta.dato.correo);
        setValue("estadoacademico", respuesta.dato.estadoacademico);
      } else {
        Swal.fire("Ocurrio un error", "Intente es paso mas tarde", "error");
      }
    });
  }, []);

  const onSubmit = (datos) => {
    console.log(datos);
    editarAlumnoAPI(id, datos).then((datos) => {
      if (datos.status === 200) {
        Swal.fire(
          "Alumno actualizado",
          "El alumno fue actualizado correctamente",
          "succes"
        );
        navegacion("/administrador");
      } else {
        Swal.fire("Ocurrio un error", "Intente es paso mas tarde", "error");
      }
    });
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Editar Alumno</h1>
      <Link className="btn btn-primary" to="/administrador">
        <i class="fas fa-chevron-left"></i> Volver
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
          <Form.Text className="text-danger">{errors.edad?.message}</Form.Text>
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

        <Button variant="primary" type="submit">
          Editar
        </Button>
      </Form>
    </section>
  );
};

export default EditarAlumno;
