import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
// No importamos 'Ganados' porque ahora usamos FormData

@Injectable({
  providedIn: 'root'
})
export class GanadosService {
  private apiURL = "http://localhost:3000/ganados";
    constructor(private http: HttpClient) {}
  
  // --- Método existente (Corregido a <any>) ---
    obtenerGanados(): Observable<any>
    {
      return this.http.get<any>(this.apiURL);
    }

  // --- MÉTODO CORREGIDO (ahora acepta FormData) ---
    guardarGanados(data: FormData): Observable<any> 
    {
      // Ya no se envía JSON, se envía FormData
      return this.http.post<any>(this.apiURL, data).pipe( 
        tap(res=>{
          console.log('respuesta'+res);
        })
      );
    }

  // ---- MÉTODO AÑADIDO: BUSCAR POR ID ----
  buscarGanado(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/${id}`); 
  }

  // ---- MÉTODO AÑADIDO (acepta FormData) ----
  actualizarGanado(id: number, data: FormData): Observable<any> {
    // El PUT también debe enviar FormData por el middleware 'multer'
    return this.http.put<any>(`${this.apiURL}/${id}`, data).pipe(
      tap(res => console.log('Respuesta al actualizar:', res))
    );
  }

  // ---- MÉTODO AÑADIDO: ELIMINAR ----
  eliminarGanado(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${id}`);
  }
}