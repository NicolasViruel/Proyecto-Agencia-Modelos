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