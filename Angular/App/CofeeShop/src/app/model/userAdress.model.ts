export class UserAddress {
    constructor(
        public id: number,
        public user_id: number,
        public address_line1?: string,
        public address_line2?: string,
        public city?: string,
        public state?: string,
        public postal_code?: string,
        public telephone?: string
    ) { }
}