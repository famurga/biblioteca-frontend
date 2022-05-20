import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/ClienteAxios'
import {   FaArrowRight } from "react-icons/fa";


const Registrar = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [alerta, setAlerta] = useState({})

  const handleSubmit = async  e =>{
    e.preventDefault();
    if([username,email,password,first_name,password2,last_name].includes('')){
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error:true
      })
      return
    }
    if( password !== password2){
      setAlerta({
        msg: 'Los passwords no son iguales',
        error:true
      })
      return
    }
    if( password.length < 8){
      setAlerta({
        msg: 'El password es muy corto, agrega mínimo 8 caracteres',
        error:true
      })
      return
    }

    setAlerta({});



    try {

     const {data} = await clienteAxios.post( `/auth/register/` ,{
      username,email,password,first_name,password2,last_name
    })
    localStorage.setItem('usuario',data.username)
 
      setUsername('');
      setEmail('');
      setFirst_name('');
      setLast_name('');
      setPassword('');
      setPassword2('');
      setAlerta({
        msg: 'creado correctamente',
        error:false
      });
    } catch (error) {
      console.log(error)
      setAlerta({
        msg: 'No se pudo registrar el usuario',
        error:true
      });
    }
 

  }

  const {msg} = alerta;

  return (
    <>
            <h1 className='text-sky-600 font-black text-6xl'>Crea tu cuenta <span className='text-slate-700 '>Biblioteca</span></h1>
            { msg && <Alerta alerta={alerta}/>}
            
            <nav className='lg:flex lg:justify-between mt-5 '>

               
                <Link
                className="text-lg flex items-center text-sky-600 font-black border-2 p-3 border-sky-600 rounded-lg hover:bg-sky-600 hover:text-white"
                to='/'
                > Login
                <FaArrowRight className='ml-2'/>
                </Link>
            
            </nav>
            <form 
            onSubmit={handleSubmit}
            className='my-5 bg-white shadow  rounded-lg  p-10'>
                <div className='my-5'>
                    <label className='uppercase text-gray-600 block text-xl font-bold' 
                    htmlFor='first_name'
                    >Nombre</label>
                    <input 
                    id='first_name'
                    type="text"
                    placeholder='Primer Nombre'
                    className='w-full mt-3 p-3 border rounded-xl bg-gray-50 '
                    value={first_name}
                    onChange={e => setFirst_name(e.target.value)} 
                    />
                </div>
                <div className='my-5'>
                    <label className='uppercase text-gray-600 block text-xl font-bold' 
                    htmlFor='last_name'
                    >Apellido</label>
                    <input 
                    id='last_name'
                    type="text"
                    placeholder='Apellido'
                    className='w-full mt-3 p-3 border rounded-xl bg-gray-50 '
                    value={last_name}
                    onChange={e => setLast_name(e.target.value)} 
                    />
                </div>
                <div className='my-5'>
                    <label className='uppercase text-gray-600 block text-xl font-bold' 
                    htmlFor='username'
                    >Usuario</label>
                    <input 
                    id='username'
                    type="text"
                    placeholder='Nombre de usuario'
                    className='w-full mt-3 p-3 border rounded-xl bg-gray-50 '
                    value={username}
                    onChange={e => setUsername(e.target.value)} 
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
                    value={password2}
                    onChange={e => setPassword2(e.target.value)}  
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
            
            </nav>
        </>
  )
}

export default Registrar
