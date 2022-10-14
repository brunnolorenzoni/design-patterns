import { ConcreteProduct2 } from "../products/ConcreteProduct2";
import { Product } from "../products/Product";
import { Creator } from "./Creator";

export class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}
