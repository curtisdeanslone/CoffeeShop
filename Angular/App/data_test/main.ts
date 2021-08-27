import { StaticDataSource } from "./datasource";
import * as data from './data'

const db = data();

let myStaticData = new StaticDataSource();
let productlisting = myStaticData.getProducts();
let categoryListing = myStaticData.getCategories();
console.log(productlisting);
console.log(categoryListing);