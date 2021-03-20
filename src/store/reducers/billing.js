import { calculateItems, sumItems } from '../../utils';
import * as actionTypes from '../actions/types';

const initialState = {
    order: [],
    billItems: [],
    closedBills: [],
    billsTotal: 0,
    billNo: 0
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
            return { ...state, order: newOrder }

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

        case actionTypes.chargeBill:
            const bill = {
                items: [...state.billItems],
                total: calculateItems(state.billItems),
                issued: new Date(),
                id: state.billNo
            }

            return {
                ...state,
                billItems: [],
                closedBills: [...state.closedBills, {...bill, id: state.billNo + 1}],
                billNo: state.billNo + 1
            }

        case 'SUM_TOTAL':
            const closedBills = [...state.closedBills]

            return {
                ...state,
                billsTotal: sumItems(closedBills),
                // closedBills: []
            }


        default:
            return state
    }
}


export default billingReducer;