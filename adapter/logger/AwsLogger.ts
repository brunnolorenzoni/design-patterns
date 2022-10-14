import { CloudLogger } from "./CloudLogger";

export class AwsLogger implements CloudLogger {
  public sendToServer(message: string, type: string): void {
    console.log("AwsLogger", { message, type });
  }
}
