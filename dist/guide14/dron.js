"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dron = void 0;
class Dron {
    _velocity;
    _height;
    _totalWeight;
    _numberOfTools;
    _tools;
    constructor(velocity = 100, height = 100, totalWeight = 0, numberOfTools = 0, tools = []) {
        this._velocity = velocity;
        this._height = height;
        this._totalWeight = 0;
        this._numberOfTools = numberOfTools;
        this._tools = [];
    }
    addTool(tool) {
        this._tools.push(tool);
        this._numberOfTools++;
        this._totalWeight += tool.toolWeight;
        console.log(`${tool.toolType} added`);
    }
    getTotalWeight() {
        return this._totalWeight;
    }
    getFinalVelocity() {
        if (this._totalWeight > 200) {
            let weightExceeded = this._totalWeight - 200;
            let timesExceeded = weightExceeded / 50;
            let percentageOfFinalSpeedLost = timesExceeded * 2;
            let finalLostSpeed = this._velocity - percentageOfFinalSpeedLost;
            return `Final velocity: ${finalLostSpeed}. Estimated percentage lost: ${percentageOfFinalSpeedLost}%`;
        }
        else {
            return `Final velocity: ${this._velocity}. The dron doesn't lose velocity`;
        }
    }
    getFinalHeight() {
        if (this._totalWeight > 200) {
            let weightExceeded = this._totalWeight - 200;
            let timesExceeded = weightExceeded / 50;
            let percentageOfFinalHeightLost = timesExceeded * 5;
            let finalLostHeight = this._height - percentageOfFinalHeightLost;
            return `Final height: ${finalLostHeight}. Estimated percentage lost: ${percentageOfFinalHeightLost}%`;
        }
        else {
            return `Final height: ${this._velocity}. The dron doesn't lose height`;
        }
    }
    getTools() {
        console.log('Tools: ');
        this._tools.forEach(tool => {
            console.log(tool);
        });
    }
    getToolAction(tool) {
        return `The action of ${tool.toolType} is to ${tool.getAction()}`;
    }
}
exports.Dron = Dron;
//# sourceMappingURL=dron.js.map