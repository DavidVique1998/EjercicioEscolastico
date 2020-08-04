import { Component, OnInit } from '@angular/core';
import { TipoBeca } from '../models/tipo-beca';

@Component({
  selector: 'app-tipo-beca-main',
  templateUrl: './tipo-beca-main.component.html',
  styleUrls: ['./tipo-beca-main.component.css']
})
export class TipoBecaMainComponent implements OnInit {
  mainTipoBeca: TipoBeca;
  mainTitle: string;
  mainReload: boolean;
  constructor() { }

  ngOnInit(): void {
    this.onInit();
  }
  onInit(): void {
    this.mainTipoBeca = new TipoBeca();
    this.mainTitle = 'Registro de un nuevo tipo de Beca';
    this.mainReload = false;
  }
  toUpdate($event): void{
    this.mainTipoBeca = $event;
    this.mainTipoBeca.nombre;
    console.log(this.mainTipoBeca);
    this.mainTitle = 'Editando tipo de beca ' + $event.nombre ;
  }

  toReload($event): void {
    this.onInit();
    console.log($event);
    this.mainReload = $event;
  }

  reloadDone($event): void{
    this.mainReload = !$event;
  }
}
