import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TipoBeca } from '../models/tipo-beca';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TipoBecaService {
  url = 'https://localhost:44396/api/TipoBeca';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }
  create(tipoBeca: TipoBeca): Observable<any> {
    const tipoBecaBody = JSON.stringify(tipoBeca);
    if (tipoBeca.idTipoBecas === undefined){
      return this.http.post<any>(this.url, tipoBecaBody, this.httpOptions).pipe(retry(1));
    }
    return this.http.put<any>(this.url, tipoBecaBody, this.httpOptions).pipe(retry(1));
  }
  list(): Observable<TipoBeca[]>{
    return this.http.get<TipoBeca[]>(this.url, this.httpOptions)
    .pipe(
      retry(1)
    );
  }
  retrive(id: number): Observable<TipoBeca>{
    return this.http.get<TipoBeca>(this.url + '/' + id, this.httpOptions)
    .pipe(
      retry(1)
    );
  }
  delete(tipoBeca: TipoBeca): Observable<any> {
    return this.http.delete<any>(this.url + '/' + tipoBeca.idTipoBecas,
      this.httpOptions).pipe(retry(1));
  }
}
