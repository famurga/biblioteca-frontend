import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import clienteAxios from '../config/ClienteAxios';

const LibrosContext = createContext();

const LibrosProvider = ({children}) => {

  const [libros, setlibros] = useState([])
  const [libro, setlibro] = useState({})
  const [alerta, setAlerta] = useState({})
  const [cargando, setCargando] = useState(false)

  const [page, setPage] = useState(1)

  const navigate = useNavigate();


  useEffect(() => {
    
    const getLibros = async () => {
      setCargando(true);

      
      try {
        
        const token = localStorage.getItem('token');

        if(!token) return
       
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }

        const {data} = await clienteAxios(`/libros/?page=${page}`,config);
 
        setlibros(data.results);
      } catch (error) {
        console.log('')
      }
      finally{
        setCargando(false);
      }

    }

    getLibros()
  }, [page])

  const mostrarAlerta = alerta => {
    setAlerta(alerta);

    setTimeout(() => {
        setAlerta({})
    }, 2000);
  }


  const submitLibro = async libro => {
   

    if( libro.get('id') !== 'null'){
      await editarLibro(libro)
    }else{
      await nuevoLibro(libro)
    }
    return
    
  }

  const editarLibro = async (libro) =>{
    try {
      const token = localStorage.getItem('token');
      if(!token) return

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }

        
      }

      
      const {data} = await clienteAxios.put(`/libros/${libro.get('id')}/`, libro, config)

      //Sincronizacion del state
      const librosActualizados = libros.map(libroState => libroState.id == data.id ? data : libroState)
      setlibros(librosActualizados)

      setAlerta({
        msg: 'Libro actualizado Correctamente',
        error: false
      })

      setTimeout(() => {
          setAlerta({})
          navigate('/libros');
      }, 1000);


    } catch (error) {
      console.log(error)
      setAlerta({
        msg: 'Error al actualizar el libro',
        error: true
      })
    }
  }


  const nuevoLibro = async (libro) =>{
    try {
      const token = localStorage.getItem('token');
      if(!token) return

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }

        
      }
      const {data} = await clienteAxios.post('/libros/', libro, config )

      setlibros([...libros,data]);

      setAlerta({
        msg: 'Libro creado correctamente',
        error: false
      })

      setTimeout(() => {
          setAlerta({})
          navigate('/libros');
      }, 2000);

    } catch (error) {
      console.log(error);
      
    }
  }

  const getLibro = async id => {
    setCargando(true)

    try {
      const token = localStorage.getItem('token');
      if(!token) return

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }

      const {data}=  await clienteAxios(`/libros/${id}/`, config)

      setlibro(data);


    } catch (error) {
        console.log(error)

    }
    finally{
      setCargando(false)
    }
  }

  const eliminarLibro = async (id) =>{
    
    try {
      const token = localStorage.getItem('token');
      if(!token) return

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      const {data} = await clienteAxios.delete(`/libros/${id}/`, config )
      
      const librosActualizados = libros.filter(libro =>libro.id !== id )
      setlibros(librosActualizados);


  
      
    } catch (error) {
      console.log(error)

    }
  }




  return (
    <LibrosContext.Provider
    value={{
      libros,
      mostrarAlerta,
      alerta,
      submitLibro,
      getLibro,
      libro,
      cargando,
      eliminarLibro,

      page,
      setPage
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
