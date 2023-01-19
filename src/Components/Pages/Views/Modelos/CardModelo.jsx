import React from 'react';
import {Button, Card} from "react-bootstrap"

const CardModelo = () => {
    return (
        <Card className='my-4'>
            <Card.Img variant="top" src='https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=400' className='img-fluid'/>
            <Card.Body>
                <Card.Title>Pamela Chu</Card.Title>
                <Card.Text>dsdsdsd</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CardModelo;