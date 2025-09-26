export * from "./doc"
export * from "./documento"
export * from "./escrito"
export * from "./interface-IDocumentable"
export * from "./ley"
export * from "./listaDocument"
export * from "./sistemaGestion"


// TO INDEX


// import { Documento, Escrito, Ley, ListaDocument, SistemaGestion } from "./22/index22";

// function get100letters(value: string){
//     for (let i = 0; i < 100; i++) {
//         value+='a';
//     }
//     return value
// }

// function get50letters(value: string){
//     for (let i = 0; i < 50; i++) {
//         value+='asd'
//     }
//     return value;
// }


//     const sistemaGestionV1 = new SistemaGestion('Sistema de gestion SGDE', 1);
//     const escrito1 = new Escrito();
//     const documento1 = new Documento(123, 20230412);
//     const leyPrimera = new Ley(814, 19150401, 'Esta es la ley PRIMERA!', 'Jose Ingenieros Peralta Ramos Mejia Cuarto', 4);

//     const documentoNormalizado3 = sistemaGestionV1.recuperarDatos(leyPrimera);

//     escrito1.setID(123);
//     escrito1.setBody(get50letters('Este es el cuerpo. '));
//     escrito1.setIssueDate(20241224);
//     escrito1.setResponsible('Abraham Linconl');

//     const documentoNormalizado1 = sistemaGestionV1.recuperarDatos(escrito1);

//     sistemaGestionV1.validarDocumento(documentoNormalizado1!);
//     sistemaGestionV1.validarDocumento(documentoNormalizado3!);
//     sistemaGestionV1.leerDocumentosValidados();

