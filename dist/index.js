"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const excercise8_12_1 = require("./excercise8-12");
function main() {
    const guard1 = new excercise8_12_1.Guard('Facundo', 'Varela');
    const visitor1 = new excercise8_12_1.Visitor('Gonzalo', 'Varela', 123456789);
    const visitor2 = new excercise8_12_1.Visitor('Federico', 'Varela', 34562189);
    console.log(guard1.introduceHimself());
    console.log(visitor1.introduceHimself());
    console.log(guard1.checkDNI(visitor1.introduceHimself(), visitor1.dniNumber));
}
main();
//# sourceMappingURL=index.js.map