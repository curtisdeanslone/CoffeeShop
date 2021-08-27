import { Product } from "./product";
import { Category } from "./category";
import * as db from './data'

const data = db();

export class StaticDataSource {
    private products: Product[] = [];
    private categories: Category[] = [];
    constructor(){ 
        //Construct this.products array
        (data.products).forEach(p => {
           (this.products).push(new Product(p.id, p.title, p.description, p.price, p.country,p.category, p.sku,p.inventory));
        });
        //Construct this.category array
        (data.product_category).forEach(p => {
            (this.categories).push(new Product(p.id, p.name, p.description));
         });
    }
    getProducts(): Product[] {
        return this.products;
    }
    
    getCategories(): Category[] {
        return this.categories;
    }

}