import { ALERT_TYPES } from "./alertActions";

export const TYPES = {
	AUTH : 'AUTH'
}

export const login = (data) => async (dispatch) => {
	try {
		dispatch({
			type: ALERT_TYPES.ALERT,
			payload: {
				loading: true,
			}
		})

		const res = await postDataApi('login', data);
	} catch {

	}
}