//  Una empresa desea crear un programa para calcular el sueldo de sus empleados. La fórmula
//  para calcular el sueldo de un empleado es la siguiente:
//  sueldo = neto + bonopresentismo + bonoresultado
//  Los empleados pueden categorizarse en:
//  Gerente. Sueldo neto 100000
//  Administrativo. Sueldo neto 40000
//  Operador. Sueldo neto 10500
//  Cadete. Sueldo neto 1000
//  Existen 2 bonos por presentismo.
//  El bono A asigna:
//  $1000 si el empleado no faltó nunca.
//  $450 si el empleado faltó 1 única vez
//  $0 en cualquier otro caso.
//  El bono B siempre suma $500 (cero pesos).
//  El bono por resultados ofrece 3 posibilidades:
//  10% sobre el sueldo neto en caso de objetivo cumplido
//  $800 fijos en caso de cumplir el 80& del objetivo
//  $0 (cero pesos) en cualquier otro caso.
//  Desarrolle una aplicación que permita calcular el sueldo de un empleado. Pruebe distintos
//  escenarios.


abstract class Empleado{
    private _nombre: string;
    private _apellido: string;
    private _sueldoNeto: number;
    private _ausencias: number;
    private _nivelObjetivo: number;

    constructor(nombre: string, apellido: string, sueldoNeto: number, ausencias: number, nivelObjetivo: number){
        this._nombre = nombre;
        this._apellido = apellido;
        this._sueldoNeto = sueldoNeto;
        this._ausencias = ausencias;
        this._nivelObjetivo = nivelObjetivo;
    }

    public get nombre(){return this._nombre}
    public get apellido(){return this._apellido}
    public get sueldoNeto(){return this._sueldoNeto}
    public get ausencias(){return this._ausencias}
    public get nivelObjetivo(){return this._nivelObjetivo}

    public abstract calcularSueldo(neto: number, bonoPresentismo: number, bonoResultado: number): number;
} 

export class Cadete extends Empleado{
    public calcularSueldo(neto: number, bonoPresentismo: number, bonoResultado: number): number {
        return neto + bonoPresentismo + bonoResultado
    }
}
export class Operador extends Empleado{
    public calcularSueldo(neto: number, bonoPresentismo: number, bonoResultado: number): number {
        return neto + bonoPresentismo + bonoResultado
    }
}
export class Administrativo extends Empleado{
    public calcularSueldo(neto: number, bonoPresentismo: number, bonoResultado: number): number {
        return neto + bonoPresentismo + bonoResultado
    }
}
export class Gerente extends Empleado{
    public calcularSueldo(neto: number, bonoPresentismo: number, bonoResultado: number): number {
        return neto + bonoPresentismo + bonoResultado
    }
}

abstract class BonoPresentismo{
    public abstract asignarBono(sueldoNeto: number): number;
}

export class BonoPresentismoA extends BonoPresentismo{
    public asignarBono(ausencias: number): number {
        if (ausencias === 0) {
            return 1000 
        } else if (ausencias === 1){
            return 450
        }
        return 0
    }
}

export class BonoPresentismoB extends BonoPresentismo{
    public asignarBono(): number {
        return 500
    }
}

abstract class BonoResultado{
    public abstract asignarBono(objetivo: number, sueldoNeto: number): number;
}

export class BonoResultado1 extends BonoResultado{
    public asignarBono(objetivo: number, sueldoNeto: number): number {
        return sueldoNeto*1.10
    }
}

export class BonoResultado2 extends BonoResultado{
    public asignarBono(objetivo: number): number {
        return 0
    }
}


