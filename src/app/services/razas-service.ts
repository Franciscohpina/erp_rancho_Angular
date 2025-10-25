import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
}
