export abstract class FiguraGeometrica{
    private _nombre: string;
    private _color: string;
    
    constructor(nombre?: string, color?: string);
    constructor(nombre: string, color: string){
        this._nombre = nombre;
        this._color = color;
    }

    public get nombre(): string{return this._nombre}
    public get color(): string{return this._color}

    public abstract getPerimetro(): number;
    public abstract getArea(): number; 
}


export class Triangulo extends FiguraGeometrica{
    private _lado1: number;
    private _lado2: number;
    private _lado3: number;

    constructor(nombre: string, color: string, lado1: number, lado2: number, lado3: number){
        super(nombre, color)
        this._lado1 = lado1;
        this._lado2 = lado2;
        this._lado3 = lado3
    }

    public getPerimetro(): number{
        return this._lado1+this._lado2+this._lado3
    };
    public getArea(): number{
        return 1
    };
}

export class Cuadrado extends FiguraGeometrica{
    private _lado: number;
    constructor(nombre: string, color: string, lado: number){
        super(nombre, color)
        this._lado = lado
    }

    public get lado(): number{
        return this._lado;
    }

    public set lado(value: number){
        this._lado = value;
    }

    public getPerimetro(): number{
        return this._lado * 4;
    };
    public getArea(): number{
        return this._lado*this._lado
    };
}

export class Circulo extends FiguraGeometrica{
    private _radio: number
    constructor(nombre: string, color: string, radio: number){
        super(nombre, color)
        this._radio = radio
    }

    public getPerimetro(): number{return 1};
    public getArea(): number{return 1};
}