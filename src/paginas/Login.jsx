import { useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/ClienteAxios"
import useAuth from "../hooks/useAuth"

const Login = () => {

    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState({})

const {setAuth,auth,cargando} = useAuth();

    const handleSubmit = async(e) =>{
        e.preventDefault();

        if([usuario, password].includes('')){
            setAlerta({
                msg: 'Todos los campos son obligaorios',
                error: true
            })

            return
        }

        try {
            const { data } = await clienteAxios.post('/login', {email, password}) 

            setAlerta({});
            console.log( data)

            localStorage.setItem('token', data.token)
            setAuth(data);
        } catch (error) {

            console.log(error)

            setAlerta({
                msg:' error de login',
                error: true
            })
            
        }
    }

    const {msg} = alerta;  
    return (
        <>
            <h1 className='text-sky-600 font-black text-6xl'>Inicia Sesión <span className='text-slate-700 '>Biblioteca</span></h1>
            
            {msg && <Alerta alerta={alerta}/>}
            
            <form onSubmit={handleSubmit} className='my-10 bg-white shadow  rounded-lg  p-10'>
                <div className='my-5'>
                    <label className='uppercase text-gray-600 block text-xl font-bold' 
                    htmlFor='email'
                    >Email</label>
                    <input 
                    id='email'
                    type="text"
                    placeholder='Email de registro'
                    className='w-full mt-3 p-3  rounded-xl appearance-none border-2  bg-gray-50 border-gray-200   py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                    value={usuario}
                    onChange={e=> setUsuario(e.target.value)} 
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
                    className='w-full mt-3 p-3  rounded-xl  border-2  bg-gray-50 border-gray-200   py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' 
                    value={password}
                    onChange={e=> setPassword(e.target.value)} 
                    />
                </div>
                <input 
                type="submit"
                value='Inicar sesión'
                className='bg-sky-700 w-full py-3 mb-5 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors' 
                />
            </form>
            <nav className='lg:flex lg:justify-between'>
                <Link
                className="block text-center my-5 text-slate-500 uppercase text-sm"
                to='registrar'
                > No tienes una cuenta? Regístrate
                
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

export default Login
