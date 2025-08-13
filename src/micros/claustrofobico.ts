import { Micro } from "./micro";
import { Empleado } from "./empleado";


export class Claustrofobico extends Empleado{
    
    public subirAlMicro(micro: Micro): boolean {
        if (micro.volumen > 120) {
           return this.comprobarLugarDisponible(micro);
        } 
            console.log(`El volumen del micro ${micro.numeroMicro} tiene menos de 120 m3 y a ${this.nombre} le da miedo. Primer IF da false`);
            return false
    }

}

        