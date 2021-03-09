import { CART_ADD_PRODUCT, CART_REMOVE_ALL, CART_REMOVE_PRODUCT } from '../actionTypes';

const initialState = [];

const CartsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CART_ADD_PRODUCT:
			let product = Object.assign({}, action.payload);
			let newState = [];
			let existedProduct = state.filter((product) => product.id === action.payload.id);
			if (existedProduct.length) {
				product.quantity = existedProduct[0].quantity + 1;
				newState = state.map((p) => {
					if (p.id === existedProduct[0].id) {
						p = product;
					}
					return p;
				}, product);
			} else {
				product.quantity = 1;
				newState = [ ...state, product ];
			}
			return newState;
		case CART_REMOVE_PRODUCT:
			return state.filter((product) => product.id !== action.payload);
		case CART_REMOVE_ALL:
			return initialState;
		default:
			return state;
	}
};

export default CartsReducer;
