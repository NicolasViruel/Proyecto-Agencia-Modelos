import React from "react";
import Calesita from "./Carrousel/Carrousel";
import "../Home/home.css";
import img2 from "../Home/img/img2.jpg"
import mod1 from "../Home/img/mod1.jpg"
import mod2 from "../Home/img/mod2.jpg"
import mod3 from "../Home/img/mod3.jpg"
import mod4 from "../Home/img/mod4.jpg"
import mod5 from "../Home/img/mod5.jpg"
import mod7 from "../Home/img/mod7.jpg"
import Calesita1 from "./Carrousel/Carrousel1";


const Home = () => {
  return (
    <section className="container">
      <Calesita />
      <h1 className="text-center py-5 display-2">Agencia de Modelos</h1>
      <div className="d-flex img-fluid container-fluid">
        <img src={img2} alt="Modelos EMC" className=" w-100 rounded"/>
      </div>
     <div className="text-center m-3"> 
     <a className=" btn btn-outline-dark" href="../Components/Pages/Views/Error404">Comunicate con nosotros</a>
     </div>
     <h1 className=" text-center py-5 display-2">Nuestro Staff</h1>
     <div className=" container text-center card-group">
      <img src={mod1} alt="modelo 1" className="figure-img rounded-3 w-auto m-2"/>
      <img src={mod2} alt="modelo 2" className="figure-img rounded-3 w-auto m-2"/>
      <img src={mod3} alt="modelo 3" className="figure-img rounded-3 w-auto m-2"/>
      <img src={mod4} alt="modelo 4" className="figure-img rounded-3 w-auto m-2"/>
      <img src={mod5} alt="modelo 5" className="figure-img rounded-3 w-auto m-2"/>
     </div>
     <div className="text-center m-2">
     <a className=" btn btn-outline-dark" href="../Components/Pages/Views/Error404">Conoce a nuestro staff</a>
     </div>
     <hr />
     <h1 className="text-center py-5 display-2">Eventos</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt atque aperiam ratione quod ex, placeat, quae, iure quo eum sequi neque cum. Nam omnis quaerat eligendi enim amet voluptatum mollitia culpa ab est. Labore fugiat repellendus ab assumenda blanditiis aliquam ducimus reiciendis nobis voluptate harum error, inventore voluptatem obcaecati.</p>
    <Calesita1></Calesita1>
    <div className="text-center m-3"> 
     <a className=" btn btn-outline-dark" href="../Components/Pages/Views/Error404">Conocer todos los eventos</a>
     </div>
     <h1 className="text-center py-5 display-2">Conoce nuestra agencia</h1>
     <div className="container justify-content-center">
     <img src={mod7} alt="modelos" className="d-block rounded-3 d-flex"/>
     </div>
     <div className="text-center m-3">
     <a className="btn btn-outline-dark" href="../Components/Pages/Views/Error404" >Conocer la agencia</a>
     </div>
    



    
     
      
     
      
    </section>
  );
};

export default Home;
