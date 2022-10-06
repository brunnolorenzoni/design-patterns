import { CloudLogger } from "../logger/CloudLogger";
import { Logger } from "../logger/Logger";

export class AdapterLogger implements Logger {
  protected cloudLogger: CloudLogger;

  constructor(cloudLogger: CloudLogger) {
    this.cloudLogger = cloudLogger;
  }

  public info(message: string): void {
    this.cloudLogger.sendToServer(message, "info");
  }
}
