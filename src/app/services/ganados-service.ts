import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
}
