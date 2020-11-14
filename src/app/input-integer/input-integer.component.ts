import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product} from '../products-list/Product';
@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  cantidad: number;

  @Input()
  max:number;

  @Output()
  cantidadChange: EventEmitter <number> = new EventEmitter <number>();

  @Output()
  maxAlcanzado: EventEmitter <string> = new EventEmitter <string>();

  ngOnInit(): void {
  }
 
  upCantidad():void{
    if(this.cantidad<this.max){
       this.cantidad++; 
       this.cantidadChange.emit(this.cantidad);  
    }else{
      this.maxAlcanzado.emit("Se alcanzó el máximo");
    }

  }

  downCantidad():void{
    if(this.cantidad>0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad); 
    }
    
  }

  changeCantidad(event):void{
    console.log(event.key);
    this.cantidadChange.emit(this.cantidad); 
  }
}
