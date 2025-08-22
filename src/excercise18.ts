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


export class ListaFormularios{
    private _formulariosDeAlta: Array<Formulario>;
    constructor(formulariosDeAlta: []){
        this._formulariosDeAlta = formulariosDeAlta = [];
    }

    
    public darDeAlta(formulario: Formulario){
        this._formulariosDeAlta.push(formulario)
    }

    public getFormulariosDeAlta(){
        this._formulariosDeAlta.forEach(formulario => {
            console.log(formulario.getInmueble())
            console.log(formulario.getContacto())
        });
    }
}

export class Formulario{
    private inmueble?: Inmueble;
    private contacto?: Contacto;
    private listoParaAlta: boolean;
    private dadoDeAlta: boolean;

    constructor(inmueble: Inmueble, contacto: Contacto, listoParaAlta: boolean = false, dadoDeAlta: boolean = false){
        this.inmueble = inmueble;
        this.contacto = contacto;
        this.listoParaAlta = listoParaAlta;
        this.dadoDeAlta = dadoDeAlta
    }

    public getInmueble(){
        return this.inmueble;
    }

    public getContacto(){
        return this.contacto;
    }

    public ingresarDatosInmueble(datosInmueble: Inmueble){
        this.inmueble = datosInmueble;
    }

    public ingresarDatosContacto(datosContacto: Contacto){
        this.contacto = datosContacto;
    }

    public listoParaDarAlta(){
        if (this.inmueble && this.contacto){
            this.listoParaAlta = true;
            return 'El formulario se encuentra listo para su alta.'
        } else {
            return 'El formulario no se encuentra listo para su alta.'
        }
    }
}

export class Inmueble{
    private provincia: string;
    private ciudad: string;
    private barrio: string;
    private nombreCalle: string;
    private altura: number;
    private codigoPostal: number;
    private perteneceBarrioPrivado: boolean;
    private conexionSuministroGas: boolean;
    private emplazamientoInfraCloacal: boolean;
    private cantCampos = 9;
    private cantCamposCompletos = 0;
    private camposCompletos: boolean;
    private observaciones: string;

    constructor(provincia: string = "", ciudad: string = "", barrio: string ="", nombreCalle: string = "", altura: number = 0, codigoPostal: number = 0, perteneceBarrioPrivado: boolean =false, conexionSuministroGas:boolean = false, emplazamientoInfraCloacal: boolean = false, camposCompletos: boolean = false, observaciones: string = ""){
        this.provincia = provincia;
        this.ciudad = ciudad;
        this.barrio = barrio;
        this.nombreCalle = nombreCalle;
        this.altura = altura;
        this.codigoPostal = codigoPostal;
        this.perteneceBarrioPrivado = perteneceBarrioPrivado;
        this.conexionSuministroGas = conexionSuministroGas;
        this.emplazamientoInfraCloacal = emplazamientoInfraCloacal;
        this.camposCompletos = camposCompletos;
        this.observaciones = observaciones;
    }

    public getProvincia(){return this.provincia};
    public getCiudad(){return this.ciudad};
    public getBarrio(){return this.barrio};
    public getNombreCalle(){return this.nombreCalle};
    public getAltura(){return this.altura};
    public getCodigoPostal(){return this.codigoPostal};
    public getPerteneceBarrioPrivado(){return this.perteneceBarrioPrivado};
    public getConexionSuministroGas(){return this.conexionSuministroGas};
    public getEmplazamientoInfraCloacal(){return this.emplazamientoInfraCloacal};
    public getCamposCompletos(){return this.camposCompletos};

    public setProvincia(provincia:string){this.provincia = provincia};
    public setCiudad(ciudad:string){this.ciudad = ciudad};
    public setBarrio(barrio:string){this.barrio = barrio};
    public setNombreCalle(nombreCalle:string){this.nombreCalle = nombreCalle};
    public setAltura(altura:number){this.altura = altura};
    public setCodigoPostal(codigoPostal:number){this.codigoPostal = codigoPostal};
    public setPerteneceBarrioPrivado(pertenece:boolean){this.perteneceBarrioPrivado = pertenece};
    public setConexionSumGas(tieneConexion:boolean){this.conexionSuministroGas = tieneConexion};
    public setEmplazInfraCloacal(tieneEmplazamiento:boolean){this.emplazamientoInfraCloacal = tieneEmplazamiento};

    public listoParaAlta(){
        if (this.cantCamposCompletos === this.cantCampos) {
            this.camposCompletos = true;
        } else {
            return "Campos incompletos.";
        }
    }
}



export class Contacto{
    private nombre: string;
    private apellido: string;
    private telefono: number;
    private correo: string;
    private cantCampos = 4;
    private cantCamposCompletos = 0;
    private camposCompletos: boolean;
    private obvervaciones: string;

    constructor(nombre: string = "", apellido: string = "", telefono: number = 0, correo: string = "", camposCompletos: boolean = false, observaciones: string = ""){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.camposCompletos = camposCompletos;
        this.obvervaciones = observaciones;
    }

    public getNombre(){return this.nombre;};
    public getApellido(){return this.apellido;};
    public getTelefono(){return this.telefono;};
    public getCorreo(){return this.correo};
    public getCamposCompletos(){return this.camposCompletos};
    public getObservaciones(){return this.obvervaciones};


    public listoParaAlta(){
        if (this.cantCamposCompletos === this.cantCampos) {
            this.camposCompletos = true;
        } else {
            return "Campos incompletos.";
        }
    }
}