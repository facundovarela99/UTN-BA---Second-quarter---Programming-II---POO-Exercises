"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cine = void 0;
class Cine {
    pelicula;
    horario;
    constructor(pelicula, horario) {
        this.pelicula = pelicula;
        this.horario = horario;
    }
    setPelicula(pelicula) {
        this.pelicula = pelicula;
    }
    setHorario(horario) {
        this.horario = horario;
    }
    getPelicula() {
        return this.pelicula;
    }
    getHorario() {
        return this.horario;
    }
    obtenerCartelera() {
        return `${this.pelicula}, ${this.horario}`;
    }
}
exports.Cine = Cine;
//# sourceMappingURL=cine.js.map