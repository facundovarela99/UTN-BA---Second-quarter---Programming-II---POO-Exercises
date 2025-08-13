export class Articulo{
    private marca: string;
    private modelo: string;

    constructor(marca: string, modelo:string){
        this.marca = marca;
        this.modelo = modelo;
    } 

    setMarca(marca: string): void{
        this.marca = marca;
    }

    setModelo(modelo: string): void{
        this.marca = this.marca;
    }

    getMarca(): string{
        return this.marca;
    }

    getModelo(): string{
        return this.modelo
    }
}

