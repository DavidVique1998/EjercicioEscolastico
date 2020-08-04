import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TipoBecaService } from '../../services/tipo-beca.service';
import { TipoBeca } from '../../models/tipo-beca';
import {
  faListAlt,
  faEye,
  faPencilAlt,
  faUserPlus,
  faTrash,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert2';
@Component({
  selector: 'app-tipo-beca-list',
  templateUrl: './tipo-beca-list.component.html',
  styleUrls: ['./tipo-beca-list.component.css']
})
export class TipoBecaListComponent implements OnInit {
  faListAlt = faListAlt;
  faUserPlus = faUserPlus;
  faEye = faEye;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;
  faPlus = faPlus;
  tipoBecas: TipoBeca[];
  @Input() flagToReload;
  @Output() tipoBecaToUpdate = new EventEmitter<TipoBeca>();
  @Output() reloadComplete = new EventEmitter<boolean>();

  constructor(private categoriasService: TipoBecaService) { }

  ngOnInit(): void {
    this.list();
  }
  list(): void {
    this.categoriasService.list().subscribe((result) => {
      this.tipoBecas = result;
      this.reloadComplete.emit(true);
    });
  }
  update(tb: TipoBeca): void {
    this.tipoBecaToUpdate.emit(tb);
    console.log(this.tipoBecaToUpdate.emit(tb));
  }
  delete(tipoBeca: TipoBeca): void {
    swal
      .fire({
        title: '¿Está seguro de continuar?',
        text: 'El tipo de beca ' + tipoBeca.nombre + 'será eliminado.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
      })
      .then((result) => {
        if (result.value) {
          this.categoriasService
            .delete(tipoBeca)
            .subscribe((result) => console.log(result));
        }
      });
  }
}
