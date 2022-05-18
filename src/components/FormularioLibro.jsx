import React, { useState } from 'react'
import useLibros from '../hooks/useLibros';
import Alerta from './Alerta';

const FormularioLibro = () => {

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [anioPublicacion, setAnio] = useState('');
    const [edicion, setEdicion] = useState('');
    const [portada, setPortada] = useState('');
    const [ejemplares, setEjemplares] = useState('');

    const {mostrarAlerta,alerta, submitLibro} = useLibros();



     const handleSubmit = async e => {
         e.preventDefault();

         if([titulo, autor , anioPublicacion, edicion,portada , ejemplares].includes('')){

            mostrarAlerta({
                msg:'Todos los campos son obligatorios',
                error: true
            })
            return
         }  

         //PASAR LOS DATOS AL PROVIDER
         await submitLibro({titulo, autor, anioPublicacion,edicion,portada,ejemplares})
         setTitulo('')
         setAutor('')
         setAnio('')
         setEdicion('')
         setPortada('')
         setEjemplares('')
     }

     const {msg} = alerta;
  return (
    <form 
    onSubmit={handleSubmit}
    className='bg-white py-10 px-5 md:w-1/2 rounded-lg shadow'>

        {msg && <Alerta alerta={alerta}/>}
        <div className='mb-5'>
            <label htmlFor="titulo" className='text-gray-700 uppercase font-bold text-sm '>
                Título del Libro
            </label>
            <input 
            type="text"
            id='titulo'
            className='border w-full p-2 mt-2 placeholder:-gray-400 rounded-md'
            placeholder='Título del Libro'
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
             />
        </div>
        <div className='mb-5'>
            <label htmlFor="autor" className='text-gray-700 uppercase font-bold text-sm '>
                Autor
            </label>
            <input 
            type="text"
            id='autor'
            className='border w-full p-2 mt-2 placeholder:-gray-400 rounded-md'
            placeholder='Autor Libro'
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
             />
        </div>
        <div className='mb-5'>
            <label htmlFor="anio" className='text-gray-700 uppercase font-bold text-sm '>
                Año de Publicación
            </label>
            <input 
            type="date"
            id='anio'
            className='border w-full p-2 mt-2 placeholder:-gray-400 rounded-md'
            placeholder='Año de publicación'
            value={anioPublicacion}
            onChange={(e) => setAnio(e.target.value)}
             />
        </div>
        <div className='mb-5'>
            <label htmlFor="edicion" className='text-gray-700 uppercase font-bold text-sm '>
                Edición
            </label>
            <input 
            type="text"
            id='edicion'
            className='border w-full p-2 mt-2 placeholder:-gray-400 rounded-md'
            placeholder='Edición'
            value={edicion}
            onChange={(e) => setEdicion(e.target.value)}
             />
        </div>
        <div className='mb-5'>
            <label htmlFor="portada" className='text-gray-700 uppercase font-bold text-sm '>
                Imagen de Portada
            </label>
            <input 
            type="file"
            id='portada'
            className='border w-full p-2 mt-2 placeholder:-gray-400 rounded-md'
            placeholder='imagen del libro'
            value={portada}
            onChange={(e) => setPortada(e.target.value)}
             />
        </div>
        <div className='mb-5'>
            <label htmlFor="ejemplares" className='text-gray-700 uppercase font-bold text-sm '>
                Cantidad de ejemplares
            </label>
            <input 
            type="text"
            id='ejemplares'
            className='border w-full p-2 mt-2 placeholder:-gray-400 rounded-md'
            placeholder='Ejemplares'
            value={ejemplares}
            onChange={(e) => setEjemplares(e.target.value)}
             />
        </div>

        <input 
        value='Crear Libro'
        className='bg-sky-600 w-full p-3 uppercase font-bold text-white rounded cursor-pointer hover:bg-sky-700 transition-colors '
        type="submit" />
        
    </form>
  )
}

export default FormularioLibro
