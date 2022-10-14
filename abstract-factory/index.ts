import { AbstractFactory } from "./factories/AbstractFactory";
import { ConcreteFactory1 } from "./factories/ConcreteFactory1";
import { ConcreteFactory2 } from "./factories/ConcreteFactory2";

function execute(factory: AbstractFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productB.usefulFunctionB());
  console.log(productB.anotherUsefulFunctionB(productA));
}

console.log("Client: Testing client with the first factory type");
execute(new ConcreteFactory1());

console.log("Client: Testing client with the second factory type");
execute(new ConcreteFactory2());
