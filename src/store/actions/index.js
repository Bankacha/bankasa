export const setOrderItem = (item) => {
    return {
        type: 'SET_ORDER_ITEM',
        payload: item
    }
}

export const deleteOrderItem = (itemIdx) => {
    return {
        type: 'DELETE_ORDER_ITEM',
        payload: itemIdx
    }
}

export const saveAndPrintOrder = (order) => {
    return {
        type: 'SAVE_AND_PRINT_ORDER',
        payload: order
    }
}