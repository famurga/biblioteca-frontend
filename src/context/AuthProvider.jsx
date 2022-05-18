import { createContext, useEffect, useState } from "react";
import clienteAxios from "../config/ClienteAxios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({});
    const [cargando, setcargando] = useState(true)

    const navigate = useNavigate();

    useEffect(() => {
        
        const autenticarUsuario = async() =>{
            const token = localStorage.getItem('token');
        console.log(token)
        if(!token){
            setcargando(false)
            return
        }
        
        const config = {
            Headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        
        try {
            const {data} = await clienteAxios('/usuarios/perfil',config);

            setAuth(data);
            navigate('/libros');
        } catch (error) {
            setAuth({});
            
        }
        finally{
            setcargando(false);

        }

        }
        autenticarUsuario();
    }, [])

    return(
        <AuthContext.Provider 
        value={{
                setAuth,
                auth,
                cargando
        }}>
            
            {children}

        </AuthContext.Provider>
    )

}

export {
    AuthProvider
}

export default AuthContext;