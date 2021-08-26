export class Product {
    constructor(
        public id?: number,
        public title?: string,
        public description?: string,
        public price?: number,
        public country?: string,
        public category?: number,
        public sku?: number,
        public inventory?: number
    ){ }
}