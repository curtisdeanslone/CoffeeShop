import { User } from "./user.model";
import { UserAddress } from "./userAdress.model";
import { StaticDataSource } from "./static.datasource";
import { Injectable } from "@angular/core";

@Injectable()
export class UsersRepository {
    private users: User[] = [];
    private userAddresses: UserAddress[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getUsers().subscribe(data=>{
            this.users = data;
        });

        dataSource.getUserAddresses().subscribe(data=>{
            this.userAddresses = data;
        });
    }

    getUserAddressByUserId(user: number): UserAddress {
        return this.userAddresses.find(uA => uA.user_id == user);
    }

    getUserById(user: number): User {
        return this.users.find(u => u.id == user);
    }
}