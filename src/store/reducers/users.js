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
            const date = new Date();
            const milliseconds = date.getTime();

            const current = {
                user: payload,
                loggedIn: milliseconds,
                loggedOut: null
            }
            return { ...state, currentUser: current }

        case actionTypes.logOut:
            const logOutDate = new Date();
            const logOutMilliseconds = logOutDate.getTime();

            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    user: null,
                    loggedOut: logOutMilliseconds
                }
            }

        case actionTypes.addNewUser:
            return { ...state, users: [...state.users, payload] }

        case actionTypes.deleteUser:
            return {
                ...state,
                users: state.users.filter(user => user.name !== payload.name)
            }

        case actionTypes.setLoggedInDuration:
            const users = [...state.users]
            for (let u of users) {
                if (u.name === payload) {
                    u.duration += (state.currentUser.loggedOut - state.currentUser.loggedIn)
                }
            }
            return {
                ...state,
                users: users
            }

        default:
            return state
    }
}

export default usersReducer;