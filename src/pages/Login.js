import { useState } from "react"

/* Icons of Material UI */
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { login } from "../redux/actions/authActions";
import { useDispatch } from "react-redux";

const Login = () => {
	const initialState = {
		email: 'prueba@gmail.com', 
		password: '123456'
	}

	const [showpass, setShowpass] = useState(false)
	const [userData, setUserData] = useState(initialState)
	const {email, password} = userData; 
	const dispatch = useDispatch();


 	const handleChange = (e) => {
		const {name, value} = e.target;
		setUserData({...userData, [name]: value})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setUserData({email, password})
		// if (userData instanceof password && initialState instanceof password) {
		// 	console.log("Son Iguales")
			
		// }
		dispatch(login())
		window.location = '/upload'
	}

  return (
	<div className="login"> 
 	 <h3 className="login__header">Nach <span>employees</span></h3>
		<h6 className="login__subheader">Login</h6>
		<div className="login__data">
			<form className="login__data--form" onSubmit={handleSubmit}>
				<input 
					className="login__data--form__email"
					type="email"
					name='email'
					value={email}
					onChange={handleChange} 
					placeholder="Type your email">
				</input>

				<input 
					className="login__data--form__password"
					type={showpass ? "type" : "password"} /*{Si showpass es true sera type si es false password }*/
					value={password}
					name='password'
					onChange={handleChange} 
					placeholder="Type your password">
				</input>
				
				<small className="login__data--form__showpass" onClick={()=>setShowpass(!showpass)}>{showpass ? <VisibilityOffIcon/> : <VisibilityIcon/> }</small>

				<button className="login__data--form__button" type="submit">Log In</button>
			</form>
		</div>
	</div>
  )
}

export default Login