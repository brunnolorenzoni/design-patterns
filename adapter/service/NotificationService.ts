import { Logger } from "../logger/Logger";

export class NotificationService {
  protected logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  public send(message: string): void {
    this.logger.info(`Notification sended: ${message}`);
  }
}
