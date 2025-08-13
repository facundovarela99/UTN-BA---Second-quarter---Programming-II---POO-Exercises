export class ListaDocument{
    private _id: number;
    private _issueDate: number;
    private _body: string;
    private _responsible: string;

    constructor(id: number, issueDate: number, body: string, responsible: string){
        this._id = id;
        this._issueDate = issueDate;
        this._body = body;
        this._responsible = responsible;
    }

    public getInfo(){
        return `-ID: ${this._id}\n-IssueDate: ${this._issueDate}\n-Body: ${this._body}\n-Responsible: ${this._responsible}`;
    }
}