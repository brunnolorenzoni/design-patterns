import House from "../domain/house";
import HouseBuilder from "../builders/HouseBuilder";

export default class CastleDirector {
  static construct(): House {
    return new HouseBuilder()
      .setBuildingType("Castle")
      .setWallMaterial("Sandstone")
      .setNumberDoors(100)
      .setNumberWindows(200)
      .getResult();
  }
}
