import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedores } from '../interfaces/proveedores';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  private apiURL = "http://localhost:3000/proveedores";
    constructor(private http: HttpClient) {}
  
    obtenerProveedores(): Observable<Proveedores[]>
    {
      return this.http.get<Proveedores[]>(this.apiURL);
    }
}
