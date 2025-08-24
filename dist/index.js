"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const excercise13_1 = require("./excercise13");
function main() {
    const rubberWheelTractionSystem1 = new excercise13_1.TractionSystem('Rubber Wheel', false, 10);
    const CatterpillarTractionSystem1 = new excercise13_1.TractionSystem('Catterpillar', true, 10);
    const robot1 = new excercise13_1.Robot('KT-2020-P', 10, rubberWheelTractionSystem1);
    const robot2 = new excercise13_1.Robot('KT-2020-Q', 10, CatterpillarTractionSystem1);
    console.log('Robot 1:\n');
    console.log(robot1.serialNumber + "\n");
    console.log(robot1.typeTraction.name);
    console.log(`Base power traction: ${robot1.basePowerTraction}. ${robot1.advance(robot1.typeTraction.HpUse(robot1.typeTraction.name))}`);
}
main();
//# sourceMappingURL=index.js.map