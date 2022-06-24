import { BrowserRouter as Router, Route } from "react-router-dom";
import Employees from '../pages/Employees';
import Login from '../pages/Login';
import Upload from '../pages/Upload';


const AppRouter = () => {
  return (
	<Router>
		<Route exact path="/login">
			<Login/>
		</Route>
		<Route exact path="/employess">
			<Employees/>
		</Route>
		<Route exact path="/upload">
			<Upload/>
		</Route>
	</Router>
  )
}

export default AppRouter