import { Order } from "../../contexts/order";
import { State } from "./State";

export class PaymentPendingState implements State {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder() {
    console.log("Cancelling your unpaid order...");
    this.order.setState(this.order.cancelledOrderState);
  }

  verifyPayment() {
    console.log("Payment verified! Shipping soon.");
    this.order.setState(this.order.orderBeingPrepared);
  }

  shipOrder() {
    console.log("Cannot ship order when payment is pending!");
  }
}
