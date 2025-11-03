import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap} from 'rxjs';
import { Categorias } from '../interfaces/categorias';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private apiURL = "http://localhost:3000/categorias";
  constructor(private http: HttpClient) {}

  obtenerCategorias(): Observable<Categorias[]>
  {
    return this.http.get<Categorias[]>(this.apiURL);
  }

  guardarCategorias(categorias: Categorias): Observable<Categorias> //cambiar <Cliente> por <any> si no sabemos que es lo que manda
    {
      return this.http.post<Categorias>(this.apiURL, categorias).pipe( //cambiar <Cliente> por <any> si no sabemos que es lo que manda
        tap(res=>{
          console.log('respuesta'+res);
        })
      );
    }

  buscarCategoria(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/${id}`); 
  }

  // ---- MÉTODO AÑADIDO: ACTUALIZAR ----
  actualizarCategoria(id: number, data: Categorias): Observable<any> {
    return this.http.put<any>(`${this.apiURL}/${id}`, data).pipe(
      tap(res => console.log('Respuesta al actualizar:', res))
    );
  }

  // ---- MÉTODO AÑADIDO: ELIMINAR ----
  eliminarCategoria(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${id}`);
  }
}
