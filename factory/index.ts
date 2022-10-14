import { ConcreteCreator1 } from "./factories/ConcreteCreator1";
import { ConcreteCreator2 } from "./factories/ConcreteCreator2";
import { Creator } from "./factories/Creator";

function execute(creator: Creator) {
  console.log("Client: I'm not aware of the creator's class, but still works");
  console.log(creator.someOperation());
}

console.log("App: Launched with the ConcreteCreator1");
execute(new ConcreteCreator1());

console.log("App: Launched with the ConcreteCreator2");
execute(new ConcreteCreator2());
