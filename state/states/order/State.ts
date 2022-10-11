import { Order } from "../../contexts/order";

export interface State {
  order: Order;

  cancelOrder();
  verifyPayment();
  shipOrder();
}
