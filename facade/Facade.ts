import { SubSystem1 } from "./SubSystem1";
import { SubSystem2 } from "./SubSystem2";

export class Facade {
  protected subsystem1: SubSystem1;
  protected subsystem2: SubSystem2;

  constructor(subsystem1?: SubSystem1, subsystem2?: SubSystem2) {
    this.subsystem1 = subsystem1 || new SubSystem1();
    this.subsystem2 = subsystem2 || new SubSystem2();
  }

  public operation(): string {
    let result = "Facade initializes subsystems:\n";
    result += this.subsystem1.operation1();
    result += this.subsystem2.operation1();
    result += "Facade orders subsystems to perform action: \n";
    result += this.subsystem1.operationN();
    result += this.subsystem2.operationZ();

    return result;
  }
}
