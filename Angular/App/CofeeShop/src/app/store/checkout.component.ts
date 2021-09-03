import { formatCurrency } from "@angular/common";
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Order } from "../model/order.model";
import { OrderRepository } from "../model/order.repository";
import { UsersRepository } from "../model/user.repository";
import { User } from "../model/user.model";
import { UserAddress } from "../model/userAdress.model";


@Component({
    templateUrl: "checkout.component.html",
    styleUrls: ["checkout.component.css"]
})

export class CheckoutComponent { 
    orderSent: boolean = false;
    submitted: boolean = false;
    user: User;
    userAddress: UserAddress;
    constructor(public repository: OrderRepository, public order: Order, public userRepo: UsersRepository){
        this.user = userRepo.getUserById(1);
        this.userAddress = userRepo.getUserAddressByUserId(1);
    }

    submitOrder(form: NgForm) {
        this.submitted = true;
        if (form.valid) {
            this.repository.saveOrder(this.order).subscribe(order => {
                this.order.clear();
                this.orderSent = true;
                this.submitted = false;
            });
        }
    }
}