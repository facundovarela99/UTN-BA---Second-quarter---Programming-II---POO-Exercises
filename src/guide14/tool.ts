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


export class Tool{
    private _toolType: string;
    private _weight: number;
    private action?: string;

    constructor(toolType: string, weight: number, action: string = '') {
        this._toolType = toolType;
        this._weight = weight;
        this.action = action
    }

    public get toolType() {
        return this._toolType;
    }

    public get toolWeight() {
        return this._weight;
    }

    public getAction(): string | undefined{
        return this.action
    }

}