import { AbstractProductA } from "./AbstractProductA";
import { AbstractProductB } from "./AbstractProductB";

export class ConcreteProductB2 implements AbstractProductB {
  public usefulFunctionB(): string {
    return "The result of the product B2";
  }

  anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B2 collaborating with the (${result})`;
  }
}
