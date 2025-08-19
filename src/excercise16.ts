// 16. Una empresa de logística que se encarga de realizar envíos, pone a disposición de sus clientes
// dos tipos de vehículos:
    // ● Una camioneta con capacidad para llevar cómodas, heladeras y lavarropas.
    // ● Un auto con espacio suficiente como para llevar televisores, bicicletas plegables y cajas
    // pequeñas.
    // Modelar las entidades teniendo en cuenta las siguientes consideraciones:
    // ● Los vehículos deben ofrecer el método cargar() para ir incrementando su carga, razón
    // por la cual la función debe recibir el dato por parámetro.
    // ● Mediante el empleo del método listarItems() el vehículo deberá facilitar el listado que
    // compone la carga.
    // ● Todos los elementos poseen una descripción, dimensiones y un número que los
    // identifica pero, además, resulta de interés:
        // i. Cómodas: superficie y cantidad de cajones.
        // ii. Heladeras: voltaje al que trabaja y si posee freezer.
        // iii. Lavarropas: voltaje al que trabaja, carga y revoluciones de centrifugado.
        // iv. Televisores: voltaje al que trabaja, si es de led o lcd y si es inteligente.
        // v. Bicicletas: tamaño de rodado, si son eléctricas y cantidad de cambios.
// Analizar, diseñar, diagramar las relaciones e implementar el código considerando que la
// capacidad máxima de carga del auto es de 5 elementos, mientras que para la camioneta
// es de 10.

export class Vehiculo{
    private tipo: string;
    private elementosCargados: number;
    private listaElementos: Array<Elemento>;
    private capacidadCarga: number;
    
    constructor(tipo: string, elementosCargados: number = 0, listaElementos: [], capacidadCarga: number){
        this.tipo = tipo;
        this.elementosCargados = elementosCargados;
        this.listaElementos = [];
        this.capacidadCarga = capacidadCarga;
    }

    public getTipoVehiculo(){
        return this.tipo;
    }

    public getElementosCargados(){
        return `Elementos cargados: ${this.elementosCargados}`;
    }

    public cargarElemento(elemento: Elemento){
        this.listaElementos.push(elemento);
        this.elementosCargados++;
        this.capacidadCarga--;
        console.log(`Elemento "${elemento.getTipoElemento()}" cargado`)
    }

    public listarElementos(){
        for (let i = 0; i < this.listaElementos.length; i++) {
                console.log(`\nElemento ${i+1}`)
                console.log(this.listaElementos[i].getID());
                console.log(this.listaElementos[i].getTipoElemento());
                console.log(this.listaElementos[i].getDimensiones());
        }
    }

    public getCapacidadCarga(){
        return `Capacidad de carga del vehículo tipo ${this.tipo}: ${this.capacidadCarga} elementos`;
    }

}

export class Elemento{
    id: number;
    private descripcion: string;
    private dimensiones: string;
    
    constructor(id: number, descripcion: string, dimensiones: string){
        this.id = id;
        this.descripcion = descripcion;
        this.dimensiones = dimensiones;
    }

    public getID(){
        return `ID: ${this.id}`;
    }

    public getTipoElemento(){
        return this.descripcion;
    }

    public getDimensiones(){
        return `Dimensiones ${this.dimensiones}`;
    }
}