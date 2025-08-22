// 17. Juancito Jaquer ha fabricado un scanner que es capaz de analizar el objeto, obtener información
// básica y advertir si ese objeto, a su vez, oficia como contenedor de otro objeto.
// La idea de Juancito Jaquer es poder vender el dispositivo a los departamentos aduaneros
// fronterizos ya que siempre requieren analizar el contenido de los equipajes.
// El scanner detecta las características de los objetos y los modela de la siguiente forma:
// ● Material: metal, cuero, madera, vidrio, plástico, líquido, textil, goma, “otro”.
// ● Volumen: en centímetros cúbicos.
// ● Contenido: lista de objetos que contiene.

// Juancito Jaquer necesita desarrollar la pieza de software que se encarga de estudiar lo que el
// scanner le provee y mostrar en pantalla las características de los objetos, mencionando si se
// trata de un objeto:
// ● Simple: no contiene ni se encuentra contenido.
// ● Contenedor: contiene al menos un objeto pero no se encuentra contenido.
// ● Contenido: se encuentra dentro de un objeto pero no contiene nada.
// ● Sambuchito: está contenido y contiene.

// Analizar, diseñar, diagramar las relaciones e implementar el código.
// Hacer pruebas con una Mamushka de madera de varios niveles, un portafolios vacío de cuero,
// un botiquín de plástico que contiene gasa y agua oxigenada, una bolsa de cuero que contenga un
// peine y un botiquín.


export class Scanner {
    public escaneo(objeto: Objeto) {
        console.log(`Descripcion: ${objeto.getDescripcion()}`);
        console.log(`Tipo de objeto: ${objeto.getTipo()}`);
        console.log(`Material: ${objeto.getMaterial()}`);
        console.log(`Volumen: ${objeto.getVolumen()}\n`);
        if (objeto.getTipo() === 'Contenedor' || objeto.getTipo() === 'Sambuchito') {
            if (objeto.getContenido().length > 0) {
                console.log("Contenido: \n");
                objeto.getContenido().forEach((contenidoObj) => {
                    this.escaneo(contenidoObj);
                });
            }
        }
    }
}

export class Objeto {
    private tipo: string;
    private descripcion: string;
    private material: string;
    private volumen: number;
    private contenido: Array<Objeto>;

    constructor(tipo: string, descripcion: string, material: string, volumen: number, contenido: Array<Objeto>) {
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.material = material;
        this.volumen = volumen;
        this.contenido = contenido;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }

    public getMaterial(): string {
        return this.material;
    }

    public getVolumen(): number {
        return this.volumen;
    }

    public getContenido() {
        //Retorno de la lista explicita
        return this.contenido;
    }

}

