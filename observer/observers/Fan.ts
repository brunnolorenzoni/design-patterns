import { Observer } from "./Observer";
import { Subject } from "../subjects/Subject";


export class Fan implements Observer {
  protected temperatureSubject: Subject;
  protected running: boolean = false;
  
  constructor(temperatureSubject: Subject) {
    this.temperatureSubject = temperatureSubject;
    this.temperatureSubject.registerObserver(this);
  }

  public notify(temperature: Number) {
    console.info(`Fan read temperature ${temperature}`);
    if (temperature < 50) {
      return this.turnOff();
    }

    return this.turnOn();
  }

  protected turnOn () {
    if (!this.running) {
      this.running = true;
      console.info('Fan started');
    }
  }
  
  protected turnOff () {
    if (this.running) {
      this.running = false;
      console.info('Fan stoped');
    }
  }
}