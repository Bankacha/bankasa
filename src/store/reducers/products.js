import { products } from "../../data/products";

const initialState = {
    products: products,
    order: [],
    onTable: [],
    finished: []
};

const productReducer = (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
        case 'SET_ORDER_ITEM':
            const order = [...state.order];
            const fromOrder = order.find(item => item.item.name === payload.item.name);

            if (fromOrder) {
                fromOrder.quantity += 1;
            } else {
                order.push(payload);
            }

            return { ...state, order };

        case 'DELETE_ORDER_ITEM':
            return {
                ...state,
                order: state.order.filter(item => item.item.name !== payload.item.name)
            }

        case 'SAVE_AND_PRINT_ORDER':
            const onTable = [...state.onTable];

            for (let payloadOrderItem of payload) {
                const existing = onTable.find(oi => oi.item.name === payloadOrderItem.item.name);

                if (existing) {
                    existing.quantity += payloadOrderItem.quantity;
                } else {
                    onTable.push(payloadOrderItem);
                }
            }

            return { ...state, onTable, order: [] };

        default:
            return state;
    }
}


export default productReducer;