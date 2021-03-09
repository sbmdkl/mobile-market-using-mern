import { PRODUCT_FETCH_SUCCESS } from '../actionTypes';

const initialState = [];

export default (state = initialState, action) => {
	switch (action.type) {
		case PRODUCT_FETCH_SUCCESS:
			return [ ...state, action.payload ];
		default:
			return state;
	}
};
