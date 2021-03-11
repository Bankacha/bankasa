import * as actionTypes from './types'

export const addNewProduct = (product) => {
    return {
        type: actionTypes.addNewProduct,
        payload: product
    } 
}

export const deleteProduct = (id) => {
    return {
        type: actionTypes.deleteProduct,
        payload: id
    } 
}