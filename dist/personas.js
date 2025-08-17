"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    nombre;
    apellido;
    fecha_nacimiento;
    edad;
    constructor(nombre, apellido, fecha_nacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha_nacimiento = fecha_nacimiento;
    }
    presentarse() {
        console.log(`Soy una persona y mi nombre es ${this.Nombre} ${this.Apellido}`);
    }
    get Nombre() {
        return this.nombre;
    }
    get Apellido() {
        return this.apellido;
    }
    get NombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
    get fechaNacimiento() {
        return this.fecha_nacimiento;
    }
    getEdad(fecha_actual) {
        this.edad = ((fecha_actual - this.fechaNacimiento).toString()).substring(0, 2);
        console.log(`Tengo ${this.edad} años`);
    }
    NuevoNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
    NuevoApellido(nuevoApellido) {
        this.apellido = nuevoApellido;
    }
}
exports.Persona = Persona;
//# sourceMappingURL=personas.js.map