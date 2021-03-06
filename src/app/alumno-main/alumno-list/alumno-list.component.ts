import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { AlumnoService } from '../../services/alumno.service';
import { faListAlt, faEye, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert2';
@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.component.html',
  styleUrls: ['./alumno-list.component.css']
})
export class AlumnoListComponent implements OnInit {

  faListAlt = faListAlt;
  faEye = faEye;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;

  alumnos: Alumno[];
  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.list();
  }

  delete(a: Alumno): void {
    swal.fire({
      title: '¿Está seguro de continuar?',
      text: 'El registro de ' + a.nombres + ' ' + a.apellidos + ' será eliminado.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.alumnoService.delete(a).subscribe(
        result => console.log(result)
        );
      }
    });
  }

  list(): void {
    this.alumnoService.list().subscribe(result => {
      this.alumnos = result;
    });
  }

}
