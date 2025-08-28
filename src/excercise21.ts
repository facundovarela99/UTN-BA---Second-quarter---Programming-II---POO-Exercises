// 21. El banco Kokumo Bank inaugura una nueva sucursal en el reino de Caballito. 
// Como parte de la estrategia para captar  clientes, decide lanzar un nuevo plan de préstamos 
// personales. 

import { Person } from "./excercise1";

// De las personas se necesita conocer el dni, el sueldo bruto y la antigüedad del empleo actual. 
// Cuando el sistema recibe dichos datos, inmediatamente después realiza una consulta al servicio 
// web del Ministerio del interior para validar el dni; a los efectos se debe instanciar un objeto 
// PersonIdentity e invocar a la función getInfo() pasándole el dni. 

// El servicio devolverá un objeto Person, con los siguientes atributos: name (String), lastname 
// (String), birthDate (Date). 

// Si la persona no llega a los 21 años, debe mostrarse un mensaje que indique que no es posible 
// extender el préstamo por no reunir la edad mínima; caso contrario, el criterio de préstamo es el 
// siguiente: 
//  - Salario entre 30000 y 40000: 80000 con un 30% de interés.
//  - Salario hasta los 60000: 120000 con un 35% de interés.
//  - Salario hasta los 80000: 140000 con un 39% de interés.
//  - No se extiende créditos para salarios mayores a 80000. 

// Asumir la existencia de la clase PersonIdentity; eventualmente, para permitir la compilación del 
// código, implementarla. 


export class Bank{
    private _name: string;
    constructor(name:string){
        this._name = name
    }

    public queryTheWebService(){}

    public makeLoan(person: Person){}
}

export class Client{
    private _dni: number;
    private _grossSalary: number;
    private _currentJobAntiquity: number;

    constructor(dni: number, grossSalary: number, currentJobAntiquity: number){
        this._dni = dni;
        this._grossSalary = grossSalary;
        this._currentJobAntiquity = currentJobAntiquity;
    }

    public get dni(): number{
        return this._dni;
    }

    public get grossSalary(): number{
        return this._grossSalary;
    }

    public get currentJobAntiquity(): number{
        return this._currentJobAntiquity;
    }
}