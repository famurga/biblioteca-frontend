import React from 'react'
import Table from '../components/Table';
import useLibros from '../hooks/useLibros'




const Libros = () => {



  return (
 <>
  <h1 className='text-4xl font-black text-center'>Libros Registrados </h1>
  <div className='bg-white shadow mt-10 rounded-lg p-5'>
{/*     {libros.length ? libros.map( libro =>(
      <Table libro={libro}/>
    )) : <p className=' text-center text-gray-600 uppercase'>No hay libros registrados</p>} */}

    <Table />
  </div>


 </>
  )
}

export default Libros
