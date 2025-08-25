//  14. A security company that is dedicated to surveillance thorugh the use of drones, has been developed a mounting system that allow the drones to charge an actionable tool besides the surveillance camera
//  Currently, the anchorage systems allows:
// ● infrared sensor: it weighs 250gr
// ● Taser: it weighs 300 gr
// ● Robotic arm: it weighs 500 gr

//The dron can hold 200gr until suffer velocity (5 mts/s) and height (100 mts) penalizations; then, by every 50 extra gr, the dron reduce its velocity at 2 % and height at 5 %

//Analyze, design, diagram relationships and implement code.
//Create instances of each of the classes and assign the drone the different tools,
//trying to display the following data on the screen between the different assignments:
//speed, height and type of tool carried



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

}


export class Tool {
    private _toolType: string;
    private _weight: number;

    constructor(toolType: string, weight: number) {
        this._toolType = toolType;
        this._weight = weight;
    }

    public get toolType() {
        return this._toolType;
    }

    public get toolWeight() {
        return this._weight;
    }

}