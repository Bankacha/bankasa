import { products } from "../../data/products";
import * as actionTypes from '../actions/types';


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

        case actionTypes.editProduct:

            return {
                ...state,
                products: state.products.map(product => product.id === payload.id ? payload : product)
            }

        case actionTypes.addToStock:

            return {
                ...state,
                products: state.products.map(product => product.id === payload.id ? { ...product, stock: product.stock + payload.quantity } : product)
            }

        case actionTypes.reduceStock:
            const products = [...state.products]

            payload.forEach(oi => {
                const product = products.find(p => p.name === oi.product.name)
                product.stock -= oi.quantity
            })

            return {
                ...state,
                products
            }
        default:
            return state
    }
}

export default productsReducer;

