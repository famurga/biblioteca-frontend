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
    <div>
    <h1 className="font-black text-4xl text-center"> Libro: {titulo} </h1>
    <h1 className="font-black text-4xl">{autor} </h1>
    <h1 className="font-black text-4xl">{anhoPublicacion} </h1>
  </div>
   )
  )
}

export default VerLibro
