import React from 'react';

const ItemModelo = ({modelo}) => {
    return (
        <tr>
            <td>{modelo.id}</td>
            <td>{modelo.nombreModelo}</td>
            <td><img style={{width:150, height:150}} src={modelo.imagen} alt="modelos" /></td>
            <td>{modelo.edad}</td>
            <td>{modelo.colorOjos}</td>
            <td>{modelo.colorPelo}</td>
            <td>{modelo.altura}</td>
            <td>{modelo.calzado}</td>
            <td>{modelo.pecho}</td>
            <td>{modelo.cintura}</td>
            <td>{modelo.cadera}</td>
        </tr>
    );
};

export default ItemModelo;