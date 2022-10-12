import { AbstractHandler } from "./AbstractHandler";

export class SquirrelHandler extends AbstractHandler {
  public handle(request: string): string {
    if (request === "Nut") {
      return `Squirrel: I'll eat ${request}`;
    }
    return super.handle(request);
  }
}
