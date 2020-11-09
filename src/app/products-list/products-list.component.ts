import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products={
    imagen: "assets/img/sunscreen.jpeg",
    nombre: "Cortinas",
    tipo: "Sunscreen",
    precio:2500,
    stock: 5
  };

  products2={
    imagen: "assets/img/blackout.jpeg",
    nombre: "Cortinas",
    tipo: "Blackout",
    precio:2000,
    stock: 10
  };

  products3={
    imagen: "assets/img/respaldos.jpeg",
    nombre: "Respaldo",
    tipo: "Capitone",
    precio:10000,
    stock: 10
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
