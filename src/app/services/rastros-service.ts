import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Rastros } from '../interfaces/rastros';

@Injectable({
  providedIn: 'root'
})
export class RastrosService {
  private apiURL = "http://localhost:3000/rastros";
    constructor(private http: HttpClient) {}
  
    obtenerRastros(): Observable<any>
    {
      return this.http.get<any>(this.apiURL);
    }

  // --- Método existente (Corregido a <any>) ---
    guardarRastros(rastros: Rastros): Observable<any>
    {
      return this.http.post<any>(this.apiURL, rastros).pipe(
        tap(res=>{
          console.log('respuesta'+res);
        })
      );
    }

  // ---- MÉTODO AÑADIDO: BUSCAR POR ID ----
  buscarRastro(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/${id}`); 
  }

  // ---- MÉTODO AÑADIDO: ACTUALIZAR ----
  actualizarRastro(id: number, data: Rastros): Observable<any> {
    // Como no hay archivos, podemos enviar JSON (el objeto 'data')
    return this.http.put<any>(`${this.apiURL}/${id}`, data).pipe(
      tap(res => console.log('Respuesta al actualizar:', res))
    );
  }

  // ---- MÉTODO AÑADIDO: ELIMINAR ----
  eliminarRastro(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${id}`);
  }
}
