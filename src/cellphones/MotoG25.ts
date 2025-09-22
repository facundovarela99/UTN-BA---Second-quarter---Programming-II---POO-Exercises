import { Celular } from "./celular";

export class MotoG25 extends Celular {
    public realizaLlamada(celular: Celular, duracion: number): void {
        if (celular.estado === false) {
            console.log(`El celular receptor ${celular.nombreTipo} se encuentra apagado.`)
        } else {
            this.bateria -= 0.25;
            console.log(`Bateria del celular emisor: ${this.bateria}`)
            celular.recibeLlamada(duracion);
            if (this.bateria === 0) {
                console.log('Celular sin batería. Apagando');
                this.estado = false
            }
        }
    }

    public recibeLlamada(): void {
        this.bateria -= 0.25;
        console.log(`Batería del celular receptor: ${this.bateria}`)
        if (this.bateria === 0) {
            console.log('Celular sin batería. Apagando.');
            this.estado = false
        }
    }
}