import { Product } from "./Product";

export class ConcreteProduct1 implements Product {
  operation(): string {
    return "{Result of the ConcreteProduct1}";
  }
}
