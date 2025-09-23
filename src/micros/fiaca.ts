import { Micro } from "./micro";
import { Empleado } from "./empleado";

export class Fiaca extends Empleado{

    public subirAlMicro(micro: Micro): boolean {
        if (micro.lugaresLibres > 0){
            if (micro.asientosOcupados < micro.cantidadAsientos) {
                micro.pasajerosSentados.push(this)
                micro.asientosOcupados++;
                micro.pasajeros.push(this);
                return true;
            } 
        } return false
    }

}