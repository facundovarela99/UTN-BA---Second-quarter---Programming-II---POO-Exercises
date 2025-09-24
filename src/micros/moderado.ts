import { Micro } from "./micro";
import { Empleado } from "./empleado";

export class Moderado extends Empleado{

    public subirAlMicro(micro: Micro): boolean {
        if (micro.lugaresLibres>5){
           return this.comprobarLugarDisponible(micro);
        } return false;
    }

}