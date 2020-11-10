import { Component, OnInit } from '@angular/core';
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
      liquidacion: true
    },
    {
      imagen: "assets/img/blackout.jpeg",
      nombre: "Cortinas",
      tipo: "Blackout",
      precio:2000,
      stock: 10,
      liquidacion: false,
    },
    {
      imagen: "assets/img/respaldos.jpeg",
      nombre: "Respaldo",
      tipo: "Capitone",
      precio:10000,
      stock: 10,
      liquidacion: true
    },
  
  ];

  
  constructor() { }

  ngOnInit(): void {
  }

}
