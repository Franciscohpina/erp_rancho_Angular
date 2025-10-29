import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Ganados } from '../interfaces/ganados';

@Injectable({
  providedIn: 'root'
})
export class GanadosService {
  private apiURL = "http://localhost:3000/ganados";
    constructor(private http: HttpClient) {}
  
    obtenerGanados(): Observable<Ganados[]>
    {
      return this.http.get<Ganados[]>(this.apiURL);
    }

    guardarGanados(ganados: Ganados): Observable<Ganados> //cambiar <Cliente> por <any> si no sabemos que es lo que manda
      {
        return this.http.post<Ganados>(this.apiURL, ganados).pipe( //cambiar <Cliente> por <any> si no sabemos que es lo que manda
          tap(res=>{
            console.log('respuesta'+res);
          })
        );
      }
}
