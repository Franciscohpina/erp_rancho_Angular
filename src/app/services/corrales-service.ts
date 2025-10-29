import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Corrales } from '../interfaces/corrales';

@Injectable({
  providedIn: 'root'
})
export class CorralesService {
  private apiURL = "http://localhost:3000/corrales";
    constructor(private http: HttpClient) {}
  
    obtenerCorrales(): Observable<Corrales[]>
    {
      return this.http.get<Corrales[]>(this.apiURL);
    }

    guardarCorrales(corrales: Corrales): Observable<Corrales> //cambiar <Cliente> por <any> si no sabemos que es lo que manda
      {
        return this.http.post<Corrales>(this.apiURL, corrales).pipe( //cambiar <Cliente> por <any> si no sabemos que es lo que manda
          tap(res=>{
            console.log('respuesta'+res);
          })
        );
      }
}
