import {combineReducers} from 'redux';
import products from './products';
import billing from "./billing";

const allReducers = combineReducers({
    products,
    billing

})

export default allReducers;