export abstract class Doc{
    private _camposCompletos: number = 0;

    public set camposCompletos(value: number){
        this._camposCompletos = value;
    }

    public get camposCompletos(){
        return this._camposCompletos;
    }
}

