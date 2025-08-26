"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const excercise19_20_1 = require("./excercise19-20");
function main() {
    const RegisterSystemV1 = new excercise19_20_1.RegisterSystem();
    const dresser1 = new excercise19_20_1.Article();
    const closet1 = new excercise19_20_1.Article();
    const nightStand1 = new excercise19_20_1.Article();
    const table1 = new excercise19_20_1.Article();
    const WholeSaleList1 = new excercise19_20_1.PriceList();
    RegisterSystemV1.registerNewArticle(dresser1, 'Dresser', 1000, 1500, 1400, 'Brown');
    RegisterSystemV1.registerNewList(WholeSaleList1, 'Whole Sale List 1', '2025-12-31', false);
    RegisterSystemV1.addArticleCreatedToList(WholeSaleList1, dresser1);
    RegisterSystemV1.showArticlesInList(WholeSaleList1);
    RegisterSystemV1.showArticlesNumber(WholeSaleList1);
}
main();
//# sourceMappingURL=index.js.map