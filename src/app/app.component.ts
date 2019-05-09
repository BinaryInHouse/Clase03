import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoAngular';
  
  recetas: Array<object> = [
    { receta: 'receta 1', plato: 'ceviche' },
    { receta: 'receta 2', plato: 'arroz con pollo'},
    { receta: 'receta 3', plato: 'seco de res' }
  ];

  mostrar: boolean = true

    eliminarPlato(indice: number) {
    this.recetas.splice(indice, 1);
    console.log(indice);
  }

}
