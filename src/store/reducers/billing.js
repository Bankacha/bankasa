import { calculateItems, sumItems } from '../../utils';
import * as actionTypes from '../actions/types';

const initialState = {
    order: [],
    billItems: {
        user: '',
        items: []
    },
    closedBills: [],
    billsTotal: 0,
    billNo: 0,
    currentBill: []
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
            const billItems = {
                user: payload,
                items: [...state.billItems.items]
            }

            for (let orderItem of state.order) {
                const existing = billItems.items.find(item => item.product.name === orderItem.product.name);

                if (existing) {
                    existing.quantity += orderItem.quantity;
                } else {
                    billItems.items.push(orderItem);
                }
            }

            return { ...state, billItems, order: [] }

        case actionTypes.clearOrder:
            return { ...state, order: [] }

        case actionTypes.chargeBill:
            const bill = {
                items: [...state.billItems.items],
                total: calculateItems(state.billItems.items),
                user: state.billItems.user,
                issued: new Date(),
                id: state.billNo
            }
            if(bill.items.length){
                return {
                    ...state,
                    billItems: {
                        user: '',
                        items: []
                    },
                    closedBills: [...state.closedBills, { ...bill, id: state.billNo + 1 }],
                    billNo: state.billNo + 1
                }
            }  
            

        case actionTypes.addCurrentBill:
            return { ...state, currentBill: payload }

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