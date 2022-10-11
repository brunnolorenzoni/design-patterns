import { Order } from "../../contexts/order";
import { State } from "./State";

export class OrderShippedState implements State {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder() {
    console.log('You cannot cancel an order that has been shipped.');
  }

  verifyPayment() {
    console.log('Payment is already verified');
  }
  
  shipOrder() {
    console.log('Order is already shipped');
  }
}