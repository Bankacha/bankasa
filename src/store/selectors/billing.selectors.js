import { calculateItems } from "../../utils";

export const orderTotalSelector = (states) => calculateItems(states.billing.order);
export const billTotalSelector = (states) => calculateItems(states.billing.billItems);

export const getBillItems = (states) => states.billing.billItems;
export const getOrderItems = (states) => states.billing.order;
export const getClosedBills = (states) => states.billing.closedBills;