import { AbstractProductA } from "../products/AbstractProductA";
import { AbstractProductB } from "../products/AbstractProductB";

export interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}
