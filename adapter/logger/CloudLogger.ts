export interface CloudLogger {
  sendToServer(message: string, type: string): void;
}
