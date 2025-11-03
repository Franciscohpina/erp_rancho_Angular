import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
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

    // --- Método existente (Corregido a <any>) ---
        guardarTanques(tanques: Tanques): Observable<any>
        {
          return this.http.post<any>(this.apiURL, tanques).pipe( 
            tap(res=>{
              console.log('respuesta'+res);
            })
          );
        }
    
      // ---- MÉTODO AÑADIDO: BUSCAR POR ID ----
      buscarTanque(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiURL}/${id}`); 
      }
    
      // ---- MÉTODO AÑADIDO: ACTUALIZAR ----
      actualizarTanque(id: number, data: Tanques): Observable<any> {
        // Como no hay archivos, podemos enviar JSON (el objeto 'data')
        return this.http.put<any>(`${this.apiURL}/${id}`, data).pipe(
          tap(res => console.log('Respuesta al actualizar:', res))
        );
      }
    
      // ---- MÉTODO AÑADIDO: ELIMINAR ----
      eliminarTanque(id: number): Observable<any> {
        return this.http.delete<any>(`${this.apiURL}/${id}`);
      }
    }
    