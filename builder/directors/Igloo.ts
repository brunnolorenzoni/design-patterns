import House from "../domain/house";
import HouseBuilder from "../builders/HouseBuilder";

export default class IglooDirector {
  
  static oneDoor(): House {
    return new HouseBuilder()
      .setBuildingType("Igloo")
      .setWallMaterial("Ice")
      .setNumberDoors(1)
      .getResult();
  }
  static twoDoors(): House {
    return new HouseBuilder()
      .setBuildingType("Igloo")
      .setWallMaterial("Ice")
      .setNumberDoors(2)
      .getResult();
  }
}
