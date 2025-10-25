import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
}
