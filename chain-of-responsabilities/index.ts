import { DogHandler } from "./DogHandler";
import { Handler } from "./Handler";
import { MonkeyHandler } from "./MonkeyHandler";
import { SquirrelHandler } from "./SquirrelHandler";

function execute(handler: Handler) {
  const foods = ["Nut", "Banana", "Cup of coffee"];

  for (const food of foods) {
    console.log(`Who wants a ${food}`);
    const result = handler.handle(food);

    if (result) {
      console.log(`   ${result}`);
    } else {
      console.log(`   ${food} was left untouched.`);
    }
  }
}

const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);

console.log("Chain: Monkey > Squirrel > Dog");
execute(monkey);

console.log("Subchain: Squirrel > Dog");
execute(squirrel);
