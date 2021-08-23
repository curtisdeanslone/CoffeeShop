import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ScullyRoutesService } from '@scullyio/ng-lib';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: '**', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
