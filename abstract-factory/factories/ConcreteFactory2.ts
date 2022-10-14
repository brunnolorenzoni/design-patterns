import { AbstractProductA } from "../products/AbstractProductA";
import { AbstractProductB } from "../products/AbstractProductB";
import { ConcreteProductA2 } from "../products/ConcreteProductA2";
import { ConcreteProductB2 } from "../products/ConcreteProductB2";
import { AbstractFactory } from "./AbstractFactory";

export class ConcreteFactory2 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }
  createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}
