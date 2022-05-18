import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/ClienteAxios'
import RegisterUserServices from '../services/RegisterUserServices'


const Registrar = () => {

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repetirPassword, setRepetirPassword] = useState('')
  const [alerta, setAlerta] = useState({})

  const handleSubmit = async  e =>{
    e.preventDefault();
    if([nombre,email,password,repetirPassword].includes('')){
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error:true
      })
      return
    }
    if( password !== repetirPassword){
      setAlerta({
        msg: 'Los passwords no son iguales',
        error:true
      })
      return
    }
    if( password.length < 6){
      setAlerta({
        msg: 'El password es muy corto, agrega mínimo 6 caracteres',
        error:true
      })
      return
    }

    setAlerta({});

    //Creando usuario en la API
    console.log('Creando...')

    try {

     const respuesta = await clienteAxios.post( `/usuarios` ,{
      nombre,email,password
    })
    console.log(respuesta)
      setNombre('');
      setEmail('');
      setPassword('');
      setRepetirPassword('');
      setAlerta({
        msg: 'creado correctamente',
        error:true
      });
    } catch (error) {
      setAlerta({
        msg: 'error.response',
        error:true
      });
    }
 

  }
  const registrarUsuario = async() =>{

    const data = await RegisterUserServices(nombre,email,password);
    console.log('La data');
    console.log(data);
  }

  const {msg} = alerta;

  return (
    <>
            <h1 className='text-sky-600 font-black text-6xl'>Crea tu cuenta <span className='text-slate-700 '>Biblioteca</span></h1>
            { msg && <Alerta alerta={alerta}/>}
           
            <form 
            onSubmit={handleSubmit}
            className='my-10 bg-white shadow  rounded-lg  p-10'>
                <div className='my-5'>
                    <label className='uppercase text-gray-600 block text-xl font-bold' 
                    htmlFor='nombre'
                    >Nombre</label>
                    <input 
                    id='nombre'
                    type="text"
                    placeholder='Nombre'
                    className='w-full mt-3 p-3 border rounded-xl bg-gray-50 '
                    value={nombre}
                    onChange={e => setNombre(e.target.value)} 
                    />
                </div>
                <div className='my-5'>
                    <label className='uppercase text-gray-600 block text-xl font-bold' 
                    htmlFor='email'
                    >Email</label>
                    <input 
                    id='email'
                    type="text"
                    placeholder='Email de registro'
                    className='w-full mt-3 p-3 border rounded-xl bg-gray-50 '
                    value={email}
                    onChange={e => setEmail(e.target.value)}  
                    />
                </div>
                <div className='my-5'>
                    <label className='uppercase text-gray-600 block text-xl font-bold' 
                    htmlFor='password'
                    >Password</label>
                    <input 
                    id='password'
                    type="password"
                    placeholder='Password de registro'
                    className='w-full mt-3 p-3 border rounded-xl bg-gray-50 '
                    value={password}
                    onChange={e => setPassword(e.target.value)}   
                    />
                </div>
                <div className='my-5'>
                    <label className='uppercase text-gray-600 block text-xl font-bold' 
                    htmlFor='password2'
                    >Repetir Password</label>
                    <input 
                    id='password2'
                    type="password"
                    placeholder='Repetir Password '
                    className='w-full mt-3 p-3 border rounded-xl bg-gray-50 '
                    value={repetirPassword}
                    onChange={e => setRepetirPassword(e.target.value)}  
                    />
                </div>
                <input 
                type="submit"
                value='Crear Cuenta'
                className='bg-sky-700 w-full py-3 mb-5 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors' 
                />
            </form>
            <nav className='lg:flex lg:justify-between'>
                <Link
                className="block text-center my-5 text-slate-500 uppercase text-sm"
                to='/'
                > Ya tienes una cuenta? Inicia Sesión
                
                </Link>
                <Link
                className="block text-center my-5 text-slate-500 uppercase text-sm"
                to='olvide-password'
                > Olvide mi password
                
                </Link>
            </nav>
        </>
  )
}

export default Registrar
