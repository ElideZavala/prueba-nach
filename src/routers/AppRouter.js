import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Employees from "../pages/Employees"
import Home from "../pages/Home"
import Login from "../pages/Login"
import NotFound from "../pages/NotFound"
import Upload from "../pages/Upload"

// *-*-*-*-*-*-*-*-*-*-*-* Rutas *-*-*-*-*-*-*-*-*-*-*-*-*
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/login" element={<Login />} />
        <Route path="/employess" element={<Employees />} />
        <Route path="/upload" element={<Upload />} />
		  <Route element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default AppRouter
