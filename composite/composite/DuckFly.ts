import { Component } from "../component/Component";
import { Composite } from "../composite/Composite";

export class DuckFly extends Composite {
  operation() {
    console.log("It flies.");
    super.operation();
  }
  add(component: Component) {
    super.add(component);
    return this;
  }
}
