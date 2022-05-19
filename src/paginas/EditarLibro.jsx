import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import FormularioLibro from '../components/FormularioLibro';
import useLibros from '../hooks/useLibros';

const EditarLibro =  () => {

  const params = useParams();
  const { getLibro, libro, cargando } = useLibros();

  useEffect(() => {
    getLibro(params.id)
      console.log('efect editar')
      console.log('efect libro',libro)
  }, [])

  const { id, titulo, autor, anhoPublicacion, edicion, imagenPortada, cantidadEjemplares } = libro;

  if (cargando) return 'Cargando..'
  return (
    <>
      <h1 className="font-black text-4xl text-center">Editar Libro: {titulo}</h1>
      <div className='mt-10 flex justify-center '>

        <FormularioLibro />
      </div>
    </>
  )
}

export default EditarLibro
