import { Order } from "../../contexts/order";
import { State } from "./State";

export class OrderBeingPrepared implements State {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder() {
    console.log('Cancelling your order.. You will be refunded.');
    this.order.setState(this.order.cancelledOrderState);
  }

  verifyPayment() {
    console.log('Payment is already verified.');
  }
  
  shipOrder() {
    console.log('Shipping your order now..');
    this.order.setState(this.order.orderShipedState);
  }
}