import { useEffect } from "react";
import {  useParams } from "react-router-dom"
import useLibros from "../hooks/useLibros";

const VerLibro = () => {

    const params = useParams();
    const {getLibro, libro, cargando} = useLibros();

    useEffect(() => {
      getLibro(params.id)
    }, [])

    const {id,titulo,autor,anhoPublicacion,edicion,imagenPortada,cantidadEjemplares} = libro;


  return (
   cargando ? 'Cargando..' : (
    <div className='bg-white py-20 px-10 md:w-1/2 rounded-lg shadow '>

    <h1 className="font-black text-4xl text-center"> Libro:  {titulo} </h1>
    <h1 className=" text-3xl flex justify-between mt-10 text-sky-600 font-black"> Autor:  <span className=" text-black">{autor}</span> </h1>
    <h1 className="text-3xl flex justify-between mt-5  text-sky-600 font-black">Año de publicación:  <span className=" text-black">{anhoPublicacion}</span> </h1>
    <h1 className="text-3xl flex justify-between mt-5  text-sky-600 font-black">Número de edición:   <span className=" text-black">{edicion}</span></h1>
    <h1 className="text-3xl flex justify-between mt-5 text-sky-600 font-black">Cantidad de ejemplares: <span className=" text-black">{cantidadEjemplares}</span> </h1>
    <h1 className="text-3xl  mt-5 text-sky-600 font-black">Imagen de portada :  </h1>
    <img src={imagenPortada} className="mt-5 " alt={titulo}/>
  </div>
   )
  )
}

export default VerLibro
