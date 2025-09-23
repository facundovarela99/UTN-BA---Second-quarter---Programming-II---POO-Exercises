import { Empleado } from "./empleado";

export class Micro {
    private _numeroMicro: number;
    private _volumenCM3: number;
    private _hayLugar: boolean;
    private _lugaresLibres: number;
    private _cantAsientos: number;
    private _asientosOcupados: number = 0;
    private _cantBarras: number;
    private _barrasOcupadas: number = 0;
    private _pasajeros: Array<Empleado> = [];
    private _pasajerosParados: Array<Empleado> = [];
    private _pasajerosSentados: Array<Empleado> = [];

    constructor(nroMicro: number, volumen: number, hayLugar: boolean = true, lugaresFree: number, cantidadAsientos: number, cantidadBarras: number) {
        this._numeroMicro = nroMicro;
        this._volumenCM3 = volumen;
        this._hayLugar = hayLugar;
        this._lugaresLibres = lugaresFree,
            this._cantAsientos = cantidadAsientos;
        this._cantBarras = cantidadBarras;
    }

    public get numeroMicro() {
        return this._numeroMicro;
    }

    public get volumen() {
        return this._volumenCM3;
    }

    public get hayLugar() {
        return this._hayLugar;
    }

    public get lugaresLibres() {
        return this._lugaresLibres;
    }

    public set lugaresLibres(value: number) {
        this._lugaresLibres = value;
    }

    public get cantidadAsientos() {
        return this._cantAsientos;
    }

    public get asientosOcupados() {
        return this._asientosOcupados;
    }

    public set asientosOcupados(value: number) {
        this._asientosOcupados = value;
    }

    public get cantidadBarras() {
        return this._cantBarras;
    }

    public get barrasOcupadas() {
        return this._barrasOcupadas;
    }

    public set barrasOcupadas(value: number) {
        this._barrasOcupadas = value;
    }

    public get pasajeros() {
        return this._pasajeros;
    }

    public get pasajerosParados() {
        return this._pasajerosParados;
    }

    public get pasajerosSentados() {
        return this._pasajerosSentados;
    }

    public subirPasajero(empleado: Empleado) {
        if (this.hayLugar) {
            if (!this.pasajeros.includes(empleado)) {
                if (empleado.subirAlMicro(this)) {
                    console.log(`El empleado ${empleado.nombre} ${empleado.apellido} subió al micro.`)
                    this.lugaresLibres -= 1;
                    (this.lugaresLibres === 0) && (this._hayLugar = false);
                }
            }
        } else {
            console.log(`Ya no hay lugar en el micro ${this.numeroMicro}`)
        }
    }

    public obtenerTotalPasajeros() {
        console.log(`Cantidad total de pasajeros a bordo: ${this._pasajeros.length}`);
    }

    public obtenerTotalSentados(){
        console.log(`Cantidad total de pasajeros sentados: ${this._pasajerosSentados.length}`);
    }

    public obtenerTotalParados(){
        console.log(`Cantidad total de pasajeros parados: ${this._pasajerosParados.length}`);
    }

    public bajarPersona(persona: Empleado){
        if (this.pasajeros.length > 0) {            
            let array = this.pasajeros.filter(pax => pax.nombre !== persona.nombre);
            this._pasajeros = array;
        } 
        return new Error('No hay pasajeros a bordo. ERROR! ERROR! ERROR!');
    }

};