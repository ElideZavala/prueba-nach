import { combineReducers } from "redux";
import alert from './alertReducer';
import images from './imageReducer';
import employees from './employeeReducer';

export default combineReducers({
	alert,
	images,
	employees
})