import { NgModule } from "@angular/core";
import { ProductsRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model"
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";

@NgModule({
    providers: [ProductsRepository, StaticDataSource, Cart, Order, OrderRepository]
})
export class ModelModule { }