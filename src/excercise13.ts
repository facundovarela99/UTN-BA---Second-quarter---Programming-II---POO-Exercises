// 13. El laboratorio Kokumo Technologies está desarrollando el prototipo de un robot explorador cuyo
// sistema de tracción puede ser personalizado para que se adapte mejor al terreno.
// El robot, llamado KT-2020, tiene las siguientes características:
// ● Número de serie: KT-2020-P
// ● Potencia de tracción base (PTB): 10 hp
// ● Tracción: cualquiera de las dos opciones desarrolladas.
// Los sistemas de tracción disponibles son:
// ● Rueda de caucho: ideal para entornos urbanos, su uso le resta 1 hp al PTB y permite el
// rodado de hasta 100 km; cuando se gasta, debe reemplazarse.
// ● Oruga: para todo tipo de terreno, le permite avanzar hasta 400 km antes de requerir
// reemplazo y resta 3 hp al PTB. Incorpora sensores Meke-M0 que le permiten conocer la
// temperatura.
// Analizar, diseñar, diagramar las relaciones e implementar el código.
// Crear instancias de cada una de las clases y asignarle al robot los distintos sistemas de tracción,
// procurando mostrar por pantalla los siguientes datos entre las distintas asignaciones:
// Número de serie, potencia de tracción final, tipo de tracción, cuanto puede avanzar y
// datos sobre cualquier característica adicional que posea.

export class Robot {
    private numero_serie: string;
    private potencia_traccion: number;
    private traccion: sistemaDeTraccion;

    constructor(numero_serie: string, potencia_traccion: number, traccion: sistemaDeTraccion) {
        this.numero_serie = numero_serie;
        this.potencia_traccion = potencia_traccion;
        this.traccion = traccion;
    }

    public get NroSerie(): string{
        return this.numero_serie;
    }
    
    public potenciaTraccionFinal(tipo_traccion: string){
        if (tipo_traccion === 'Oruga'){
            return this.potencia_traccion - 3;
        } else if (tipo_traccion === 'Rueda de caucho'){
            return this.potencia_traccion - 1;
        }
    }

    public getSistemaTraccion(tipo_traccion: string){
        if (tipo_traccion === 'Rueda de caucho'){
            console.log(`Robot con sistema de traccion ${tipo_traccion}. Puede avanzar hasta 100km antes de su reemplazo.`);
        } else if (tipo_traccion === 'Oruga'){
            console.log(`Robot con sistema de traccion ${tipo_traccion}. Puede avanzar hasta 400km antes de su reemplazo e incorpora sensores Meke-M0 que le permiten conocer temperatura.`);
        }
    }
}

export class sistemaDeTraccion {
    private tipo: string;
    private kilometraje_permitido?: number;
    private sensores?: boolean;

    constructor(tipo: string) {
        this.tipo = tipo;
    }

    public asignar_propiedades() {
        if (this.tipo === 'Rueda de caucho') {
            this.kilometraje_permitido = 100;
        } else if (this.tipo === 'Oruga') {
            this.kilometraje_permitido = 400;
            this.sensores = true;
        }
    }

    public get TipoTraccion(): string{
        return this.tipo;
    }

}