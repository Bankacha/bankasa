import { calculateItems } from "../../utils";

export const orderTotalSelector = (states) => calculateItems(states.billing.order);
export const billTotalSelector = (states) => calculateItems(states.billing.activeBillItem?.items);

export const getBillItems = (states) => states.billing.billItems;
export const getOrderItems = (states) => states.billing.order;
export const getClosedBills = (states) => states.billing.closedBills;
export const getCurrentBill = (states) => states.billing.currentBill;
export const getActiveBillItem = (states) => states.billing.activeBillItem;
