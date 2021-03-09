import { HOME_SEARCH_PRODUCT, HOME_SORT_PRICE } from '../actionTypes';

const initialState = {
	searchText: '',
	sortBy: 'priceBestMatch'
};

const HomePageReducer = (state = initialState, action) => {
	switch (action.type) {
		case HOME_SEARCH_PRODUCT:
			return { ...state, searchText: action.payload };
		case HOME_SORT_PRICE:
			return { ...state, sortBy: action.payload };
		default:
			return state;
	}
};

export default HomePageReducer;
