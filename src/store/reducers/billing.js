import * as actionTypes from '../actions/types'

const initialState = {
    order: [],
    billItems: [],
};

const billingReducer = (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
        case actionTypes.setOrderItem:
            const order = [...state.order]
            const alreadyInOrder = order.find(item => item.product.name === payload.product.name);

            if (alreadyInOrder) {
                alreadyInOrder.quantity += 1
            } else {
                order.push(payload)
            }

            return { ...state, order }

        case actionTypes.deleteOrderItem:
            const newOrder = state.order.filter(item => item.product.name !== payload.product.name)
            return {...state, order: newOrder}

        case actionTypes.saveAndPrintOrder:
            const billItems = [...state.billItems]

            for (let orderItem of state.order) {
                const existing = billItems.find(item => item.product.name === orderItem.product.name);

                if (existing) {
                    existing.quantity += orderItem.quantity;
                } else {
                    billItems.push(orderItem);
                }
            }

            return { ...state, billItems, order: [] }

        case actionTypes.clearOrder:
            return { ...state, order: [] }

        default:
            return state
    }
}


export default billingReducer;