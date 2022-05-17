import axios from "axios"

const url = import.meta.env.VITE_BACKEND_URL;
const RegisterUserServices= async()  => {

  try {
    const respuesta = await axios.post( `${url}/api/usuarios` ,{
      nombre,email,password
    })
    
  } catch (error) {
    
  }



}

export default RegisterUserServices
