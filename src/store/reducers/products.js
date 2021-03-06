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

};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ORDER_ITEM':
            const alreadyInOrder = state.order.find(item => item.name === action.payload.name);

            if (alreadyInOrder) {
                return {
                    ...state,
                    order: state.order.find( item => {
                        if(item.name === action.payload.name) {
                            return {
                                ...state.order.item, quantity: item.quantity + 1
                            }
                        } else {
                            return item
                        }
                    })
                }
            } else {
                return {
                    ...state,
                    order: [...state.order, action.payload]
                };
            }

    }
    return state
}


export default productReducer;