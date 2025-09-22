import { Celular } from "./celular";

export class Iphone extends Celular {
    public realizaLlamada(celular: Celular, duracion: number): void {
        if (celular.estado === false) {
            console.log(`El celular receptor ${celular.nombreTipo} se encuentra apagado.`)
        } else {
            this.bateria -= (duracion * 0.1);
            console.log(`Bateria del celular emisor: ${this.bateria}`);
            celular.recibeLlamada(duracion);
            if (this.bateria === 0) {
                console.log('Celular sin batería. Apagando');
                this.estado = false
            }
        }
    }

    public recibeLlamada(duracion: number): void {
        this.bateria -= (duracion * 0.1);
        console.log(`Batería del celular receptor: ${this.bateria}`)
        if (this.bateria === 0) {
            console.log('Celular sin batería. Apagando.');
            this.estado = false
        }
    }
}