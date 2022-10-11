import { Component } from "../component/Component";

export abstract class Composite implements Component {
  protected childs: Component[] = [];
  operation() {
    this.childs.forEach(child => {
      child.operation();
    });
  }
  add(component: Component) {
    this.childs.push(component);
  }
  remove(component: Component) {
    this.childs.splice(this.childs.indexOf(component), 1);
  }
  getChild() {
    return this.childs;
  }
}