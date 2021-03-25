import { users } from "../../data/users";
import *as actionTypes from './../actions/types';

const initialState = {
    users: users,
    currentUser: null
}


const usersReducer = (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
        case actionTypes.setLogInUser:
            return { ...state, currentUser: payload }

        case actionTypes.logOut:
            return { ...state, currentUser: null }

        default:
            return state
    }
}

export default usersReducer;