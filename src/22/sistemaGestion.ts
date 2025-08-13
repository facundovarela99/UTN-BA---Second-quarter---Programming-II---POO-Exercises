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
        if (documento.getCamposCompletos() === 4) {
            return new ListaDocument(documento.getID(), documento.getIssueDate(), documento.getBody(), documento.getResponsible())
        }
    }

    public validarDocumento(documento: ListaDocument){
        this._documentosRecuperados.push(documento);
    }

    public leerDocumentosRecuperados(){
        let vuelta = 1;
        for (const documento of this._documentosRecuperados) {
            console.log(`\nDocumento N° ${vuelta++}: `);
            console.log(documento.getInfo());
        }
    }
}
