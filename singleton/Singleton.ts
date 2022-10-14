export class Singleton {
  private static instance: Singleton;
  public space: string = "K0984Nx";
  public value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public static getInstance(value: string): Singleton {
    if (!Singleton.instance) {
      console.log("There isn't any instance, let's set an instance.");
      Singleton.instance = new Singleton(value);
      console.log("Instance created.");
    }
    console.log("Here's the instance", Singleton.instance);
    return Singleton.instance;
  }

  public someBusinessLogic(): void {
    // ...
    this.value = this.value.toUpperCase();
    console.log({ value: this.value, space: this.space });
  }
}
