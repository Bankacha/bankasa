import *as actionTypes from './types';

export const setLogUser = (user) => {
    return {
        type: actionTypes.setLogInUser,
        payload: user
    }
}
export const logOut = () => {
    return {
        type: actionTypes.logOut
    }
}

export const addNewUser = (newUser) => {
    return {
        type: actionTypes.addNewUser,
        payload: newUser
    }
}

export const deleteUser = (name) => {
    return {
        type: actionTypes.deleteUser,
        payload: name
    }
}
