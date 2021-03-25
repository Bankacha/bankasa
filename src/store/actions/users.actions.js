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