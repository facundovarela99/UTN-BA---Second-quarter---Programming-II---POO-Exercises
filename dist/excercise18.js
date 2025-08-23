"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacto = exports.Inmueble = exports.Formulario = exports.ListaFormularios = void 0;
class ListaFormularios {
    _formulariosDeAlta;
    constructor(formulariosDeAlta) {
        this._formulariosDeAlta = formulariosDeAlta = [];
    }
    darDeAlta(formulario) {
        if (formulario.listoParaDarAlta()) {
            this._formulariosDeAlta.push(formulario);
            console.log('Formulario dado de alta exitosamente.');
        }
    }
    getFormulariosDeAlta() {
        if (this._formulariosDeAlta.length > 0) {
            this._formulariosDeAlta.forEach(formulario => {
                console.log(`${formulario.getIDnumber()}`);
                console.log(`${formulario.getInmueble()}`);
                console.log(formulario.getContacto());
            });
        }
        else {
            console.log('No se encuentran formularios dados de alta.');
        }
    }
}
exports.ListaFormularios = ListaFormularios;
class Formulario {
    formulario_id;
    inmueble;
    contacto;
    listoParaAlta;
    dadoDeAlta;
    constructor(formulario_id, inmueble, contacto, listoParaAlta = false, dadoDeAlta = false) {
        this.formulario_id = formulario_id;
        this.inmueble = inmueble;
        this.contacto = contacto;
        this.listoParaAlta = listoParaAlta;
        this.dadoDeAlta = dadoDeAlta;
    }
    getIDnumber() {
        return this.formulario_id;
    }
    getInmueble() {
        return this.inmueble;
    }
    getContacto() {
        return this.contacto;
    }
    ingresarDatosInmueble(datosInmueble) {
        this.inmueble = datosInmueble;
    }
    ingresarDatosContacto(datosContacto) {
        this.contacto = datosContacto;
    }
    listoParaDarAlta() {
        if (this.inmueble && this.contacto) {
            console.log(`El formulario ${this.formulario_id} se encuentra listo para su alta.`);
            this.listoParaAlta = true;
            return true;
        }
        else {
            console.log(`El formulario ${this.formulario_id} no se encuentra listo para su alta.`);
            this.listoParaAlta = false;
            return false;
        }
    }
}
exports.Formulario = Formulario;
class Inmueble {
    provincia;
    ciudad;
    barrio;
    nombreCalle;
    altura;
    codigoPostal;
    perteneceBarrioPrivado;
    conexionSuministroGas;
    emplazamientoInfraCloacal;
    cantCampos = 9;
    cantCamposCompletos = 0;
    camposCompletos;
    observaciones;
    constructor(provincia = "", ciudad = "", barrio = "", nombreCalle = "", altura = 0, codigoPostal = 0, perteneceBarrioPrivado = false, conexionSuministroGas = false, emplazamientoInfraCloacal = false, camposCompletos = false, observaciones = "") {
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
    getProvincia() { return this.provincia; }
    ;
    getCiudad() { return this.ciudad; }
    ;
    getBarrio() { return this.barrio; }
    ;
    getNombreCalle() { return this.nombreCalle; }
    ;
    getAltura() { return this.altura; }
    ;
    getCodigoPostal() { return this.codigoPostal; }
    ;
    getPerteneceBarrioPrivado() { return this.perteneceBarrioPrivado; }
    ;
    getConexionSuministroGas() { return this.conexionSuministroGas; }
    ;
    getEmplazamientoInfraCloacal() { return this.emplazamientoInfraCloacal; }
    ;
    getCamposCompletos() { return this.camposCompletos; }
    ;
    setProvincia(provincia) { this.provincia = provincia; }
    ;
    setCiudad(ciudad) { this.ciudad = ciudad; }
    ;
    setBarrio(barrio) { this.barrio = barrio; }
    ;
    setNombreCalle(nombreCalle) { this.nombreCalle = nombreCalle; }
    ;
    setAltura(altura) { this.altura = altura; }
    ;
    setCodigoPostal(codigoPostal) { this.codigoPostal = codigoPostal; }
    ;
    setPerteneceBarrioPrivado(pertenece) { this.perteneceBarrioPrivado = pertenece; }
    ;
    setConexionSumGas(tieneConexion) { this.conexionSuministroGas = tieneConexion; }
    ;
    setEmplazInfraCloacal(tieneEmplazamiento) { this.emplazamientoInfraCloacal = tieneEmplazamiento; }
    ;
    listoParaAlta() {
        if (this.cantCamposCompletos === this.cantCampos) {
            this.camposCompletos = true;
        }
        else {
            return "Campos incompletos.";
        }
    }
}
exports.Inmueble = Inmueble;
class Contacto {
    nombre;
    apellido;
    telefono;
    correo;
    cantCampos = 4;
    cantCamposCompletos = 0;
    camposCompletos;
    obvervaciones;
    constructor(nombre = "", apellido = "", telefono = 0, correo = "", camposCompletos = false, observaciones = "") {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.camposCompletos = camposCompletos;
        this.obvervaciones = observaciones;
    }
    getNombre() { return this.nombre; }
    ;
    getApellido() { return this.apellido; }
    ;
    getTelefono() { return this.telefono; }
    ;
    getCorreo() { return this.correo; }
    ;
    getCamposCompletos() { return this.camposCompletos; }
    ;
    getObservaciones() { return this.obvervaciones; }
    ;
    listoParaAlta() {
        if (this.cantCamposCompletos === this.cantCampos) {
            this.camposCompletos = true;
        }
        else {
            return "Campos incompletos.";
        }
    }
}
exports.Contacto = Contacto;
//# sourceMappingURL=excercise18.js.map