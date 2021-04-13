import { calculateItems, sumItems } from '../../utils';
import * as actionTypes from '../actions/types';

const initialState = {
    order: [],
    billItems: [],
    closedBills: [],
    billsTotal: 0,
    billNo: 0,
    currentBill: [],
    activeBillItem: null,
    billItemId: 0,
    activeBills: []
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
            const hasActiveBillItem = !!state.activeBillItem;
            const billItem = hasActiveBillItem ? state.activeBillItem : {
                user: payload,
                items: [],
                id: state.billItemId

            }

            for (let orderItem of state.order) {
                const existing = billItem.items.find(item => item.product.name === orderItem.product.name);

                if (existing) {
                    existing.quantity += orderItem.quantity;
                } else {
                    billItem.items.push(orderItem);
                }
            }

            return {
                ...state,
                billItems: [...state.billItems, billItem],
                order: [],
                activeBillItem: !hasActiveBillItem ? billItem : state.activeBillItem,
                billItemId: !hasActiveBillItem ? ++state.billItemId : state.billItemId
            }

        case actionTypes.clearOrder:
            return { ...state, order: [] }

        case actionTypes.chargeBill:
            const activeBillItems = { ...state.activeBillItem }

            const bill = {
                items: activeBillItems.items,
                total: calculateItems(activeBillItems.items),
                user: activeBillItems.user,
                issued: new Date(),
                id: state.billNo
            }
            if (bill.items?.length) {
                return {
                    ...state,
                    // billItems: {
                    //     user: '',
                    //     items: []
                    // },
                    closedBills: [...state.closedBills, { ...bill, id: state.billNo + 1 }],
                    billNo: state.billNo + 1
                }
            }
            break;

        case actionTypes.clearActiveBillItem:
            const activeBillItem = { ...state.activeBillItem }
            const activeBills = [...state.activeBills]
            const existing = state.activeBills.find(bill => bill.id === activeBillItem?.id)

            if (existing) {
                activeBills.filter(bill => bill.id !== existing.id)
            }
            return {
                ...state,
                activeBills: [...state.activeBills, existing ? [activeBills, payload] : payload],
                activeBillItem: null
            }

        case actionTypes.setActiveBillItem:
            return {
                ...state,
                activeBillItem: payload
            }

        case actionTypes.removeFromActiveBIlls:
            const bills = [...state.activeBills];
            const activeBillsCopy = { ...state.activeBillItem }
            const newActiveBills = bills.filter(bill => bill.id !== activeBillsCopy.id)
            return {
                ...state,
                activeBills: newActiveBills,
                activeBillItem: null
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