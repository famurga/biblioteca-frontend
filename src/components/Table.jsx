import React, { useEffect, useState } from 'react'
import { FaEdit, FaTrash, FaSearchengin } from "react-icons/fa";
import useLibros from '../hooks/useLibros';
import Libro from './Libro';
import Paginacion from './Paginacion';

const Table = ({libros}) => {

    //todo meterlos en un useEfact
    const [autor, setautor] = useState('Seleccione autor')
    const [año, setaño] = useState('Seleccione año')

    const [search, setsearch] = useState('')

    const [currentPage, setcurrentPage] = useState(1)
    const [librosPerPage, setlibrosPerPage] = useState(10)




    
    //GetCurrent posts

    const indexOfLastLibros = currentPage * librosPerPage;
    const indexOfFirstLibros = indexOfLastLibros - librosPerPage;
    //const currentLibros = libros(indexOfFirstLibros,indexOfLastLibros);

  

    console.log('libros',libros)
   

    //const  {titulo} = libro;
    return (
        <>
            <div className="p-4 flex justify-between">
                <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaSearchengin />
                    </div>
                    <input type="text" id="table-search"  onChange={(e)=>setsearch(e.target.value)} className="bg-gray-50 border border-indigo-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2" placeholder="Buscar por autor o libro" />
                </div>

                <div>
                    <select value={autor} onChange={e => setautor(e.target.value)} className="bg-gray-50 border border-indigo-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   ">

                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
                <div>
                    <select value={año} onChange={e => setaño(e.target.value)} className="bg-gray-50 border border-indigo-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ">

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
                            {/*      <th scope="col" className="px-6 py-3">
                                Imagen de portada
                            </th> */}
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
                            libros.filter((libro)=>{
                                if(search ==""){
                                    return libro  
                                } else if(libro.autor.toLowerCase().includes(search.toLowerCase()) || libro.anhoPublicacion.toString().toLowerCase().includes(search.toLowerCase())){
                                    return libro
                                }
                            }).map(libro => (
                                <Libro
                                    key={libro.id}
                                    libro={libro} />
                            ))

                        }



                    </tbody>

                </table>
                <div className='m-10 flex justify-end'>

                <Paginacion/>
                </div>
              

            </div>






        </>


    )
}

export default Table
