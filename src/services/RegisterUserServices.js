import axios from "axios"

const url = import.meta.env.VITE_BACKEND_URL;
const RegisterUserServices= async( nombre,email,password)  => {

  try {
    const respuesta = await axios.post( `${url}/api/usuarios` ,{
      nombre,email,password
    })
    console.log(respuesta)

    return respuesta;
    
  } catch (error) {
    console.log(error)
    console.log('¿en el catch')
    return {
      message: 'Error'
    }
    
  }



}

export default RegisterUserServices
