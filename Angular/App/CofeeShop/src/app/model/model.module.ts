import { NgModule } from "@angular/core";
import { ProductsRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model"
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { UsersRepository } from "./user.repository";
import { RestDataSource } from "./rest.datasource";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { ConnectionService } from "./connection.service";

@NgModule({
    imports: [HttpClientModule],
    providers: [ProductsRepository, Cart, Order, OrderRepository, UsersRepository,
        {provide: StaticDataSource, useClass: RestDataSource}, RestDataSource, AuthService, ConnectionService
    ]
})
export class ModelModule { }