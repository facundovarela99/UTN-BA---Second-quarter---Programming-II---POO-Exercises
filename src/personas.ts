export class Persona {
    private nombre: string;
    private apellido: string;
    private fecha_nacimiento: number;
    private edad?: any;

    constructor(nombre: string, apellido: string, fecha_nacimiento: number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha_nacimiento = fecha_nacimiento;
    }

    public presentarse(){
        console.log(`Soy una persona y mi nombre es ${this.Nombre} ${this.Apellido}`);
    }

    public get Nombre(){
        return this.nombre;
    }

    public get Apellido(){
        return this.apellido;
    }

    public get NombreCompleto(){
        return `${this.nombre} ${this.apellido}`;
    }

    public get fechaNacimiento(){
        return this.fecha_nacimiento;
    }

    public getEdad(fecha_actual: number){
        this.edad = ((fecha_actual - this.fechaNacimiento).toString()).substring(0,2);
        console.log(`Tengo ${this.edad} años`);
    }

    public NuevoNombre(nuevoNombre: string){
        this.nombre = nuevoNombre;
    }

    public NuevoApellido(nuevoApellido: string){
        this.apellido = nuevoApellido;
    }
}

