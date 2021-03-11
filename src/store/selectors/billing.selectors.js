import { calculateItems } from "../../utils"

export const orderTotalSelector = (states) => calculateItems(states.billing.order)
export const billTotalSelector = (states) => calculateItems(states.billing.billItems)
