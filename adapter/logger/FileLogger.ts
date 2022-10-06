import { Logger } from "./Logger";

export class FileLogger implements Logger {
  public info(message: string): void {
    console.log(`Logger: ${message}`, "output => log.txt");
  }
}
