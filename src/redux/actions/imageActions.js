import { ALERT_TYPES } from "./alertActions" 

export const IMAGE_TYPES = {
	IMAGE: 'IMAGE',
	IMAGE_ADD: 'IMAGE_ADD',
	IMAGE_DELETE: 'IMAGE_DELETE'
}
 
export const addImage = (data) => async (dispatch) => {
	try {
		dispatch({
			type: IMAGE_TYPES.IMAGE_ADD,
			payload: data
		})
	} catch (error) {
		dispatch({
			type: ALERT_TYPES.ALERT,
			payload: {
				error: error.message, 
			}
		})
	}
}

export const deleteImage = (data) => async (dispatch) => {
	try {
		dispatch({
			type: IMAGE_TYPES.IMAGE_DELETE,
			payload: data
		})
	} catch (error) {
		console.log(error)
	}
}