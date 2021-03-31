import * as actionTypes from './types'

export const setActiveCategory = (category) => {
    return {
        type: actionTypes.setActiveCategory,
        payload: category
    }
}

export const editCategory = (category) => {
    return {
        type: actionTypes.editCategory,
        payload: category
    }
}

export const createCategory = (category) => {
    return {
        type: actionTypes.createCategory,
        payload: category
    }
}

export const deleteCategory = (id) => {
    return {
        type: actionTypes.deleteCategory,
        payload: id
    }
}

export const deactivateCategory = (category) => {
    return {
        type: actionTypes.deactivateCategory,
        payload: category
    }
}