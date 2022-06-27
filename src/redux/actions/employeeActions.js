export const EMPLOYEE_TYPES = {
	EMPLOYEE: 'EMPLOYEE',
	EMPLOYEE_ADD: 'EMPLOYEE_ADD',
}

export const getEmployeesDatas = (data) => async (dispatch) => {
	try {
		dispatch({
			type: EMPLOYEE_TYPES.EMPLOYEE,
			payload: data
		})
	} catch (error) {
		throw error
	}
}

export const addEmployeesData = (data) => async (dispatch) => {
	try {
		dispatch({
			type: EMPLOYEE_TYPES.EMPLOYEE_ADD,
			payload: data
		})
	} catch (error) {
		throw error
	}
}