import { State } from "../states/order/State";
import { CancelledOrderState } from '../states/order/CancelledOrderState'
import { PaymentPendingState } from '../states/order/PaymentPendingState'
import { OrderShippedState } from '../states/order/OrderShippedState'
import { OrderBeingPrepared } from '../states/order/OrderBeingPrepared'

export class Order {
  public cancelledOrderState: State;
  public paymentPendingState: State;
  public orderShipedState: State;
  public orderBeingPrepared: State;

  public currentState: State;

  constructor() {
    this.cancelledOrderState = new CancelledOrderState(this);
    this.paymentPendingState = new PaymentPendingState(this);
    this.orderShipedState = new OrderShippedState(this);
    this.orderBeingPrepared = new OrderBeingPrepared(this);

    this.setState(this.paymentPendingState);
  }

  public setState(state: State) {
    this.currentState = state;
  }

  public getCurrentState(): State {
    return this.currentState;
  }
}