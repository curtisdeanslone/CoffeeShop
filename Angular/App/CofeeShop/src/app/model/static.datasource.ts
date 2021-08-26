import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Category } from "./category.model";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource {
    private products: Product[] = [];

    private categories: Category[] = [];

    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }
    
    getCategories(): Observable<Category[]> {
        return from([this.categories]);
    }

}