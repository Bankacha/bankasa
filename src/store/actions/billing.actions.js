import * as actionTypes from './types'

export const setOrderItem = (product) => {
    return {
        type: actionTypes.setOrderItem,
        payload: product
    }
}

export const deleteOrderItem = (itemIdx) => {
    return {
        type: actionTypes.deleteOrderItem,
        payload: itemIdx
    }
}

export const saveAndPrintOrder = (waiterName) => {
    return {
        type: actionTypes.saveAndPrintOrder,
        payload: waiterName
    }
}

export const clearOrder = () => {
    return {
        type: actionTypes.clearOrder
    }
}

export const chargeBill = () => {
    return {
        type: actionTypes.chargeBill
    }
}

export const addCurrentBill = (bill) => {
    return {
        payload: bill,
        type: actionTypes.addCurrentBill
    }
}

export const clearActiveBillItem = (bill) => {
    return {
        payload: bill,
        type: actionTypes.clearActiveBillItem
    }
}

export const setActiveBillItem = (bill) => {
    return {
        payload: bill,
        type: actionTypes.setActiveBillItem
    }
}
