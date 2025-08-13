export class Cine{
    private pelicula: string;
    private horario: string;

    constructor(pelicula: string, horario: string){
        this.pelicula = pelicula;
        this.horario = horario;
    }

    setPelicula(pelicula: string): void{
        this.pelicula = pelicula;
    }

    setHorario(horario: string): void{
        this.horario = horario;
    }

    getPelicula(): string{
        return this.pelicula;
    }

    getHorario(): string{
        return this.horario;
    }

    obtenerCartelera(): string{
        return `${this.pelicula}, ${this.horario}`;
    }

}