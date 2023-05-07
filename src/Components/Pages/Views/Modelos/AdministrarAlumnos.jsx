import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { consultarAPIA } from '../../../../helpers/queries';
import ItemAlumno from './ItemAlumno';

const AdministrarAlumnos = () => {
    const [alumnos, setAlumnos] = useState([])

    useEffect(() => {

      consultarAPIA().then((respuesta)=>{
        
        console.log(respuesta)
        setAlumnos(respuesta)
      })
    }, [])
    return (
        <div className='my-5'>
            <h1 className='text-center'>Administración Campus</h1>
            <div>
                <h3 className='text-center my-4'>Listado de Alumnos</h3>
                <Link className="btn btn-primary" to="/Administrar/crear-alumno">Agregar <i className="fa fa-plus" aria-hidden="true"></i></Link>

            </div>
            <hr />
            <Table responsive striped bordered hover className='mx-2'>
                <thead>
                    <tr>
                        <th>Cod</th>
                        <th>Alumno</th>
                        <th>Edad</th>
                        <th>Sexo</th>
                        <th>Correo</th>
                        <th>Estado Academico</th>
                    </tr>
                </thead>
                <tbody>
                    {/*{
                        alumnos.map((alumno)=> <ItemAlumno key={alumno.id} alumno={alumno} setAlumnos={setAlumnos}></ItemAlumno>)
                    }*/}
                </tbody>
                
                
            </Table>
        </div>
    );
};

export default AdministrarAlumnos;