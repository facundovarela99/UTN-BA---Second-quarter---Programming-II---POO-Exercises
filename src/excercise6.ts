//6. Create a class Fruit with private attributes colour, weight, itsSeasonal.
// ● Create setters and getters.
// ● Write a function called itsEadible that returns true when the weight of the fruit it's lower than 200gr and it's seasional, and false in other any case.
// ● Define two constructors so the fruit can be created with colour, wieght and itsSeasonal attributes at the instance moment, or well be created without initials


export class Fruit{
    private _colour: string;
    private _weight: number;
    private _itsSeasonal: boolean;

    
    constructor(colour?: string, weight?: number, itsSeasonal?: boolean);
    constructor(colour: string, weight: number, itsSeasonal: boolean){
        this._colour = colour;
        this._weight = weight;
        this._itsSeasonal = itsSeasonal;
    }

    // Multiple "signatures" are declared for the same constructor in order to assign all, some, or none of the values to the created object. Attributes that do not receive values will default to undefined.


    public set colour(newColour: string){
        this._colour = newColour;
    }

    public get colour(): string{
        return this._colour
    }

    public set weight(newWeight: number){
        this._weight = newWeight;
    }

    public get weight(): number{
        return this._weight;
    }

    public get itsSeasonal(): boolean{
        return this._itsSeasonal;
    }

    public itsEadible(): boolean{
        return this._weight<=200 && this._itsSeasonal;
    }

}