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
}
