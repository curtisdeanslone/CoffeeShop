import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Category } from "./category.model";
import { Observable, from } from "rxjs";
import { default as data} from "../../../data.js";


@Injectable()
export class StaticDataSource {
    private products: Product[] = data.products;
    private categories: Category[] = data.categories;

    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }
    
    getCategories(): Observable<Category[]> {
        return from([this.categories]);
    }

}