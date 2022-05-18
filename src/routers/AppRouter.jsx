import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "../context/AuthProvider"
import RutaProtegida from "../layouts/RutaProtegida"
import Libros from "../paginas/Libros"

const AppRouter = () => {
  return (
    <BrowserRouter>
    <AuthProvider>
    <Routes>
      <Route path="/libros" element={<RutaProtegida />}>
        <Route index element={<Libros />} />
      </Route>
    </Routes>
    </AuthProvider>
  </BrowserRouter>
  )
}

export default AppRouter
