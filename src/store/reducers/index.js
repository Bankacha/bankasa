import {combineReducers} from 'redux';
import productReducer from "./products";

const allReducers = combineReducers({
    products: productReducer,

})

export default allReducers;