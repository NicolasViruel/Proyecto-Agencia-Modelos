import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { consultarAPI } from '../../../helpers/queries';
import ItemModelo from "../Views/Modelos/ItemModelo"
import {Link} from "react-router-dom"

const Administrador = () => {
    const [modelos, setModelos] = useState([])

    useEffect(() => {

      consultarAPI().then((respuesta)=>{
        console.log(respuesta)
        setModelos(respuesta)
      })
    }, [])
    
    return (
        <section>
            <div className='d-flex justify-content-between align-items-center mt-5'>
                <h1 className='display-4'>Modelos Disponibles</h1>
                <Link className="btn btn-primary" to="/Administrar/crear-modelo">Agregar <i class="fa fa-plus" aria-hidden="true"></i></Link>

            </div>
            <hr />
            <Table responsive striped bordered hover className='mx-2'>
                <thead>
                    <tr>
                        <th>Cod</th>
                        <th>Modelo</th>
                        <th>Imagen</th>
                        <th>Edad</th>
                        <th>Color Ojos</th>
                        <th>Color Pelo</th>
                        <th>Altura</th>
                        <th>Calzado</th>
                        <th>Pecho</th>
                        <th>Cintura</th>
                        <th>Cadera</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        modelos.map((modelo)=> <ItemModelo key={modelo.id} modelo={modelo} setModelos={setModelos}></ItemModelo>)
                    }
                </tbody>
            </Table>
        </section>
    );
};

export default Administrador;