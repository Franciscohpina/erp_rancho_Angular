import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Tanques } from '../interfaces/tanques';

@Injectable({
  providedIn: 'root'
})
export class TanquesService {
  private apiURL = "http://localhost:3000/tanques";
    constructor(private http: HttpClient) {}
  
    obtenerTanques(): Observable<Tanques[]>
    {
      return this.http.get<Tanques[]>(this.apiURL);
    }

    guardarTanques(tanques: Tanques): Observable<Tanques> //cambiar <Cliente> por <any> si no sabemos que es lo que manda
      {
        return this.http.post<Tanques>(this.apiURL, tanques).pipe( //cambiar <Cliente> por <any> si no sabemos que es lo que manda
          tap(res=>{
            console.log('respuesta'+res);
          })
        );
      }
}
