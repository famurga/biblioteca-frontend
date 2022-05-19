import React, { useState } from 'react'
import { FaEdit, FaTrash, FaSearchengin } from "react-icons/fa";
import Libro from './Libro';
import PaginatedItems from './PaginatedItems';

const Table = ({ libros }) => {

    //todo meterlos en un useEfact
    const [autor, setautor] = useState('Seleccione autor')
    const [año, setaño] = useState('Seleccione año')



    console.log(autor)

    //const  {titulo} = libro;
    return (
        <>
            <div className="p-4 flex justify-between">

                <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaSearchengin />
                    </div>
                    <input type="text" id="table-search" className="bg-gray-50 border border-indigo-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2" placeholder="Buscar por autor o libro" />
                </div>
                
                    <div>
                        <select value={autor} onChange={ e => setautor(e.target.value)}  className="bg-gray-50 border border-indigo-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   ">
                            
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div>
                        <select value={año} onChange={ e => setaño(e.target.value)}  className="bg-gray-50 border border-indigo-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ">
                           
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>


                

            </div>
            <div className="relative  overflow-x-auto shadow-md sm:rounded-lg">

                <table className="w-full text-sm text-center text-gray-500 ">
                    <thead className="text-xs text-white uppercase   bg-indigo-500 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                TItulo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Autor
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Año publicación
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Edición
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Imagen de portada
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ejemplares
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Detalles
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Editar
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Eliminar
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            libros.map( libro=>(
                                <Libro 
                                key={libro.id}
                                libro={libro} />
                            ))

                        }


                        
                      {/*   <tr className="border-b ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900   whitespace-nowrap">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4 t text-gray-900 ">
                                Sliver
                            </td>
                            <td className="px-6 py-4   text-gray-900 ">
                                Laptop
                            </td>
                            <td className="px-6 py-4  text-gray-900 ">
                                $2999
                            </td>
                            <td className="px-6 py-4 text-gray-900 ">
                                $2999
                            </td>
                            <td className="px-6 py-4 text-gray-900 ">
                                $2999
                            </td>
                            <td className="px-6 py-4  ">
                                <button type="button" className="text-indigo-700 border border-indigo-500 hover:bg-indigo-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 ">
                                    Ver
                                </button>
                            </td>
                            <td className="px-6 py-4">
                                <button type="button" className="text-indigo-700 border border-indigo-500 hover:bg-indigo-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 ">
                                    <FaEdit />
                                </button>
                            </td>


                            <td className="px-6 py-4 text-right">

                                <button type="button" className="text-indigo-700 border border-indigo-500 hover:bg-indigo-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 ">
                                    <FaTrash />
                                </button>
                            </td>
                        </tr> */}

                    </tbody>
                    
                </table>
                
            </div>
            <div className='flex'>
            <PaginatedItems itemsPerPage={4} />
            </div>

    
      


        </>


    )
}

export default Table
