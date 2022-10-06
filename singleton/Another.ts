import { Singleton } from "./Singleton";

export class Another {
  public useSingleton() {
    console.log('Another class using Singleton.')
    const instance = Singleton.getInstance('Passing a value, but this value will not be use, because we\'ve already created an instance.')
    console.log('The value is the same, even if we set another value', instance)

    console.log('But we can change the value, like this in another class')
    instance.value = 'Hello'
    console.log(instance)
  }
}