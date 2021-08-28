import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Category } from "./category.model";
import { Observable, from } from "rxjs";
import * as db from  "../../../data.js";



@Injectable()
export class StaticDataSource {
    private data = db();
    private products: Product[] = [
        new Product(
            (this.data.products[0]).id,
            (this.data.products[0]).title,
            (this.data.products[0]).description,
            (this.data.products[0]).price,
            (this.data.products[0]).country,
            (this.data.products[0]).category,
            (this.data.products[0]).sku,
            (this.data.products[0]).inventory,
            ),
        new Product(
            (this.data.products[1]).id,
            (this.data.products[1]).title,
            (this.data.products[1]).description,
            (this.data.products[1]).price,
            (this.data.products[1]).country,
            (this.data.products[1]).category,
            (this.data.products[1]).sku,
            (this.data.products[1]).inventory,
            ),
        new Product(
            (this.data.products[2]).id,
            (this.data.products[2]).title,
            (this.data.products[2]).description,
            (this.data.products[2]).price,
            (this.data.products[2]).country,
            (this.data.products[2]).category,
            (this.data.products[2]).sku,
            (this.data.products[2]).inventory,
            ),
        new Product(
            (this.data.products[3]).id,
            (this.data.products[3]).title,
            (this.data.products[3]).description,
            (this.data.products[3]).price,
            (this.data.products[3]).country,
            (this.data.products[3]).category,
            (this.data.products[3]).sku,
            (this.data.products[3]).inventory,
            ),
        new Product(
            (this.data.products[4]).id,
            (this.data.products[4]).title,
            (this.data.products[4]).description,
            (this.data.products[4]).price,
            (this.data.products[4]).country,
            (this.data.products[4]).category,
            (this.data.products[4]).sku,
            (this.data.products[4]).inventory,
            ),
        new Product(
            (this.data.products[5]).id,
            (this.data.products[5]).title,
            (this.data.products[5]).description,
            (this.data.products[5]).price,
            (this.data.products[5]).country,
            (this.data.products[5]).category,
            (this.data.products[5]).sku,
            (this.data.products[5]).inventory,
            ),
        new Product(
            (this.data.products[6]).id,
            (this.data.products[6]).title,
            (this.data.products[6]).description,
            (this.data.products[6]).price,
            (this.data.products[6]).country,
            (this.data.products[6]).category,
            (this.data.products[6]).sku,
            (this.data.products[6]).inventory,
            ),
        new Product(
            (this.data.products[7]).id,
            (this.data.products[7]).title,
            (this.data.products[7]).description,
            (this.data.products[7]).price,
            (this.data.products[7]).country,
            (this.data.products[7]).category,
            (this.data.products[7]).sku,
            (this.data.products[7]).inventory,
            ),
        new Product(
            (this.data.products[8]).id,
            (this.data.products[8]).title,
            (this.data.products[8]).description,
            (this.data.products[8]).price,
            (this.data.products[8]).country,
            (this.data.products[8]).category,
            (this.data.products[8]).sku,
            (this.data.products[8]).inventory,
            )
    ];
    private categories: Category[] = [
        new Category (
            (this.data.product_category[0]).id,
            (this.data.product_category[0]).name,
            (this.data.product_category[0]).description,
        ),
        new Category (
            (this.data.product_category[1]).id,
            (this.data.product_category[1]).name,
            (this.data.product_category[1]).description,
        ),
        new Category (
            (this.data.product_category[2]).id,
            (this.data.product_category[2]).name,
            (this.data.product_category[2]).description,
        )
    ];
        
    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }
    
    getCategories(): Observable<Category[]> {
        return from([this.categories]);
    }

}