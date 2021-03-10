export const setOrderItem = (product) => {
    return {
        type: 'SET_ORDER_ITEM',
        payload: product
    }
}

export const deleteOrderItem = (itemIdx) => {
    return {
        type: 'DELETE_ORDER_ITEM',
        payload: itemIdx
    }
}

export const saveAndPrintOrder = () => {
    return {
        type: 'SAVE_AND_PRINT_ORDER',
    }
}