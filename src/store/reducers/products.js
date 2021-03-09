const initialState = {
    products: [
        {
            name: "Koka Kola",
            price: 130,
            category: 'juices'
        },
        {
            name: "Orangina",
            price: 140,
            category: 'juices'
        },
        {
            name: "Squeezed",
            price: 170,
            category: 'juices'
        },
        {
            name: "Apple",
            price: 130,
            category: 'juices'
        },
        {
            name: "Peach",
            price: 140,
            category: 'juices'
        },
        {
            name: "Apricot",
            price: 170,
            category: 'juices'
        },
        {
            name: "Fanta",
            price: 120,
            category: 'juices'
        },
        {
            name: "Sprite",
            price: 120,
            category: 'juices'
        },
        {
            name: "Tonic",
            price: 140,
            category: 'juices'
        },
        {
            name: "Lemonade",
            price: 170,
            category: 'juices'
        },
    ],

    order: [],
    onTable: [],

};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ORDER_ITEM':
            const alreadyInOrder = state.order.find(item => item.item.name === action.payload.item.name);
            // console.log(state, action.payload)
            // console.log(alreadyInOrder ? 'yes' : 'no')

            if (alreadyInOrder) {
                return {
                    ...state,
                    order: state.order.map(orderItem => orderItem.item.name === action.payload.item.name ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem)
                }
            } else {
                return {
                    ...state, order: [...state.order, action.payload]
                };
            }

        case 'DELETE_ORDER_ITEM':
            return {
                ...state,
                order: state.order.filter(item => item.item.name !== action.payload.item.name)
            }

        case 'SAVE_AND_PRINT_ORDER':
            // state.onTable.length === 0 &&
            const ifAlreadyOnTable = state.onTable.some(element => element.item.name === action.payload.forEach(item => item.item.name))

            console.log(ifAlreadyOnTable)

            return {
                ...state,
                order: [],
                onTable: state.onTable.length === 0 && ifAlreadyOnTable === false ? [...state.onTable.concat(state.order)] : state.onTable.map(item => {
                    for(let element of action.payload) {
                        if(item.item.name === element.item.name) {
                            return {...item, quantity: item.quantity + element.quantity}
                        } else {
                            return {...state.onTable.push(action.payload)}
                        }
                    }
                    }
                )
            }
    }
    return state
}


export default productReducer;