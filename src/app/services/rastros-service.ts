import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Rastros } from '../interfaces/rastros';

@Injectable({
  providedIn: 'root'
})
export class RastrosService {
  private apiURL = "http://localhost:3000/rastros";
    constructor(private http: HttpClient) {}
  
    obtenerRastros(): Observable<Rastros[]>
    {
      return this.http.get<Rastros[]>(this.apiURL);
    }

    guardarRastros(rastros: Rastros): Observable<Rastros> //cambiar <Cliente> por <any> si no sabemos que es lo que manda
      {
        return this.http.post<Rastros>(this.apiURL, rastros).pipe( //cambiar <Cliente> por <any> si no sabemos que es lo que manda
          tap(res=>{
            console.log('respuesta'+res);
          })
        );
      }
}
