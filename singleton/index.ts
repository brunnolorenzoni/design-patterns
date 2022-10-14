import { Singleton } from "./Singleton";
import { UseCase } from "./UseCase";

const s1 = Singleton.getInstance("Foo");
const s2 = Singleton.getInstance("");

if (s1 === s2) {
  console.log("Singleton works, both variables contain the same instance.");
} else {
  console.log("Singleton failed, variables contain different instances.");
}

s2.value = "Bar";
s1.someBusinessLogic();
s2.someBusinessLogic();

s2.space = "xXx5454xXx";

const another = new UseCase();
another.useSingleton();
