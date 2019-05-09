import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input('rece') receta:{};
  @Output() onSalida: EventEmitter<number> = new EventEmitter<number>();
  @Input() indice: number;

  constructor() { }



  ngOnInit() {
  }

  eliminar() {
    this.onSalida.emit(this.indice);
  }
}
