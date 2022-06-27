import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Employees from "../pages/Employees"
import Login from "../pages/Login"
import NotFound from "../pages/NotFound"
import Register from "../pages/Register"
import Upload from "../pages/Upload"

// *-*-*-*-*-*-*-*-*-*-*-* Rutas *-*-*-*-*-*-*-*-*-*-*-*-*
const AppRouter = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employess" element={<Employees />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/register" element={<Register />} />
		    <Route element={<NotFound/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default AppRouter
