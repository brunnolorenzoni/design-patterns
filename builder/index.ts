import IglooDirector from "./directors/Igloo";
import CastleDirector from "./directors/Castle";
import HouseBoatDirector from "./directors/Houseboat";

const IGLOO = IglooDirector.oneDoor();
const IGLOO2 = IglooDirector.twoDoors();

const CASTLE = CastleDirector.construct();
const HOUSEBOAT = HouseBoatDirector.construct();

console.log(IGLOO.construction());
console.log(IGLOO2.construction());
console.log(CASTLE.construction());
console.log(HOUSEBOAT.construction());
