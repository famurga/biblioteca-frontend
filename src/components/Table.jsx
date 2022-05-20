import React, { useEffect, useState } from 'react'
import {  FaTrash, FaSearchengin } from "react-icons/fa";
import useLibros from '../hooks/useLibros';
import Libro from './Libro';
import Paginacion from './Paginacion';

const Table = () => {

    const {libros} = useLibros();

    //todo meterlos en un useEfact
    const [autor, setautor] = useState('-')
    const [año, setaño] = useState('-')

    const [search, setsearch] = useState('')

    const [currentPage, setcurrentPage] = useState(1)
    const [librosPerPage, setlibrosPerPage] = useState(10)


   /* let años = libros.filter((libro,index) =>{
        return libros.indexOf(libro.anhoPublicacion) == index;
    })
 */
    const anhoPublicacion = libros.map(libro =>{
        return libro.anhoPublicacion
    })
    const dataAños = new Set(anhoPublicacion);
    const añosPublicacion = [...dataAños]


    
    const autores = libros.map(libro =>{
        return libro.autor
    })

    const dataAutor = new Set(autores);
    const autoresList = [...dataAutor]

    
    //GetCurrent posts

    const indexOfLastLibros = currentPage * librosPerPage;
    const indexOfFirstLibros = indexOfLastLibros - librosPerPage;
    //const currentLibros = libros(indexOfFirstLibros,indexOfLastLibros);

    const handleChange = (e) =>{
        setautor(e.target.value);
    }

   
    //const  {titulo} = libro;
    return (
        <>
            <div className="p-2 flex justify-between items-center">
                <div className="relative mt-3">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaSearchengin />
                    </div>
                    <input type="text" id="table-search"  onChange={(e)=>setsearch(e.target.value)} className="mt-3bg-gray-50 border border-indigo-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2" placeholder="Buscar por autor o libro" />
                </div>

                <div>
                <h4 className='text-xs bg-indigo-500  w-full p-3 text-white uppercase font-bold block mt-3 text-center rounded-lg'> Filtrar por autor</h4>
                    <select value={autor} onChange={handleChange} className=" text-indigo-600 mt-3 bg-gray-50 border border-indigo-600  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   ">
                                        <option disabled value='-'> Seleccione autor</option>
                    {
                            autoresList.map( aut =>{
                                return <option key={aut} value={aut}>{aut}</option>
                            })
                          /*   <option value="US">United States</option> */

                        }
                    </select>

                    <h5  onClick={() => setautor('-')} className=" cursor-pointer border-indigo-500  hover:bg-indigo-500   hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300  mr-2  text-indigo-600 text-xs flex justify-between items-center  w-full p-3  uppercase   font-bold  mt-3 text-center rounded-lg">Quitar filtro <FaTrash/></h5>
                </div>
                <div>
                <h4 className='text-xs bg-indigo-500  w-full p-3 text-white uppercase font-bold block mt-3 text-center rounded-lg'> Filtrar por año</h4>
                    <select value={año} onChange={e => setaño(e.target.value)} className="mt-3 bg-gray-50 border border-indigo-600 text-indigo-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ">
                    <option disabled value='-'>Seleccione año</option>
                        {
                            añosPublicacion.map( anio =>{
                                return <option  key={anio} value={anio}>{anio}</option>
                            })
                          /*   <option value="US">United States</option> */

                        }
                    
                    </select>
                    <h5  onClick={() => setaño('-')} className=" cursor-pointer border-indigo-500  hover:bg-indigo-500   hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300  mr-2  text-indigo-600 text-xs flex justify-between items-center  w-full p-3  uppercase   font-bold  mt-3 text-center rounded-lg">Quitar filtro <FaTrash/></h5>

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
                            autor != '-' ? (
                                libros.filter( (libro) =>{
                                    if( libro.autor == autor){
                                        return libro
                                    }
                                   
                                }).map(libro => (
                                    <Libro
                                        key={libro.id}
                                        libro={libro} />
                                )) 

                            ) :(

                                año != '-' ? (
                                    libros.filter( (libro) =>{
                                        if( libro.anhoPublicacion == año){
                                            return libro
                                        }
                                       
                                    }).map(libro => (
                                        <Libro
                                            key={libro.id}
                                            libro={libro} />
                                    )) 

                                ):
                                (

                                    libros.filter((libro)=>{
                                        if(search ==""){
                                            return libro  
                                        } else if(libro.autor.toLowerCase().includes(search.toLowerCase()) || libro.titulo.toLowerCase().includes(search.toLowerCase())){
                                            return libro
                                        }
                                    }).map(libro => (
                                        <Libro
                                            key={libro.id}
                                            libro={libro} />
                                    )) 
        

                                )



                                 
                                

                            )
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
