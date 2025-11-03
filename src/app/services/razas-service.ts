import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
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

    // --- Método existente (Corregido a <any>) ---
        guardarRazas(razas: Razas): Observable<any>
        {
          return this.http.post<any>(this.apiURL, razas).pipe( 
            tap(res=>{
              console.log('respuesta'+res);
            })
          );
        }
    
      // ---- MÉTODO AÑADIDO: BUSCAR POR ID ----
      buscarRaza(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiURL}/${id}`); 
      }
    
      // ---- MÉTODO AÑADIDO: ACTUALIZAR ----
      actualizarRaza(id: number, data: Razas): Observable<any> {
        // Como no hay archivos, podemos enviar JSON (el objeto 'data')
        return this.http.put<any>(`${this.apiURL}/${id}`, data).pipe(
          tap(res => console.log('Respuesta al actualizar:', res))
        );
      }
    
      // ---- MÉTODO AÑADIDO: ELIMINAR ----
      eliminarRaza(id: number): Observable<any> {
        return this.http.delete<any>(`${this.apiURL}/${id}`);
      }
    }
    