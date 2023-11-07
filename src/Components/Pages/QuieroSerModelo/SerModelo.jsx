import React from "react";
import { Link } from "react-router-dom";
//import { Carousel } from "react-bootstrap";
import modelo1 from "../../../Image/serModelo/imagen1.png";
import modelo2 from "../../../Image/serModelo/imagen2.png";
import modelo3 from "../../../Image/serModelo/imagen3.png";
import modelo4 from "../../../Image/serModelo/imagen4.png";
import modelo5 from "../../../Image/serModelo/imagen5.png";
import "./serModelo.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const sliderImage = [
  {
    img: modelo1,
  },
  {
    img: modelo2,
  },
  {
    img: modelo3,
  },
  {
    img: modelo4,
  },

  {
    img: modelo5,
  },
];

export default function SerModelo() {
  return (
    <div>
      <div>
        <h2 className="text-center">Video Modelos</h2>
      </div>
      <div>
        <h1 className="text-center">Academia de Modelos</h1>
        <p className="text-center">
          Encontrarás la oportunidad perfecta para aprender y crecer en el
          apasionante mundo de la moda. Nuestro <br></br>
          enfoque se centra en brindarte las herramientas necesarias para
          destacarte y ser contemplado para futuros <br></br>
          trabajos dentro de la industria.<br></br>
          ¡Ház click abajo para poder conocer más de nosotros y como te
          ayudaremos!
        </p>
        <div className="d-flex justify-content-center my-3">
        <Link className="linkMarron" to="/academia">Conocer más</Link>
        </div>
      </div>
      <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImage.map((sliderImage, index) => {
          return (
            <div className="slider" key={index}>
              <img src={sliderImage.img} alt="modelos" />
            </div>
          );
        })}
      </Carousel>
    </div>
    <div>
        <h3 className="text-center my-3">Se parte de EMD</h3>
        <p className="text-center my-3">Si ya tienes experiencia en el mundo del modelaje,<br></br>
        te invitamos a completar nuestro formulario, para que podamos considerar tu perfil en futuros proyectos o<br></br>
        trabajos</p>
        <div className="d-flex justify-content-center my-5">
        <Link className="linkMarron" to="/ModeloFormulario">Completar Formulario</Link>
        </div>
    </div>
    </div>
  );
}
