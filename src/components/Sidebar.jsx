import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserGraduate } from "react-icons/fa";


const Sidebar = () => {


  const user = localStorage.getItem('usuario');
  return (
  <aside className='md:w-80 lg:w-96 px-5 py-10'>
    <div className='flex items-center '>
      <FaUserGraduate/>
    <p className='text-xl font-bold ml-1'>Bienvenido {user && user}</p>
    </div>
   

      <Link
      to="crear-libro"
      className="bg-indigo-600 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg"
      >
          Nuevo Libro
      </Link>

  </aside>
  )
}

export default Sidebar
