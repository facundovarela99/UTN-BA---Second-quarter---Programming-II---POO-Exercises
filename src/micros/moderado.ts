import { Micro } from "./micro";
import { Empleado } from "./empleado";

export class Moderado extends Empleado{

    public subirAlMicro(micro: Micro): boolean {
        if (micro.lugaresLibres>5){
           return this.comprobarLugarDisponible(micro);

        } 
        console.log(`Yo, ${this.nombre}, no me subo al micro ${micro.numeroMicro} porque hay menos de 5 lugares libres.`);
        return false;
    }
}