import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Category } from "./category.model";
import { Observable, from } from "rxjs";
import { Order } from "./order.model";
import * as db from  "../../../data.js";
import { User } from "./user.model";
import { UserAddress } from "./userAdress.model";



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
            ),
        new Product(
            (this.data.products[9]).id,
            (this.data.products[9]).title,
            (this.data.products[9]).description,
            (this.data.products[9]).price,
            (this.data.products[9]).country,
            (this.data.products[9]).category,
            (this.data.products[9]).sku,
            (this.data.products[9]).inventory,
            ),
        new Product(
            (this.data.products[10]).id,
            (this.data.products[10]).title,
            (this.data.products[10]).description,
            (this.data.products[10]).price,
            (this.data.products[10]).country,
            (this.data.products[10]).category,
            (this.data.products[10]).sku,
            (this.data.products[10]).inventory,
            ),
        new Product(
            (this.data.products[11]).id,
            (this.data.products[11]).title,
            (this.data.products[11]).description,
            (this.data.products[11]).price,
            (this.data.products[11]).country,
            (this.data.products[11]).category,
            (this.data.products[11]).sku,
            (this.data.products[11]).inventory,
            ),
        new Product(
            (this.data.products[12]).id,
            (this.data.products[12]).title,
            (this.data.products[12]).description,
            (this.data.products[12]).price,
            (this.data.products[12]).country,
            (this.data.products[12]).category,
            (this.data.products[12]).sku,
            (this.data.products[12]).inventory,
            ),
        new Product(
            (this.data.products[13]).id,
            (this.data.products[13]).title,
            (this.data.products[13]).description,
            (this.data.products[13]).price,
            (this.data.products[13]).country,
            (this.data.products[13]).category,
            (this.data.products[13]).sku,
            (this.data.products[13]).inventory,
            ),
        new Product(
            (this.data.products[14]).id,
            (this.data.products[14]).title,
            (this.data.products[14]).description,
            (this.data.products[14]).price,
            (this.data.products[14]).country,
            (this.data.products[14]).category,
            (this.data.products[14]).sku,
            (this.data.products[14]).inventory,
            ),
        new Product(
            (this.data.products[15]).id,
            (this.data.products[15]).title,
            (this.data.products[15]).description,
            (this.data.products[15]).price,
            (this.data.products[15]).country,
            (this.data.products[15]).category,
            (this.data.products[15]).sku,
            (this.data.products[15]).inventory,
            ),
        new Product(
            (this.data.products[16]).id,
            (this.data.products[16]).title,
            (this.data.products[16]).description,
            (this.data.products[16]).price,
            (this.data.products[16]).country,
            (this.data.products[16]).category,
            (this.data.products[16]).sku,
            (this.data.products[16]).inventory,
            ),
        new Product(
            (this.data.products[17]).id,
            (this.data.products[17]).title,
            (this.data.products[17]).description,
            (this.data.products[17]).price,
            (this.data.products[17]).country,
            (this.data.products[17]).category,
            (this.data.products[17]).sku,
            (this.data.products[17]).inventory,
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

    private users: User[] = [
        new User(
            (this.data.users[0]).id,
            (this.data.users[0]).username,
            (this.data.users[0]).first_name,
            (this.data.users[0]).last_name,
            (this.data.users[0]).account_type
            ),
        new User(
            (this.data.users[1]).id,
            (this.data.users[1]).username,
            (this.data.users[1]).first_name,
            (this.data.users[1]).last_name,
            (this.data.users[1]).account_type
            ),
        new User(
            (this.data.users[2]).id,
            (this.data.users[2]).username,
            (this.data.users[2]).first_name,
            (this.data.users[2]).last_name,
            (this.data.users[2]).account_type
            ),
        new User(
            (this.data.users[3]).id,
            (this.data.users[3]).username,
            (this.data.users[3]).first_name,
            (this.data.users[3]).last_name,
            (this.data.users[3]).account_type
            ),
        
    ];

    private userAdresses: UserAddress[] = [
        new UserAddress(
            (this.data.user_address[0]).id,
            (this.data.user_address[0]).user_id,
            (this.data.user_address[0]).address_line1,
            (this.data.user_address[0]).address_line2,
            (this.data.user_address[0]).city,
            (this.data.user_address[0]).state,
            (this.data.user_address[0]).postal_code,
            (this.data.user_address[0]).telephone
        ),
        new UserAddress(
            (this.data.user_address[1]).id,
            (this.data.user_address[1]).user_id,
            (this.data.user_address[1]).address_line1,
            (this.data.user_address[1]).address_line2,
            (this.data.user_address[1]).city,
            (this.data.user_address[1]).state,
            (this.data.user_address[1]).postal_code,
            (this.data.user_address[1]).telephone
        ),
        new UserAddress(
            (this.data.user_address[2]).id,
            (this.data.user_address[2]).user_id,
            (this.data.user_address[2]).address_line1,
            (this.data.user_address[2]).address_line2,
            (this.data.user_address[2]).city,
            (this.data.user_address[2]).state,
            (this.data.user_address[2]).postal_code,
            (this.data.user_address[2]).telephone
        ),
        new UserAddress(
            (this.data.user_address[3]).id,
            (this.data.user_address[3]).user_id,
            (this.data.user_address[3]).address_line1,
            (this.data.user_address[3]).address_line2,
            (this.data.user_address[3]).city,
            (this.data.user_address[3]).state,
            (this.data.user_address[3]).postal_code,
            (this.data.user_address[3]).telephone
        )
    ];
        
    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }
    
    getCategories(): Observable<Category[]> {
        return from([this.categories]);
    }

    getUsers(): Observable<User[]> {
        return from([this.users]);
    }

    getUserAddresses(): Observable<UserAddress[]> {
        return from([this.userAdresses]);
    }

    saveOrder(order: Order): Observable<Order> {
        console.log(JSON.stringify(order));
        return from([order]);
    }

}