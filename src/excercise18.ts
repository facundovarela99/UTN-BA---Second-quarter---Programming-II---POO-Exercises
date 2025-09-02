// 18. Una inmobiliaria barrial de alcance nacional, decide informatizarse e incluir como herramienta
// para el trabajo diario, un sistema que le permita la gestión de los inmuebles que administra.
// Sabiendo que la solución será compleja, piensa que es oportuno iniciar por las partes del sistema
// que le permitan dar de alta los inmuebles.

// Se trate de un departamento o de una casa, es indispensable contar con los datos catastrales
// (provincia, barrio, nombre de la calle, altura y código postal), información sobre los ambientes
// (cantidad, tipo y dimensiones), conocer sobre el contacto (nombre, apellido, teléfono y correo
// electrónico), y poder incluir alguna observación.

// Otros aspectos comunes por los que los clientes preguntan giran en torno a si los inmuebles
// pertenecen a un barrio privado o no, si los ambientes son luminosos, si está conectado al
// suministro de gas, y si están emplazados en lugares con infraestructura cloacal.
// En el caso de los departamentos, también es de interés saber el piso y el número o letra, además
// de conocer si el edificio admite mascota o no; por las casas, en cambio, la inquietud suele girar
// en torno a si tienen quincho o pileta.

// Las condiciones para poder dar de alta un inmueble en el sistema es que todos los campos estén
// completos (salvo las observaciones, que son opcionales); en el caso del contacto, además del
// nombre completo, debe haberse ingresado alguno de los dos medios de contacto.
// Los objetos deben ser persistidos en memoria, pudiendo emplear cualquier colección que
// resulte de conveniencia.

// Se solicita pensar la estrategia, realizar el diagrama y codificar la solución, pensando en una
// estrategia por capas.
// Desde el main, crear inmuebles con varias características diferentes, almacenarlas en memoria, y
// luego recuperarlas para mostrar por pantalla las cualidades.


interface DadorDeAlta {
    darDeAlta(formulario: Formulario): void;
}

interface Registrable {
    listoParaAlta(): boolean;
}

export class Sistema implements DadorDeAlta {
    private _formulariosParaAlta: Array<Formulario>;
    constructor(formulariosDeAlta: []) {
        this._formulariosParaAlta = formulariosDeAlta = [];
    }


    public darDeAlta(formulario: Formulario) {
        if (formulario.getEstado()) {
            this._formulariosParaAlta.push(formulario);
            console.log('Formulario dado de alta exitosamente.');
        } else {
            console.log('El formulario no se encuentra listo para ser dado de alta.');
        }
    }

    public getFormulariosDeAlta() {
        if (this._formulariosParaAlta.length > 0) {
            this._formulariosParaAlta.forEach(formulario => {
                console.log(`${formulario.getIDnumber()}`);
                console.log(`${formulario.getInmueble()}`);
                console.log(formulario.getContacto());
            });
        } else {
            console.log('No se encuentran formularios dados de alta.')
        }
    }
}

export class Formulario {
    private formulario_id: number;
    private inmueble?: Inmueble;
    private contacto?: Contacto;
    private listoParaAlta: boolean;
    private dadoDeAlta: boolean;

    constructor(formulario_id: number, inmueble: Inmueble | undefined, contacto: Contacto | undefined, listoParaAlta: boolean = false, dadoDeAlta: boolean = false) {
        this.formulario_id = formulario_id;
        this.inmueble = inmueble;
        this.contacto = contacto;
        this.listoParaAlta = listoParaAlta;
        this.dadoDeAlta = dadoDeAlta
    }

    public getIDnumber() {
        return this.formulario_id;
    }

    public getInmueble() {
        return this.inmueble;
    }

    public getContacto() {
        return this.contacto;
    }

    public getEstado() {
        return this.listoParaAlta;
    }

    public ingresarDatosInmueble(datosInmueble: Inmueble) {
        this.inmueble = datosInmueble;
    }

