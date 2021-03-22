import { combineReducers } from 'redux';
import products from './products';
import billing from "./billing";
import categories from './categories';
import users from './users'

const allReducers = combineReducers({
    products,
    billing,
    categories,
    users
})

export default allReducers;