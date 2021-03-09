import { CART_ADD_PRODUCT, CART_REMOVE_ALL, CART_REMOVE_PRODUCT } from '../actionTypes';

const initialState = [];

export default (state = initialState, action) => {
	console.log(action);
	switch (action.type) {
		case CART_ADD_PRODUCT:
			return [ ...state, action.payload ];
		case CART_REMOVE_PRODUCT:
			return state.filter((id) => id != action.payload.id);
		case CART_REMOVE_ALL:
			return initialState;
		default:
			return state;
	}
};
