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

     // --- Método existente (Corregido a <any>) ---
        guardarProveedores(proveedores: Proveedores): Observable<any>
        {
          return this.http.post<any>(this.apiURL, proveedores).pipe( 
            tap(res=>{
              console.log('respuesta'+res);
            })
          );
        }

     // ---- MÉTODO AÑADIDO: BUSCAR POR ID ----
      buscarProveedor(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiURL}/${id}`); 
      }
    
      // ---- MÉTODO AÑADIDO: ACTUALIZAR ----
      actualizarProveedor(id: number, data: Proveedores): Observable<any> {
        // Como no hay archivos, podemos enviar JSON (el objeto 'data')
        return this.http.put<any>(`${this.apiURL}/${id}`, data).pipe(
          tap(res => console.log('Respuesta al actualizar:', res))
        );
      }
    
      // ---- MÉTODO AÑADIDO: ELIMINAR ----
      eliminarProveedor(id: number): Observable<any> {
        return this.http.delete<any>(`${this.apiURL}/${id}`);
      }
}
