export class Fruta{
    private color: string;
    private peso: string;
    private esEstacional: boolean;

    constructor(color: string, peso: string, esEstacional: boolean);

    constructor(color: string, peso: string, esEstacional: boolean){
        this.color = color;
        this.peso = peso;
        this.esEstacional = esEstacional;
    }


    esComestible(): boolean{
        if (parseInt(this.peso) < 200 && this.esEstacional===true){
            return true;
        }
        return false;
    }


}