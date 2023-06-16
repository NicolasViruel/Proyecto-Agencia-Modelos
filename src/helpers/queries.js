export const URL = "http://localhost:3004";

// Quiero ser Modelo Mensaje API
export const quieroSerModeloAPI = async(mensaje)=>{
    try{
        const respuesta = await fetch(URL+"/"+"test"+"/"+"newcontact" ,{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(mensaje)
        });
        console.log(respuesta);
        return respuesta;
    }catch(error){
        console.log(error)
    }
}



// Modelos API

export const crearModeloAPI = async(modelo)=>{
    try{
        const respuesta = await fetch(URL+"/"+"modelo"+"/"+"newcontact" ,{
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
        const respuesta = await fetch(URL+"/"+"modelo");
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
        const respuesta = await fetch(URL+"/"+"modelo"+"/"+`${id}`);
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

// -------------------- Campus Alumnos API --------------------------------

export const consultarAPIA = async()=>{
    try{
        const respuesta = await fetch(URL+"/"+"api"+ "/" +"Alumnos");
        const listaModelos = await respuesta.json()
        return listaModelos
    }catch(error){
        console.log(error)
    }
}

export const crearAlumnoAPI = async(alumno)=>{
    try{
        const respuesta = await fetch(URL + "/" +"api" + "/" + "Alumnos" + "/" + "nuevoAlumno" ,{
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

export const borrarAlumnoAPI = async(id)=>{
    try{
        const respuesta = await fetch(URL+ "/" +"api" + "/" + "Alumnos" + "/" +`${id}`);
        const modeloBuscada = {
            dato: await respuesta.json(),
            status: respuesta.status
        }
        return modeloBuscada;
    }catch(error){
        console.log(error)
    
    }
}

export const obtenerAlumnoAPI = async(id)=>{
    try{
        const respuesta = await fetch(URL+"/"+id);
        const alumnoBuscado = {
            dato: await respuesta.json(),
            status: respuesta.status
        }
        return alumnoBuscado;
    }catch(error){
        console.log(error)
    }
}

export const editarAlumnoAPI = async(id,datosActualizados)=>{
    try{
        const respuesta = await fetch(URL + "/" +"api" + "/" + "Alumnos" + "/" +`${id}` ,{
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

// Formulario Contacto

export const consultarMensaje = async()=>{
    try{
        const respuesta = await fetch(URL+"/"+"api"+ "/" +"Contacto");
        const listaMensaje = await respuesta.json()
        return listaMensaje
    }catch(error){
        console.log(error)
    }
}

export const crearMensajeApi = async(mensaje)=>{
    try{
        const respuesta = await fetch(URL + "/" +"api" + "/" + "Contacto" + "/" + "nuevoMensaje" ,{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(mensaje)
        });
        console.log(respuesta);
        return respuesta;
    }catch(error){
        console.log(error)
    }
}

// Formulario Quiero Ser modelo

export const consultarQSM = async()=>{
    try{
        const respuesta = await fetch(URL+"/"+"api"+ "/" +"QuieroSM");
        const listaMensaje = await respuesta.json()
        return listaMensaje
    }catch(error){
        console.log(error)
    }
}

export const crearQSM = async(mensaje)=>{
    try{
        const respuesta = await fetch(URL + "/" +"api" + "/" + "QuieroSM" + "/" + "nuevoMensaje" ,{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(mensaje)
        });
        console.log(respuesta);
        return respuesta;
    }catch(error){
        console.log(error)
    }
}