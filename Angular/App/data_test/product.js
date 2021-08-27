"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(id, title, description, price, country, category, sku, inventory) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.country = country;
        this.category = category;
        this.sku = sku;
        this.inventory = inventory;
    }
    return Product;
}());
exports.Product = Product;
