export const TYPES = {
	AUTH : 'AUTH'
}

export const login = () => async (dispatch) => {
	try {
		localStorage.removeItem('token')
		const token = localStorage.setItem('token', JSON.stringify(true))

		dispatch({
			type: TYPES.AUTH,
			payload: {
				token: token,
			}
		})
	} catch(error) {
		throw error
	}
}