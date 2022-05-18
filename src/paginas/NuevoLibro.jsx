import React from 'react'
import FormularioLibro from '../components/FormularioLibro'

const NuevoLibro = () => {
  return (
    <>
    <h1 className='text-4xl font-black'>Crear Libro </h1>
    <div className='mt-10 flex justify-center '>

        <FormularioLibro/>
    </div>
   </>
  )
}

export default NuevoLibro
