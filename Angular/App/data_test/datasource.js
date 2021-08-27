"use strict";
exports.__esModule = true;
exports.StaticDataSource = void 0;
var product_1 = require("./product");
var category_1 = require("./category");
var db = require("./data");
var StaticDataSource = /** @class */ (function () {
    function StaticDataSource() {
        var _this = this;
        this.products = [];
        this.categories = [];
        var data = db();
        //Construct this.products array
        (data.products).forEach(function (p) {
            (_this.products).push(new product_1.Product(p.id, p.title, p.description, p.price, p.country, p.category, p.sku, p.inventory));
        });
        //Construct this.category array
        (data.product_category).forEach(function (p) {
            (_this.categories).push(new category_1.Category(p.id, p.name, p.description));
        });
    }
    StaticDataSource.prototype.getProducts = function () {
        return this.products;
    };
    StaticDataSource.prototype.getCategories = function () {
        return this.categories;
    };
    return StaticDataSource;
}());
exports.StaticDataSource = StaticDataSource;
