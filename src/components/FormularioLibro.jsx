import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useLibros from '../hooks/useLibros';
import Alerta from './Alerta';


const FormularioLibro = () => {

    const [id, setId] = useState(null);
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [anhoPublicacion, setAnio] = useState('');
    const [edicion, setEdicion] = useState('');
    const [imagenPortada, setPortada] = useState();
    const [cantidadEjemplares, setEjemplares] = useState('');

    const {mostrarAlerta,alerta, submitLibro, libro} = useLibros();

    const params =  useParams();

    useEffect(() => {
      if( params.id){
          setId(libro.id);
        setTitulo(libro.titulo)
        setAutor(libro.autor)
        setAnio(libro.anhoPublicacion)
        setEdicion(libro.edicion)
        setPortada(libro.imagenPortada)
        setEjemplares(libro.cantidadEjemplares)
      }
      else{

      }
    }, [params])


     const handleSubmit = async e => {
         e.preventDefault();

         if([titulo, autor , anhoPublicacion, edicion ,imagenPortada, cantidadEjemplares].includes('')){

            mostrarAlerta({
                msg:'Todos los campos son obligatorios',
                error: true
            })
            return
         }  

         let formData = new FormData();
         formData.append("id",id);
         formData.append("titulo",titulo)
         formData.append("autor",autor)
         formData.append("anhoPublicacion",anhoPublicacion)
         formData.append("edicion",edicion)
         formData.append("imagenPortada",imagenPortada)
         formData.append("cantidadEjemplares",cantidadEjemplares)
      

         //PASAR LOS DATOS AL PROVIDER
           await submitLibro(formData)
         setId(null)
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
            type="number"
            id='anio'
            className='border w-full p-2 mt-2 placeholder:-gray-400 rounded-md'
            placeholder='Año de publicación'
            value={anhoPublicacion}
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
            //value={imagenPortada}
            onChange={(e) => setPortada(e.target.files[0])}
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
            value={cantidadEjemplares}
            onChange={(e) => setEjemplares(e.target.value)}
             />
        </div>

        <input 
        value={id ? 'Actualizar Libro' : 'Crear Libro'}
        className='bg-sky-600 w-full p-3 uppercase font-bold text-white rounded cursor-pointer hover:bg-sky-700 transition-colors '
        type="submit" />
        
    </form>
  )
}

export default FormularioLibro
