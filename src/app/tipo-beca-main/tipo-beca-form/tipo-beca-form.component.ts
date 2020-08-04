import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TipoBeca } from '../../models/tipo-beca';
import {  FormBuilder, FormGroup , Validators} from '@angular/forms';
import { faCertificate, faPercent, faIdCard, faSave, faTimes, faTag} from '@fortawesome/free-solid-svg-icons';
import { TipoBecaService } from '../../services/tipo-beca.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-beca-form',
  templateUrl: './tipo-beca-form.component.html',
  styleUrls: ['./tipo-beca-form.component.css']
})
export class TipoBecaFormComponent implements OnInit {
  faTimes = faTimes;
  faTag = faTag;
  faIdCard = faIdCard;
  faSave = faSave;
  faPercent = faPercent;
  faCertificate = faCertificate;
  @Input() tipoBeca: TipoBeca;
  @Input() title: string ;
  @Output() flagToReload = new EventEmitter<boolean>();
  form: FormGroup;
  submitted = false;
  constructor(private promocionesService: TipoBecaService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.tipoBeca = new TipoBeca();
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      requisitos_especificos: ['', [Validators.required]],
      porcentaje_matricula: ['', [Validators.required]],
      tipo_calificacion_necesaria: ['', [Validators.required]],
      documentos_respaldo: ['', [Validators.required]],
    });
  }
  get f(): any {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid){
      Swal.fire({
        title: 'Error',
        text: 'Error en formulario',
        icon: 'error',
      });
      console.error('Error en formulario');
      return;
    }

    this.promocionesService.create(this.tipoBeca).subscribe(
      result => {
        this.submitted = false;
        console.log(result);
        this.flagToReload.emit(true);
      }
    );
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
    this.tipoBeca = new TipoBeca();
    window.location.reload();
  }
}
