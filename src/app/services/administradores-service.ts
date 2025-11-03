import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
// Ya no importamos 'Administradores' porque usamos FormData

@Injectable({
  providedIn: 'root'
})
export class AdministradoresService {
  private apiURL ='http://127.0.0.1:3000/administradores'; 

  constructor(private http: HttpClient){} 

  obtenerAdministradores(): Observable<any> // Corregido a <any>
  {
    return this.http.get<any>(this.apiURL); 
  }

  // --- MÉTODO CORREGIDO (ahora acepta FormData) ---
  guardarAdministradores(data: FormData): Observable<any> 
  {
    return this.http.post<any>(this.apiURL, data).pipe( 
      tap(res=>{
        console.log('respuesta'+res);
      })
    );
  }

  buscarAdministradores(id: number): Observable<any> { // Corregido a <any>
    return this.http.get<any>(`${this.apiURL}/${id}`); 
  }

  // --- MÉTODO CORREGIDO (ahora acepta FormData) ---
  actualizarAdministradores(id: number, data: FormData): Observable<any> {
    return this.http.put<any>(`${this.apiURL}/${id}`, data).pipe(
      tap(res => console.log('Respuesta al actualizar:', res))
    );
  }

  eliminarAdministradores(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${id}`);
  }
}