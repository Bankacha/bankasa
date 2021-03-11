import { products } from "../../data/products";
import * as actionTypes from '../actions/types'


const initialState = {
    products: products,
    sequencer: 10
};

const productsReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {

        case actionTypes.addNewProduct:
            const sequencer = state.sequencer
            return {
                ...state,
                products: [...state.products, { ...payload, id: `${sequencer + 1}` }],
                sequencer: sequencer + 1
            }

        case actionTypes.deleteProduct:
            return {
                ...state,
                products: state.products.filter(product => product.id !== payload)
            }

        default:
            return state
    }
}


export default productsReducer;