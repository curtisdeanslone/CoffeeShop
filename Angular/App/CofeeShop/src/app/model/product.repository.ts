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
    getProductsByCategory(category: string="home"): Product[] {
        //get category id by category string
        let cat_id;
        if (category != "home"){
            cat_id = ((this.categories).find(c => c.name == category)).id;
        }
        //filter products by category id
        // return (this.products).filter(p => cat_id == null || cat_id == p.category);
        return (category == "home"? this.products : (this.products).filter(p => cat_id == null || cat_id == p.category) );
    }

    //Get all products
    getProducts(): Product[] {
        return this.products;
    }
    //Get Product by id
    getProduct(id: number): Product {
        return this.products.find(p => p.id == id);
    }

    //Get all categories
    getCategories(): string[] {
        //enumerate categories, get name, return to string array
        return this.categories.map(c => c.name);
    }
    
}