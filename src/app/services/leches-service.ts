import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Leches } from '../interfaces/leches';

@Injectable({
  providedIn: 'root'
})
export class LechesService {
  private apiURL = "http://localhost:3000/leches";
    constructor(private http: HttpClient) {}
  
    obtenerLeches(): Observable<Leches[]>
    {
      return this.http.get<Leches[]>(this.apiURL);
    }

    guardarLeches(leches: Leches): Observable<Leches> //cambiar <Cliente> por <any> si no sabemos que es lo que manda
      {
        return this.http.post<Leches>(this.apiURL, leches).pipe( //cambiar <Cliente> por <any> si no sabemos que es lo que manda
          tap(res=>{
            console.log('respuesta'+res);
          })
        );
      }
}
