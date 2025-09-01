"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dron_1 = require("./guide14/dron");
const tool_1 = require("./guide14/tool");
function main() {
    const infraredSensor1 = new tool_1.Tool('Infrared sensor', 250, 'Detect high temperatures');
    const Taser1 = new tool_1.Tool('Taser', 300, 'Electrocute hostiles');
    const roboticArm1 = new tool_1.Tool('Robotic Arm', 500, 'Grab heavy gear');
    const dron1 = new dron_1.Dron(100, 100, 0, 0, []);
    console.log(dron1.getFinalHeight());
    console.log(dron1.getFinalVelocity());
    console.log("Total weight: " + dron1.getTotalWeight());
    dron1.addTool(infraredSensor1);
    dron1.addTool(Taser1);
    dron1.addTool(roboticArm1);
    console.log("Total weight: " + dron1.getTotalWeight());
    console.log(dron1.getFinalHeight());
    console.log(dron1.getFinalVelocity());
    console.log(dron1.getToolAction(Taser1));
}
main();
//# sourceMappingURL=index.js.map