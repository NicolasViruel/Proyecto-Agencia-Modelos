// archivo de consulta a la api

export const URL = "http://localhost:3004/modelos";

export const consultarAPI = async()=>{
    try{
        const respuesta = await fetch(URL);
        const listaModelos = await respuesta.json()
        return listaModelos
    }catch(error){
        console.log(error)
    }
}


export const crearModeloAPI = async(modelo)=>{
    try{
        const respuesta = await fetch(URL,{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(modelo)
        });
        return respuesta;
    }catch(error){
        console.log(error)
    }
}