import React from 'react'
import { Carousel } from "react-bootstrap";

const Calesita = () => {
  return (
    <Carousel fade>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="cerveza2"
        />
        <Carousel.Caption>
          <div className="trasluz">

            <h3>We're the best of the night</h3>
            <p>With excellent atmosphere and the best music</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/3810832/pexels-photo-3810832.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="cerveza3"
        />
        <Carousel.Caption>
          <div className="trasluz">
            <h3>A great place</h3>
            <p>To meet new people or enjoy with your friends</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>


    </Carousel>
  )
}

export default Calesita