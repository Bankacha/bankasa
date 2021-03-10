const sumItems = (items) => {
    let total = 0;
    items.forEach(item => total += item.product.price * item.quantity)

    return total
}

export const orderTotalSelector = (states) => sumItems(states.billing.order)
export const billTotalSelector = (states) => sumItems(states.billing.billItems)
