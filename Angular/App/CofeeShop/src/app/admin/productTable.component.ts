import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductsRepository } from "../model/product.repository";

@Component({
    templateUrl: "productTable.component.html"
})

export class ProductTableComponent { 
    constructor(private repository: ProductsRepository) { }

    getProducts(): Product[] { 
        return this.repository.getProducts();
    }

    deleteProduct(id: number) {
        this.repository.deleteProduct(id);
    }
}