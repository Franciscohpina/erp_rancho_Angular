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
  
    obtenerLeches(): Observable<any>
    {
      return this.http.get<any>(this.apiURL);
    }

  // --- Método existente (Corregido a <any>) ---
    guardarLeches(leches: Leches): Observable<any>
    {
      return this.http.post<any>(this.apiURL, leches).pipe( 
        tap(res=>{
          console.log('respuesta'+res);
        })
      );
    }

  // ---- MÉTODO AÑADIDO: BUSCAR POR ID ----
  buscarLeche(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/${id}`); 
  }

  // ---- MÉTODO AÑADIDO: ACTUALIZAR ----
  actualizarLeche(id: number, data: Leches): Observable<any> {
    // Como no hay archivos, podemos enviar JSON (el objeto 'data')
    return this.http.put<any>(`${this.apiURL}/${id}`, data).pipe(
      tap(res => console.log('Respuesta al actualizar:', res))
    );
  }

  // ---- MÉTODO AÑADIDO: ELIMINAR ----
  eliminarLeche(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${id}`);
  }
}
