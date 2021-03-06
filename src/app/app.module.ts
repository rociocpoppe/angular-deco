import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { DecoAboutComponent } from './deco-about/deco-about.component';
import { CarritoComponent } from './carrito/carrito.component';
import { DecoProductsComponent } from './deco-products/deco-products.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    DecoAboutComponent,
    CarritoComponent,
    DecoProductsComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
