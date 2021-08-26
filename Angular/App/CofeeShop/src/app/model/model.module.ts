import { NgModule } from "@angular/core";
import { ProductsRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";

@NgModule({
    providers: [ProductsRepository, StaticDataSource]
})
export class ModelModule { }