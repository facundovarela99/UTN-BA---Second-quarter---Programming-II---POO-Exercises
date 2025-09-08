// 15. La Marina del reino de Caballito quiere desarrollar un sistema que le permita gestionar su flota
// de navíos; por el momento únicamente se requiere presentar ante las autoridades un posible
// diseño en el que se expongan las relaciones entre las entidades que modelarán los datos.

    // ● De los acorazados se requiere saber la flotabilidad, la solidez, la estabilidad, blindaje y
    // potencia de fuego, además de la velocidad crucero y el nombre con el que fue
    // bautizado.
    // ● Los destructores se caracterizan por la potencia de fuego y altos índices de
    // maniobrabilidad y estabilidad cuando alcanza su velocidad máxima, aunque también se
    // necesita registrar la flotabilidad, solidez, la velocidad crucero y nombre.
    // ● Hay únicamente un barco hospital, llamada “Sibelancia”, con excelente flotabilidad y una
    // estabilidad extrema que la hace ideal para su trabajo; posee una capacidad de carga que
    // le permite brindar servicios a setenta y cinco pacientes.
    // ● “La gaucha” y “El gaucho” son dos lanchas destinadas a brindar servicio médico que se
    // emplean para salvatajes rápidos; poseen motor fuera de borda, una elevada flotabilidad
    // que le permite ir muy rápido, aunque debido a que la estabilidad no es muy buena, la
    // maniobrabilidad se ve afectada; ambas poseen una grúa pequeña que les permite subir
    // y/o arriar objetos de hasta trescientos kilos.

// Analizar, diseñar, diagramar las relaciones e implementar el código.
// Crear instancias de los distintos barcos, asignar valores y mostrar por pantalla.


abstract class Navio{
    private _nombre: string;
    private _flotabilidad: number;
    private _estabilidad: number;
    private _velocidadMax: number;
    private _maniobrabilidad: number;

    constructor(nombre: string, flotabilidad: number, estabilidad: number, velocidadMaxima: number, maniobrabilidad: number){
        this._nombre = nombre;
        this._flotabilidad = flotabilidad;
        this._estabilidad = estabilidad;
        this._velocidadMax = velocidadMaxima;
        this._maniobrabilidad = maniobrabilidad;
    }

    public get nombre(): string{return this._nombre};
    public get flotabilidad(): number{return this._flotabilidad};
    public get estabilidad(): number{return this._estabilidad};
    public get velocidadMaxima(): number{return this._velocidadMax};
    public get maniobrabilidad(): number{return this._maniobrabilidad};
}

interface IPotenciaDeFuego{
    getPotenciaDeFuego(): number;
}

export class EquipoLancha{
    private _nombreEquipo: string;
    constructor(nombre: string){
        this._nombreEquipo = nombre
    }

    public get equipo(){
        return this._nombreEquipo;
    }
}

export class Acorazado extends Navio implements IPotenciaDeFuego{
    private _solidez: number;
    private _blindaje: number
    private _potenciaDeFuego: number;
    
    constructor(nombre: string, flotabilidad: number, estabilidad: number, velocidadMaxima: number, maniobrabilidad: number, solidez: number, blindaje: number, potenciaDeFuego: number){
        super(nombre, flotabilidad, estabilidad, velocidadMaxima, maniobrabilidad)
        this._solidez = solidez;
        this._blindaje = blindaje
        this._potenciaDeFuego = potenciaDeFuego;
    }

    public get solidez(): number{return this._solidez};

    public get blindaje(): number{return this._blindaje}

    public getPotenciaDeFuego(): number {
        return this._potenciaDeFuego;
    }
}

export class Destructor extends Navio implements IPotenciaDeFuego{
    private _solidez: number;
    private _potenciaDeFuego: number;

    constructor(nombre: string, flotabilidad: number, estabilidad: number, velocidadMaxima: number, maniobrabilidad: number, solidez: number, potenciaDeFuego: number){
        super(nombre, flotabilidad, estabilidad, velocidadMaxima, maniobrabilidad)
        this._solidez = solidez;
        this._potenciaDeFuego = potenciaDeFuego;
    }

    public get solidez(): number{return this._solidez}

    public getPotenciaDeFuego(): number {
        return this._potenciaDeFuego;
    }
}

export class BarcoHospital extends Navio{
    private _capacidadDeCarga: number = 75
    constructor(nombre: string, flotabilidad: number,estabilidad: number, velocidadMaxima: number, maniobrabilidad: number){
        super(nombre, flotabilidad, estabilidad, velocidadMaxima, maniobrabilidad)
    }

    public get capacidadDeCarga(): number{return this._capacidadDeCarga}
}

export class Lancha extends Navio{
    private _equipamiento: Array<EquipoLancha>;

    constructor(nombre: string, flotabilidad: number,estabilidad: number, velocidadMaxima: number, maniobrabilidad: number, equipamiento: Array<EquipoLancha>){
        super(nombre, flotabilidad, estabilidad, velocidadMaxima, maniobrabilidad)
        this._equipamiento = equipamiento;
    }

    public getEquipamiento(){
        console.log('Equipamiento de la lancha:\n')
        for (const equipo of this._equipamiento) {
            console.log(equipo.equipo)
        }
    }
}