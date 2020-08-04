import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnoMainComponent } from './alumno-main/alumno-main.component';
import { AlumnoCardComponent } from './alumno-card/alumno-card.component';
import { MateriaFormComponent } from './materia-form/materia-form.component';
import { MatriculaFormComponent } from './matricula-form/matricula-form.component';
import { MaquinariaListComponent } from './maquinaria-main/maquinaria-list/maquinaria-list.component';
import { MaquinariaCardComponent } from './maquinaria-main/maquinaria-card/maquinaria-card.component';
import { MaquinariaFormComponent } from './maquinaria-main/maquinaria-form/maquinaria-form.component';
import { TipoBecaMainComponent } from './tipo-beca-main/tipo-beca-main.component';

const routes: Routes = [
{path: '', redirectTo: '/', pathMatch: 'full'},
{path: 'alumnos', component: AlumnoMainComponent},
{path: 'alumnos/:id', component: AlumnoCardComponent},
{path: 'materias', component: MateriaFormComponent},
{path: 'materias/:id', component: MateriaFormComponent},
{path: 'matriculas', component: MatriculaFormComponent},
{path: 'maquinaria/form', component: MaquinariaFormComponent},
{path: 'maquinaria/form/:id', component: MaquinariaFormComponent},
{path: 'maquinaria/list', component: MaquinariaListComponent},
{path: 'maquinaria/card/:id', component: MaquinariaCardComponent},
{path: 'tipobecas', component: TipoBecaMainComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
