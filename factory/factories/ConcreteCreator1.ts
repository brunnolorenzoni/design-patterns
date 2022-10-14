import { ConcreteProduct1 } from "../products/ConcreteProduct1";
import { Product } from "../products/Product";
import { Creator } from "./Creator";

export class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}
