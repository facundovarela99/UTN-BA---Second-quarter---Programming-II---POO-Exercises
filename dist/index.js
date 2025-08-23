"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const excercise3_1 = require("./excercise3");
function main() {
    console.log('Articles:\n');
    const article1 = new excercise3_1.Article('Powershell', 'Model 1');
    const article2 = new excercise3_1.Article('Command Prompt', 'Model 2');
    console.log(`Article 1: ${article1.brand} ${article2.model}`);
    console.log(`Article 2: ${article2.brand} ${article2.model}`);
}
main();
//# sourceMappingURL=index.js.map