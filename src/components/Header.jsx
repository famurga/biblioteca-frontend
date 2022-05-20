import React from 'react'
import { Link } from 'react-router-dom'

import {  FaBook } from "react-icons/fa";

const Header = () => {
  return (
    <header className='px-4 py-5 bg-white border-b'>
        <div className='md: flex md:justify-between'>
            <div className='flex items-center'>

            <h2 className='text-4xl text-indigo-600 font-black mx-3'>inka Biblioteca </h2>
             <FaBook className='text-indigo-600 text-4xl'/>
            </div>

       {/*      <input 
            type="search" 
            placeholder='Buscar libro'
            className='rounded-lg lg:w-96 block p-2 border'
            /> */}
            <div className='text-3xl text-indigo-600 font-black border-2 p-3 border-indigo-600 rounded-lg hover:bg-indigo-500 hover:text-white'>
                <Link
                    to="/libros"
                    className='font-bold '
                >
                Registro de Libros
                </Link>
               
            </div>
            <button
                className='text-white text-sm bg-indigo-600 p-3 rounded-md uppercase font-bold'
                type='button'>
                    Cerrar Sesión
                </button>
        </div>

    </header>
  )
}

export default Header
