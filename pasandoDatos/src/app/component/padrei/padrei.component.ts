import { Component } from '@angular/core';
import { HijocComponent } from '../hijoc/hijoc.component';

@Component({
  selector: 'app-padrei',
  standalone: true,
  imports: [HijocComponent],
  templateUrl: './padrei.component.html',
  styleUrl: './padrei.component.css'
})
export class PadreiComponent {
  contador1: number = 0; // aqui declaro una variable llamada contador1 con la cual vamos a realizar la operacion matematica apartir de donde la funcion que recibimos del componente hijo que es la salida de @output

  recibirContadorHijo(contadorHijo: number){ //se crea una función  recibirContadorHijo donde recibo los datos de hijo y realizo lo que quiero hacer con ellos en este caso multiplicarlos por 2
    this.contador1 = contadorHijo * 2;
  }
}

