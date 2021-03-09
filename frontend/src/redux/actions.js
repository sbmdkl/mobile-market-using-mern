import {
	PRODUCT_FETCH_START,
	PRODUCT_FETCH_FAIL,
	PRODUCT_FETCH_SUCCESS,
	CART_ADD_PRODUCT,
	CART_REMOVE_PRODUCT,
	CART_REMOVE_ALL,
	HOME_SEARCH_PRODUCT,
	HOME_SORT_PRICE
} from './actionTypes';

// export const fetchProducts = () => {
// 	return async (dispatch) => {
// 		try {
// 			dispatch({
// 				type: PRODUCT_FETCH_START
// 			});
// 			const products = await fetchItemsApi();
// 			dispatch({
// 				type: PRODUCT_FETCH_SUCCESS,
// 				payload: items
// 			});
// 		} catch (err) {
// 			dispatch({
// 				type: PRODUCT_FETCH_FAIL,
// 				payload: err,
// 				error: true
// 			});
// 		}
// 	};
// };

export const addProductToCart = (product) => ({
	type: CART_ADD_PRODUCT,
	payload: product
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