    public ingresarDatosContacto(datosContacto: Contacto) {
        this.contacto = datosContacto;
    }

    public listoParaDarAlta() {
        if (this.inmueble && this.contacto) {
            console.log(`El formulario ${this.formulario_id} se encuentra listo para su alta.`);
            this.listoParaAlta = true;
        } else {
            console.log(`El formulario ${this.formulario_id} no se encuentra listo para su alta.`)
            this.listoParaAlta = false;
        }
    }
}

export abstract class Inmueble{
    private _provincia: string;
    private _barrio: string;
    private _nombreCalle: string;
    private _altura: number;
    private _codigoPostal: number;
    private _perteneceBarrioPrivado: boolean;
    private _conexionSuministroGas: boolean;
    private _emplazamientoInfraCloacal: boolean;
    private _observaciones: string;
    private _camposCompletos: number;

    constructor(provincia: string = "", barrio: string = "", nombreCalle: string = "", altura: number = 0, codigoPostal: number = 0, perteneceBarrioPrivado: boolean = false, conexionSuministroGas: boolean = false, emplazamientoInfraCloacal: boolean = false, observaciones: string = "", camposCompletos: number = 0) {
        this._provincia = provincia;
        this._barrio = barrio;
        this._nombreCalle = nombreCalle;
        this._altura = altura;
        this._codigoPostal = codigoPostal;
        this._perteneceBarrioPrivado = perteneceBarrioPrivado;
        this._conexionSuministroGas = conexionSuministroGas;
        this._emplazamientoInfraCloacal = emplazamientoInfraCloacal;
        this._observaciones = observaciones;
        this._camposCompletos = camposCompletos;
    }

    public get Provincia() { return this._provincia };
    public get Barrio() { return this._barrio };
    public get NombreCalle() { return this._nombreCalle };
    public get Altura() { return this._altura };
    public get CodigoPostal() { return this._codigoPostal };
    public get PerteneceBarrioPrivado() { return this._perteneceBarrioPrivado };
    public get ConexionSuministroGas() { return this._conexionSuministroGas };
    public get EmplazamientoInfraCloacal() { return this._emplazamientoInfraCloacal };
    public get camposCompletos() { return this._camposCompletos };
    public get observaciones() { return this._observaciones };

    public set Provincia(provincia: string) { this._provincia = provincia; this.completarCampo() };
    public set Barrio(barrio: string) { this._barrio = barrio; this.completarCampo() };
    public set NombreCalle(nombreCalle: string) { this._nombreCalle = nombreCalle; this.completarCampo() };
    public set Altura(altura: number) { this._altura = altura; this.completarCampo() };
    public set CodigoPostal(codigoPostal: number) { this._codigoPostal = codigoPostal; this.completarCampo() };
    public set PerteneceBarrioPrivado(pertenece: boolean) { this._perteneceBarrioPrivado = pertenece; this.completarCampo() };
    public set ConexionSumGas(tieneConexion: boolean) { this._conexionSuministroGas = tieneConexion; this.completarCampo() };
    public set EmplazInfraCloacal(tieneEmplazamiento: boolean) { this._emplazamientoInfraCloacal = tieneEmplazamiento; this.completarCampo() };
    public set Observaciones(observaciones: string) { this._observaciones = observaciones; }

    public completarCampo() {
        this._camposCompletos++;
    }
}

abstract class Persona {
    private _nombre: string;
    private _apellido: string;
    private _camposCompletos: number;

    constructor(nombre?: string, apellido?: string, camposCompletos?: number);
    constructor(nombre: string, apellido: string, camposCompletos: number = 0) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._camposCompletos = camposCompletos
    }

    public set nombre(nuevoNombre: string) { this._nombre = nuevoNombre; this._camposCompletos++ }
    public set apellido(nuevoApellido: string) { this._apellido = nuevoApellido; this._camposCompletos++ }

    public get nombre(): string { return this._nombre }
    public get apellido(): string { return this._apellido }
    public get camposCompletos(): number {return this._camposCompletos}
}

