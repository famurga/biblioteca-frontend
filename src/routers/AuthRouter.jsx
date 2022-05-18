import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "../context/AuthProvider"
import { LibrosProvider } from "../context/LibrosProvider"
import AuthLayout from "../layouts/AuthLayout"
import RutaProtegida from "../layouts/RutaProtegida"
import Libros from "../paginas/Libros"
import Login from "../paginas/Login"
import NuevoLibro from "../paginas/NuevoLibro"
import Registrar from "../paginas/Registrar"

const AuthRouter = () => {
  return (
    <BrowserRouter>
    <AuthProvider>
      <LibrosProvider>
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="registrar" element={<Registrar />} />
      </Route>

      <Route path="/libros" element={<RutaProtegida />}>
        <Route index element={<Libros />} />
        <Route path="crear-libro" element={<NuevoLibro />} />
      </Route>
    </Routes>
    </LibrosProvider>
    </AuthProvider>
  </BrowserRouter>
  )
}

export default AuthRouter
