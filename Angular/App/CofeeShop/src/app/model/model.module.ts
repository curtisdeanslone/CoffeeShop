import { NgModule } from "@angular/core";
import { ProductsRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model"

@NgModule({
    providers: [ProductsRepository, StaticDataSource, Cart]
})
export class ModelModule { }