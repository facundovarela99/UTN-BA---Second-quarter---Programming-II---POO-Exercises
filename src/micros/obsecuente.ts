import { Micro } from "./micro";
import { Empleado } from "./empleado";

export class Obsecuente extends Empleado {

    public subirAlMicro(micro: Micro): boolean {
        console.log(`\nSoy ${this.nombre} ${this.apellido} y estoy  comprobando si mi jefe ${this.jefe!.nombre} ${this.jefe!.apellido} se encuentra en el micro ${micro.numeroMicro}`)
        
        if (micro.pasajeros.includes(this.jefe!)) {            
            if (micro.pasajerosSentados.includes(this.jefe!)) { //En realidad, primero debe comprobar si el jefe se encuentra en el micro. Si se encuentra en el micro, entonces comprueba si esta en un asiento o en una barra, y si hay disponibilidad en alguno de dichos lugares, se sube.
                if (micro.asientosOcupados < micro.cantidadAsientos) {
                    micro.pasajerosSentados.push(this);
                    micro.asientosOcupados++;
                    micro.pasajeros.push(this);
                    console.log(`Mi jefe está asi que me subo si hay lugar del tipo que el se haya sentado.`)
                    return true
                } 
            } 
            if (micro.pasajerosParados.includes(this.jefe!)) {
                if (micro.barrasOcupadas < micro.cantidadBarras) {
                    micro.pasajerosParados.push(this);
                    micro.barrasOcupadas++;
                    micro.pasajeros.push(this);
                    console.log(`Mi jefe está asi que me subo si hay lugar del tipo que el se haya sentado.`);
                    return true
                }
            } else{
                console.log(`No hay lugar del tipo que se sento mi jefe, asi que no tomaré el micro.`);
                return false;
            }
        }
        
        console.log(`El jefe del empleado ${this.nombre}, que es ${this.jefe?.nombre} ${this.jefe?.apellido}, no se encuentra en el micro ${micro.numeroMicro}.`)
        return false;
    }
}

// return this.comprobarLugarDisponible(micro);