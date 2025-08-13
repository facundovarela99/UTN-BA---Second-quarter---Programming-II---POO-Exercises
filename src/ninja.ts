export class Ninja{
    private arteMarcial: string;
    private arma: string;
    private fuerza: number;
    private salto: number;

    constructor(arteMarcial: string, arma: string, fuerza: number, salto: number){
        this.arteMarcial = arteMarcial;
        this.arma = arma;
        this.fuerza = fuerza;
        this.salto = salto;
    }

    setArteMarcial(arteMarcial: string): void{
        this.arteMarcial = arteMarcial;
    }

    setArma(arma: string): void{
        this.arma = arma;
    }
    
    setFuerza(fuerza: number): void{
        this.fuerza = fuerza;
    }
    
    setSalto(salto: number): void{
        this.salto = salto;
    }

    getArteMarcial(): string{
        return this.arteMarcial;
    }

    getArma(){
        return this.arma;
    }

}