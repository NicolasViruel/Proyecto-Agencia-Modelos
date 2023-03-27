import React from "react";
import { Button } from "react-bootstrap";
import { borrarModeloAPI, consultarAPI } from "../../../../helpers/queries";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ItemModelo = ({ modelo, setModelos }) => {
  const borrarModelo = () => {
    Swal.fire({
      title: "Esta seguro de eliminar la/el modelo ?",
      text: "No se puede revertir este paso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarModeloAPI(modelo.id).then((respuesta) => {
          if (respuesta.status === 200) {
            //actulizar la tabla
            consultarAPI().then((respuesta)=>{
                setModelos(respuesta);
            })
            Swal.fire(
              "Modelo eliminada",
              "La/El modelo fue eleminado correctamente.",
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
      <td>{modelo.id}</td>
      <td>{modelo.nombreModelo}</td>
      <td>
        <img
          style={{ width: 150, height: 150 }}
          src={modelo.imagen}
          alt="modelos"
        />
      </td>
      <td>{modelo.edad}</td>
      <td>{modelo.colorOjos}</td>
      <td>{modelo.colorPelo}</td>
      <td>{modelo.altura}</td>
      <td>{modelo.calzado}</td>
      <td>{modelo.pecho}</td>
      <td>{modelo.cintura}</td>
      <td>{modelo.cadera}</td>
      <td>
        <Link className="my-3 btn btn-warning" to={`/Administrar/editar/${modelo.id}`}>Editar <i class="fas fa-edit"></i></Link>
        <br />
        <Button variant="danger" onClick={borrarModelo}>
          Borrar <i class="fa fa-trash" aria-hidden="true"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemModelo;
