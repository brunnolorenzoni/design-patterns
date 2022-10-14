import { Component } from "./components/Component";
import { ConcreteComponent } from "./components/ConcreteComponent";
import { ConcreteDecoratorA } from "./decorators/ConcreteDecoratorA";
import { ConcreteDecoratorB } from "./decorators/ConcreteDecoratorB";

function clientCode(component: Component) {
  console.log(`RESULT: ${component.operation()}`);
}

const simple = new ConcreteComponent();
console.log("Client: I've got a simple component");
clientCode(simple);

console.log("\n");

const decorator1 = new ConcreteDecoratorA(simple);
console.log("decorator1", decorator1.operation());

const decorator2 = new ConcreteDecoratorB(decorator1);
console.log("decorator2", decorator2.operation());

console.log("Client: Now i've got a decorated component");
clientCode(decorator2);
