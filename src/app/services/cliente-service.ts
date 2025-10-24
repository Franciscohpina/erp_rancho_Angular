import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiURLCliente ="http://localhost:3000/cliente"; //checar en postman/ ruta en express si tiene la palabra /api, si no se quita

  constructor(private http: HttpClient){} //declarando funcion http con la que se trabajara 

  obtenerClientes(): Observable<Cliente[]> //poner con el que se va a trabajar "Cliente en este caso"
  {
    return this.http.get<Cliente[]>(this.apiURLCliente+""); //si el cliente no coincide con la interfaz de la BD aqui va a tronar
  }

  guardarCliente(cliente: Cliente): Observable<Cliente> //cambiar <Cliente> por <any> si no sabemos que es lo que manda
  {
    return this.http.post<Cliente>(this.apiURLCliente, cliente).pipe( //cambiar <Cliente> por <any> si no sabemos que es lo que manda
      tap(res=>{
        console.log('respuesta'+res);
      })
    );
  }
}
