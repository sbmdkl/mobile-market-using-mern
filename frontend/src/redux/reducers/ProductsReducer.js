import {
	PRODUCT_FETCH_SUCCESS,
	PRODUCT_DECREMENT_ON_ADD_TO_CART,
	PRODUCT_INCREMENT_ON_REMOVE_FROM_CART,
	PRODUCT_DECREMENT_ON_RESTORE_CART
} from '../actionTypes';

const initialState = [];

const ProductsReducer = (state = initialState, action) => {
	switch (action.type) {
		case PRODUCT_FETCH_SUCCESS:
			return action.payload;
		case PRODUCT_DECREMENT_ON_ADD_TO_CART:
			return state.map((product) => {
				if (product.id === action.payload) {
					product.stock -= 1;
				}
				return product;
			});
		case PRODUCT_INCREMENT_ON_REMOVE_FROM_CART:
			return state.map((product) => {
				if (product.id === action.payload.id) {
					product.stock += action.payload.quantity;
				}
				return product;
			});
		case PRODUCT_DECREMENT_ON_RESTORE_CART:
			return state.map((product) => {
				action.payload.forEach((p) => {
					if (p.id === product.id) {
						product.stock -= p.quantity;
					}
				});
				return product;
			});
		default:
			return state;
	}
};

export default ProductsReducer;
