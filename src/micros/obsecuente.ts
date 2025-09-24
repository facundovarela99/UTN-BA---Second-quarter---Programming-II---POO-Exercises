import { Micro } from "./micro";
import { Empleado } from "./empleado";

export class Obsecuente extends Empleado{

    public subirAlMicro(micro: Micro): boolean {
        if (this.jefe!==null && micro.pasajeros.includes(this.jefe)){ //En realidad, primero debe comprobar si el jefe se encuentra en el micro. Si se encuentra en el micro, entonces comprueba si esta en un asiento o en una barra, y si hay disponibilidad en alguno de dichos lugares, se sube.
            console.log(`Comprobando si mi jefe ${this.jefe.nombre} ${this.jefe.apellido} se encuentra en el micro ${micro.numeroMicro}`)
            return this.comprobarLugarDisponible(micro);
        }
        console.log(`El jefe del empleado ${this.nombre}, que es ${this.jefe?.nombre} ${this.jefe?.apellido}, no se encuentra en el micro ${micro.numeroMicro}.`)
        return false;
    }
}