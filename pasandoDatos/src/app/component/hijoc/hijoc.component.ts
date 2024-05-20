import { Component,Input, Output,EventEmitter } from '@angular/core';
// aqui llamo a las dependencias de angular core Input, Output,EventEmitterque se usan para la entrada de datos la salida y emitir eventos
@Component({
  selector: 'app-hijoc',
  standalone: true,
  imports: [],
  templateUrl: './hijoc.component.html',
  styleUrl: './hijoc.component.css'
})
export class HijocComponent {
  //@Input() contadorPadre: number = 0; // input define una propiedad de entrada a la cual la llame contadorPadre y le indicamos q es de tipo numerico y le asignamos un valor 0
  contador: number = 0;// hay declaramos una propiedad llamada contador de tipo numero empezando por 0, esta propiedad es independiente del input y se usa dentro de la clase hijo component

  @Output() contadorHijo = new EventEmitter<number>();// aqui el output se crea una clase que nos define una propiedad de salida llamada contadorHijo, usamos una clase llamada EventEmitter que viene de angular lo que permite enviar datos del componente principal
//aqui creo dos funciones sumar y restar luego emito el valor que recibi a la variable contador 
  sumar(){ 
    this.contador++; 
    this.contadorHijo.emit(this.contador);
  }

  restar(){
    this.contador--;
    this.contadorHijo.emit(this.contador);
  }

  }
  

