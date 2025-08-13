import { Micro } from "./micro";
import { Empleado } from "./empleado";

export class Fiaca extends Empleado {

    public subirAlMicro(micro: Micro): boolean {

        if (micro.asientosOcupados < micro.cantidadAsientos) {
            micro.pasajerosSentados.push(this)
            micro.asientosOcupados++;
            micro.pasajeros.push(this);
            console.log(`${this.nombre} se sube al micro ${micro.numeroMicro} porque es fiaca y solo quiere ir sentado/a.`);
            return true;
        }
        console.log(`${this.nombre} NO se sube al micro porque es fiaca y solo quiere ir sentado/a.`);
        return false
    }

}