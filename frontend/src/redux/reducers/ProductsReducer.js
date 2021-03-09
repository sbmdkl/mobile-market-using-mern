import { PRODUCT_FETCH_SUCCESS } from '../actionTypes';

const initialState = [];

const ProductsReducer = (state = initialState, action) => {
	switch (action.type) {
		case PRODUCT_FETCH_SUCCESS:
			return [ ...state, action.payload ];
		default:
			return state;
	}
};

export default ProductsReducer;
