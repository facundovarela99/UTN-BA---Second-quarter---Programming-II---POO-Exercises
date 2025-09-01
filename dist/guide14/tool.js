"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tool = void 0;
class Tool {
    _toolType;
    _weight;
    action;
    constructor(toolType, weight, action = '') {
        this._toolType = toolType;
        this._weight = weight;
        this.action = action;
    }
    get toolType() {
        return this._toolType;
    }
    get toolWeight() {
        return this._weight;
    }
    getAction() {
        return this.action;
    }
}
exports.Tool = Tool;
//# sourceMappingURL=tool.js.map