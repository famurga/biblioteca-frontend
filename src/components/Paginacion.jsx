import React, { useState } from 'react'
import { FaCaretSquareLeft,FaCaretSquareRight } from "react-icons/fa";
import useLibros from '../hooks/useLibros';

const Paginacion = () => {

    const {libros,page,setPage} = useLibros();

    const [num, setnum] = useState(1)
 

    const pages = [ 
        {page:num},
        {page:num+1},
        {page:num+2},
        {page:num+3},
    ]

    const next = () => {
        setnum(num+1)
    }
    const back = () => {
        num > 1 &&  setnum(num-1)
    }
 

  return (
    <div className='flex bg-white rounded-lg font-[Poppins]'>

        <button onClick={back} className=' text-indigo-600  h-12 border-2 border-r-0 border-indigo-600 px-4 rounded-l-lg hover:bg-indigo-600 hover:text-white'>
            <FaCaretSquareLeft/>
        </button>

      {
          pages.map((pg,i) => (
              <button  onClick={() => setPage(pg.page)} key={i} className={`h-12 border-2 border-r-0 border-indigo-600 w-12 ${ page === pg.page && 'bg-indigo-600 text-white' }`}>{pg.page} </button>
          ))
      }
      
        <button onClick={next} className='text-indigo-600 h-12 border-2  border-indigo-600 px-4 rounded-r-lg hover:bg-indigo-600 hover:text-white'>
            <FaCaretSquareRight/>
        </button>
    </div>
  )
}

export default Paginacion
