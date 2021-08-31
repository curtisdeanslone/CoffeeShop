import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Category } from "./category.model";
//import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class ProductsRepository {
    private products: Product[] = [];
    private categories: Category[] = [];

    constructor(private dataSource: RestDataSource) {
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

    saveProduct(product: Product) {
        if (product.id == null || product.id == 0) {
            this.dataSource.saveProduct(product).subscribe(p => this.products.push(p));
        } else {
            this.dataSource.updateProducts(product).subscribe(p => {
                this.products.splice(this.products.findIndex(p => p.id == product.id), 1, product);
            });
        }
    }

    deleteProduct(id: number) {
        this.dataSource.deleteProduct(id).subscribe(p => {
            this.products.splice(this.products.findIndex(p => p.id == id), 1);
        });
    }  
}