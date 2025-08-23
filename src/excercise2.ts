// 2. Crear una clase Vehiculo que tenga los atributos públicos marca, modelo y un atributo privado
// patente.
    // ● Crear una instancia y asignarle valores; notar que el atributo privado no está disponible
    // para la asignación de valores.
    // ● Mostrar por pantalla los valores asignados.

//2. Create a Vehicle class that has public atributes brand, model, and a patent number private attribute.
// ● Create an instance and assing it values; notice that the private attribute isn't available to assigne a value to it.
// ● Display the assigned values.


export class Vehicle{
    brand: string;
    model: string;
    private _patentNumber: string | number;

    constructor(brand: string, model: string, patentNumber: string | number){
        this.brand = brand;
        this.model = model;
        this._patentNumber = patentNumber;
    }

    public get patentNumber(): string | number{
        return this._patentNumber;
    }
}


