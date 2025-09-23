import { Micro } from "./micro";
import { Empleado } from "./empleado";

export class Moderado extends Empleado{

    public subirAlMicro(micro: Micro): boolean {
        if (micro.lugaresLibres>5){
            if (micro.barrasOcupadas < micro.cantidadBarras) {
                micro.pasajerosParados.push(this);
                micro.pasajeros.push(this);
                micro.barrasOcupadas++;
                return true;
            } else if (micro.asientosOcupados < micro.cantidadAsientos){
                micro.pasajerosSentados.push(this);
                micro.pasajeros.push(this);
                micro.asientosOcupados++;
                return true;
            }
        } return false;
    }

}