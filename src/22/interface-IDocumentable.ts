export interface IDocumentable{

    getCamposCompletos(): number;

    setID(value: number): void;

    setIssueDate(value: number): void;

    setBody(value: string): void;

    setResponsible(value: string): void;

    getID(): number;

    getIssueDate(): number;

    getBody(): string;

    getResponsible(): string;

    validarCamposCompletos(): void;
}