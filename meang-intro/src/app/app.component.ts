import { Component } from '@angular/core';
import { MiservicioService } from './miservicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meang-intro Componente1';
  /*caso para ngif */
  mostrar = false; 
  /* caso para ngfor*/
  
  lista = ['jhony','pepe','juan'];
  constructor(private servicio:MiservicioService){
    this.servicio.hola();
  }
}
