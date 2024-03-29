import * as actionTypes from './types';

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

export const editProduct = (product) => {
    return {
        type: actionTypes.editProduct,
        payload: product
    }
}

export const addToStock = (quantity) => {
    return {
        type: actionTypes.addToStock,
        payload: quantity
    }
}
export const reduceStock = (items) => {
    return {
        type: actionTypes.reduceStock,
        payload: items
    }
}