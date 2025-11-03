import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiURL ="http://localhost:3000/clientes"; //checar en postman/ ruta en express si tiene la palabra /api, si no se quita

  constructor(private http: HttpClient){} //declarando funcion http con la que se trabajara 

  obtenerClientes(): Observable<any>
  {
    return this.http.get<any>(this.apiURL); 
  }

  // --- Método existente (Corregido a <any>) ---
  guardarCliente(cliente: Cliente): Observable<any> 
  {
    return this.http.post<any>(this.apiURL, cliente).pipe(
      tap(res=>{
        console.log('respuesta'+res);
      })
    );
  }

  // ---- MÉTODO AÑADIDO: BUSCAR POR ID ----
  buscarCliente(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/${id}`); 
  }

  // ---- MÉTODO AÑADIDO: ACTUALIZAR ----
  actualizarCliente(id: number, data: Cliente): Observable<any> {
    return this.http.put<any>(`${this.apiURL}/${id}`, data).pipe(
      tap(res => console.log('Respuesta al actualizar:', res))
    );
  }

  // ---- MÉTODO AÑADIDO: ELIMINAR ----
  eliminarCliente(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${id}`);
  }
}
