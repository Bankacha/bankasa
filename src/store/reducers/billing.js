const initialState = {
    order: [],
    billItems: [],
};

const billingReducer = (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
        case 'SET_ORDER_ITEM':
            const order = [...state.order]
            const alreadyInOrder = order.find(item => item.product.name === payload.product.name);

            if (alreadyInOrder) {
                alreadyInOrder.quantity += 1
            } else {
                order.push(payload)
            }

            return { ...state, order }

        case 'DELETE_ORDER_ITEM':
            return {
                ...state,
                order: state.order.filter(item => item.product.name !== payload.product.name)
            }

        case 'SAVE_AND_PRINT_ORDER':
            const billItems = [...state.billItems]

            for (let orderItem of state.order) {
                const existing = billItems.find(item => item.product.name === orderItem.product.name);

                if (existing) {
                    existing.quantity += orderItem.quantity;
                } else {
                    billItems.push(orderItem);
                }
            }

            return {
                ...state,
                billItems,
                order: []
            }
    }
    return state
}


export default billingReducer;