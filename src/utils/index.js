export const calculateItems = (items) => {
    let total = 0;
    items?.forEach(item => total += item.product.price * item.quantity)

    return total
}

export const sumItems = (items) => {
    let total = 0;
    items.forEach(item => total += item.total)

    return total
}