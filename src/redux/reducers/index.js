import { combineReducers } from "redux";
import alert from './alertReducer';
import images from './imageReducer';
import employees from './employeeReducer';
import auth from './authReducer';

export default combineReducers({
	alert,
	auth,
	images,
	employees
})