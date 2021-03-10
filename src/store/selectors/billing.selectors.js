import { sumItems } from "../../utils"

export const orderTotalSelector = (states) => sumItems(states.billing.order)
export const billTotalSelector = (states) => sumItems(states.billing.billItems)
