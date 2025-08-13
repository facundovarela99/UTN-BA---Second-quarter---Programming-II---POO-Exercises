import { Documento, Escrito, ListaDocument, SistemaGestion } from "./22/index22";

function get100letters(value: string){
    for (let i = 0; i < 100; i++) {
        value+='a';
    }
    return value
}

function get50letters(value: string){
    for (let i = 0; i < 50; i++) {
        value+='asd'
    }
    return value;
}

function main(): void {

    const sistemaGestionV1 = new SistemaGestion('Sistema de gestion SGDE', 1);
    const escrito1 = new Escrito(1234, 20230510, get100letters('abcdefg'), 'Facundo Varela');
    const documento1 = new Documento(56, 20191213, get50letters('xyzxyz'), 'Pedro Flores Receta');

    escrito1.validarCamposCompletos();
    documento1.validarCamposCompletos();


    const documentoNormalizado1 = sistemaGestionV1.recuperarDatos(escrito1 as Escrito);
    const documentoNormalizado2 = sistemaGestionV1.recuperarDatos(documento1 as Documento);

    sistemaGestionV1.validarDocumento(documentoNormalizado1!);
    sistemaGestionV1.validarDocumento(documentoNormalizado2!);
    sistemaGestionV1.leerDocumentosRecuperados();
}

main();