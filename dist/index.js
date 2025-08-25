"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const excercise14_1 = require("./excercise14");
function main() {
    const infraredSensor1 = new excercise14_1.Tool('Infrared sensor', 250);
    const Taser1 = new excercise14_1.Tool('Taser', 300);
    const roboticArm1 = new excercise14_1.Tool('Robotic Arm', 500);
    const dron1 = new excercise14_1.Dron(100, 100, 0, 0, []);
    console.log(dron1.getFinalHeight());
    console.log(dron1.getFinalVelocity());
    console.log("Total weight: " + dron1.getTotalWeight());
    dron1.addTool(infraredSensor1);
    dron1.addTool(Taser1);
    dron1.addTool(roboticArm1);
    console.log("Total weight: " + dron1.getTotalWeight());
    console.log(dron1.getFinalHeight());
    console.log(dron1.getFinalVelocity());
}
main();
//# sourceMappingURL=index.js.map