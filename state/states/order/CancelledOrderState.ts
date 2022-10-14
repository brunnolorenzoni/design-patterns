import { Order } from "../../contexts/order";
import { State } from "./State";

export class CancelledOrderState implements State {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  public cancelOrder() {
    console.log("This order is already cancelled");
    this.order.setState(this.order.cancelledOrderState);
  }

  public verifyPayment() {
    console.log("The order is cancelled, you cannot pay anymore.");
  }

  public shipOrder() {
    console.log("The order is cancelled, you cannot ship it anymore.");
  }
}
