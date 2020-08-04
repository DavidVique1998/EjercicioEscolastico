import { Component, OnInit } from '@angular/core';
import { faCheck, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Alumno } from '../models/alumno';
import { Materia } from '../models/materia';
import { AlumnoService } from '../services/alumno.service';
import { MateriaService } from '../services/materia.service';
import { Matricula } from '../models/matricula';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-matricula-form',
  templateUrl: './matricula-form.component.html',
  styleUrls: ['./matricula-form.component.css']
})
export class MatriculaFormComponent implements OnInit {

  faSearch = faSearch;
  faCheck = faCheck;

  alumnos: Alumno[];
  alumno: Alumno;
  materias: Materia[];
  matriculas: Matricula[];

  constructor(private alumnoService: AlumnoService, private materiaService : MateriaService) { }

  ngOnInit(): void {
    this.materiaService.list().subscribe(result=>{
      this.materias = result;
      this.materias.forEach(mat => {
        const nueva = new Matricula();
        nueva.materia = mat;
        this.matriculas.push(nueva);
      })
    });
  }

  searchAlumno($event): void {
    console.info($event.target.value);
    this.alumnoService.search($event.target.value).subscribe(
      result => this.alumnos = result
    )
  }

  selectAlumno(id: number): void{
    this.alumnoService.retrieve(id).subscribe(result => this.alumno = result);
  }
}
