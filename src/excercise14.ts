// 14. Una empresa de seguridad que se dedica a la vigilancia mediante el empleo de drones, ha
// desarrollado un sistema de montaje que permitirá que los drones puedan cargar, además de la
// cámara de vigilancia, una herramienta accionable a distancia.
// Actualmente el sistema de anclaje admite:
// ● Sensor infrarrojo: pesa 250 gramos
// ● Taser: pesa 300 gramos
// ● Brazo robótico: pesa 500 gramos

// El dron puede soportar hasta 200 gramos sin sufrir penalizaciones de velocidad (5 mts/s) ni
// altura (100 mts); luego, por cada 50 gramos extras, el dron reduce su velocidad en 2% y
// la altura en 5%.

// Analizar, diseñar, diagramar las relaciones e implementar el código.
// Crear instancias de cada una de las clases y asignarle al dron las distintas herramientas,
// procurando mostrar por pantalla los siguientes datos entre las distintas asignaciones:
// velocidad, altura y tipo de herramienta que lleva


export class Dron {
    private velocidad: number;
    private altura: number;
    private peso_total: number;
    private cantidad_herramientas: number;
    private herramientas: Array<Herramienta>;

    constructor(velocidad: number = 100, altura: number = 100, peso_total: number = 0, cantidad_herramientas: number = 0, herramientas = []) {
        this.velocidad = velocidad;
        this.altura = altura;
        this.peso_total = 0;
        this.cantidad_herramientas = cantidad_herramientas;
        this.herramientas = [];
    }

    public agregarHerramienta(herramienta: Herramienta) {
        this.herramientas.push(herramienta);
        this.cantidad_herramientas++;
        this.peso_total += herramienta.getPesoHerramienta();
        console.log(`${herramienta.getTipoHerramienta()} agregado`);
    }

    public getPesoTotal(){
        return this.peso_total;
    }

    public getVelocidadFinal() {
        if (this.peso_total > 200) {
            let pesoExcedido = this.peso_total - 200;
            let vecesExcedidas = pesoExcedido / 50;
            let PorcentajeVelocidadFinalPerdida = vecesExcedidas * 2;
            let velocidadFinalPerdida = this.velocidad - PorcentajeVelocidadFinalPerdida;
            return `Velocidad final: ${velocidadFinalPerdida}. Porcentaje estimado perdido: ${PorcentajeVelocidadFinalPerdida}%`;
        } else {
            return `Velocidad total: ${this.velocidad}. El dron no pierde velocidad`;
        }
    }

    public getAlturaFinal() {
        if (this.peso_total > 200) {
            let pesoExcedido = this.peso_total - 200;
            let vecesExcedidas = pesoExcedido / 50;
            let porcentajeAlturaFinalPerdida = vecesExcedidas * 5;
            let alturaFinalPerdida = this.altura - porcentajeAlturaFinalPerdida;
            return `Altura final: ${alturaFinalPerdida}. Porcentaje estimado perdido: ${porcentajeAlturaFinalPerdida}%`;
        } else {
            return `Altura total: ${this.velocidad}. El dron no pierde altura`;
        }
    }
}


export class Herramienta {
    private tipo_herramienta: string;
    private peso: number;

    constructor(tipo_herramienta: string, peso: number) {
        this.tipo_herramienta = tipo_herramienta;
        this.peso = peso;
    }

    public getTipoHerramienta() {
        return this.tipo_herramienta;
    }

    public getPesoHerramienta() {
        return this.peso;
    }

}