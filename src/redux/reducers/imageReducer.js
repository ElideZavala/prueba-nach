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
				images: [...state.images, action.payload]
			}
		default:
			return state;
	}
}


export default imageReducer;
