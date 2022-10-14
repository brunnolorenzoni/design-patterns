import { Order } from "./contexts/order";

let order = new Order();

order.getCurrentState().verifyPayment();
order.getCurrentState().shipOrder();
order.getCurrentState().cancelOrder();

console.log("Order state: " + (<any>order.getCurrentState()).constructor.name);
