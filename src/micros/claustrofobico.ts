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

            // if (micro.lugaresLibres > 0) {
            //     if (micro.asientosOcupados < micro.cantidadAsientos) {
            //         micro.pasajerosSentados.push(this)
            //         micro.asientosOcupados++;
            //         micro.pasajeros.push(this);
            //         return true
            //     } else if (micro.barrasOcupadas < micro.cantidadBarras){
            //         micro.pasajerosParados.push(this)
            //         micro.barrasOcupadas++;
            //         micro.pasajeros.push(this);
            //         return true
            //     } 
            //     return false
            // } else{
            //     console.log('Ya no hay lugares disponibles.');
            //     return false
            // }
        