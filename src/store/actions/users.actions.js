import *as actionTypes from './types';

export const setLogUser = (password) => {
    return {
        type: actionTypes.setLogInUser,
        payload: password
    }
}