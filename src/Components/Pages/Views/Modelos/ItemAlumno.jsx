import React from "react";
import { Button } from "react-bootstrap";
import { borrarAlumnoAPI, consultarAPIA } from "../../../../helpers/queries";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ItemAlumno = ({ alumno, setAlumno }) => {
  const borrarAlumno = () => {
    Swal.fire({
      title: "Esta seguro de eliminar el alumno ?",
      text: "No se puede revertir este paso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarAlumnoAPI(modelo.id).then((respuesta) => {
          if (respuesta.status === 200) {
            //actulizar la tabla
            consultarAPIA().then((respuesta)=>{
                setAlumno(respuesta);
            })
            Swal.fire(
              "Alumno eliminado",
              "El Alumno fue eleminado correctamente.",
              "success"
            );
          }else{
            Swal.fire(
                "Se produjo un error",
                "Intente realizar esta operacion mas tarde.",
                "error"
              );
          }
        });
      }
    });
  };
  return (
    <tr>
      <td>{alumno.id}</td>
      <td>{alumno.nombreAlumno}</td>
      <td>{alumno.edad}</td>
      <td>{alumno.sexo}</td>
      <td>{alumno.correo}</td>
      <td>{alumno.estadoacademico}</td>
      <td>
        <Link className="my-3 btn btn-warning" to={`/Administrar/editar-alumno/${alumno.id}`}>Editar <i class="fas fa-edit"></i></Link>
        <br />
        <Button variant="danger" onClick={borrarAlumno}>
          Borrar <i class="fa fa-trash" aria-hidden="true"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemAlumno;
