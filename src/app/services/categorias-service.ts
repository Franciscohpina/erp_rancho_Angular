import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
}
