import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthLayout from "./layouts/AuthLayout"
import Login from "./paginas/Login"
import Registrar from "./paginas/Registrar"
import AuthRouter from "./routers/AuthRouter"


const App = () => {
  return (

    <>

    <AuthRouter/>

    </>
  )
}

export default App
