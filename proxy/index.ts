import { MyProxy } from "./MyProxy";
import { RealSubject } from "./RealSubject";

console.log("Client: Executing without a proxy.");
const realSubject = new RealSubject();
realSubject.request()

console.log('\n')

console.log("Client: Executing with a proxy.");
const proxy = new MyProxy(realSubject);
proxy.request();
