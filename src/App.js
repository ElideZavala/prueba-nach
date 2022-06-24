import "./styles/App.scss"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Employees from "./pages/Employees"
import Upload from "./pages/Upload"

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/employess" element={<Employees />}/>
            <Route path="/upload" element={<Upload />}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App
