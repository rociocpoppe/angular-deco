import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './products-list/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductCarritoService {

  private _listaCarrito: Product[]=[];
  listaCarrito:BehaviorSubject<Product[]>=new BehaviorSubject(this._listaCarrito);
  constructor() { }
  
  addToCarrito(product: Product) {
    let item: Product= this._listaCarrito.find((v1)=>v1.nombre==product.nombre);
    if(!item){
       this._listaCarrito.push({...product});
    }else{
      item.cantidad+=product.cantidad;
    }
    console.log(this._listaCarrito);
    this.listaCarrito.next(this._listaCarrito);
  }


}
