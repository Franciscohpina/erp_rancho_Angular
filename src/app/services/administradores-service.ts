import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Administradores } from '../interfaces/administradores';

@Injectable({
  providedIn: 'root'
})
export class AdministradoresService {
  private apiURL ='http://127.0.0.1:3000/administradores'; //checar en postman/ ruta en express si tiene la palabra /api, si no se quita

  constructor(private http: HttpClient){} //declarando funcion http con la que se trabajara 

  obtenerAdministradores(): Observable<Administradores[]> //poner con el que se va a trabajar "Cliente en este caso"
  {
    return this.http.get<Administradores[]>(this.apiURL); //si el cliente no coincide con la interfaz de la BD aqui va a tronar
  }

  guardarAdministradores(administradores: Administradores): Observable<Administradores> //cambiar <Cliente> por <any> si no sabemos que es lo que manda
  {
    return this.http.post<Administradores>(this.apiURL, administradores).pipe( //cambiar <Cliente> por <any> si no sabemos que es lo que manda
      tap(res=>{
        console.log('respuesta'+res);
      })
    );
  }
}

