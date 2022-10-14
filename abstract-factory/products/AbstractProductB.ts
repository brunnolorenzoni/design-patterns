import { AbstractProductA } from "./AbstractProductA";

export interface AbstractProductB {
  usefulFunctionB(): string;
  anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}
