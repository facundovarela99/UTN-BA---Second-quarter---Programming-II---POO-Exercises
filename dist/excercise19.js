"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceList = exports.Article = exports.RegisterSystem = void 0;
class RegisterSystem {
    registerNewArticle(newArticle, newName, newProductionCost, newSaleCost, newWholeCost, newObservation) {
        newArticle.name = newName;
        newArticle.productionCost = newProductionCost;
        newArticle.saleCost = newSaleCost;
        newArticle.wholeCost = newWholeCost;
        newArticle.observation = newObservation;
    }
    registerNewList(newList, newName, newValidityDeadline, newIdentificationMarker) {
        newList.name = newName;
        newList.validityDeadline = newValidityDeadline;
        newList.identificationMarker = newIdentificationMarker;
    }
    addArticleCreatedToList(list, articleCreated) {
        list.addArticleToList(articleCreated);
    }
    showArticlesInList(list) {
        let toShowList = list.getArticleList();
        if (toShowList.length > 0) {
            toShowList.forEach(article => {
                console.log("\n");
                console.log(`Name: ${article.name}`);
                console.log(`Production Cost: ${article.productionCost}`);
                console.log(`Sale: ${article.saleCost}`);
                console.log(`Whole sale: ${article.wholeCost}`);
                console.log(`Observations: ${article.observation}`);
            });
        }
        else {
            console.log("There aren't articles in the list.");
        }
    }
}
exports.RegisterSystem = RegisterSystem;
class Article {
    _name;
    _productionCost;
    _saleCost;
    _wholeCost;
    _observation;
    constructor(name, observation, productionCost, saleCost, wholeCost) {
        this._name = name ?? "";
        this._observation = observation ?? "";
        this._productionCost = productionCost;
        this._saleCost = saleCost;
        this._wholeCost = wholeCost;
    }
    get name() {
        return this._name;
    }
    get productionCost() {
        return this._productionCost;
    }
    get saleCost() {
        return this._saleCost;
    }
    get wholeCost() {
        return this._wholeCost;
    }
    get observation() {
        return this._observation;
    }
    set name(newName) {
        this._name = newName;
    }
    set productionCost(newProductionCost) {
        this._productionCost = newProductionCost;
    }
    set saleCost(newSaleCost) {
        this._saleCost = newSaleCost;
    }
    set wholeCost(newWholeCost) {
        this._wholeCost = newWholeCost;
    }
    set observation(newObservation) {
        this._observation = newObservation;
    }
}
exports.Article = Article;
class PriceList {
    _name;
    _validityDeadline;
    _identificationMarker;
    _articleList;
    constructor(name, validityDeadline, identificationMarker, articleList) {
        this._name = name ?? "";
        this._validityDeadline = validityDeadline ?? "";
        this._identificationMarker = identificationMarker ?? false;
        this._articleList = articleList ?? [];
    }
    get name() {
        return this._name;
    }
    get validityDeadline() {
        return this._validityDeadline;
    }
    get identificationMarker() {
        return this._identificationMarker;
    }
    set name(newName) {
        this._name = newName;
    }
    set validityDeadline(newValidityDeadline) {
        this._validityDeadline = newValidityDeadline;
    }
    set identificationMarker(newIDMarker) {
        this._identificationMarker = newIDMarker;
    }
    addArticleToList(newArticle) {
        this._articleList.push(newArticle);
    }
    getArticleList() {
        return this._articleList;
    }
}
exports.PriceList = PriceList;
//# sourceMappingURL=excercise19.js.map