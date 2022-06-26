import { IMAGE_TYPES } from "../actions/imageActions";

const initialState = {
	images:[]
};

const imageReducer = (state=initialState, action) => { 
	switch (action.type) {
		case IMAGE_TYPES: 
			return action.payload;
		case IMAGE_TYPES.IMAGE_ADD: 
			return {
				...state,
				images: [action.payload,...state.images ]
			}
		case IMAGE_TYPES.IMAGE_DELETE:
			return {
				...state,
				images: state.images.filter(image => image.id !== action.payload)
			}
		default:
			return state;
	}
}


export default imageReducer;
