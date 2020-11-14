import { Component, OnInit } from '@angular/core';
import { ProductCarritoService } from '../product-carrito.service';
import { Product} from './Product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products:Product[]=[
    {
      imagen: "assets/img/sunscreen.jpeg",
      nombre: "Cortinas",
      tipo: "Sunscreen",
      precio:2500,
      stock: 0,
      liquidacion: false,
      cantidad: 0
    },
    {
      imagen: "assets/img/blackout.jpeg",
      nombre: "Cortinas",
      tipo: "Blackout",
      precio:2000,
      stock: 10,
      liquidacion: false,
      cantidad: 0
    },
    {
      imagen: "assets/img/respaldos.jpeg",
      nombre: "Respaldo",
      tipo: "Capitone",
      precio:10000,
      stock: 10,
      liquidacion: true,
      cantidad: 0
    },
  
  ];
  

  
  constructor(private carrito: ProductCarritoService) {
   
   }

  ngOnInit(): void {
  }

  maxAlcanzado(m:string){
    alert(m);
  }

  addToCarrito(product):void{
    this.carrito.addToCarrito(product); 
    console.log("antes de la compra"+product.stock);
    product.stock -=product.cantidad;
    console.log("despues de la compra"+product.stock);
    product.cantidad=0;
  }
  

}
