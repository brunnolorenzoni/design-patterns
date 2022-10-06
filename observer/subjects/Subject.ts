import { Observer } from "../observers/Observer";

export interface Subject {
  registerObserver(observer: Observer): void;
  unregisterObserver(observer: Observer): void;
  notifyObservers(): void;
}
