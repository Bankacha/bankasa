import { calculateItems, sumItems } from '../../utils';
import * as actionTypes from '../actions/types';

const initialState = {
    order: [],
    billItems: {
        user: '',
        items: []
    },
    closedBills: [
        // {
        //     items: [
        //         {
        //             product: {
        //                 name: 'Orangina',
        //                 price: 140
        //             },
        //             quantity: 1
        //         },
        //         {
        //             product: {
        //                 name: 'Turkish',
        //                 price: 170
        //             },
        //             quantity: 1
        //         },
        //         {
        //             product: {
        //                 name: 'Espresso',
        //                 price: 120
        //             },
        //             quantity: 2
        //         },
        //         {
        //             product: {
        //                 name: 'Squeezed',
        //                 price: 170
        //             },
        //             quantity: 2
        //         },
        //         {
        //             product: {
        //                 name: 'Coctails',
        //                 price: 120
        //             },
        //             quantity: 1
        //         },
        //         {
        //             product: {
        //                 name: 'Apple',
        //                 price: 130
        //             },
        //             quantity: 1
        //         }
        //     ],
        //     total: 1140,
        //     user: 'Jeca',
        //     issued: '2021-03-25T15:33:50.872Z',
        //     id: 1
        // },
        // {
        //     items: [
        //         {
        //             product: {
        //                 name: 'Espresso',
        //                 price: 120
        //             },
        //             quantity: 1
        //         },
        //         {
        //             product: {
        //                 name: 'Squeezed',
        //                 price: 170
        //             },
        //             quantity: 1
        //         },
        //         {
        //             product: {
        //                 name: 'Orangina',
        //                 price: 140
        //             },
        //             quantity: 1
        //         }
        //     ],
        //     total: 430,
        //     user: 'Jeca',
        //     issued: '2021-03-25T15:33:52.906Z',
        //     id: 2
        // },
        // {
        //     items: [
        //         {
        //             product: {
        //                 name: 'Espresso',
        //                 price: 120
        //             },
        //             quantity: 1
        //         },
        //         {
        //             product: {
        //                 name: 'Squeezed',
        //                 price: 170
        //             },
        //             quantity: 1
        //         },
        //         {
        //             product: {
        //                 name: 'Orangina',
        //                 price: 140
        //             },
        //             quantity: 1
        //         }
        //     ],
        //     total: 430,
        //     user: 'Jeca',
        //     issued: '2021-03-25T15:33:54.922Z',
        //     id: 3
        // },
        // {
        //     items: [
        //         {
        //             product: {
        //                 name: 'Turkish',
        //                 price: 170
        //             },
        //             quantity: 1
        //         },
        //         {
        //             product: {
        //                 name: 'Orangina',
        //                 price: 140
        //             },
        //             quantity: 1
        //         },
        //         {
        //             product: {
        //                 name: 'Espresso',
        //                 price: 120
        //             },
        //             quantity: 1
        //         }
        //     ],
        //     total: 430,
        //     user: 'Meca',
        //     issued: '2021-03-25T15:34:03.937Z',
        //     id: 4
        // },
        // {
        //     items: [
        //         {
        //             product: {
        //                 name: 'Coctails',
        //                 price: 120
        //             },
        //             quantity: 1
        //         },
        //         {
        //             product: {
        //                 name: 'Apple',
        //                 price: 130
        //             },
        //             quantity: 1
        //         },
        //         {
        //             product: {
        //                 name: 'Squeezed',
        //                 price: 170
        //             },
        //             quantity: 1
        //         },
        //         {
        //             product: {
        //                 name: 'Orangina',
        //                 price: 140
        //             },
        //             quantity: 1
        //         }
        //     ],
        //     total: 560,
        //     user: 'Meca',
        //     issued: '2021-03-25T15:34:05.892Z',
        //     id: 5
        // },
        // {
        //     items: [
        //         {
        //             product: {
        //                 name: 'Turkish',
        //                 price: 170
        //             },
        //             quantity: 2
        //         },
        //         {
        //             product: {
        //                 name: 'Orangina',
        //                 price: 140
        //             },
        //             quantity: 1
        //         }
        //     ],
        //     total: 480,
        //     user: 'Meca',
        //     issued: '2021-03-25T15:34:07.791Z',
        //     id: 6
        // }
    ],
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
            if (bill.items.length) {
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
            break;

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