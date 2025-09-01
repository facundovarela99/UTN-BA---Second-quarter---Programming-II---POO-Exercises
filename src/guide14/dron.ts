import { Tool } from "./tool";

export class Dron {
    private _velocity: number;
    private _height: number;
    private _totalWeight: number;
    private _numberOfTools: number;
    private _tools: Array<Tool>;

    constructor(velocity: number = 100, height: number = 100, totalWeight: number = 0, numberOfTools: number = 0, tools = []) {
        this._velocity = velocity;
        this._height = height;
        this._totalWeight = 0;
        this._numberOfTools = numberOfTools;
        this._tools = [];
    }

    public addTool(tool: Tool) {
        this._tools.push(tool);
        this._numberOfTools++;
        this._totalWeight += tool.toolWeight;
        console.log(`${tool.toolType} added`);
    }

    public getTotalWeight(){
        return this._totalWeight;
    }

    public getFinalVelocity() {
        if (this._totalWeight > 200) {
            let weightExceeded = this._totalWeight - 200;
            let timesExceeded = weightExceeded / 50;
            let percentageOfFinalSpeedLost = timesExceeded * 2;
            let finalLostSpeed = this._velocity - percentageOfFinalSpeedLost;
            return `Final velocity: ${finalLostSpeed}. Estimated percentage lost: ${percentageOfFinalSpeedLost}%`;
        } else {
            return `Final velocity: ${this._velocity}. The dron doesn't lose velocity`;
        }
    }

    public getFinalHeight() {
        if (this._totalWeight > 200) {
            let weightExceeded = this._totalWeight - 200;
            let timesExceeded = weightExceeded / 50;
            let percentageOfFinalHeightLost = timesExceeded * 5;
            let finalLostHeight = this._height - percentageOfFinalHeightLost;
            return `Final height: ${finalLostHeight}. Estimated percentage lost: ${percentageOfFinalHeightLost}%`;
        } else {
            return `Final height: ${this._velocity}. The dron doesn't lose height`;
        }
    }

    public getTools(){
        console.log('Tools: ')
        this._tools.forEach(tool =>{
            console.log(tool);
        })
    }

    public getToolAction(tool: Tool){
        return  `The action of ${tool.toolType} is to ${tool.getAction()}`
    }

}