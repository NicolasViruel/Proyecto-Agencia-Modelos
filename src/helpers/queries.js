// archivo de consulta a la api

export const URL = "http://localhost:3004/modelos";
export const URLA = "http://localhost:3004/alumnos";


// ------------------------ MODELOS STAFF API ------------------------------

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
        const respuesta = await fetch(URL+"/"+id);
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
        const respuesta = await fetch(URLA);
        const listaAlumnos = await respuesta.json()
        return listaAlumnos
    }catch(error){
        console.log(error)
    }
}

export const crearAlumnoAPI = async(alumno)=>{
    try{
        const respuesta = await fetch(URLA,{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(alumno)
        });
        return respuesta;
    }catch(error){
        console.log(error)
    }
}

export const borrarAlumnoAPI = async(id)=>{
    try{
        const respuesta = await fetch(`${URLA}/${id}`,{
            method: "DELETE",
        });
        return respuesta;
    }catch(error){
        console.log(error)
    }
}

export const obtenerAlumnoAPI = async(id)=>{
    try{
        const respuesta = await fetch(URLA+"/"+id);
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
        const respuesta = await fetch(URLA+"/"+id,{
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
