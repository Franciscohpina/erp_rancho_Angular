import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
}
