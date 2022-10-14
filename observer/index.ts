import { Fan } from "./observers/Fan";
import { TemperatureDisplay } from "./observers/TemperatureDisplay";
import { TemperatureSensor } from "./subjects/TemperatureSensor";

// Use Observer Implementation
const arduinoTemperatureSensor = new TemperatureSensor();
const fan = new Fan(arduinoTemperatureSensor);
const temperatureDisplay = new TemperatureDisplay(arduinoTemperatureSensor);
