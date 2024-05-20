import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreiComponent } from "./component/padrei/padrei.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PadreiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
