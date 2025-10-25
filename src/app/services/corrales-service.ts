import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
}
