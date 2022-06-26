export const IMAGE_TYPES = {
	IMAGE: 'IMAGE',
	IMAGE_ADD: 'IMAGE_ADD'
}
 
export const addImage = (data) => async (dispatch) => {
	try {
		dispatch({
			type: IMAGE_TYPES.IMAGE_ADD,
			payload: data
		})
	} catch (error) {
		console.log(error)
	}
}