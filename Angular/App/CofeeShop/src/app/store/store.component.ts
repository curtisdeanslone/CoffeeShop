import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductsRepository } from "../model/product.repository";
import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";
@Component({
    selector: "store",
    templateUrl: "store.component.html"
})

export class StoreComponent {
    public selectedCategory = "home";
    public productsPerPage = 4;
    public selectedPage = 1;
    
    constructor (private repository: ProductsRepository,
        private cart: Cart,
        private router: Router) { }
    
    //get all products
    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.repository.getProductsByCategory(this.selectedCategory).slice(pageIndex, pageIndex + this.productsPerPage);
    }
    //get categories
    get categories(): string[] {
        return this.repository.getCategories();
    }
    //change category view
    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }
    //change page
    changePage(newPage: number) {
        this.selectedPage = newPage;
    }
    //change page size
    changePagesize(newSize: number) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }
   //get pageCount
   get pageCount(): number {
       return Math.ceil(this.repository.getProductsByCategory(this.selectedCategory).length / this.productsPerPage);
   }

   //add Product to Cart
   addProductToCart(product: Product) {
       this.cart.addLine(product);
       //this.router.navigateByUrl("/cart");
   }

}