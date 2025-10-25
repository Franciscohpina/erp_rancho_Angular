import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
}
