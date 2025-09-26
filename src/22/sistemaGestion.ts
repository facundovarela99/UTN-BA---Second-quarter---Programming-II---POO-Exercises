import { Doc } from "./doc";
import { IDocumentable } from "./interface-IDocumentable";
import { ListaDocument } from "./listaDocument";

export class SistemaGestion{
    private _nombre: string;
    private _version: number;
    private _documentosRecuperados: Array<ListaDocument> = [];

    constructor(nombre: string, version: number){
        this._nombre = nombre;
        this._version = version;
    }

    public recuperarDatos(documento: IDocumentable){
        documento.validarCamposCompletos();
        if(documento.getCamposCompletos() === 4 && documento.getBody().length < 100) {
            console.log('Datos recuperados con éxito.');
            return new ListaDocument(documento.getID(), documento.getIssueDate(), documento.getBody(), documento.getResponsible());
        } else if (documento.getCamposCompletos()<4) {
            console.log('Los campos están incompletos.')
            
        } else{
            console.log('El cuerpo del documento debe tener menos de 100 caracteres.')
        }
    }

    public validarDocumento(documento: ListaDocument){
        try{
            this._documentosRecuperados.push(documento);
        }catch(error){
            console.log('Error al intentar validar el documento: ', documento); 
        }
    }

    public leerDocumentosValidados(){
        let vuelta = 1;
        for (const documento of this._documentosRecuperados) {
            try{
                console.log(`\nDocumento N° ${vuelta++}: `);
                console.log(documento.getInfo());
            } catch(error){
                console.log('Error: ', error.message)
            }
        }
    }
}
