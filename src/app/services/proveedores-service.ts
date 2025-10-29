import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
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

    guardarProveedores(proveedores: Proveedores): Observable<Proveedores> //cambiar <Cliente> por <any> si no sabemos que es lo que manda
      {
        return this.http.post<Proveedores>(this.apiURL, proveedores).pipe( //cambiar <Cliente> por <any> si no sabemos que es lo que manda
          tap(res=>{
            console.log('respuesta'+res);
          })
        );
      }
}
