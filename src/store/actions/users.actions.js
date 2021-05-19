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

export const deleteUser = (user) => {
    return {
        type: actionTypes.deleteUser,
        payload: user
    }
}

export const setLoggedInDuration = (userName) => {
    return {
        type: actionTypes.setLoggedInDuration,
        payload: userName
    }
}