import { RealSubject } from "./RealSubject";
import { Subject } from "./Subject";

export class MyProxy implements Subject {
  private realSubject: RealSubject;

  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject;
  }

  request(): void {
    if (this.checkAccess()) {
      this.logAccess();
      this.realSubject.request();
    }
  }

  private checkAccess(): boolean {
    console.log("Proxy: Checking access prior to firing a real request.", { user: true });
    return true;
  }

  private logAccess(): void {
    console.log("Proxy: Logging the time of request.", new Date());
  }
}
