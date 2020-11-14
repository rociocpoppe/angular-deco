import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCarritoService } from '../product-carrito.service';
import { Product } from '../products-list/Product';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  listaCarrito$: Observable<Product[]>;

  constructor(private carrito: ProductCarritoService) { 
   this.listaCarrito$=carrito.listaCarrito.asObservable();
  }

  ngOnInit(): void {
  }

}
