import { Micro } from "./micro";
import { Empleado } from "./empleado";

export class Claustrofobico extends Empleado{
    
    public subirAlMicro(micro: Micro): boolean {
        if (micro.volumen > 120) {
            if (micro.lugaresLibres > 0) {
                if (micro.asientosOcupados < micro.cantidadAsientos) {
                    micro.pasajerosSentados.push(this)
                    micro.asientosOcupados++;
                    micro.pasajeros.push(this);
                    return true
                } else if (micro.barrasOcupadas < micro.cantidadBarras){
                    micro.pasajerosParados.push(this)
                    micro.barrasOcupadas++;
                    micro.pasajeros.push(this);
                    return true
                } 
                return false
            }
        } return false
    }

}