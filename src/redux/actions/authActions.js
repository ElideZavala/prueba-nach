export const TYPES = {
	AUTH : 'AUTH'
}

export const login = () => async (dispatch) => {
	try {
		dispatch({
			type: TYPES.AUTH,
			payload: {
				token: true,
			}
		})
	} catch(error) {
		throw error
	}
}