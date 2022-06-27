import "./styles/App.scss";
import Header from "./componets/Header";
import AppRouter from "./routers/AppRouter";

function App() {
  
  return (
    <div className="App light">
      <Header/>
      <AppRouter/>
    </div>
  )
}

export default App
