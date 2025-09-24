import { Micro } from "./micro";
import { Empleado } from "./empleado";

export class Apurado extends Empleado{

    public subirAlMicro(micro: Micro): boolean {
        if (micro.lugaresLibres > 0) {
           return this.comprobarLugarDisponible(micro);
        } return false
    }

}