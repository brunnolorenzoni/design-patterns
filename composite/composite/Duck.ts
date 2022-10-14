import { Component } from "../component/Component";
import { Composite } from "./Composite";

export class Duck extends Composite {
  constructor(childs: Component[]) {
    super();
    this.childs = childs;
  }
}
