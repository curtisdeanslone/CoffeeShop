import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { Product } from "./product.model";
import { Category } from "./category.model";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { User } from "./user.model";
import { UserAddress } from "./userAdress.model";
import { map } from "rxjs/operators"

const PROTOCOL = "http";
const PORT = 3500

@Injectable()
export class RestDataSource {
    baseUrl: string;
    auth_token: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseUrl + "products");
    }

    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(this.baseUrl + "product_category");
    }

    saveOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(this.baseUrl + "orders", order);
    }

    authenticate(user: string, pass: string): Observable<boolean> {
        return this.http.post<any>(this.baseUrl + "login", { name: user, password: pass}).pipe(map(response => {
            this.auth_token = response.success ? response.toke : null;
            return response.success;
        }));
    }
}