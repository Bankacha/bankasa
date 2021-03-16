import { categories } from "../../data/categories"
import * as actionTypes from '../actions/types'

const initialState = {
    categories: categories,
    active: null,
}

export const categoriesReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case actionTypes.setActiveCategory:
            return { ...state, active: payload }

        case actionTypes.editCategory:
            return {
                ...state,
                    categories: state.categories.map(category => category.id === payload.id ? payload : category),
            }    

        default:
            return state
    }
}

export default categoriesReducer;