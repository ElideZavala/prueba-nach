import { TYPES } from "../actions/authActions";

const initialState = {
	login: false
};

 const authReducer = (state=initialState, action) => {
	 switch(action.type) {
		case TYPES.AUTH:
			return action.payload
		default:
			return state;
	 }
	}
	
	export default authReducer;