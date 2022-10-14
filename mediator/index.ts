import { Component1 } from "./components/Component1";
import { Component2 } from "./components/Component2";
import { ConcreteMediator } from "./mediator/ConcreteMediator";

const c1 = new Component1();
const c2 = new Component2();

new ConcreteMediator(c1, c2);

console.log("Client triggers operation A");
c1.doA();

console.log("Client triggers operation D");
c2.doD();
