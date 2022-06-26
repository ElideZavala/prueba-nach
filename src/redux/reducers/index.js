import { combineReducers } from "redux";
import alert from './alertReducer';
import images from './imageReducer'

export default combineReducers({
	alert,
	images
})