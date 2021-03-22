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
            const currentUser = state.users.find( user => payload === user.password ? {user} : null)
        return {...state, currentUser: currentUser}
            


        default:
            return state
    }
}

export default usersReducer;