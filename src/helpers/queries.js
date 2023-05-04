export const URL = "http://localhost:3004";

export const crearModeloAPI = async(modelo)=>{
    try{
        const respuesta = await fetch(URL+"/"+"test"+"/"+"newcontact" ,{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(modelo)
        });
        console.log(respuesta);
        return respuesta;
    }catch(error){
        console.log(error)
    }
}

export const consultarAPI = async(modelo)=>{
    try{
        const respuesta = await fetch(URL+"/"+"test");
        const listaModelos = await respuesta.json()
        return listaModelos
    }catch(error){
        console.log(error)
    }

}


export const borrarModeloAPI = async(id)=>{
    try{
        const respuesta = await fetch(`${URL}/${id}`,{
            method: "DELETE",
        });
        return respuesta;
    }catch(error){
        console.log(error)
    }
}

export const obtenerModeloAPI = async(id)=>{
    try{
        const respuesta = await fetch(URL+"/"+"test"+"/"+`${id}`);
        const modeloBuscada = {
            dato: await respuesta.json(),
            status: respuesta.status
        }
        return modeloBuscada;
    }catch(error){
        console.log(error)
    
    }
}

export const editarModeloAPI = async(id,datosActualizados)=>{
    try{
        const respuesta = await fetch(URL+"/"+id,{
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datosActualizados)
        });
        return respuesta;
    }catch(error){
        console.log(error)
    }
}