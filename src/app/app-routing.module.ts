import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DecoAboutComponent } from './deco-about/deco-about.component';
import { DecoProductsComponent } from './deco-products/deco-products.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'products',
    pathMatch:'full'
  },
  {
    path:'products',
    component: DecoProductsComponent
  },
  {
    path:'about', 
    component: DecoAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
