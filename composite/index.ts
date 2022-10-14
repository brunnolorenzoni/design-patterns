import { Duck } from "./composite/Duck";
import { DuckFly } from "./composite/DuckFly";
import { DuckVoice } from "./leaf/DuckVoice";
import { Wing } from "./leaf/Wing";

const wings = [new Wing(), new Wing()];
const flyAbility = new DuckFly().add(wings[0]).add(wings[1]);
const voiceAbility = new DuckVoice();

const duck = new Duck([flyAbility, voiceAbility]);

duck.operation();
