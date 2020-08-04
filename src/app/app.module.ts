import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID  } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoMainComponent } from './alumno-main/alumno-main.component';
import { AlumnoListComponent } from './alumno-main/alumno-list/alumno-list.component';
import { AlumnoFormComponent } from './alumno-main/alumno-form/alumno-form.component';
import { AlumnoService } from './services/alumno.service';
import { ServiceInterceptor } from './services/service.interceptor';
import { AlumnoCardComponent } from './alumno-card/alumno-card.component';
import { MateriaFormComponent } from './materia-form/materia-form.component';
import { MatriculaFormComponent } from './matricula-form/matricula-form.component';
import { MaquinariaMainComponent } from './maquinaria-main/maquinaria-main.component';
import { MaquinariaFormComponent } from './maquinaria-main/maquinaria-form/maquinaria-form.component';
import { MaquinariaListComponent } from './maquinaria-main/maquinaria-list/maquinaria-list.component';
import { MaquinariaCardComponent } from './maquinaria-main/maquinaria-card/maquinaria-card.component';
import { MasmasPipe } from './shared/masmas.pipe';
import { SexdescPipe } from './shared/sexdesc.pipe';
import { TipoBecaMainComponent } from './tipo-beca-main/tipo-beca-main.component';
import { TipoBecaListComponent } from './tipo-beca-main/tipo-beca-list/tipo-beca-list.component';
import { TipoBecaFormComponent } from './tipo-beca-main/tipo-beca-form/tipo-beca-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoMainComponent,
    AlumnoListComponent,
    AlumnoFormComponent,
    AlumnoCardComponent,
    MateriaFormComponent,
    MatriculaFormComponent,
    MaquinariaMainComponent,
    MaquinariaFormComponent,
    MaquinariaListComponent,
    MaquinariaCardComponent,
    MasmasPipe,
    SexdescPipe,
    TipoBecaMainComponent,
    TipoBecaListComponent,
    TipoBecaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [
    AlumnoService, {
    provide: HTTP_INTERCEPTORS,
    useClass: ServiceInterceptor,
    multi: true
  },
  {
    provide: LOCALE_ID,
    useValue : 'es-EC'
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
