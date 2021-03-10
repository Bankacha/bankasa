import * as actionTypes from './types'

export const setActiveCategory = (category) => {
    return {
        type: actionTypes.setActiveCategory,
        payload: category
    }
}