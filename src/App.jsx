import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthLayout from "./layouts/AuthLayout"
import ConfirmarCuenta from "./paginas/ConfirmarCuenta"
import Login from "./paginas/Login"
import NuevaPassword from "./paginas/NuevaPassword"
import OlvidePassword from "./paginas/OlvidePassword"
import Registrar from "./paginas/Registrar"
import AuthRouter from "./routers/AuthRouter"

console.log(import.meta.env.VITE_BACKEND_URL)

const App = () => {
  return (
/*     <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="registrar" element={<Registrar />} />
          <Route path="olvide-password" element={<OlvidePassword />} />
          <Route path="olvide-password/:token" element={<NuevaPassword />} />
          <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
        </Route>
      </Routes>
    </BrowserRouter> */
    <AuthRouter/>
  )
}

export default App