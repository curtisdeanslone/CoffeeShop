import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  {path:'contact',component: ContactComponent},
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  {path: '',pathMatch:'full',redirectTo:'products'},
  { path: 'products', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  {path:'**',redirectTo:'products'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
