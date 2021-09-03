import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable()
export class Order {
    public id: number;
    public user_id: number;
    public total: number;
    public shipped: boolean;
    constructor(public cart: Cart) { }

    clear(){ 
        this.id = null;
        this.user_id = null;
        this.total = null;
    }
}