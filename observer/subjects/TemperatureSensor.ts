import { Observer } from "../observers/Observer";
import { Subject } from "./Subject";

export class TemperatureSensor implements Subject {
  protected temperature: Number = 0;
  protected observers: Observer[] = [];

  constructor() {
    setInterval(this.setNewTemperature.bind(this), 2000);
  }

  public registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public unregisterObserver(observer: Observer): void {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  public notifyObservers(): void {
    this.observers.forEach((observer) =>
      observer.notify(this.getTemperature())
    );
  }

  public getTemperature(): Number {
    return this.temperature;
  }

  protected setNewTemperature() {
    const randomTemperature = Math.floor(Math.random() * 120);
    console.info(`New Temperature: ${randomTemperature}`);
    this.setTemperature(Math.floor(randomTemperature));
  }

  protected setTemperature(temperature: Number) {
    this.temperature = temperature;
    this.notifyObservers();
  }
}
