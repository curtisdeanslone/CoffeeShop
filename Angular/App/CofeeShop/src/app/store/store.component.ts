import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductsRepository } from "../model/product.repository";
@Component({
    selector: "store",
    templateUrl: "store.component.html"
})

export class StoreComponent {
    public selectedCategory = "home";
    constructor (private repository: ProductsRepository) { }
    get products(): Product[] {
        return this.repository.getProductsByCategory(this.selectedCategory);
    }
    get categories(): string[] {
        return this.repository.getCategories();
    }
    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }
}