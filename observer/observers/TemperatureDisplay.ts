import { Observer } from "./Observer";
import { Subject } from "../subjects/Subject";

export class TemperatureDisplay implements Observer {
  protected readonly temperatureSubject: Subject;

  constructor(temperatureSubject: Subject) {
    this.temperatureSubject = temperatureSubject;
    this.temperatureSubject.registerObserver(this);
  }

  public notify(temperature: Number) {
    console.info(`Display: ${temperature}`);
    console.log("\n ");
  }
}
