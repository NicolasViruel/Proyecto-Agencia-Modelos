export const URL = "http://localhost:3004";


export const getStudents= async(modelo)=>{
    try{
        const respuesta = await fetch(URL+"/"+"api"+"/"+"students");
        const listaModelos = await respuesta.json()
        return listaModelos
    }catch(error){
        console.log(error)
    }

}