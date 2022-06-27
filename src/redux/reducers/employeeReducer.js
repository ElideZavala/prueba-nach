import { EMPLOYEE_TYPES } from "../actions/employeeActions";

const initialState = [{
	id: '',
	last_name:'',
	name: '',
	birthday: ''
}];

const employeesReducer = (state=initialState, action) => { 
	switch (action.type) {
		case EMPLOYEE_TYPES.EMPLOYEE: 
			return action.payload;
		case EMPLOYEE_TYPES.EMPLOYEE_ADD: 
			return [ ...state, action.payload ]
			
		default:
			return state;
	}
}

export default employeesReducer;