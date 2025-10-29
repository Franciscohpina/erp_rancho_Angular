import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Razas } from '../interfaces/razas';

@Injectable({
  providedIn: 'root'
})
export class RazasService {
  private apiURL = "http://localhost:3000/razas";
    constructor(private http: HttpClient) {}
  
    obtenerRazas(): Observable<Razas[]>
    {
      return this.http.get<Razas[]>(this.apiURL);
    }

    guardarRazas(razas: Razas): Observable<Razas> //cambiar <Cliente> por <any> si no sabemos que es lo que manda
      {
        return this.http.post<Razas>(this.apiURL, razas).pipe( //cambiar <Cliente> por <any> si no sabemos que es lo que manda
          tap(res=>{
            console.log('respuesta'+res);
          })
        );
      }
}
