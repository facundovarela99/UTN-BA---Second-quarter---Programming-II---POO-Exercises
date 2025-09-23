import { Micro } from "./micro";
import { Empleado } from "./empleado";

export class Obsecuente extends Empleado{

    public subirAlMicro(micro: Micro): boolean {
        if (micro.pasajerosSentados.includes(this.jefe)){
            if (micro.asientosOcupados < micro.cantidadAsientos) {
                micro.pasajerosSentados.push(this);
                micro.pasajeros.push(this);
                micro.asientosOcupados++;
                return true
            }
        } else if (micro.pasajerosParados.includes(this.jefe)){
            if (micro.barrasOcupadas < micro.cantidadBarras) {
                micro.pasajerosParados.push(this);
                micro.pasajeros.push(this);
                micro.barrasOcupadas++;
                return true
            }
        } return false;
    }

}