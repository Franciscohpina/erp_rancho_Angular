import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Corrales } from '../interfaces/corrales';

@Injectable({
  providedIn: 'root'
})
export class CorralesService {
  private apiURL = "http://localhost:3000/corrales";
    constructor(private http: HttpClient) {}
  
    obtenerCorrales(): Observable<any> 
    {
      return this.http.get<any>(this.apiURL);
    }

  // --- Método existente (Corregido a <any>) ---
    guardarCorrales(corrales: Corrales): Observable<any> 
    {
      return this.http.post<any>(this.apiURL, corrales).pipe( 
        tap(res=>{
          console.log('respuesta'+res);
        })
      );
    }

  // ---- MÉTODO AÑADIDO: BUSCAR POR ID ----
  buscarCorral(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/${id}`); 
  }

  // ---- MÉTODO AÑADIDO: ACTUALIZAR ----
  actualizarCorral(id: number, data: Corrales): Observable<any> {
    return this.http.put<any>(`${this.apiURL}/${id}`, data).pipe(
      tap(res => console.log('Respuesta al actualizar:', res))
    );
  }

  // ---- MÉTODO AÑADIDO: ELIMINAR ----
  eliminarCorral(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${id}`);
  }
}
