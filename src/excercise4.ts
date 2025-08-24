// 4. Crear una clase Cine que tenga los atributos privados película y horario:
    // ● Crear métodos públicos para la asignación y recuperación de valores.
    // ● Crear un método público obtenerCartelera() que devuelva el nombre de la película y el
    // horario.
    // ● Crear una instancia y asignarle valores.
    // ● Mostrar por pantalla los valores.

// 4. Create a Cinema class that has private attributes movie and schedule:
    // ● Create public methods to the assignations and value recover
    // ● Create a public method obtainBillboard() that return the movie name and the schedule
    // ● Create an instance and assign values to it
    // ● Display the values

export class Cinema{
    private _movie: string;
    private _schedule: string;

    constructor(movie: string, schedule: string){
        this._movie = movie;
        this._schedule = schedule;
    }

    public set movie(newMovie: string){
        this._movie = newMovie;
    }

    public get movie(): string{
        return this._movie;
    }

    public set schedule(newSchedule: string){
        this._schedule = newSchedule;
    }

    public get schedule(): string{
        return this._schedule;
    }
}