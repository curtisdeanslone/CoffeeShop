import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Category } from "./category.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class ProductsRepository {
    private products: Product[] = [];
    private categories: Category[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getProducts().subscribe(data=>{
            this.products = data;
        });
        dataSource.getCategories().subscribe(data=>{
            this.categories = data;
        });
    }


    //Get Products by Category
    getProductsByCategory(category: string=null): Product[] {
        //get category id by category string
        //filter products by category id
        return this.products;
    }

    //Get Product by id
    getProduct(id: number): Product {
        return this.products.find(p => p.id == id);
    }

    //Get all categories
    getCategories(): string[] {
        //enumerate categories, get name, return to string array
        return [];
    }
    
}