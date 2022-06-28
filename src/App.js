import "./styles/App.scss";
import Header from "./componets/Header";
import AppRouter from "./routers/AppRouter";


function App() {
  const token  = localStorage.getItem('token')
  
  return (
    <div className="App light">
      {token && <Header/>}
      <AppRouter/>
    </div>
  )
}

export default App
