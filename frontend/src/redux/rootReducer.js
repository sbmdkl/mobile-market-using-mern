import { combineReducers } from 'redux';
import CartsReducer from './reducers/CartsReducer';
import ProductsReducer from './reducers/ProductsReducer';
import HomePageReducer from './reducers/HomePageReducer';
export default combineReducers({ carts: CartsReducer, products: ProductsReducer, home: HomePageReducer });