export class Contacto extends Persona implements Registrable{

    private _telefono: number;
    private _correo: string;

    constructor(nombre?: string, apellido?: string, camposCompletos?: number, telefono?: number, correo?: string);
    constructor(nombre: string, apellido: string, camposCompletos: number = 0, telefono: number = 0, correo: string = "") {
        super(nombre, apellido)
        this._telefono = telefono;
        this._correo = correo;
    }

    public set telefono(nuevoTel: number) { this._telefono = nuevoTel };
    public set correo(nuevoCorreo: string) { this._correo = nuevoCorreo };

    public get Telefono() { return this._telefono; };
    public get Correo() { return this._correo };

    public listoParaAlta(): boolean {
        if (this.camposCompletos>=2) {
            return true
        }
        return false
    }
}

export class Departamento extends Inmueble implements Registrable {
    private _piso: number;
    private _letra: string;
    private _admiteMascotas: boolean;

    constructor(provincia?: string, barrio?: string, nombreCalle?: string, altura?: number, codigoPostal?: number, perteneceBarrioPrivado?: boolean, conexionSuministroGas?: boolean, emplazamientoInfraCloacal?: boolean, observaciones?: string, camposCompletos?: number, piso?: number, letra?: string, admiteMascotas?: boolean)
    constructor(provincia: string, barrio: string, nombreCalle: string, altura: number, codigoPostal: number, perteneceBarrioPrivado: boolean, conexionSuministroGas: boolean, emplazamientoInfraCloacal: boolean, observaciones: string, camposCompletos: number, piso: number, letra: string, admiteMascotas: boolean) {
        super(provincia, barrio, nombreCalle, altura, codigoPostal, perteneceBarrioPrivado, conexionSuministroGas, emplazamientoInfraCloacal, observaciones)
        this._piso = piso;
        this._letra = letra;
        this._admiteMascotas = admiteMascotas;
    }

    public get piso(): number { return this._piso }
    public get letra(): string { return this._letra }
    public get admiteMascota(): boolean { return this._admiteMascotas }

    public set piso(piso: number) { this._piso = piso; this.completarCampo(); }
    public set letra(letra: string) { this._letra = letra; this.completarCampo(); }
    public set admiteMascota(admite: boolean) { this._admiteMascotas = admite; this.completarCampo(); }

    public listoParaAlta() {
        if (this.camposCompletos === 11) {
            return true;
        }
        return false;
    }

}

export class Casa extends Inmueble implements Registrable {
    private _poseeQuincho: boolean;
    private _poseePileta: boolean;

    constructor(provincia?: string, barrio?: string, nombreCalle?: string, altura?: number, codigoPostal?: number, perteneceBarrioPrivado?: boolean, conexionSuministroGas?: boolean, emplazamientoInfraCloacal?: boolean, observaciones?: string, camposCompletos?: number, poseeQuincho?: boolean, poseePileta?: boolean)
    constructor(provincia: string, barrio: string, nombreCalle: string, altura: number, codigoPostal: number, perteneceBarrioPrivado: boolean, conexionSuministroGas: boolean, emplazamientoInfraCloacal: boolean, observaciones: string, camposCompletos: number, poseeQuincho: boolean, poseePileta: boolean) {
        super(provincia, barrio, nombreCalle, altura, codigoPostal, perteneceBarrioPrivado, conexionSuministroGas, emplazamientoInfraCloacal, observaciones, camposCompletos)
        this._poseeQuincho = poseeQuincho;
        this._poseePileta = poseePileta;
    }

    public set quincho(posee: boolean) { this._poseeQuincho = posee; this.completarCampo() }
    public set pileta(posee: boolean) { this._poseePileta = posee; this.completarCampo() }

    public listoParaAlta() {
        if (this.camposCompletos === 10) {
            return true;
        }
        return false;
    }

}