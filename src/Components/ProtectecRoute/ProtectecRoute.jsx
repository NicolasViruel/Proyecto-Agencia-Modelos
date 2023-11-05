import { useAuth } from "../../Context/authContext";
import {Navigate} from 'react-router-dom'

export function ProtectecRoute ({children}){

    const {user, loading} = useAuth()
    //compruebo si el usuario existe, sino redirecciona al login, 
    if (loading) return <h1>Cargando</h1>;
    if (!user) return <Navigate to='/login' ></Navigate>;

    return <> {children} </>;
}