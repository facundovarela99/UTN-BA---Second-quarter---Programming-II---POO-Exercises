//3. Create an Article class that has private attributes brand and model.
    // ● Create public methods to the value assignations
    // ● Create an instance and assigne it values.
    // ● Note that it isn't possible to show the values and analyze the reason why this happens

export class Article{
    private _brand: string;
    private _model: string;

    constructor(brand: string, model: string){
        this._brand = brand;
        this._model = model;
    }

    public get brand(): string{
        return this._brand;
    }

    public get model(): string{
        return this._model;
    }
}

//There are two public methos to obtain the private attributes brand and model,
// making use of the 'property' get, to give the same name of the attributes to the methods.
// That's why the private attributes have an '_' in the beginning