"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casa = exports.Departamento = exports.Contacto = exports.Inmueble = exports.Formulario = exports.Sistema = void 0;
class Sistema {
    _formulariosParaAlta;
    constructor(formulariosDeAlta) {
        this._formulariosParaAlta = formulariosDeAlta = [];
    }
    darDeAlta(formulario) {
        if (formulario.getEstado()) {
            this._formulariosParaAlta.push(formulario);
            console.log('Formulario dado de alta exitosamente.');
        }
        else {
            console.log('El formulario no se encuentra listo para ser dado de alta.');
        }
    }
    getFormulariosDeAlta() {
        if (this._formulariosParaAlta.length > 0) {
            this._formulariosParaAlta.forEach(formulario => {
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
exports.Sistema = Sistema;
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
    getEstado() {
        return this.listoParaAlta;
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
        }
        else {
            console.log(`El formulario ${this.formulario_id} no se encuentra listo para su alta.`);
            this.listoParaAlta = false;
        }
    }
}
exports.Formulario = Formulario;
class Inmueble {
    _provincia;
    _barrio;
    _nombreCalle;
    _altura;
    _codigoPostal;
    _perteneceBarrioPrivado;
    _conexionSuministroGas;
    _emplazamientoInfraCloacal;
    _observaciones;
    _camposCompletos;
    constructor(provincia = "", barrio = "", nombreCalle = "", altura = 0, codigoPostal = 0, perteneceBarrioPrivado = false, conexionSuministroGas = false, emplazamientoInfraCloacal = false, observaciones = "", camposCompletos = 0) {
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
    get Provincia() { return this._provincia; }
    ;
    get Barrio() { return this._barrio; }
    ;
    get NombreCalle() { return this._nombreCalle; }
    ;
    get Altura() { return this._altura; }
    ;
    get CodigoPostal() { return this._codigoPostal; }
    ;
    get PerteneceBarrioPrivado() { return this._perteneceBarrioPrivado; }
    ;
    get ConexionSuministroGas() { return this._conexionSuministroGas; }
    ;
    get EmplazamientoInfraCloacal() { return this._emplazamientoInfraCloacal; }
    ;
    get camposCompletos() { return this._camposCompletos; }
    ;
    get observaciones() { return this._observaciones; }
    ;
    set Provincia(provincia) { this._provincia = provincia; this.completarCampo(); }
    ;
    set Barrio(barrio) { this._barrio = barrio; this.completarCampo(); }
    ;
    set NombreCalle(nombreCalle) { this._nombreCalle = nombreCalle; this.completarCampo(); }
    ;
    set Altura(altura) { this._altura = altura; this.completarCampo(); }
    ;
    set CodigoPostal(codigoPostal) { this._codigoPostal = codigoPostal; this.completarCampo(); }
    ;
    set PerteneceBarrioPrivado(pertenece) { this._perteneceBarrioPrivado = pertenece; this.completarCampo(); }
    ;
    set ConexionSumGas(tieneConexion) { this._conexionSuministroGas = tieneConexion; this.completarCampo(); }
    ;
    set EmplazInfraCloacal(tieneEmplazamiento) { this._emplazamientoInfraCloacal = tieneEmplazamiento; this.completarCampo(); }
    ;
    set Observaciones(observaciones) { this._observaciones = observaciones; }
    completarCampo() {
        this._camposCompletos++;
    }
}
exports.Inmueble = Inmueble;
class Persona {
    _nombre;
    _apellido;
    _camposCompletos;
    constructor(nombre, apellido, camposCompletos = 0) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._camposCompletos = camposCompletos;
    }
    set nombre(nuevoNombre) { this._nombre = nuevoNombre; this._camposCompletos++; }
    set apellido(nuevoApellido) { this._apellido = nuevoApellido; this._camposCompletos++; }
    get nombre() { return this._nombre; }
    get apellido() { return this._apellido; }
    get camposCompletos() { return this._camposCompletos; }
}
class Contacto extends Persona {
    _telefono;
    _correo;
    constructor(nombre, apellido, camposCompletos = 0, telefono = 0, correo = "") {
        super(nombre, apellido);
        this._telefono = telefono;
        this._correo = correo;
    }
    set telefono(nuevoTel) { this._telefono = nuevoTel; }
    ;
    set correo(nuevoCorreo) { this._correo = nuevoCorreo; }
    ;
    get Telefono() { return this._telefono; }
    ;
    get Correo() { return this._correo; }
    ;
    listoParaAlta() {
        if (this.camposCompletos >= 2) {
            return true;
        }
        return false;
    }
}
exports.Contacto = Contacto;
class Departamento extends Inmueble {
    _piso;
    _letra;
    _admiteMascotas;
    constructor(provincia, barrio, nombreCalle, altura, codigoPostal, perteneceBarrioPrivado, conexionSuministroGas, emplazamientoInfraCloacal, observaciones, camposCompletos, piso, letra, admiteMascotas) {
        super(provincia, barrio, nombreCalle, altura, codigoPostal, perteneceBarrioPrivado, conexionSuministroGas, emplazamientoInfraCloacal, observaciones);
        this._piso = piso;
        this._letra = letra;
        this._admiteMascotas = admiteMascotas;
    }
    get piso() { return this._piso; }
    get letra() { return this._letra; }
    get admiteMascota() { return this._admiteMascotas; }
    set piso(piso) { this._piso = piso; this.completarCampo(); }
    set letra(letra) { this._letra = letra; this.completarCampo(); }
    set admiteMascota(admite) { this._admiteMascotas = admite; this.completarCampo(); }
    listoParaAlta() {
        if (this.camposCompletos === 11) {
            return true;
        }
        return false;
    }
}
exports.Departamento = Departamento;
class Casa extends Inmueble {
    _poseeQuincho;
    _poseePileta;
    constructor(provincia, barrio, nombreCalle, altura, codigoPostal, perteneceBarrioPrivado, conexionSuministroGas, emplazamientoInfraCloacal, observaciones, camposCompletos, poseeQuincho, poseePileta) {
        super(provincia, barrio, nombreCalle, altura, codigoPostal, perteneceBarrioPrivado, conexionSuministroGas, emplazamientoInfraCloacal, observaciones, camposCompletos);
        this._poseeQuincho = poseeQuincho;
        this._poseePileta = poseePileta;
    }
    set quincho(posee) { this._poseeQuincho = posee; this.completarCampo(); }
    set pileta(posee) { this._poseePileta = posee; this.completarCampo(); }
    listoParaAlta() {
        if (this.camposCompletos === 10) {
            return true;
        }
        return false;
    }
}
exports.Casa = Casa;
//# sourceMappingURL=excercise18.js.map