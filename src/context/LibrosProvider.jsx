import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import clienteAxios from '../config/ClienteAxios';

const LibrosContext = createContext();

const LibrosProvider = ({children}) => {

  const [libros, setlibros] = useState([])
  const [alerta, setAlerta] = useState({})

  useEffect(() => {
    
    const getLibros = async () => {

      try {
        
        const token = localStorage.getItem('token');
        //if(!token) return
  
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }

        const {data} = await clienteAxios('/libros',config);
        console.log(data.results);
        setlibros(data.results);
      } catch (error) {
        console.log(error)
      }

    }
    getLibros()
  }, [])

  const mostrarAlerta = alerta => {
    setAlerta(alerta);

    setTimeout(() => {
        setAlerta({})
    }, 5000);
  }


  const submitLibro = async libro => {
    try {
      const token = localStorage.getItem('token');
      if(!token) return

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }

        
      }
      console.log('El libro',libro)
      const {data} = await clienteAxios.post('/libros/', libro, config )
      console.log(data);

      setAlerta({
        msg: 'Libro creado con éxito',
        error: false
      })

      setTimeout(() => {
          setAlerta({})
          useNavigate('/libros');
      }, 3000);
    } catch (error) {
      console.log('en el catch del error');
      console.log(error);
      
    }
  }

  return (
    <LibrosContext.Provider
    value={{
      libros,
      mostrarAlerta,
      alerta,
      submitLibro
    }}
    >
     {children}   

    </LibrosContext.Provider>
  )
}

export{
    LibrosProvider
}

export default LibrosContext
