import {
	PRODUCT_FETCH_SUCCESS,
	CART_ADD_PRODUCT,
	CART_RESTORE_PRODUCT,
	CART_REMOVE_PRODUCT,
	CART_REMOVE_ALL,
	HOME_SEARCH_PRODUCT,
	HOME_SORT_PRICE,
	PRODUCT_DECREMENT_ON_ADD_TO_CART,
	PRODUCT_INCREMENT_ON_REMOVE_FROM_CART,
	PRODUCT_DECREMENT_ON_RESTORE_CART
} from './actionTypes';

export const fetchProducts = (products) => ({
	type: PRODUCT_FETCH_SUCCESS,
	payload: products
});

export const addProductToCart = (product) => ({
	type: CART_ADD_PRODUCT,
	payload: product
});

export const restoreCartProducts = (products) => ({
	type: CART_RESTORE_PRODUCT,
	payload: products
});

export const decreaseProductQuantity = (id) => ({
	type: PRODUCT_DECREMENT_ON_ADD_TO_CART,
	payload: id
});
export const decreaseProductQuantityOnCartRestore = (products) => ({
	type: PRODUCT_DECREMENT_ON_RESTORE_CART,
	payload: products
});
export const increaseProductQuantity = (id, quantity) => ({
	type: PRODUCT_INCREMENT_ON_REMOVE_FROM_CART,
	payload: { id, quantity }
});

export const removeProductFromCart = (id) => ({
	type: CART_REMOVE_PRODUCT,
	payload: id
});

export const removeAllProductFromCart = (product) => ({
	type: CART_REMOVE_ALL,
	payload: ''
});

export const updateSearchText = (searchText) => {
	return {
		type: HOME_SEARCH_PRODUCT,
		payload: searchText
	};
};

export const sortByPrice = (data) => {
	return {
		type: HOME_SORT_PRICE,
		payload: data
	};
};
