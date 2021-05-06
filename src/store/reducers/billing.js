import { calculateItems, sumItems } from '../../utils';
import * as actionTypes from '../actions/types';
import moment from "moment";
import { extendMoment } from 'moment-range';

const initialState = {
    order: [],
    billItems: [],
    closedBills: [],
    billsTotal: 0,
    billNo: 0,
    currentBill: [],
    activeBillItem: null,
    billItemId: 0,
    filterRange: null,
    filteredBills: []
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
            const billItem = hasActiveBillItem ? { ...state.activeBillItem } : {
                user: payload,
                items: [],
                id: state.billItemId,
                total: calculateItems(state.order)
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
                billItems: [...state.billItems.filter(i => i.id !== billItem.id), billItem],
                order: [],
                activeBillItem: billItem,
                billItemId: !hasActiveBillItem ? state.billItemId + 1 : state.billItemId
            }

        case actionTypes.clearOrder:
            return { ...state, order: [] }

        case actionTypes.chargeBill:
            const current = { ...state.activeBillItem }

            const bill = {
                items: current.items,
                total: calculateItems(current.items),
                user: current.user,
                issued: new Date(),
                id: state.billNo
            }
            if (bill.items?.length) {
                return {
                    ...state,
                    closedBills: [...state.closedBills, { ...bill, id: state.billNo + 1 }],
                    billNo: state.billNo + 1,
                    billItems: state.billItems.filter((item) => item.id !== current.id),
                    activeBillItem: null
                }
            }
            break;

        case actionTypes.setActiveBillItem:
            return {
                ...state,
                activeBillItem: payload
            }

        case actionTypes.clearActiveBillItem:
            return {
                ...state,
                activeBillItem: null
            }

        case actionTypes.addCurrentBill:
            return { ...state, currentBill: payload }

        case actionTypes.setFilterRange:
            return { ...state, filterRange: payload }

        case actionTypes.setFilteredBills:
            const Moment = extendMoment(moment);
            const filteredTime = Moment.range(state.filterRange?.startDate, state.filterRange?.endDate);

            const filtered = state.closedBills?.map(bill => filteredTime.contains(bill.issued) ? bill : '')
            const final = filtered ? filtered : state.closedBills

            return {
                ...state,
                filteredBills: final,
                filterRange: null
            }

        case actionTypes.clearFilteredBills:
            return {
                ...state,
                filteredBills: [],
                currentBill: []
            }

        case 'SUM_TOTAL':
            const closedBills = [...state.closedBills]

            return {
                ...state,
                billsTotal: sumItems(closedBills),
            }

        default:
            return state
    }
}


export default billingReducer;
