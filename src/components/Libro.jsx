import React from 'react'
import { FaEdit, FaTrash, FaSearchengin } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Libro = ({libro}) => {

    const navigate = useNavigate;

    const { titulo, autor,anhoPublicacion,edicion,imagenPortada,cantidadEjemplares,id} =libro;
  return (
    <tr>
        <td className='p-3'>{titulo}</td>
        <td className='p-3'>{autor}</td>
        <td className='p-3'>{anhoPublicacion}</td>
        <td className='p-3'>{edicion}</td>
        <td className='p-3'>{imagenPortada}</td>
        <td className='p-3'>{cantidadEjemplares}</td>
        <td className="px-6 py-4  ">
                                <button onClick={() => navigate(`/libros/${id}`)} type="button" className="text-indigo-700 border border-indigo-500 hover:bg-indigo-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 ">
                                    Ver
                                </button>
                            </td>
                            <td className="px-6 py-4">
                                <button type="button" className="text-indigo-700 border border-indigo-500 hover:bg-indigo-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 ">
                                    <FaEdit />
                                </button>
                            </td>


                            <td className="px-6 py-4 text-right">

                                <button  type="button" className="text-indigo-700 border border-indigo-500 hover:bg-indigo-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 ">
                                    <FaTrash />
                                </button>
                            </td>
    </tr>
  )
  }
export default Libro
