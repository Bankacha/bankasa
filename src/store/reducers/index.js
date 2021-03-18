import { combineReducers } from 'redux';
import products from './products';
import billing from "./billing";
import categories from './categories';

const allReducers = combineReducers({
    products,
    billing,
    categories
})

export default allReducers;