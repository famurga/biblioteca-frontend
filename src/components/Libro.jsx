import React from 'react'
import { FaEdit, FaTrash, FaSearchengin } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import useLibros from '../hooks/useLibros';

const Libro = ({ libro }) => {

    const navigate = useNavigate();

    const { eliminarLibro } = useLibros();

    const { titulo, autor, anhoPublicacion, edicion, imagenPortada, cantidadEjemplares, id } = libro;

    const handleClick = () => {
        if (confirm('¿Desea eliminar el libro?')) {
            console.log('si')
            eliminarLibro(id);
        }
        else {
            console.log('No')
        }
    }

    return (
        <tr className="border-b"  >
            <td className='className="px-6 py-4 t text-gray-900 "'>{titulo}</td>
            <td className='className="px-6 py-4 t text-gray-900 "'>{autor}</td>
            <td className="px-6 py-4 t text-gray-900 ">{anhoPublicacion}</td>
            <td className="px-6 py-4 t text-gray-900 ">{edicion}</td>
            {/*  <td className="px-6 py-4 t text-gray-900 "> <img src={imagenPortada} alt={titulo}/></td> */}
            <td className="px-6 py-4 t text-gray-900 ">{cantidadEjemplares}</td>
            <td className="px-6 py-4  ">
                <button onClick={() => navigate(`/libros/${id}`)} type="button" className="text-indigo-700 border border-indigo-500 hover:bg-indigo-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 ">
                    {/*  <Link to={`${id}`}>
                                    Ver Libro</Link> */}
                    Ver Libro
                </button>
            </td>

            <td className="px-6 py-4">

                <button onClick={() => navigate(`/libros/editar/${id}`)} type="button" className="text-indigo-700 border border-indigo-500 hover:bg-indigo-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 ">
                    <FaEdit />
                </button>


            </td>


            <td className="px-6 py-4 text-right">

                <button onClick={handleClick} type="button" className="text-indigo-700 border border-indigo-500 hover:bg-indigo-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 ">
                    <FaTrash />
                </button>
            </td>
        </tr>
    )
}
export default Libro
