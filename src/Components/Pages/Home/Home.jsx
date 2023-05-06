import React from 'react'
import { useAuth } from '../../../Context/authContext';
import Calesita from "./Carrousel/Carrousel";



const Home = () => {
  const {user} = useAuth()
  


  return (
    <div>
      {/* <h3>Bievenido {user.email} </h3> */}
      <Calesita />

    </div>
    
    
  )
}

export default Home;