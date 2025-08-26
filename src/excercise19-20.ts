// 19. Una empresa que se dedica a la venta de muebles necesita un sistema que le permita controlar
// los gastos y las ventas de los distintos artículos que gestionan.

// Debido a que pretenden informatizarse de a poco, por el momento se conforman con una
// solución que les permita dar de alta los artículos, asignarle un costo de producción y un precio
// de venta.

// Sin embargo, como venden al por mayor y al por menor, es fundamental que puedan manejar al
// menos dos listas de precio.

// ● De los artículos simplemente se necesita saber el nombre, el costo, aunque a veces es
// importante contar con la posibilidad de agregar una observación.

// ● Una lista de precio siempre es identificada por un nombre, la fecha tope de vigencia, un
// marcador que identifica si es mayorista o minorista, y el detalle de los artículos con su precio.

// Se pide analizar el problema, modelar las entidades involucradas, realizar el diagrama, e
// implementar la solución.

// Crear un conjunto acotado de artículos y mostrar los detalles por pantalla; adicionalmente crear
// una lista de cada tipo y también mostrar por pantalla el resultado.

/*20*/
// Habiendo implementado con éxito la primera parte del sistema, deciden ir un paso más allá e
// incluir un conjunto de mejoras.

// La empresa necesita que se implemente un mecanismo de validación que controle -al momento
// de dar de alta un artículo- que el nombre no supere los 15 caracteres y que el costo sea mayor a
// cero; la observación es opcional pero, si se incluye, que no supere los 30 caracteres.

// Cuando un artículo no cumple con las especificaciones, debe mostrarse en pantalla qué
// concepto falló.

// También quieren que la diferencia entre el precio más alto y el más bajo no supere el 30%, de
// modo tal que el sistema debe aumentar el precio más bajo para respetar ese límite (aplica a
// todas las listas de precio).

// Se pide analizar el problema, modelar las entidades involucradas, realizar el diagrama, e
// implementar la solución.
// Crear un conjunto acotado de artículos, algunos con errores y mostrar el resultado por pantalla;
// adicionalmente crear una lista de cada tipo y también mostrar por pantalla el resultado con los
// ajustes. 


export class RegisterSystem {


    public registerNewArticle(newArticle: Article, newName: string, newProductionCost: number, newSaleCost: number, newWholeCost: number, newObservation: string) {
        if (newName.length > 15) {
            console.log(`The name "${newName}" is invalid. it must not exceed 15 characters.`);
            newArticle.name = ''
        } else {
            newArticle.name = newName;
            newArticle.productionCost = newProductionCost;
            if (newSaleCost <= 0 || newWholeCost <= 0) {
                console.log(`Invalid $${newSaleCost} or $${newWholeCost} amount. The amount must exceed 0.`);
                newArticle.saleCost = undefined;
            } else if (newWholeCost <= (newSaleCost - (newSaleCost * 0.3))) {
                newArticle.saleCost = newSaleCost;
                newArticle.wholeCost = newSaleCost - (newSaleCost * 0.15);
                console.log(`Whole cost of ${newName} rounded to 15% of the Sale cost`);
            } else {
                newArticle.saleCost = newSaleCost;
                newArticle.wholeCost = newWholeCost;
            }
        }


        if (newObservation.length > 30) {
            console.log('Invalid observation. The observation must not exceed 30 characters.');
            newArticle.observation = ''
        } else {
            newArticle.observation = newObservation;
        }
    }

    public registerNewList(newList: PriceList, newName: string, newValidityDeadline: string, newIdentificationMarker: boolean) {
        newList.name = newName;
        newList.validityDeadline = newValidityDeadline;
        newList.identificationMarker = newIdentificationMarker;
    }

    public addArticleCreatedToList(list: PriceList, articleCreated: Article) {
        if (articleCreated.name === '' || articleCreated.saleCost === undefined || articleCreated.observation === '') {
            console.log(`The article ${articleCreated.name} cannot be registered in the list.`);
        } else {
            list.addArticleToList(articleCreated)
        }
    }

    public showArticlesInList(list: PriceList) {
        let toShowList = list.getArticleList();
        if (toShowList.length > 0) {
            toShowList.forEach(article => {
                console.log("\n");
                console.log(`Name: ${article.name}`)
                console.log(`Production Cost: ${article.productionCost}`)
                console.log(`Sale: ${article.saleCost}`)
                console.log(`Whole sale: ${article.wholeCost}`)
                console.log(`Observations: ${article.observation}`)
            })
        } else {
            console.log("There aren't articles in the list.")
        }
    }

    public showArticlesNumber(list: PriceList) {
        console.log(list.getArticleList().length);
    }

}



export class Article {
    private _name: string;
    private _productionCost?: number;
    private _saleCost?: number;
    private _wholeCost?: number;
    private _observation: string;

    constructor();
    constructor(name?: string, observation?: string, productionCost?: number, saleCost?: number, wholeCost?: number);
    constructor(name?: string, observation?: string, productionCost?: number, saleCost?: number, wholeCost?: number) {
        this._name = name ?? "";
        this._observation = observation ?? "";
        this._productionCost = productionCost;
        this._saleCost = saleCost;
        this._wholeCost = wholeCost;
    }

    public get name(): string {
        return this._name;
    }

    public get productionCost(): number | undefined {
        return this._productionCost
    }

    public get saleCost(): number | undefined {
        return this._saleCost;
    }

    public get wholeCost(): number | undefined {
        return this._wholeCost;
    }

    public get observation(): string {
        return this._observation;
    }

    public set name(newName: string) {
        this._name = newName;
    }

    public set productionCost(newProductionCost: number | undefined) {
        this._productionCost = newProductionCost;
    }

    public set saleCost(newSaleCost: number | undefined) {
        this._saleCost = newSaleCost;
    }

    public set wholeCost(newWholeCost: number | undefined) {
        this._wholeCost = newWholeCost;
    }

    public set observation(newObservation: string) {
        this._observation = newObservation;
    }
}

export class PriceList {
    private _name: string;
    private _validityDeadline: string;
    private _identificationMarker: boolean; //true mean Retail - false mean Whole Sale
    private _articleList: Array<Article>;

    constructor();
    constructor(name: string, validityDeadline: string, identificationMarker: boolean, articleList: Array<Article>);
    constructor(name?: string, validityDeadline?: string, identificationMarker?: boolean, articleList?: Array<Article>) {
        this._name = name ?? "";
        this._validityDeadline = validityDeadline ?? "";
        this._identificationMarker = identificationMarker ?? false;
        this._articleList = articleList ?? [];
    }

    public get name(): string {
        return this._name;
    }

    public get validityDeadline(): string {
        return this._validityDeadline;
    }

    public get identificationMarker(): boolean {
        return this._identificationMarker;
    }

    public set name(newName: string) {
        this._name = newName;
    }

    public set validityDeadline(newValidityDeadline: string) {
        this._validityDeadline = newValidityDeadline;
    }

    public set identificationMarker(newIDMarker: boolean) {
        this._identificationMarker = newIDMarker;
    }

    public addArticleToList(newArticle: Article) {
        this._articleList.push(newArticle);
    }

    public getArticleList() {
        return this._articleList;
    }

}

