import { combineReducers } from 'redux';
import CartsReducer from './reducers/CartsReducer';
import ProductsReducer from './reducers/ProductsReducer';

export default combineReducers({ carts: CartsReducer, products: ProductsReducer });
