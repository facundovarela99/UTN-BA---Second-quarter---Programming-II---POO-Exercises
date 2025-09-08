"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const excercise13_1 = require("./excercise13");
function main() {
    const oruga1 = new excercise13_1.Oruga();
    const robot1 = new excercise13_1.Robot();
    robot1.setTraccion(oruga1);
    console.log(robot1.mostrarDatos());
}
main();
//# sourceMappingURL=index.js.map