import { Component, OnInit } from '@angular/core';
import { ScullyRoute,ScullyRoutesService } from '@scullyio/ng-lib';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private scullyService:ScullyRoutesService) { }
  product: ScullyRoute[] = [];
  ngOnInit(): void {
    this.scullyService.available$.subscribe(product=>{
      this.product=product.filter(product=>product.title);
    })
  }

}
